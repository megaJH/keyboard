var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // IZ*ONE CHU

var serialize = function serialize(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }}
  return str.join("&");
};

// component getYouTube
function _getYouTube(method, data) {
  return fetch("https://www.googleapis.com/youtube/v3/" +
  method + "?key=AIzaSyA0uc8XLsHpRmVg9aj1uzwW0646CBAORbA&" + data).

  then(function (resp) {
    return resp.json();
  }).
  then(function (data) {
    return data;
  });
}var

App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this.

var convert = {
  //Latex to MathML
  getMathML: function(latex) {
    var js_path=location.href+"/latex2mathml";
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












































































    handleChange = function (event) {
      var target = event.target;
      var id = target.id;
      var value = target.value;
      _this.setState(_defineProperty({},
      id, value));

    };_this.




    handleSelect = function (event) {
      var target = event.target;
      var id = target.id;
      var value = target.value;
      _this.YouTube_search(_this.state.keyword, value);
      _this.setState(_defineProperty({},
      id, value));

    };_this.state = { keyword: "twice", datas: { items: [] }, optionsOrder: [{ value: "date", label: "date" }, { value: "viewCount", label: "viewCount" }], optionsOrderBind: "viewCount" };_this.handleChange = _this.handleChange.bind(_this);_this.onSearch = _this.onSearch.bind(_this);return _this;}_createClass(App, [{ key: "componentWillMount", value: function componentWillMount() {this.YouTube_search("twice", "viewCount");} // YouTube API - videos
  }, { key: "YouTube_videos", value: function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(datas) {var items, ids, data, res;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:items = datas.items;ids = [];items.map(function (item) {ids.push(item.id.videoId);});data = { part: "snippet,contentDetails,statistics", id: ids.toString() };_context.next = 6;return _getYouTube("videos", serialize(data));case 6:res = _context.sent;this.setState({ datas: res }); // result.items.map(item => {
                //   // console.log(item)
                //   // console.log(`喜歡人數: ${item.statistics.likeCount}`);
                //   // console.log(`觀看人數: ${item.statistics.viewCount}`);
                //   this.setState ({
                //     Links:`https://www.youtube.com/watch?v=${item.id}`,
                //     Views:`${item.statistics.viewCount}`
                //   })
                // });
              case 8:case "end":return _context.stop();}}}, _callee, this);}));function YouTube_videos(_x) {return _ref.apply(this, arguments);}return YouTube_videos;}() // YouTube API - search
  }, { key: "YouTube_search", value: function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(q, order) {var data, res;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0: // 關鍵字搜尋
                data = { // 時間
                  publishedAfter: "2018-11-01T00:00:00Z", publishedBefore: new Date().toJSON(), q: q, //twice
                  part: "snippet", maxResults: 10, // 排序
                  order: order //date,viewCount,rating,relevance,videoCount
                }; // 直播
                // const data = {eventType: 'live',
                //                maxResults: '10',
                //                part: 'snippet',
                //                q: 'restricted',
                //                type: 'video'
                //              }
                _context2.next = 3;return _getYouTube("search", serialize(data));case 3:res = _context2.sent;this.YouTube_videos(res);case 5:case "end":return _context2.stop();}}}, _callee2, this);}));function YouTube_search(_x2, _x3) {return _ref2.apply(this, arguments);}return YouTube_search;}() }, { key: "onSearch", value: function onSearch(e) {e.preventDefault();this.YouTube_search(this.state.keyword, "viewCount");} }, { key: "render", value: function render() {var datas = this.state.datas;return React.createElement("div", { "class": "container" }, React.createElement("div", { "class": "form-inline d-flex align-items-center my-3" }, React.createElement("input", { className: "form-control mr-3", id: "keyword", value: this.state.keyword, onChange: this.handleChange, placeholder: "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57" }), React.createElement("button", { onClick: this.onSearch, className: "btn btn-primary" }, "\u641C\u5C0B")), React.createElement("div", { "class": "form-inline d-flex align-items-center mb-3" }, React.createElement("select", { "class": "form-control", id: "optionsOrderBind", value: this.state.optionsOrderBind,
              onChange: this.handleSelect },

            this.state.optionsOrder.map(function (option, idx) {
              return (
                React.createElement("option", { key: idx, value: option.value },
                  option.label));


            }))),


        React.createElement("div", { className: "row" },
          datas.items.map(function (item) {
            return (
              React.createElement("div", { className: "col-md-3" },
                React.createElement("a", {
                    href: "https://www.youtube.com/watch?v=" + item.id,
                    "class": "card",
                    target: "_blank" },

                  React.createElement("div", { className: "card-head" }, "\u89C0\u770B\u4EBA\u6578: " +
                    item.statistics.viewCount,
                    React.createElement("img", {
                      "class": "card-img-top",
                      src: item.snippet.thumbnails.medium.url })),


                  React.createElement("div", { "class": "card-body" },
                    React.createElement("h6", null, item.snippet.title),

                    React.createElement("p", null, item.snippet.publishedAt)))));




          })));



    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));
