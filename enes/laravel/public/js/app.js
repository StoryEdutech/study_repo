(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./components/CommentList */ "./resources/js/components/CommentList.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

try {
  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.interceptors.response.use(function (response) {
  return response;
}, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(err) {
    var status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            status = window._.get(err, 'response.status');

            if (!(status === 419)) {
              _context.next = 6;
              break;
            }

            console.log("retrying"); // Refresh our session token

            _context.next = 5;
            return axios.get('sanctum/csrf-token');

          case 5:
            return _context.abrupt("return", axios(err.response.config));

          case 6:
            return _context.abrupt("return", Promise.reject(err));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/CommentBox.js":
/*!***********************************************!*\
  !*** ./resources/js/components/CommentBox.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _XButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XButton.js */ "./resources/js/components/XButton.js");
/* harmony import */ var _QuillWithMention_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuillWithMention.js */ "./resources/js/components/QuillWithMention.js");
/* harmony import */ var _kobetsuba_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kobetsuba_src */ "./resources/js/kobetsuba_src.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









(0,_kobetsuba_src__WEBPACK_IMPORTED_MODULE_4__.default)('react_inc/text_input.js');

function CommentBox(props) {
  var useState = react__WEBPACK_IMPORTED_MODULE_0__.useState;
  var user = props.user,
      content = props.content,
      tab = props.tab,
      id = props.id,
      start_by_editing = props.start_by_editing,
      reply_to = props.reply_to,
      replies = props.replies,
      can_use_actions = props.can_use_actions;

  var _useState = useState(content ? content : ""),
      _useState2 = _slicedToArray(_useState, 2),
      content_now = _useState2[0],
      setContent = _useState2[1];

  var _useState3 = useState(start_by_editing ? start_by_editing : false),
      _useState4 = _slicedToArray(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDeleted = _useState6[0],
      setIsDeleted = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showReply = _useState8[0],
      setShowReply = _useState8[1];

  var _useState9 = useState(id ? id : false),
      _useState10 = _slicedToArray(_useState9, 2),
      id_now = _useState10[0],
      setId = _useState10[1];

  var send_comment = function send_comment() {
    setShowReply(false);
    var ep = "/comment/" + (id_now ? id_now + '/update' : 'add');
    var post = {};
    post.reply_to = reply_to ? reply_to : 0;
    post.content = content_now;
    window.axios("/sanctum/csrf-cookie");
    window.axios.post(ep, post).then(function (res) {
      setEditing(false);

      if (res && res.id) {
        setId(res.id);
      }
    });
  };

  var delete_comment = function delete_comment() {
    setShowReply(false);
    var ep = "/comment/" + id_now + "/delete";
    var post = {};
    window.axios("/sanctum/csrf-cookie");
    window.axios.post(ep, post).then(function (res) {
      setIsDeleted(true);
    });
  };

  var clicked_edit = function clicked_edit(event) {
    setShowReply(false);
    setEditing(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      style: {
        marginLeft: ((tab ? parseInt(tab) : 0) * 20).toString() + "px"
      },
      "data-id": id_now,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row justify-content-center",
        style: isDeleted ? {} : {
          display: "none"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col-md-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "card",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "card-body",
              children: "\u524A\u9664\u3057\u307E\u3057\u305F\u3002"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row justify-content-center",
        style: isDeleted ? {
          display: "none"
        } : {},
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col-md-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "card-header",
              children: [user.name, " ( UID:", user.uid, " )"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuillWithMention_js__WEBPACK_IMPORTED_MODULE_3__.default, {
                prev_val: content_now,
                readOnly: !editing,
                input_name: "content",
                onchange_f: setContent
              }), editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_2__.default, {
                  onClick: function onClick(event) {
                    send_comment();
                  },
                  children: "\u6295\u7A3F"
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex flex-row",
                children: [can_use_actions.indexOf('update') > -1 && id_now ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_2__.default, {
                  onClick: clicked_edit,
                  children: "\u7DE8\u96C6"
                }) : null, can_use_actions.indexOf('delete') > -1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_2__.default, {
                  onClick: delete_comment,
                  children: "\u524A\u9664"
                }) : null, can_use_actions.indexOf('reply') > -1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_2__.default, {
                  onClick: function onClick() {
                    setShowReply(true);
                  },
                  children: "\u8FD4\u4FE1"
                }) : null]
              })]
            })]
          })
        })
      })]
    }), showReply ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CommentBox, {
      start_by_editing: true,
      reply_to: id_now,
      user: window.user,
      tab: tab ? parseInt(tab) + 1 : 1,
      can_use_actions: ['reply', 'update', 'delete', 'create']
    }, id_now.toString()) : null, replies && replies.length ? replies.map(function (one) {
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CommentBox, _objectSpread(_objectSpread({}, one), {}, {
        key: one.id.toString(),
        tab: tab ? parseInt(tab) + 1 : 1
      }));
    }) : null]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentBox); // if (document.querySelectorAll('.comment_box_mtc')) {
