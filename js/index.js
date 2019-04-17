//mathType         
var editor;
var _wrs_conf_parseModes =  [ 'latex' ] ;
window.onload = function () {
  editor = com.wiris.jsEditor.JsEditor.newInstance({
    'language': 'en',
    'language': 'en',//語言
    'hand': 'false',//手寫板
    //工具欄
    'fontSize':'22px',
    'toolbarSize': '1',
    'toolbar': '<toolbar ref="general" removeLinks="true"></toolbar>'
  });
  editor.insertInto(document.getElementById('editorContainer'));
  editor.onIsReady(input.mathtypeChange());
  localStorage.mathType = editor.getMathML();
}
//方程式轉換
var convert = {
  //Latex to MathML
  getMathML: function(latex) {
    var js_path="https://www.wiris.net/demo/editor/latex2mathml";
    var req = new XMLHttpRequest();
    req.open("POST",js_path, false);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var params = "latex="+latex;
    req.send(params);
    localStorage.mathML = req.responseText;
  },
  // MathML to Latex
  getLatex: function(mathML){
    var js_path="https://www.wiris.net/demo/editor/mathml2latex";
	    var req = new XMLHttpRequest();
	    req.open("POST",js_path, false);
	    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    var params = "mml="+mathML;
	    req.setRequestHeader("Content-length", params.length);
	    req.setRequestHeader("Connection", "close");
	    req.send(params);
      localStorage.latex = req.responseText;
  }
}                                    
//方程式轉換監聽觸發
var input = {
  mathmlChange: function(){
      var mathML = document.getElementById('mathmlInput').value;
      editor.setMathML(document.getElementById('mathmlInput').value);
      convert.getLatex(mathML);
      document.getElementById('latexInput').value= localStorage.latex;
  },
  latexChange: function(){
    var laTex = document.getElementById('latexInput').value;
    convert.getMathML(laTex);
    document.getElementById('mathmlInput').value = localStorage.mathML;
    editor.setMathML(document.getElementById('mathmlInput').value);
  },
  mathtypeChange: function(){
    setInterval(function(){
      var nowMathtype = editor.getMathML();
      if ( localStorage.mathType !== nowMathtype ){
        localStorage.mathType = nowMathtype;
        document.getElementById('mathmlInput').value = nowMathtype;
        convert.getLatex(nowMathtype);
        document.getElementById('latexInput').value= localStorage.latex;
      }
    },1000);
  }
}

keyboard.init();
input.init();

(function(){

})();