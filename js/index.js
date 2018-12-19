var inputKey = function(val){
  document.getElementsByTagName('latexInput')[1].focus();
  if( val !== 'DEL'){
    document.getElementById('latexInput').value += val;   
  }else{
    document.getElementById('latexInput').value = document.getElementById('latexInput').value.slice(0,-1);
  }
}
//EN鍵
document.getElementById('englishType').addEventListener("click", function(){
  document.getElementById('englishKeySmall').style.display = '';
  document.getElementById('digitalKey').style.display = 'none';
  console.log('EN')
})
//123(大寫頁)
document.getElementById('digitalTypeBig').addEventListener("click", function(){
  document.getElementById('englishKeyBig').style.display = 'none';
  document.getElementById('digitalKey').style.display = 'block';
  console.log('123(大寫頁)')
})
//123(小寫頁)
document.getElementById('digitalTypeSmall').addEventListener("click", function(){
  document.getElementById('englishKeySmall').style.display = 'none';
  document.getElementById('digitalKey').style.display = 'block';
  console.log('123(小寫頁)')
})
//大小寫轉換
document.getElementById('transSmall').addEventListener("click", function(){
  document.getElementById('englishKeySmall').style.display = 'none';
  document.getElementById('englishKeyBig').style.display = 'block';
})
document.getElementById('transBig').addEventListener("click", function(){
  document.getElementById('englishKeySmall').style.display = 'block';
  document.getElementById('englishKeyBig').style.display = 'none';
})
//mathType
var editor;
(function () {
  editor = com.wiris.jsEditor.JsEditor.newInstance({
    'language': 'en',//語言
    'hand': 'false',//手寫板
    //工具欄
    'toolbar': '<toolbar removeLinks="true"><tab name=""><section rows="1"><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/sum.png" title="Plus"><content><mo mathvariant="bold" mathcolor="#27ae63">+</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/rest.png" title="Minus"><content><mo mathvariant="bold" mathcolor="#16a086">-</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/mult.png" title="Multiplication"><content><mo mathvariant="bold" mathcolor="#953ead">&#xD7;</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/division.png" title="Division"><content><mo mathvariant="bold" mathcolor="#c53221">&#xF7;</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/equal.png" title="Equal"><content><mo mathvariant="bold" mathcolor="#d15504">=</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/notEqual.png" title="Not equal"><content><mo mathvariant="bold" mathcolor="#f89d0d">&#x2260;</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/lessThan.png" title="Less than"><content><mo mathvariant="bold" mathcolor="#5d6564">&#x2264;</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/greaterThan.png" title="Greater than"><content><mo mathvariant="bold" mathcolor="#818c8b">&#x2265;</mo></content></createButton><createButton icon="http://www.wiris.com/editor/demo/img/custom_toolbar/percent.png" title="Percent"><content><mo mathvariant="bold" mathcolor="#ff6440">%</mo></content></createButton></section></tab></toolbar>'
  });
  editor.insertInto(document.getElementById('editorContainer'));
})();


var convert = {
  //Latex to MathML
  getMathML: function(latex) {
    var js_path=location.href+"latex2mathml/";
	  var req = new XMLHttpRequest();
	  req.open("POST",js_path, false);
	  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  var params = "latex="+latex;
	  //req.setRequestHeader("Content-length", params.length);
	  //req.setRequestHeader("Connection", "close");
	  req.send(params);
	  if (req.status != 200)  {
		  return "Error generating MathML.";
	  }
    console.log(req.responseText)
	  return req.responseText;
  }
}                                    
convert.getMathML('0')