// document.querySelectorAll('.comment_box_mtc').forEach((one)=>{
//   let props=JSON.parse(one.dataset.comment);
//   props.user=JSON.parse(one.dataset.user);
//   props.can_edit=one.dataset.can_edit;
//   props.tab=one.dataset.tab;
//   ReactDOM.render(<CommentBox {...props} />, one);
// })
// }

/***/ }),

/***/ "./resources/js/components/CommentList.js":
/*!************************************************!*\
  !*** ./resources/js/components/CommentList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _CommentBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentBox.js */ "./resources/js/components/CommentBox.js");
/* harmony import */ var _XButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XButton.js */ "./resources/js/components/XButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function CommentList(props) {
  var useState = react__WEBPACK_IMPORTED_MODULE_0__.useState,
      useEffect = react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
  var for_uid = props.for_uid;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      done_loading = _useState4[0],
      setDoneLoading = _useState4[1];

  var _useState5 = useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = useState(1),
      _useState8 = _slicedToArray(_useState7, 2),
      lastPage = _useState8[0],
      setLastPage = _useState8[1];

  var _useState9 = useState(1),
      _useState10 = _slicedToArray(_useState9, 2),
      new_id = _useState10[0],
      setNewId = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loadingMore = _useState12[0],
      setLoadingMore = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      can_use_actions_top = _useState14[0],
      setCanUseActionsTop = _useState14[1];

  useEffect(function () {
    window.axios("/sanctum/csrf-cookie");
    window.axios.post(window.url_base + '/comment/user/' + (for_uid ? for_uid : 0), {}).then(function (response) {
      var res = response.data;
      setComments(res.comment_collection.data ? res.comment_collection.data : []);
      setLastPage(res.comment_collection.last_page);
      setDoneLoading(true);

      if (res.can_use_actions) {
        setCanUseActionsTop(res.can_use_actions);
      }
    });
  }, []);

  var loadMore = function loadMore() {
    setLoadingMore(true);
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('input[name="_token"]').attr('value')
      }
    });
    var new_page = page + 1;
    $.post(window.url_base + '/comment/user/' + (for_uid ? for_uid : 0) + '?page=' + new_page, {}, function (res) {
      setComments(comments.concat(res.comment_collection.data ? res.comment_collection.data : []));
      setPage(new_page);
      setLoadingMore(false);
    });
  };

  var addNew = function addNew() {
    var new_comments = _toConsumableArray(comments);

    new_comments.unshift({
      content: "",
      user: window.user,
      new_id: new_id,
      start_by_editing: true,
      can_use_actions: ['reply', 'update', 'delete', 'create']
    });
    setComments(new_comments);
    setNewId(new_id + 1);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [can_use_actions_top.indexOf('create') > -1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      onClick: function onClick() {
        addNew();
      },
      children: "\u8FFD\u52A0"
    }) : null, comments && comments.length ? comments.map(function (data_one) {
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CommentBox_js__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, data_one), {}, {
        key: (data_one.id ? data_one.id : "new_" + data_one.new_id).toString()
      }));
    }) : done_loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "\u307E\u3060\u30B3\u30E1\u30F3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "\u8AAD\u307F\u8FBC\u307F\u4E2D"
    }), page == lastPage ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_XButton_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      style: {
        width: "100%"
      },
      onClick: function onClick() {
        loadMore();
      },
      children: loadingMore ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
        className: "fas fa-sync fa-spin"
      }) : "もっと読み込む"
    })]
  });
}

if (document.getElementById('app')) {
  var el = document.getElementById('app');
  var props = JSON.parse(el.dataset.props);
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CommentList, _objectSpread({}, props)), el);
}

/***/ }),

/***/ "./resources/js/components/InfoCardArea.js":
/*!*************************************************!*\
  !*** ./resources/js/components/InfoCardArea.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function InfoCardArea(props) {
  var uid = props.uid,
      posX = props.posX,
      posY = props.posY;
  var user = window.nickname_and_child_info[uid];
  return uid && user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      left: posX
    },
    className: "card InfoCardArea",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-body",
      children: [user.nickname, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), user.grade, "\u5E74\u751F"]
    })
  }) : null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCardArea);

/***/ }),

/***/ "./resources/js/components/QuillWithMention.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/QuillWithMention.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InfoCardArea_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoCardArea.js */ "./resources/js/components/InfoCardArea.js");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var quill_mention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill-mention */ "./node_modules/quill-mention/dist/quill.mention.esm.js");
/* harmony import */ var quill_mention_dist_quill_mention_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill-mention/dist/quill.mention.min.css */ "./node_modules/quill-mention/dist/quill.mention.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var parse_user_to_mention_object = function parse_user_to_mention_object(one) {
  return _objectSpread({
    id: one.uid,
    value: one.nickname,
    denotationChar: "@"
  }, one);
};

var quill_mention_setting = {
  modules: {
    mention: {
      allowedChars: /^[^@]*$/,
      mentionDenotationChars: ["@", "＠"],
      dataAttributes: ['id', 'value', 'denotationChar', 'link', 'target', 'disabled'].concat(Object.keys(Object.values(window.nickname_and_child_info)[0])),
      source: function source(searchTerm, renderList, mentionChar) {
        var values = Object.values(window.nickname_and_child_info).map(function (one) {
          return parse_user_to_mention_object(one);
        });

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          var matches = [];

          for (var i = 0; i < values.length; i++) {
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
          }

          renderList(matches, searchTerm);
        }
      }
    }
  }
};

function QuillWithMention(props) {
  var prev_val = props.prev_val,
      onchange_f = props.onchange_f,
      input_name = props.input_name;
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hovering_info = _useState4[0],
      setHoveringInfo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hoverTimeout = _useState6[0],
      setHoverTimeout = _useState6[1];

  var onHoverMention = function onHoverMention(val) {
    clearTimeout(hoverTimeout);
    setHoveringInfo(val ? val : {});
    setHoverTimeout(setTimeout(function () {
      setHoveringInfo({});
    }, 5000));
  };

  var settings = _objectSpread({}, quill_mention_setting);

  settings.modules.toolbar = false;
  var mention_uid_regexp = /(#@[0-9]+#)/;

  var to_mention_uid = function to_mention_uid(obj) {
    return "#@" + obj.uid + "#";
  };

  var deserialize = function deserialize(value) {
    var ops = value.split(mention_uid_regexp).filter(function (i) {
      return i.trim() != "";
    }).map(function (i) {
      return {
        insert: i.match(mention_uid_regexp) ? {
          mention: parse_user_to_mention_object(window.nickname_and_child_info[parseInt(i.replace(/[@#]/g, ''))])
        } : i
      };
    }); // var e=document.createElement('div');
    // e.innerHTML=value;
    // e.childNodes.forEach((o)=>{
    //   if(o.nodeName=="JSON"){
    //     ops.push({insert:JSON.parse(o.innerHTML)});
    //   }else{
    //     ops.push({insert:o.outerHTML?o.outerHTML:o.textContent});
    //   }
    // });

    ops.push({
      insert: '\n'
    });
    return ops; // editorRef.current.editor.setContents({ops:ops},'api');
  };

  var serialize = function serialize(delta) {
    return delta.ops.map(function (i) {
      return _typeof(i.insert) == 'object' ? to_mention_uid(i.insert.mention) : i.insert;
    }).join('');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var delta = editorRef.current.editor.getContents();
    var val_to_set = serialize(delta);

    if (onchange_f) {
      onchange_f(val_to_set);
    } // $(ReactDOM.findDOMNode(editorRef.current)).find('.mention').click((event) => {event.stopPropagation(); onHoverMention($(event.target).closest('.mention').data('uid'));});
    // $(document).click((event) => {onHoverMention(false)});

  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    $(window).on('mention-hovered', function (event) {
      var el = $(event.originalEvent.event.target);

      if (el.closest('.quill').is(react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(editorRef.current))) {
        var mention = $(el).closest('.mention');
        onHoverMention({
          uid: mention.data('uid'),
          posX: mention.position().left
        });
      } else {
        onHoverMention(false);
      }
    });
    setValue(deserialize(prev_val));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    style: {
      position: "relative"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_InfoCardArea_js__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, hovering_info)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((react_quill__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread(_objectSpread({
      ref: editorRef
    }, props), {}, {
      theme: "snow",
      value: value
    }, settings), {}, {
      onChange: setValue
    }))]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuillWithMention);

/***/ }),

/***/ "./resources/js/components/XButton.js":
/*!********************************************!*\
  !*** ./resources/js/components/XButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function XButton(props) {
  var children = props.children,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", _objectSpread(_objectSpread({}, other), {}, {
    className: "items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest ring-gray-300",
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XButton);

/***/ }),

/***/ "./resources/js/kobetsuba_src.js":
/*!***************************************!*\
  !*** ./resources/js/kobetsuba_src.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function kobetsuba_script(file) {
  var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

  $script.path("https://chugakujyuken.kobetsuba.jp/js_includes/");
  return $script(file);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kobetsuba_script);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);