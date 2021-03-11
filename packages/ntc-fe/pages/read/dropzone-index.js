(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.reactDropzone = {}, global.React, global.PropTypes));
}(this, (function (exports, React, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }

  var COMMON_MIME_TYPES = new Map([
      ['avi', 'video/avi'],
      ['gif', 'image/gif'],
      ['ico', 'image/x-icon'],
      ['jpeg', 'image/jpeg'],
      ['jpg', 'image/jpeg'],
      ['mkv', 'video/x-matroska'],
      ['mov', 'video/quicktime'],
      ['mp4', 'video/mp4'],
      ['pdf', 'application/pdf'],
      ['png', 'image/png'],
      ['zip', 'application/zip'],
      ['doc', 'application/msword'],
      ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  ]);
  function toFileWithPath(file, path) {
      var f = withMimeType(file);
      if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
          var webkitRelativePath = file.webkitRelativePath;
          Object.defineProperty(f, 'path', {
              value: typeof path === 'string'
                  ? path
                  // If <input webkitdirectory> is set,
                  // the File will have a {webkitRelativePath} property
                  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                  : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                      ? webkitRelativePath
                      : file.name,
              writable: false,
              configurable: false,
              enumerable: true
          });
      }
      return f;
  }
  function withMimeType(file) {
      var name = file.name;
      var hasExtension = name && name.lastIndexOf('.') !== -1;
      if (hasExtension && !file.type) {
          var ext = name.split('.')
              .pop().toLowerCase();
          var type = COMMON_MIME_TYPES.get(ext);
          if (type) {
              Object.defineProperty(file, 'type', {
                  value: type,
                  writable: false,
                  configurable: false,
                  enumerable: true
              });
          }
      }
      return file;
  }

  var FILES_TO_IGNORE = [
      // Thumbnail cache files for macOS and Windows
      '.DS_Store',
      'Thumbs.db' // Windows
  ];
  /**
   * Convert a DragEvent's DataTrasfer object to a list of File objects
   * NOTE: If some of the items are folders,
   * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
   * @param evt
   */
  function fromEvent(evt) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                      ? getDataTransferFiles(evt.dataTransfer, evt.type)
                      : getInputFiles(evt)];
          });
      });
  }
  function isDragEvt(value) {
      return !!value.dataTransfer;
  }
  function getInputFiles(evt) {
      var files = isInput(evt.target)
          ? evt.target.files
              ? fromList(evt.target.files)
              : []
          : [];
      return files.map(function (file) { return toFileWithPath(file); });
  }
  function isInput(value) {
      return value !== null;
  }
  function getDataTransferFiles(dt, type) {
      return __awaiter(this, void 0, void 0, function () {
          var items, files;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (!dt.items) return [3 /*break*/, 2];
                      items = fromList(dt.items)
                          .filter(function (item) { return item.kind === 'file'; });
                      // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                      // only 'dragstart' and 'drop' has access to the data (source node)
                      if (type !== 'drop') {
                          return [2 /*return*/, items];
                      }
                      return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                  case 1:
                      files = _a.sent();
                      return [2 /*return*/, noIgnoredFiles(flatten(files))];
                  case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                          .map(function (file) { return toFileWithPath(file); }))];
              }
          });
      });
  }
  function noIgnoredFiles(files) {
      return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
  }
  // IE11 does not support Array.from()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
  // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
  function fromList(items) {
      var files = [];
      // tslint:disable: prefer-for-of
      for (var i = 0; i < items.length; i++) {
          var file = items[i];
          files.push(file);
      }
      return files;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
  function toFilePromises(item) {
      if (typeof item.webkitGetAsEntry !== 'function') {
          return fromDataTransferItem(item);
      }
      var entry = item.webkitGetAsEntry();
      // Safari supports dropping an image node from a different window and can be retrieved using
      // the DataTransferItem.getAsFile() API
      // NOTE: FileSystemEntry.file() throws if trying to get the file
      if (entry && entry.isDirectory) {
          return fromDirEntry(entry);
      }
      return fromDataTransferItem(item);
  }
  function flatten(items) {
      return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
  }
  function fromDataTransferItem(item) {
      var file = item.getAsFile();
      if (!file) {
          return Promise.reject(item + " is not a File");
      }
      var fwp = toFileWithPath(file);
      return Promise.resolve(fwp);
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
  function fromEntry(entry) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
          });
      });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
  function fromDirEntry(entry) {
      var reader = entry.createReader();
      return new Promise(function (resolve, reject) {
          var entries = [];
          function readEntries() {
              var _this = this;
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
              reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                  var files, err_1, items;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              if (!!batch.length) return [3 /*break*/, 5];
                              _a.label = 1;
                          case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4 /*yield*/, Promise.all(entries)];
                          case 2:
                              files = _a.sent();
                              resolve(files);
                              return [3 /*break*/, 4];
                          case 3:
                              err_1 = _a.sent();
                              reject(err_1);
                              return [3 /*break*/, 4];
                          case 4: return [3 /*break*/, 6];
                          case 5:
                              items = Promise.all(batch.map(fromEntry));
                              entries.push(items);
                              // Continue reading
                              readEntries();
                              _a.label = 6;
                          case 6: return [2 /*return*/];
                      }
                  });
              }); }, function (err) {
                  reject(err);
              });
          }
          readEntries();
      });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
  function fromFileEntry(entry) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, new Promise(function (resolve, reject) {
                      entry.file(function (file) {
                          var fwp = toFileWithPath(file, entry.fullPath);
                          resolve(fwp);
                      }, function (err) {
                          reject(err);
                      });
                  })];
          });
      });
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var es = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (file, acceptedFiles) {
    if (file && acceptedFiles) {
      var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
      var fileName = file.name || '';
      var mimeType = file.type || '';
      var baseMimeType = mimeType.replace(/\/.*$/, '');
      return acceptedFilesArray.some(function (type) {
        var validType = type.trim();

        if (validType.charAt(0) === '.') {
          return fileName.toLowerCase().endsWith(validType.toLowerCase());
        } else if (validType.endsWith('/*')) {
          // This is something like a image/* mime type
          return baseMimeType === validType.replace(/\/.*$/, '');
        }

        return mimeType === validType;
      });
    }

    return true;
  };
  });

  var accepts = unwrapExports(es);

  var FILE_INVALID_TYPE = 'file-invalid-type';
  var FILE_TOO_LARGE = 'file-too-large';
  var FILE_TOO_SMALL = 'file-too-small';
  var TOO_MANY_FILES = 'too-many-files'; // File Errors

  var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
    accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
    var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(', ')) : accept;
    return {
      code: FILE_INVALID_TYPE,
      message: "File type must be ".concat(messageSuffix)
    };
  };
  var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
    return {
      code: FILE_TOO_LARGE,
      message: "File is larger than ".concat(maxSize, " bytes")
    };
  };
  var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
    return {
      code: FILE_TOO_SMALL,
      message: "File is smaller than ".concat(minSize, " bytes")
    };
  };
  var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: 'Too many files'
  }; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
  // that MIME type will always be accepted

  function fileAccepted(file, accept) {
    var isAcceptable = file.type === 'application/x-moz-file' || accepts(file, accept);
    return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
  }
  function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size)) {
      if (isDefined(minSize) && isDefined(maxSize)) {
        if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
        if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
      } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
    }

    return [true, null];
  }

  function isDefined(value) {
    return value !== undefined && value !== null;
  }

  function allFilesAccepted(_ref) {
    var files = _ref.files,
        accept = _ref.accept,
        minSize = _ref.minSize,
        maxSize = _ref.maxSize,
        multiple = _ref.multiple,
        maxFiles = _ref.maxFiles;

    if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
      return false;
    }

    return files.every(function (file) {
      var _fileAccepted = fileAccepted(file, accept),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 1),
          accepted = _fileAccepted2[0];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1),
          sizeMatch = _fileMatchSize2[0];

      return accepted && sizeMatch;
    });
  } // React's synthetic events has event.isPropagationStopped,
  // but to remain compatibility with other libs (Preact) fall back
  // to check event.cancelBubble

  function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === 'function') {
      return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== 'undefined') {
      return event.cancelBubble;
    }

    return false;
  }
  function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
      return !!event.target && !!event.target.files;
    } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


    return Array.prototype.some.call(event.dataTransfer.types, function (type) {
      return type === 'Files' || type === 'application/x-moz-file';
    });
  }

  function onDocumentDragOver(event) {
    event.preventDefault();
  }

  function isIe(userAgent) {
    return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
  }

  function isEdge(userAgent) {
    return userAgent.indexOf('Edge/') !== -1;
  }

  function isIeOrEdge() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
  }
  /**
   * This is intended to be used to compose event handlers
   * They are executed in order until one of them calls `event.isPropagationStopped()`.
   * Note that the check is done on the first invoke too,
   * meaning that if propagation was stopped before invoking the fns,
   * no handlers will be executed.
   *
   * @param {Function} fns the event hanlder functions
   * @return {Function} the event handler to add to an element
   */

  function composeEventHandlers() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return fns.some(function (fn) {
        if (!isPropagationStopped(event) && fn) {
          fn.apply(void 0, [event].concat(args));
        }

        return isPropagationStopped(event);
      });
    };
  }

  /**
   * Convenience wrapper component for the `useDropzone` hook
   *
   * ```jsx
   * <Dropzone>
   *   {({getRootProps, getInputProps}) => (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag 'n' drop some files here, or click to select files</p>
   *     </div>
   *   )}
   * </Dropzone>
   * ```
   */

  var Dropzone = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var children = _ref.children,
        params = _objectWithoutProperties(_ref, ["children"]);

    var _useDropzone = useDropzone(params),
        open = _useDropzone.open,
        props = _objectWithoutProperties(_useDropzone, ["open"]);

    React.useImperativeHandle(ref, function () {
      return {
        open: open
      };
    }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

    return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
      open: open
    })));
  });
  Dropzone.displayName = 'Dropzone'; // Add default props for react-docgen

  var defaultProps = {
    disabled: false,
    getFilesFromEvent: fromEvent,
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null
  };
  Dropzone.defaultProps = defaultProps;
  Dropzone.propTypes = {
    /**
     * Render function that exposes the dropzone state and prop getter fns
     *
     * @param {object} params
     * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
     * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
     * @param {Function} params.open Open the native file selection dialog
     * @param {boolean} params.isFocused Dropzone area is in focus
     * @param {boolean} params.isFileDialogActive File dialog is opened
     * @param {boolean} params.isDragActive Active drag is in progress
     * @param {boolean} params.isDragAccept Dragged files are accepted
     * @param {boolean} params.isDragReject Some dragged files are rejected
     * @param {File[]} params.draggedFiles Files in active drag
     * @param {File[]} params.acceptedFiles Accepted files
     * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
     */
    children: PropTypes__default['default'].func,

    /**
     * Set accepted file types.
     * See https://github.com/okonet/attr-accept for more information.
     * Keep in mind that mime type determination is not reliable across platforms. CSV files,
     * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
     * Windows. In some cases there might not be a mime type set at all.
     * See: https://github.com/react-dropzone/react-dropzone/issues/276
     */
    accept: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].arrayOf(PropTypes__default['default'].string)]),

    /**
     * Allow drag 'n' drop (or selection from the file dialog) of multiple files
     */
    multiple: PropTypes__default['default'].bool,

    /**
     * If false, allow dropped items to take over the current browser window
     */
    preventDropOnDocument: PropTypes__default['default'].bool,

    /**
     * If true, disables click to open the native file selection dialog
     */
    noClick: PropTypes__default['default'].bool,

    /**
     * If true, disables SPACE/ENTER to open the native file selection dialog.
     * Note that it also stops tracking the focus state.
     */
    noKeyboard: PropTypes__default['default'].bool,

    /**
     * If true, disables drag 'n' drop
     */
    noDrag: PropTypes__default['default'].bool,

    /**
     * If true, stops drag event propagation to parents
     */
    noDragEventsBubbling: PropTypes__default['default'].bool,

    /**
     * Minimum file size (in bytes)
     */
    minSize: PropTypes__default['default'].number,

    /**
     * Maximum file size (in bytes)
     */
    maxSize: PropTypes__default['default'].number,

    /**
     * Maximum accepted number of files
     * The default value is 0 which means there is no limitation to how many files are accepted.
     */
    maxFiles: PropTypes__default['default'].number,

    /**
     * Enable/disable the dropzone
     */
    disabled: PropTypes__default['default'].bool,

    /**
     * Use this to provide a custom file aggregator
     *
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    getFilesFromEvent: PropTypes__default['default'].func,

    /**
     * Cb for when closing the file dialog with no selection
     */
    onFileDialogCancel: PropTypes__default['default'].func,

    /**
     * Cb for when the `dragenter` event occurs.
     *
     * @param {DragEvent} event
     */
    onDragEnter: PropTypes__default['default'].func,

    /**
     * Cb for when the `dragleave` event occurs
     *
     * @param {DragEvent} event
     */
    onDragLeave: PropTypes__default['default'].func,

    /**
     * Cb for when the `dragover` event occurs
     *
     * @param {DragEvent} event
     */
    onDragOver: PropTypes__default['default'].func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
     *
     * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
     * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
     * If `multiple` is set to false and additional files are dropped,
     * all files besides the first will be rejected.
     * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
     *
     * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
     * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
     *
     * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
     * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
     *
     * ```js
     * function onDrop(acceptedFiles) {
     *   const req = request.post('/upload')
     *   acceptedFiles.forEach(file => {
     *     req.attach(file.name, file)
     *   })
     *   req.end(callback)
     * }
     * ```
     *
     * @param {File[]} acceptedFiles
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    onDrop: PropTypes__default['default'].func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are accepted, this callback is not invoked.
     *
     * @param {File[]} files
     * @param {(DragEvent|Event)} event
     */
    onDropAccepted: PropTypes__default['default'].func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are rejected, this callback is not invoked.
     *
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event
     */
    onDropRejected: PropTypes__default['default'].func,

    /**
     * Custom validation function 
     * @param {File} file
     * @returns {FileError|FileError[]}
     */
    validator: PropTypes__default['default'].func
  };
  /**
   * A function that is invoked for the `dragenter`,
   * `dragover` and `dragleave` events.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dragCb
   * @param {DragEvent} event
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dropCb
   * @param {File[]} acceptedFiles List of accepted files
   * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are files (such as link, text, etc.).
   *
   * @callback dropAcceptedCb
   * @param {File[]} files List of accepted files that meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   *
   * @callback dropRejectedCb
   * @param {File[]} files List of rejected files that do not meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is used aggregate files,
   * in a asynchronous fashion, from drag or input change events.
   *
   * @callback getFilesFromEvent
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   * @returns {(File[]|Promise<File[]>)}
   */

  /**
   * An object with the current dropzone state and some helper functions.
   *
   * @typedef {object} DropzoneState
   * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
   * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
   * @property {Function} open Open the native file selection dialog
   * @property {boolean} isFocused Dropzone area is in focus
   * @property {boolean} isFileDialogActive File dialog is opened
   * @property {boolean} isDragActive Active drag is in progress
   * @property {boolean} isDragAccept Dragged files are accepted
   * @property {boolean} isDragReject Some dragged files are rejected
   * @property {File[]} draggedFiles Files in active drag
   * @property {File[]} acceptedFiles Accepted files
   * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
   */

  var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  };
  /**
   * A React hook that creates a drag 'n' drop area.
   *
   * ```jsx
   * function MyDropzone(props) {
   *   const {getRootProps, getInputProps} = useDropzone({
   *     onDrop: acceptedFiles => {
   *       // do something with the File objects, e.g. upload to some server
   *     }
   *   });
   *   return (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag and drop some files here, or click to select files</p>
   *     </div>
   *   )
   * }
   * ```
   *
   * @function useDropzone
   *
   * @param {object} props
   * @param {string|string[]} [props.accept] Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
   * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
   * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
   * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
   * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
   * @param {number} [props.minSize=0] Minimum file size (in bytes)
   * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
   * @param {boolean} [props.disabled=false] Enable/disable the dropzone
   * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
   * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
   * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
   * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
   * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
   * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   * @param {dropAcceptedCb} [props.onDropAccepted]
   * @param {dropRejectedCb} [props.onDropRejected]
   *
   * @returns {DropzoneState}
   */

  function useDropzone() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _defaultProps$options = _objectSpread2(_objectSpread2({}, defaultProps), options),
        accept = _defaultProps$options.accept,
        disabled = _defaultProps$options.disabled,
        getFilesFromEvent = _defaultProps$options.getFilesFromEvent,
        maxSize = _defaultProps$options.maxSize,
        minSize = _defaultProps$options.minSize,
        multiple = _defaultProps$options.multiple,
        maxFiles = _defaultProps$options.maxFiles,
        onDragEnter = _defaultProps$options.onDragEnter,
        onDragLeave = _defaultProps$options.onDragLeave,
        onDragOver = _defaultProps$options.onDragOver,
        onDrop = _defaultProps$options.onDrop,
        onDropAccepted = _defaultProps$options.onDropAccepted,
        onDropRejected = _defaultProps$options.onDropRejected,
        onFileDialogCancel = _defaultProps$options.onFileDialogCancel,
        preventDropOnDocument = _defaultProps$options.preventDropOnDocument,
        noClick = _defaultProps$options.noClick,
        noKeyboard = _defaultProps$options.noKeyboard,
        noDrag = _defaultProps$options.noDrag,
        noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling,
        validator = _defaultProps$options.validator;

    var rootRef = React.useRef(null);
    var inputRef = React.useRef(null);

    var _useReducer = React.useReducer(reducer, initialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    var isFocused = state.isFocused,
        isFileDialogActive = state.isFileDialogActive,
        draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

    var openFileDialog = React.useCallback(function () {
      if (inputRef.current) {
        dispatch({
          type: 'openDialog'
        });
        inputRef.current.value = null;
        inputRef.current.click();
      }
    }, [dispatch]); // Update file dialog active state when the window is focused on

    var onWindowFocus = function onWindowFocus() {
      // Execute the timeout only if the file dialog is opened in the browser
      if (isFileDialogActive) {
        setTimeout(function () {
          if (inputRef.current) {
            var files = inputRef.current.files;

            if (!files.length) {
              dispatch({
                type: 'closeDialog'
              });

              if (typeof onFileDialogCancel === 'function') {
                onFileDialogCancel();
              }
            }
          }
        }, 300);
      }
    };

    React.useEffect(function () {
      window.addEventListener('focus', onWindowFocus, false);
      return function () {
        window.removeEventListener('focus', onWindowFocus, false);
      };
    }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

    var onKeyDownCb = React.useCallback(function (event) {
      // Ignore keyboard events bubbling up the DOM tree
      if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
        return;
      }

      if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        openFileDialog();
      }
    }, [rootRef, inputRef]); // Update focus state for the dropzone

    var onFocusCb = React.useCallback(function () {
      dispatch({
        type: 'focus'
      });
    }, []);
    var onBlurCb = React.useCallback(function () {
      dispatch({
        type: 'blur'
      });
    }, []); // Cb to open the file dialog when click occurs on the dropzone

    var onClickCb = React.useCallback(function () {
      if (noClick) {
        return;
      } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
      // to ensure React can handle state changes
      // See: https://github.com/react-dropzone/react-dropzone/issues/450


      if (isIeOrEdge()) {
        setTimeout(openFileDialog, 0);
      } else {
        openFileDialog();
      }
    }, [inputRef, noClick]);
    var dragTargetsRef = React.useRef([]);

    var onDocumentDrop = function onDocumentDrop(event) {
      if (rootRef.current && rootRef.current.contains(event.target)) {
        // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }

      event.preventDefault();
      dragTargetsRef.current = [];
    };

    React.useEffect(function () {
      if (preventDropOnDocument) {
        document.addEventListener('dragover', onDocumentDragOver, false);
        document.addEventListener('drop', onDocumentDrop, false);
        debugger
      }

      return function () {
        if (preventDropOnDocument) {
          document.removeEventListener('dragover', onDocumentDragOver);
          document.removeEventListener('drop', onDocumentDrop);
        }
      };
    }, [rootRef, preventDropOnDocument]);
    var onDragEnterCb = React.useCallback(function (event) {
      event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }

          dispatch({
            draggedFiles: draggedFiles,
            isDragActive: true,
            type: 'setDraggedFiles'
          });

          if (onDragEnter) {
            onDragEnter(event);
          }
        });
      }
    }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
    var onDragOverCb = React.useCallback(function (event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);

      if (event.dataTransfer) {
        try {
          event.dataTransfer.dropEffect = 'copy';
        } catch (_unused) {}
        /* eslint-disable-line no-empty */

      }

      if (isEvtWithFiles(event) && onDragOver) {
        onDragOver(event);
      }

      return false;
    }, [onDragOver, noDragEventsBubbling]);
    var onDragLeaveCb = React.useCallback(function (event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event); // Only deactivate once the dropzone and all children have been left

      var targets = dragTargetsRef.current.filter(function (target) {
        return rootRef.current && rootRef.current.contains(target);
      }); // Make sure to remove a target present multiple times only once
      // (Firefox may fire dragenter/dragleave multiple times on the same element)

      var targetIdx = targets.indexOf(event.target);

      if (targetIdx !== -1) {
        targets.splice(targetIdx, 1);
      }

      dragTargetsRef.current = targets;

      if (targets.length > 0) {
        return;
      }

      dispatch({
        isDragActive: false,
        type: 'setDraggedFiles',
        draggedFiles: []
      });

      if (isEvtWithFiles(event) && onDragLeave) {
        onDragLeave(event);
      }
    }, [rootRef, onDragLeave, noDragEventsBubbling]);
    var onDropCb = React.useCallback(function (event) {
      event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [];

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function (files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }

          var acceptedFiles = [];
          var fileRejections = [];
          files.forEach(function (file) {
            var _fileAccepted = fileAccepted(file, accept),
                _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
                accepted = _fileAccepted2[0],
                acceptError = _fileAccepted2[1];

            var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
                _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
                sizeMatch = _fileMatchSize2[0],
                sizeError = _fileMatchSize2[1];

            var customErrors = validator ? validator(file) : null;

            if (accepted && sizeMatch && !customErrors) {
              acceptedFiles.push(file);
            } else {
              var errors = [acceptError, sizeError];

              if (customErrors) {
                errors = errors.concat(customErrors);
              }

              fileRejections.push({
                file: file,
                errors: errors.filter(function (e) {
                  return e;
                })
              });
            }
          });

          if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
            // Reject everything and empty accepted files
            acceptedFiles.forEach(function (file) {
              fileRejections.push({
                file: file,
                errors: [TOO_MANY_FILES_REJECTION]
              });
            });
            acceptedFiles.splice(0);
          }

          dispatch({
            acceptedFiles: acceptedFiles,
            fileRejections: fileRejections,
            type: 'setFiles'
          });

          if (onDrop) {
            onDrop(acceptedFiles, fileRejections, event);
          }

          if (fileRejections.length > 0 && onDropRejected) {
            onDropRejected(fileRejections, event);
          }

          if (acceptedFiles.length > 0 && onDropAccepted) {
            onDropAccepted(acceptedFiles, event);
          }
        });
      }

      dispatch({
        type: 'reset'
      });
    }, [multiple, accept, minSize, maxSize, maxFiles, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

    var composeHandler = function composeHandler(fn) {
      return disabled ? null : fn;
    };

    var composeKeyboardHandler = function composeKeyboardHandler(fn) {
      return noKeyboard ? null : composeHandler(fn);
    };

    var composeDragHandler = function composeDragHandler(fn) {
      return noDrag ? null : composeHandler(fn);
    };

    var stopPropagation = function stopPropagation(event) {
      if (noDragEventsBubbling) {
        event.stopPropagation();
      }
    };

    var getRootProps = React.useMemo(function () {
      return function () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$refKey = _ref2.refKey,
            refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
            onKeyDown = _ref2.onKeyDown,
            onFocus = _ref2.onFocus,
            onBlur = _ref2.onBlur,
            onClick = _ref2.onClick,
            onDragEnter = _ref2.onDragEnter,
            onDragOver = _ref2.onDragOver,
            onDragLeave = _ref2.onDragLeave,
            onDrop = _ref2.onDrop,
            rest = _objectWithoutProperties(_ref2, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

        return _objectSpread2(_objectSpread2(_defineProperty({
          onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
          onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
          onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
          onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
          onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
          onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
          onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
        }, refKey, rootRef), !disabled && !noKeyboard ? {
          tabIndex: 0
        } : {}), rest);
      };
    }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
    var onInputElementClick = React.useCallback(function (event) {
      event.stopPropagation();
    }, []);
    var getInputProps = React.useMemo(function () {
      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$refKey = _ref3.refKey,
            refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
            onChange = _ref3.onChange,
            onClick = _ref3.onClick,
            rest = _objectWithoutProperties(_ref3, ["refKey", "onChange", "onClick"]);

        var inputProps = _defineProperty({
          accept: accept,
          multiple: multiple,
          type: 'file',
          style: {
            display: 'none'
          },
          onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
          autoComplete: 'off',
          tabIndex: -1
        }, refKey, inputRef);

        return _objectSpread2(_objectSpread2({}, inputProps), rest);
      };
    }, [inputRef, accept, multiple, onDropCb, disabled]);
    var fileCount = draggedFiles.length;
    var isDragAccept = fileCount > 0 && allFilesAccepted({
      files: draggedFiles,
      accept: accept,
      minSize: minSize,
      maxSize: maxSize,
      multiple: multiple,
      maxFiles: maxFiles
    });
    var isDragReject = fileCount > 0 && !isDragAccept;
    return _objectSpread2(_objectSpread2({}, state), {}, {
      isDragAccept: isDragAccept,
      isDragReject: isDragReject,
      isFocused: isFocused && !disabled,
      getRootProps: getRootProps,
      getInputProps: getInputProps,
      rootRef: rootRef,
      inputRef: inputRef,
      open: composeHandler(openFileDialog)
    });
  }

  function reducer(state, action) {
    /* istanbul ignore next */
    switch (action.type) {
      case 'focus':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: true
        });

      case 'blur':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: false
        });

      case 'openDialog':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFileDialogActive: true
        });

      case 'closeDialog':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFileDialogActive: false
        });

      case 'setDraggedFiles':
        /* eslint no-case-declarations: 0 */
        var isDragActive = action.isDragActive,
            draggedFiles = action.draggedFiles;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          draggedFiles: draggedFiles,
          isDragActive: isDragActive
        });

      case 'setFiles':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          acceptedFiles: action.acceptedFiles,
          fileRejections: action.fileRejections
        });

      case 'reset':
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFileDialogActive: false,
          isDragActive: false,
          draggedFiles: [],
          acceptedFiles: [],
          fileRejections: []
        });

      default:
        return state;
    }
  }

  exports.default = Dropzone;
  exports.useDropzone = useDropzone;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9maWxlLXNlbGVjdG9yL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvZmlsZS1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2VzL2luZGV4LmpzIiwiLi4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCB2YXIgQ09NTU9OX01JTUVfVFlQRVMgPSBuZXcgTWFwKFtcbiAgICBbJ2F2aScsICd2aWRlby9hdmknXSxcbiAgICBbJ2dpZicsICdpbWFnZS9naWYnXSxcbiAgICBbJ2ljbycsICdpbWFnZS94LWljb24nXSxcbiAgICBbJ2pwZWcnLCAnaW1hZ2UvanBlZyddLFxuICAgIFsnanBnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ21rdicsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydtb3YnLCAndmlkZW8vcXVpY2t0aW1lJ10sXG4gICAgWydtcDQnLCAndmlkZW8vbXA0J10sXG4gICAgWydwZGYnLCAnYXBwbGljYXRpb24vcGRmJ10sXG4gICAgWydwbmcnLCAnaW1hZ2UvcG5nJ10sXG4gICAgWyd6aXAnLCAnYXBwbGljYXRpb24vemlwJ10sXG4gICAgWydkb2MnLCAnYXBwbGljYXRpb24vbXN3b3JkJ10sXG4gICAgWydkb2N4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J11cbl0pO1xuZXhwb3J0IGZ1bmN0aW9uIHRvRmlsZVdpdGhQYXRoKGZpbGUsIHBhdGgpIHtcbiAgICB2YXIgZiA9IHdpdGhNaW1lVHlwZShmaWxlKTtcbiAgICBpZiAodHlwZW9mIGYucGF0aCAhPT0gJ3N0cmluZycpIHsgLy8gb24gZWxlY3Ryb24sIHBhdGggaXMgYWxyZWFkeSBzZXQgdG8gdGhlIGFic29sdXRlIHBhdGhcbiAgICAgICAgdmFyIHdlYmtpdFJlbGF0aXZlUGF0aCA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgJ3BhdGgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBwYXRoXG4gICAgICAgICAgICAgICAgLy8gSWYgPGlucHV0IHdlYmtpdGRpcmVjdG9yeT4gaXMgc2V0LFxuICAgICAgICAgICAgICAgIC8vIHRoZSBGaWxlIHdpbGwgaGF2ZSBhIHt3ZWJraXRSZWxhdGl2ZVBhdGh9IHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxJbnB1dEVsZW1lbnQvd2Via2l0ZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgOiB0eXBlb2Ygd2Via2l0UmVsYXRpdmVQYXRoID09PSAnc3RyaW5nJyAmJiB3ZWJraXRSZWxhdGl2ZVBhdGgubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IHdlYmtpdFJlbGF0aXZlUGF0aFxuICAgICAgICAgICAgICAgICAgICA6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZjtcbn1cbmZ1bmN0aW9uIHdpdGhNaW1lVHlwZShmaWxlKSB7XG4gICAgdmFyIG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgdmFyIGhhc0V4dGVuc2lvbiA9IG5hbWUgJiYgbmFtZS5sYXN0SW5kZXhPZignLicpICE9PSAtMTtcbiAgICBpZiAoaGFzRXh0ZW5zaW9uICYmICFmaWxlLnR5cGUpIHtcbiAgICAgICAgdmFyIGV4dCA9IG5hbWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciB0eXBlID0gQ09NTU9OX01JTUVfVFlQRVMuZ2V0KGV4dCk7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmlsZSwgJ3R5cGUnLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLmpzLm1hcCIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fcmVhZCwgX19zcHJlYWQgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHRvRmlsZVdpdGhQYXRoIH0gZnJvbSAnLi9maWxlJztcbnZhciBGSUxFU19UT19JR05PUkUgPSBbXG4gICAgLy8gVGh1bWJuYWlsIGNhY2hlIGZpbGVzIGZvciBtYWNPUyBhbmQgV2luZG93c1xuICAgICcuRFNfU3RvcmUnLFxuICAgICdUaHVtYnMuZGInIC8vIFdpbmRvd3Ncbl07XG4vKipcbiAqIENvbnZlcnQgYSBEcmFnRXZlbnQncyBEYXRhVHJhc2ZlciBvYmplY3QgdG8gYSBsaXN0IG9mIEZpbGUgb2JqZWN0c1xuICogTk9URTogSWYgc29tZSBvZiB0aGUgaXRlbXMgYXJlIGZvbGRlcnMsXG4gKiBldmVyeXRoaW5nIHdpbGwgYmUgZmxhdHRlbmVkIGFuZCBwbGFjZWQgaW4gdGhlIHNhbWUgbGlzdCBidXQgdGhlIHBhdGhzIHdpbGwgYmUga2VwdCBhcyBhIHtwYXRofSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBldnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdmVudChldnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpc0RyYWdFdnQoZXZ0KSAmJiBldnQuZGF0YVRyYW5zZmVyXG4gICAgICAgICAgICAgICAgICAgID8gZ2V0RGF0YVRyYW5zZmVyRmlsZXMoZXZ0LmRhdGFUcmFuc2ZlciwgZXZ0LnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0SW5wdXRGaWxlcyhldnQpXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0RyYWdFdnQodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZS5kYXRhVHJhbnNmZXI7XG59XG5mdW5jdGlvbiBnZXRJbnB1dEZpbGVzKGV2dCkge1xuICAgIHZhciBmaWxlcyA9IGlzSW5wdXQoZXZ0LnRhcmdldClcbiAgICAgICAgPyBldnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICA/IGZyb21MaXN0KGV2dC50YXJnZXQuZmlsZXMpXG4gICAgICAgICAgICA6IFtdXG4gICAgICAgIDogW107XG4gICAgcmV0dXJuIGZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdG9GaWxlV2l0aFBhdGgoZmlsZSk7IH0pO1xufVxuZnVuY3Rpb24gaXNJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldERhdGFUcmFuc2ZlckZpbGVzKGR0LCB0eXBlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMsIGZpbGVzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWR0Lml0ZW1zKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBmcm9tTGlzdChkdC5pdGVtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3JkaW5nIHRvIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RuZC5odG1sI2RuZGV2ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSAnZHJhZ3N0YXJ0JyBhbmQgJ2Ryb3AnIGhhcyBhY2Nlc3MgdG8gdGhlIGRhdGEgKHNvdXJjZSBub2RlKVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2Ryb3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgaXRlbXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGl0ZW1zLm1hcCh0b0ZpbGVQcm9taXNlcykpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGZpbGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbm9JZ25vcmVkRmlsZXMoZmxhdHRlbihmaWxlcykpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBub0lnbm9yZWRGaWxlcyhmcm9tTGlzdChkdC5maWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHRvRmlsZVdpdGhQYXRoKGZpbGUpOyB9KSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vSWdub3JlZEZpbGVzKGZpbGVzKSB7XG4gICAgcmV0dXJuIGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gRklMRVNfVE9fSUdOT1JFLmluZGV4T2YoZmlsZS5uYW1lKSA9PT0gLTE7IH0pO1xufVxuLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20oKVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZnJvbSNCcm93c2VyX2NvbXBhdGliaWxpdHlcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlTGlzdFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW1MaXN0XG5mdW5jdGlvbiBmcm9tTGlzdChpdGVtcykge1xuICAgIHZhciBmaWxlcyA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZmlsZSA9IGl0ZW1zW2ldO1xuICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZXM7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVySXRlbVxuZnVuY3Rpb24gdG9GaWxlUHJvbWlzZXMoaXRlbSkge1xuICAgIGlmICh0eXBlb2YgaXRlbS53ZWJraXRHZXRBc0VudHJ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtKTtcbiAgICB9XG4gICAgdmFyIGVudHJ5ID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCk7XG4gICAgLy8gU2FmYXJpIHN1cHBvcnRzIGRyb3BwaW5nIGFuIGltYWdlIG5vZGUgZnJvbSBhIGRpZmZlcmVudCB3aW5kb3cgYW5kIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmdcbiAgICAvLyB0aGUgRGF0YVRyYW5zZmVySXRlbS5nZXRBc0ZpbGUoKSBBUElcbiAgICAvLyBOT1RFOiBGaWxlU3lzdGVtRW50cnkuZmlsZSgpIHRocm93cyBpZiB0cnlpbmcgdG8gZ2V0IHRoZSBmaWxlXG4gICAgaWYgKGVudHJ5ICYmIGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBmcm9tRGlyRW50cnkoZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSk7XG59XG5mdW5jdGlvbiBmbGF0dGVuKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWxlcykgeyByZXR1cm4gX19zcHJlYWQoYWNjLCAoQXJyYXkuaXNBcnJheShmaWxlcykgPyBmbGF0dGVuKGZpbGVzKSA6IFtmaWxlc10pKTsgfSwgW10pO1xufVxuZnVuY3Rpb24gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSkge1xuICAgIHZhciBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGl0ZW0gKyBcIiBpcyBub3QgYSBGaWxlXCIpO1xuICAgIH1cbiAgICB2YXIgZndwID0gdG9GaWxlV2l0aFBhdGgoZmlsZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmd3ApO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1FbnRyeVxuZnVuY3Rpb24gZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZW50cnkuaXNEaXJlY3RvcnkgPyBmcm9tRGlyRW50cnkoZW50cnkpIDogZnJvbUZpbGVFbnRyeShlbnRyeSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5RW50cnlcbmZ1bmN0aW9uIGZyb21EaXJFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWFkZXIgPSBlbnRyeS5jcmVhdGVSZWFkZXIoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiByZWFkRW50cmllcygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5L2NyZWF0ZVJlYWRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlSZWFkZXIvcmVhZEVudHJpZXNcbiAgICAgICAgICAgIHJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAoYmF0Y2gpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMsIGVycl8xLCBpdGVtcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFiYXRjaC5sZW5ndGgpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGVudHJpZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IFByb21pc2UuYWxsKGJhdGNoLm1hcChmcm9tRW50cnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHJlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICB9KTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRmlsZUVudHJ5XG5mdW5jdGlvbiBmcm9tRmlsZUVudHJ5KGVudHJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZndwID0gdG9GaWxlV2l0aFBhdGgoZmlsZSwgZW50cnkuZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmd3ApO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUtc2VsZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmaWxlLCBhY2NlcHRlZEZpbGVzKSB7XG4gIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICB2YXIgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lIHx8ICcnO1xuICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZSB8fCAnJztcbiAgICB2YXIgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuXG4gICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsaWRUeXBlLmVuZHNXaXRoKCcvKicpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTsiLCJpbXBvcnQgYWNjZXB0cyBmcm9tICdhdHRyLWFjY2VwdCdcblxuLy8gRXJyb3IgY29kZXNcbmV4cG9ydCBjb25zdCBGSUxFX0lOVkFMSURfVFlQRSA9ICdmaWxlLWludmFsaWQtdHlwZSdcbmV4cG9ydCBjb25zdCBGSUxFX1RPT19MQVJHRSA9ICdmaWxlLXRvby1sYXJnZSdcbmV4cG9ydCBjb25zdCBGSUxFX1RPT19TTUFMTCA9ICdmaWxlLXRvby1zbWFsbCdcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9GSUxFUyA9ICd0b28tbWFueS1maWxlcydcblxuLy8gRmlsZSBFcnJvcnNcbmV4cG9ydCBjb25zdCBnZXRJbnZhbGlkVHlwZVJlamVjdGlvbkVyciA9IGFjY2VwdCA9PiB7XG4gIGFjY2VwdCA9IEFycmF5LmlzQXJyYXkoYWNjZXB0KSAmJiBhY2NlcHQubGVuZ3RoID09PSAxID8gYWNjZXB0WzBdIDogYWNjZXB0XG4gIGNvbnN0IG1lc3NhZ2VTdWZmaXggPSBBcnJheS5pc0FycmF5KGFjY2VwdCkgPyBgb25lIG9mICR7YWNjZXB0LmpvaW4oJywgJyl9YCA6IGFjY2VwdFxuICByZXR1cm4ge1xuICAgIGNvZGU6IEZJTEVfSU5WQUxJRF9UWVBFLFxuICAgIG1lc3NhZ2U6IGBGaWxlIHR5cGUgbXVzdCBiZSAke21lc3NhZ2VTdWZmaXh9YFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb29MYXJnZVJlamVjdGlvbkVyciA9IG1heFNpemUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IEZJTEVfVE9PX0xBUkdFLFxuICAgIG1lc3NhZ2U6IGBGaWxlIGlzIGxhcmdlciB0aGFuICR7bWF4U2l6ZX0gYnl0ZXNgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyID0gbWluU2l6ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTogRklMRV9UT09fU01BTEwsXG4gICAgbWVzc2FnZTogYEZpbGUgaXMgc21hbGxlciB0aGFuICR7bWluU2l6ZX0gYnl0ZXNgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTiA9IHtcbiAgY29kZTogVE9PX01BTllfRklMRVMsXG4gIG1lc3NhZ2U6ICdUb28gbWFueSBmaWxlcydcbn1cblxuLy8gRmlyZWZveCB2ZXJzaW9ucyBwcmlvciB0byA1MyByZXR1cm4gYSBib2d1cyBNSU1FIHR5cGUgZm9yIGV2ZXJ5IGZpbGUgZHJhZywgc28gZHJhZ292ZXJzIHdpdGhcbi8vIHRoYXQgTUlNRSB0eXBlIHdpbGwgYWx3YXlzIGJlIGFjY2VwdGVkXG5leHBvcnQgZnVuY3Rpb24gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdCkge1xuICBjb25zdCBpc0FjY2VwdGFibGUgPSBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi94LW1vei1maWxlJyB8fCBhY2NlcHRzKGZpbGUsIGFjY2VwdClcbiAgcmV0dXJuIFtpc0FjY2VwdGFibGUsIGlzQWNjZXB0YWJsZSA/IG51bGwgOiBnZXRJbnZhbGlkVHlwZVJlamVjdGlvbkVycihhY2NlcHQpXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZU1hdGNoU2l6ZShmaWxlLCBtaW5TaXplLCBtYXhTaXplKSB7XG4gIGlmIChpc0RlZmluZWQoZmlsZS5zaXplKSkge1xuICAgIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgaXNEZWZpbmVkKG1heFNpemUpKSB7XG4gICAgICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkgcmV0dXJuIFtmYWxzZSwgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIobWF4U2l6ZSldXG4gICAgICBpZiAoZmlsZS5zaXplIDwgbWluU2l6ZSkgcmV0dXJuIFtmYWxzZSwgZ2V0VG9vU21hbGxSZWplY3Rpb25FcnIobWluU2l6ZSldXG4gICAgfSBlbHNlIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgZmlsZS5zaXplIDwgbWluU2l6ZSlcbiAgICAgIHJldHVybiBbZmFsc2UsIGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyKG1pblNpemUpXVxuICAgIGVsc2UgaWYgKGlzRGVmaW5lZChtYXhTaXplKSAmJiBmaWxlLnNpemUgPiBtYXhTaXplKVxuICAgICAgcmV0dXJuIFtmYWxzZSwgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIobWF4U2l6ZSldXG4gIH1cbiAgcmV0dXJuIFt0cnVlLCBudWxsXVxufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEZpbGVzQWNjZXB0ZWQoeyBmaWxlcywgYWNjZXB0LCBtaW5TaXplLCBtYXhTaXplLCBtdWx0aXBsZSwgbWF4RmlsZXMgfSkge1xuICBpZiAoKCFtdWx0aXBsZSAmJiBmaWxlcy5sZW5ndGggPiAxKSB8fCAobXVsdGlwbGUgJiYgbWF4RmlsZXMgPj0gMSAmJiAgZmlsZXMubGVuZ3RoID4gbWF4RmlsZXMpICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlcy5ldmVyeShmaWxlID0+IHtcbiAgICBjb25zdCBbYWNjZXB0ZWRdID0gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdClcbiAgICBjb25zdCBbc2l6ZU1hdGNoXSA9IGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSlcbiAgICByZXR1cm4gYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoXG4gIH0pXG59XG5cbi8vIFJlYWN0J3Mgc3ludGhldGljIGV2ZW50cyBoYXMgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQsXG4vLyBidXQgdG8gcmVtYWluIGNvbXBhdGliaWxpdHkgd2l0aCBvdGhlciBsaWJzIChQcmVhY3QpIGZhbGwgYmFja1xuLy8gdG8gY2hlY2sgZXZlbnQuY2FuY2VsQnViYmxlXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wYWdhdGlvblN0b3BwZWQoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV2ZW50LmNhbmNlbEJ1YmJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZXZlbnQuY2FuY2VsQnViYmxlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2dFdpdGhGaWxlcyhldmVudCkge1xuICBpZiAoIWV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgIHJldHVybiAhIWV2ZW50LnRhcmdldCAmJiAhIWV2ZW50LnRhcmdldC5maWxlc1xuICB9XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXIvdHlwZXNcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxfRHJhZ19hbmRfRHJvcF9BUEkvUmVjb21tZW5kZWRfZHJhZ190eXBlcyNmaWxlXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKFxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyxcbiAgICB0eXBlID0+IHR5cGUgPT09ICdGaWxlcycgfHwgdHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtbW96LWZpbGUnXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzS2luZEZpbGUoaXRlbSkge1xuICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbS5raW5kID09PSAnZmlsZSdcbn1cblxuLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbn1cblxuZnVuY3Rpb24gaXNJZSh1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIHVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgIT09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpICE9PSAtMVxufVxuXG5mdW5jdGlvbiBpc0VkZ2UodXNlckFnZW50KSB7XG4gIHJldHVybiB1c2VyQWdlbnQuaW5kZXhPZignRWRnZS8nKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWVPckVkZ2UodXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgcmV0dXJuIGlzSWUodXNlckFnZW50KSB8fCBpc0VkZ2UodXNlckFnZW50KVxufVxuXG4vKipcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB0byBjb21wb3NlIGV2ZW50IGhhbmRsZXJzXG4gKiBUaGV5IGFyZSBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBvbmUgb2YgdGhlbSBjYWxscyBgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKWAuXG4gKiBOb3RlIHRoYXQgdGhlIGNoZWNrIGlzIGRvbmUgb24gdGhlIGZpcnN0IGludm9rZSB0b28sXG4gKiBtZWFuaW5nIHRoYXQgaWYgcHJvcGFnYXRpb24gd2FzIHN0b3BwZWQgYmVmb3JlIGludm9raW5nIHRoZSBmbnMsXG4gKiBubyBoYW5kbGVycyB3aWxsIGJlIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZucyB0aGUgZXZlbnQgaGFubGRlciBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZXZlbnQgaGFuZGxlciB0byBhZGQgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZUV2ZW50SGFuZGxlcnMoLi4uZm5zKSB7XG4gIHJldHVybiAoZXZlbnQsIC4uLmFyZ3MpID0+XG4gICAgZm5zLnNvbWUoZm4gPT4ge1xuICAgICAgaWYgKCFpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgZm4pIHtcbiAgICAgICAgZm4oZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgICByZXR1cm4gaXNQcm9wYWdhdGlvblN0b3BwZWQoZXZlbnQpXG4gICAgfSlcbn1cbiIsIi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICBGcmFnbWVudCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAnZmlsZS1zZWxlY3RvcidcbmltcG9ydCB7XG4gIGFsbEZpbGVzQWNjZXB0ZWQsXG4gIGNvbXBvc2VFdmVudEhhbmRsZXJzLFxuICBmaWxlQWNjZXB0ZWQsXG4gIGZpbGVNYXRjaFNpemUsXG4gIGlzRXZ0V2l0aEZpbGVzLFxuICBpc0llT3JFZGdlLFxuICBpc1Byb3BhZ2F0aW9uU3RvcHBlZCxcbiAgb25Eb2N1bWVudERyYWdPdmVyLFxuICBUT09fTUFOWV9GSUxFU19SRUpFQ1RJT05cbn0gZnJvbSAnLi91dGlscy9pbmRleCdcblxuLyoqXG4gKiBDb252ZW5pZW5jZSB3cmFwcGVyIGNvbXBvbmVudCBmb3IgdGhlIGB1c2VEcm9wem9uZWAgaG9va1xuICpcbiAqIGBgYGpzeFxuICogPERyb3B6b25lPlxuICogICB7KHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9KSA9PiAoXG4gKiAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICogICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gKiAgICAgICA8cD5EcmFnICduJyBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxuICogICAgIDwvZGl2PlxuICogICApfVxuICogPC9Ecm9wem9uZT5cbiAqIGBgYFxuICovXG5jb25zdCBEcm9wem9uZSA9IGZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnBhcmFtcyB9LCByZWYpID0+IHtcbiAgY29uc3QgeyBvcGVuLCAuLi5wcm9wcyB9ID0gdXNlRHJvcHpvbmUocGFyYW1zKVxuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoeyBvcGVuIH0pLCBbb3Blbl0pXG5cbiAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgcmVhY3Qtc3R5bGVndWlkaXN0IGNhbm5vdCBjcmVhdGUgZG9jcyBpZiB3ZSBkb24ndCByZXR1cm4gYSBqc3ggZWxlbWVudFxuICByZXR1cm4gPEZyYWdtZW50PntjaGlsZHJlbih7IC4uLnByb3BzLCBvcGVuIH0pfTwvRnJhZ21lbnQ+XG59KVxuXG5Ecm9wem9uZS5kaXNwbGF5TmFtZSA9ICdEcm9wem9uZSdcblxuLy8gQWRkIGRlZmF1bHQgcHJvcHMgZm9yIHJlYWN0LWRvY2dlblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBmcm9tRXZlbnQsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4RmlsZXM6IDAsXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogdHJ1ZSxcbiAgbm9DbGljazogZmFsc2UsXG4gIG5vS2V5Ym9hcmQ6IGZhbHNlLFxuICBub0RyYWc6IGZhbHNlLFxuICBub0RyYWdFdmVudHNCdWJibGluZzogZmFsc2UsXG4gIHZhbGlkYXRvcjogbnVsbFxufVxuXG5Ecm9wem9uZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuRHJvcHpvbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogUmVuZGVyIGZ1bmN0aW9uIHRoYXQgZXhwb3NlcyB0aGUgZHJvcHpvbmUgc3RhdGUgYW5kIHByb3AgZ2V0dGVyIGZuc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcmFtcy5nZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcmFtcy5nZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMub3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICAgKiBAcGFyYW0ge0ZpbGVbXX0gcGFyYW1zLmRyYWdnZWRGaWxlcyBGaWxlcyBpbiBhY3RpdmUgZHJhZ1xuICAgKiBAcGFyYW0ge0ZpbGVbXX0gcGFyYW1zLmFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAgICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IHBhcmFtcy5maWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTZXQgYWNjZXB0ZWQgZmlsZSB0eXBlcy5cbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9va29uZXQvYXR0ci1hY2NlcHQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEtlZXAgaW4gbWluZCB0aGF0IG1pbWUgdHlwZSBkZXRlcm1pbmF0aW9uIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgcGxhdGZvcm1zLiBDU1YgZmlsZXMsXG4gICAqIGZvciBleGFtcGxlLCBhcmUgcmVwb3J0ZWQgYXMgdGV4dC9wbGFpbiB1bmRlciBtYWNPUyBidXQgYXMgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIHVuZGVyXG4gICAqIFdpbmRvd3MuIEluIHNvbWUgY2FzZXMgdGhlcmUgbWlnaHQgbm90IGJlIGEgbWltZSB0eXBlIHNldCBhdCBhbGwuXG4gICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy8yNzZcbiAgICovXG4gIGFjY2VwdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyldKSxcblxuICAvKipcbiAgICogQWxsb3cgZHJhZyAnbicgZHJvcCAob3Igc2VsZWN0aW9uIGZyb20gdGhlIGZpbGUgZGlhbG9nKSBvZiBtdWx0aXBsZSBmaWxlc1xuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAgICovXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRpc2FibGVzIGNsaWNrIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2dcbiAgICovXG4gIG5vQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBkaXNhYmxlcyBTUEFDRS9FTlRFUiB0byBvcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nLlxuICAgKiBOb3RlIHRoYXQgaXQgYWxzbyBzdG9wcyB0cmFja2luZyB0aGUgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBub0tleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGlzYWJsZXMgZHJhZyAnbicgZHJvcFxuICAgKi9cbiAgbm9EcmFnOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3RvcHMgZHJhZyBldmVudCBwcm9wYWdhdGlvbiB0byBwYXJlbnRzXG4gICAqL1xuICBub0RyYWdFdmVudHNCdWJibGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAgICovXG4gIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAgICovXG4gIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBNYXhpbXVtIGFjY2VwdGVkIG51bWJlciBvZiBmaWxlc1xuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwIHdoaWNoIG1lYW5zIHRoZXJlIGlzIG5vIGxpbWl0YXRpb24gdG8gaG93IG1hbnkgZmlsZXMgYXJlIGFjY2VwdGVkLlxuICAgKi9cbiAgbWF4RmlsZXM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHRoZSBkcm9wem9uZVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBwcm92aWRlIGEgY3VzdG9tIGZpbGUgYWdncmVnYXRvclxuICAgKlxuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gICAqL1xuICBnZXRGaWxlc0Zyb21FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIGNsb3NpbmcgdGhlIGZpbGUgZGlhbG9nIHdpdGggbm8gc2VsZWN0aW9uXG4gICAqL1xuICBvbkZpbGVEaWFsb2dDYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyYWdlbnRlcmAgZXZlbnQgb2NjdXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnbGVhdmVgIGV2ZW50IG9jY3Vyc1xuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ0xlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnb3ZlcmAgZXZlbnQgb2NjdXJzXG4gICAqXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25EcmFnT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBgZ2V0RmlsZXNGcm9tRXZlbnRgIGNhbGxiYWNrIGlzIGRvbmUuXG4gICAqXG4gICAqIEZpbGVzIGFyZSBhY2NlcHRlZCBvciByZWplY3RlZCBiYXNlZCBvbiB0aGUgYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCBhbmQgYG1heFNpemVgIHByb3BzLlxuICAgKiBgYWNjZXB0YCBtdXN0IGJlIGEgdmFsaWQgW01JTUUgdHlwZV0oaHR0cDovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9tZWRpYS10eXBlcy54aHRtbCkgYWNjb3JkaW5nIHRvIFtpbnB1dCBlbGVtZW50IHNwZWNpZmljYXRpb25dKGh0dHBzOi8vd3d3LnczLm9yZy93aWtpL0hUTUwvRWxlbWVudHMvaW5wdXQvZmlsZSkgb3IgYSB2YWxpZCBmaWxlIGV4dGVuc2lvbi5cbiAgICogSWYgYG11bHRpcGxlYCBpcyBzZXQgdG8gZmFsc2UgYW5kIGFkZGl0aW9uYWwgZmlsZXMgYXJlIGRyb3BwZWQsXG4gICAqIGFsbCBmaWxlcyBiZXNpZGVzIHRoZSBmaXJzdCB3aWxsIGJlIHJlamVjdGVkLlxuICAgKiBBbnkgZmlsZSB3aGljaCBkb2VzIG5vdCBoYXZlIGEgc2l6ZSBpbiB0aGUgW2BtaW5TaXplYCwgYG1heFNpemVgXSByYW5nZSwgd2lsbCBiZSByZWplY3RlZCBhcyB3ZWxsLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIGBvbkRyb3BgIGNhbGxiYWNrIHdpbGwgYWx3YXlzIGJlIGludm9rZWQgcmVnYXJkbGVzcyBpZiB0aGUgZHJvcHBlZCBmaWxlcyB3ZXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIHJlYWN0IHRvIGEgc3BlY2lmaWMgc2NlbmFyaW8sIHVzZSB0aGUgYG9uRHJvcEFjY2VwdGVkYC9gb25Ecm9wUmVqZWN0ZWRgIHByb3BzLlxuICAgKlxuICAgKiBgb25Ecm9wYCB3aWxsIHByb3ZpZGUgeW91IHdpdGggYW4gYXJyYXkgb2YgW0ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKSBvYmplY3RzIHdoaWNoIHlvdSBjYW4gdGhlbiBwcm9jZXNzIGFuZCBzZW5kIHRvIGEgc2VydmVyLlxuICAgKiBGb3IgZXhhbXBsZSwgd2l0aCBbU3VwZXJBZ2VudF0oaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3N1cGVyYWdlbnQpIGFzIGEgaHR0cC9hamF4IGxpYnJhcnk6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGZ1bmN0aW9uIG9uRHJvcChhY2NlcHRlZEZpbGVzKSB7XG4gICAqICAgY29uc3QgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAgICogICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAqICAgICByZXEuYXR0YWNoKGZpbGUubmFtZSwgZmlsZSlcbiAgICogICB9KVxuICAgKiAgIHJlcS5lbmQoY2FsbGJhY2spXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZVtdfSBhY2NlcHRlZEZpbGVzXG4gICAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9uc1xuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gICAqL1xuICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IGlmIG5vIGZpbGVzIGFyZSBhY2NlcHRlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgaW52b2tlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGaWxlW119IGZpbGVzXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50XG4gICAqL1xuICBvbkRyb3BBY2NlcHRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICAgKiBOb3RlIHRoYXQgaWYgbm8gZmlsZXMgYXJlIHJlamVjdGVkLCB0aGlzIGNhbGxiYWNrIGlzIG5vdCBpbnZva2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnNcbiAgICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnRcbiAgICovXG4gIG9uRHJvcFJlamVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24gXG4gICAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICAgKiBAcmV0dXJucyB7RmlsZUVycm9yfEZpbGVFcnJvcltdfVxuICAgKi9cbiAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyYWdlbnRlcmAsXG4gKiBgZHJhZ292ZXJgIGFuZCBgZHJhZ2xlYXZlYCBldmVudHMuXG4gKiBJdCBpcyBub3QgaW52b2tlZCBpZiB0aGUgaXRlbXMgYXJlIG5vdCBmaWxlcyAoc3VjaCBhcyBsaW5rLCB0ZXh0LCBldGMuKS5cbiAqXG4gKiBAY2FsbGJhY2sgZHJhZ0NiXG4gKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyb3BgIG9yIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgbm90IGZpbGVzIChzdWNoIGFzIGxpbmssIHRleHQsIGV0Yy4pLlxuICpcbiAqIEBjYWxsYmFjayBkcm9wQ2JcbiAqIEBwYXJhbSB7RmlsZVtdfSBhY2NlcHRlZEZpbGVzIExpc3Qgb2YgYWNjZXB0ZWQgZmlsZXNcbiAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9ucyBMaXN0IG9mIHJlamVjdGVkIGZpbGVzIGFuZCB3aHkgdGhleSB3ZXJlIHJlamVjdGVkXG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBmb3IgdGhlIGBkcm9wYCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gKiBJdCBpcyBub3QgaW52b2tlZCBpZiB0aGUgaXRlbXMgYXJlIGZpbGVzIChzdWNoIGFzIGxpbmssIHRleHQsIGV0Yy4pLlxuICpcbiAqIEBjYWxsYmFjayBkcm9wQWNjZXB0ZWRDYlxuICogQHBhcmFtIHtGaWxlW119IGZpbGVzIExpc3Qgb2YgYWNjZXB0ZWQgZmlsZXMgdGhhdCBtZWV0IHRoZSBnaXZlbiBjcml0ZXJpYVxuICogKGBhY2NlcHRgLCBgbXVsdGlwbGVgLCBgbWluU2l6ZWAsIGBtYXhTaXplYClcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyb3BgIG9yIGlucHV0IGNoYW5nZSBldmVudC5cbiAqXG4gKiBAY2FsbGJhY2sgZHJvcFJlamVjdGVkQ2JcbiAqIEBwYXJhbSB7RmlsZVtdfSBmaWxlcyBMaXN0IG9mIHJlamVjdGVkIGZpbGVzIHRoYXQgZG8gbm90IG1lZXQgdGhlIGdpdmVuIGNyaXRlcmlhXG4gKiAoYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCwgYG1heFNpemVgKVxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgYWdncmVnYXRlIGZpbGVzLFxuICogaW4gYSBhc3luY2hyb25vdXMgZmFzaGlvbiwgZnJvbSBkcmFnIG9yIGlucHV0IGNoYW5nZSBldmVudHMuXG4gKlxuICogQGNhbGxiYWNrIGdldEZpbGVzRnJvbUV2ZW50XG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKiBAcmV0dXJucyB7KEZpbGVbXXxQcm9taXNlPEZpbGVbXT4pfVxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgZHJvcHpvbmUgc3RhdGUgYW5kIHNvbWUgaGVscGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEcm9wem9uZVN0YXRlXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICogQHByb3BlcnR5IHtGaWxlW119IGRyYWdnZWRGaWxlcyBGaWxlcyBpbiBhY3RpdmUgZHJhZ1xuICogQHByb3BlcnR5IHtGaWxlW119IGFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAqIEBwcm9wZXJ0eSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICovXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgaXNGaWxlRGlhbG9nQWN0aXZlOiBmYWxzZSxcbiAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgaXNEcmFnQWNjZXB0OiBmYWxzZSxcbiAgaXNEcmFnUmVqZWN0OiBmYWxzZSxcbiAgZHJhZ2dlZEZpbGVzOiBbXSxcbiAgYWNjZXB0ZWRGaWxlczogW10sXG4gIGZpbGVSZWplY3Rpb25zOiBbXVxufVxuXG4vKipcbiAqIEEgUmVhY3QgaG9vayB0aGF0IGNyZWF0ZXMgYSBkcmFnICduJyBkcm9wIGFyZWEuXG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBNeURyb3B6b25lKHByb3BzKSB7XG4gKiAgIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9ID0gdXNlRHJvcHpvbmUoe1xuICogICAgIG9uRHJvcDogYWNjZXB0ZWRGaWxlcyA9PiB7XG4gKiAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgRmlsZSBvYmplY3RzLCBlLmcuIHVwbG9hZCB0byBzb21lIHNlcnZlclxuICogICAgIH1cbiAqICAgfSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICogICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gKiAgICAgICA8cD5EcmFnIGFuZCBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxuICogICAgIDwvZGl2PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAZnVuY3Rpb24gdXNlRHJvcHpvbmVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcHJvcHMuYWNjZXB0XSBTZXQgYWNjZXB0ZWQgZmlsZSB0eXBlcy5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vb2tvbmV0L2F0dHItYWNjZXB0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAqIGZvciBleGFtcGxlLCBhcmUgcmVwb3J0ZWQgYXMgdGV4dC9wbGFpbiB1bmRlciBtYWNPUyBidXQgYXMgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIHVuZGVyXG4gKiBXaW5kb3dzLiBJbiBzb21lIGNhc2VzIHRoZXJlIG1pZ2h0IG5vdCBiZSBhIG1pbWUgdHlwZSBzZXQgYXQgYWxsLlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NlxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubXVsdGlwbGU9dHJ1ZV0gQWxsb3cgZHJhZyAnbicgZHJvcCAob3Igc2VsZWN0aW9uIGZyb20gdGhlIGZpbGUgZGlhbG9nKSBvZiBtdWx0aXBsZSBmaWxlc1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50PXRydWVdIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9DbGljaz1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgY2xpY2sgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9LZXlib2FyZD1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgU1BBQ0UvRU5URVIgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZy5cbiAqIE5vdGUgdGhhdCBpdCBhbHNvIHN0b3BzIHRyYWNraW5nIHRoZSBmb2N1cyBzdGF0ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vRHJhZz1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgZHJhZyAnbicgZHJvcFxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9EcmFnRXZlbnRzQnViYmxpbmc9ZmFsc2VdIElmIHRydWUsIHN0b3BzIGRyYWcgZXZlbnQgcHJvcGFnYXRpb24gdG8gcGFyZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwcm9wcy5taW5TaXplPTBdIE1pbmltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWF4U2l6ZT1JbmZpbml0eV0gTWF4aW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuZGlzYWJsZWQ9ZmFsc2VdIEVuYWJsZS9kaXNhYmxlIHRoZSBkcm9wem9uZVxuICogQHBhcmFtIHtnZXRGaWxlc0Zyb21FdmVudH0gW3Byb3BzLmdldEZpbGVzRnJvbUV2ZW50XSBVc2UgdGhpcyB0byBwcm92aWRlIGEgY3VzdG9tIGZpbGUgYWdncmVnYXRvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLm9uRmlsZURpYWxvZ0NhbmNlbF0gQ2IgZm9yIHdoZW4gY2xvc2luZyB0aGUgZmlsZSBkaWFsb2cgd2l0aCBubyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnRW50ZXJdIENiIGZvciB3aGVuIHRoZSBgZHJhZ2VudGVyYCBldmVudCBvY2N1cnMuXG4gKiBAcGFyYW0ge2RyYWdDYn0gW3Byb3BzLm9uRHJhZ0xlYXZlXSBDYiBmb3Igd2hlbiB0aGUgYGRyYWdsZWF2ZWAgZXZlbnQgb2NjdXJzXG4gKiBAcGFyYW0ge2RyYWdDYn0gW3Byb3BzLm9uRHJhZ092ZXJdIENiIGZvciB3aGVuIHRoZSBgZHJhZ292ZXJgIGV2ZW50IG9jY3Vyc1xuICogQHBhcmFtIHtkcm9wQ2J9IFtwcm9wcy5vbkRyb3BdIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICogTm90ZSB0aGF0IHRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB0aGUgYGdldEZpbGVzRnJvbUV2ZW50YCBjYWxsYmFjayBpcyBkb25lLlxuICpcbiAqIEZpbGVzIGFyZSBhY2NlcHRlZCBvciByZWplY3RlZCBiYXNlZCBvbiB0aGUgYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCBhbmQgYG1heFNpemVgIHByb3BzLlxuICogYGFjY2VwdGAgbXVzdCBiZSBhIHZhbGlkIFtNSU1FIHR5cGVdKGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWwpIGFjY29yZGluZyB0byBbaW5wdXQgZWxlbWVudCBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvd2lraS9IVE1ML0VsZW1lbnRzL2lucHV0L2ZpbGUpIG9yIGEgdmFsaWQgZmlsZSBleHRlbnNpb24uXG4gKiBJZiBgbXVsdGlwbGVgIGlzIHNldCB0byBmYWxzZSBhbmQgYWRkaXRpb25hbCBmaWxlcyBhcmUgZHJvcHBlZCxcbiAqIGFsbCBmaWxlcyBiZXNpZGVzIHRoZSBmaXJzdCB3aWxsIGJlIHJlamVjdGVkLlxuICogQW55IGZpbGUgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHNpemUgaW4gdGhlIFtgbWluU2l6ZWAsIGBtYXhTaXplYF0gcmFuZ2UsIHdpbGwgYmUgcmVqZWN0ZWQgYXMgd2VsbC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGBvbkRyb3BgIGNhbGxiYWNrIHdpbGwgYWx3YXlzIGJlIGludm9rZWQgcmVnYXJkbGVzcyBpZiB0aGUgZHJvcHBlZCBmaWxlcyB3ZXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkLlxuICogSWYgeW91J2QgbGlrZSB0byByZWFjdCB0byBhIHNwZWNpZmljIHNjZW5hcmlvLCB1c2UgdGhlIGBvbkRyb3BBY2NlcHRlZGAvYG9uRHJvcFJlamVjdGVkYCBwcm9wcy5cbiAqXG4gKiBgb25Ecm9wYCB3aWxsIHByb3ZpZGUgeW91IHdpdGggYW4gYXJyYXkgb2YgW0ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKSBvYmplY3RzIHdoaWNoIHlvdSBjYW4gdGhlbiBwcm9jZXNzIGFuZCBzZW5kIHRvIGEgc2VydmVyLlxuICogRm9yIGV4YW1wbGUsIHdpdGggW1N1cGVyQWdlbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9zdXBlcmFnZW50KSBhcyBhIGh0dHAvYWpheCBsaWJyYXJ5OlxuICpcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBvbkRyb3AoYWNjZXB0ZWRGaWxlcykge1xuICogICBjb25zdCByZXEgPSByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gKiAgICAgcmVxLmF0dGFjaChmaWxlLm5hbWUsIGZpbGUpXG4gKiAgIH0pXG4gKiAgIHJlcS5lbmQoY2FsbGJhY2spXG4gKiB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7ZHJvcEFjY2VwdGVkQ2J9IFtwcm9wcy5vbkRyb3BBY2NlcHRlZF1cbiAqIEBwYXJhbSB7ZHJvcFJlamVjdGVkQ2J9IFtwcm9wcy5vbkRyb3BSZWplY3RlZF1cbiAqXG4gKiBAcmV0dXJucyB7RHJvcHpvbmVTdGF0ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3B6b25lKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgYWNjZXB0LFxuICAgIGRpc2FibGVkLFxuICAgIGdldEZpbGVzRnJvbUV2ZW50LFxuICAgIG1heFNpemUsXG4gICAgbWluU2l6ZSxcbiAgICBtdWx0aXBsZSxcbiAgICBtYXhGaWxlcyxcbiAgICBvbkRyYWdFbnRlcixcbiAgICBvbkRyYWdMZWF2ZSxcbiAgICBvbkRyYWdPdmVyLFxuICAgIG9uRHJvcCxcbiAgICBvbkRyb3BBY2NlcHRlZCxcbiAgICBvbkRyb3BSZWplY3RlZCxcbiAgICBvbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgcHJldmVudERyb3BPbkRvY3VtZW50LFxuICAgIG5vQ2xpY2ssXG4gICAgbm9LZXlib2FyZCxcbiAgICBub0RyYWcsXG4gICAgbm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgdmFsaWRhdG9yXG4gIH0gPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLFxuICAgIC4uLm9wdGlvbnNcbiAgfVxuXG4gIGNvbnN0IHJvb3RSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuICBjb25zdCB7IGlzRm9jdXNlZCwgaXNGaWxlRGlhbG9nQWN0aXZlLCBkcmFnZ2VkRmlsZXMgfSA9IHN0YXRlXG5cbiAgLy8gRm4gZm9yIG9wZW5pbmcgdGhlIGZpbGUgZGlhbG9nIHByb2dyYW1tYXRpY2FsbHlcbiAgY29uc3Qgb3BlbkZpbGVEaWFsb2cgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ29wZW5EaWFsb2cnIH0pXG4gICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gbnVsbFxuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpXG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKVxuXG4gIC8vIFVwZGF0ZSBmaWxlIGRpYWxvZyBhY3RpdmUgc3RhdGUgd2hlbiB0aGUgd2luZG93IGlzIGZvY3VzZWQgb25cbiAgY29uc3Qgb25XaW5kb3dGb2N1cyA9ICgpID0+IHtcbiAgICAvLyBFeGVjdXRlIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGZpbGUgZGlhbG9nIGlzIG9wZW5lZCBpbiB0aGUgYnJvd3NlclxuICAgIGlmIChpc0ZpbGVEaWFsb2dBY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IGlucHV0UmVmLmN1cnJlbnRcblxuICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdjbG9zZURpYWxvZycgfSlcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbGVEaWFsb2dDYW5jZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbldpbmRvd0ZvY3VzLCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25XaW5kb3dGb2N1cywgZmFsc2UpXG4gICAgfVxuICB9LCBbaW5wdXRSZWYsIGlzRmlsZURpYWxvZ0FjdGl2ZSwgb25GaWxlRGlhbG9nQ2FuY2VsXSlcblxuICAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIFNQQUNFL0VOVEVSIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcbiAgY29uc3Qgb25LZXlEb3duQ2IgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICAvLyBJZ25vcmUga2V5Ym9hcmQgZXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBET00gdHJlZVxuICAgICAgaWYgKCFyb290UmVmLmN1cnJlbnQgfHwgIXJvb3RSZWYuY3VycmVudC5pc0VxdWFsTm9kZShldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBvcGVuRmlsZURpYWxvZygpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcm9vdFJlZiwgaW5wdXRSZWZdXG4gIClcblxuICAvLyBVcGRhdGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBkcm9wem9uZVxuICBjb25zdCBvbkZvY3VzQ2IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnZm9jdXMnIH0pXG4gIH0sIFtdKVxuICBjb25zdCBvbkJsdXJDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdibHVyJyB9KVxuICB9LCBbXSlcblxuICAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIGNsaWNrIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcbiAgY29uc3Qgb25DbGlja0NiID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChub0NsaWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJbiBJRTExL0VkZ2UgdGhlIGZpbGUtYnJvd3NlciBkaWFsb2cgaXMgYmxvY2tpbmcsIHRoZXJlZm9yZSwgdXNlIHNldFRpbWVvdXQoKVxuICAgIC8vIHRvIGVuc3VyZSBSZWFjdCBjYW4gaGFuZGxlIHN0YXRlIGNoYW5nZXNcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvNDUwXG4gICAgaWYgKGlzSWVPckVkZ2UoKSkge1xuICAgICAgc2V0VGltZW91dChvcGVuRmlsZURpYWxvZywgMClcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbkZpbGVEaWFsb2coKVxuICAgIH1cbiAgfSwgW2lucHV0UmVmLCBub0NsaWNrXSlcblxuICBjb25zdCBkcmFnVGFyZ2V0c1JlZiA9IHVzZVJlZihbXSlcbiAgY29uc3Qgb25Eb2N1bWVudERyb3AgPSBldmVudCA9PiB7XG4gICAgaWYgKHJvb3RSZWYuY3VycmVudCAmJiByb290UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgLy8gSWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRG9jdW1lbnREcmFnT3ZlciwgZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Eb2N1bWVudERyb3AsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25Eb2N1bWVudERyYWdPdmVyKVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Eb2N1bWVudERyb3ApXG4gICAgICB9XG4gICAgfVxuICB9LCBbcm9vdFJlZiwgcHJldmVudERyb3BPbkRvY3VtZW50XSlcblxuICBjb25zdCBvbkRyYWdFbnRlckNiID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgLy8gUGVyc2lzdCBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0aGUgZXZlbnQgbGF0ZXIgYWZ0ZXIgZ2V0RmlsZXNGcm9tRXZlbnQoKSBpcyBkb25lXG4gICAgICBldmVudC5wZXJzaXN0KClcbiAgICAgIHN0b3BQcm9wYWdhdGlvbihldmVudClcblxuICAgICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFsuLi5kcmFnVGFyZ2V0c1JlZi5jdXJyZW50LCBldmVudC50YXJnZXRdXG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEZpbGVzRnJvbUV2ZW50KGV2ZW50KSkudGhlbihkcmFnZ2VkRmlsZXMgPT4ge1xuICAgICAgICAgIGlmIChpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgIW5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICBkcmFnZ2VkRmlsZXMsXG4gICAgICAgICAgICBpc0RyYWdBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnc2V0RHJhZ2dlZEZpbGVzJ1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAob25EcmFnRW50ZXIpIHtcbiAgICAgICAgICAgIG9uRHJhZ0VudGVyKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtnZXRGaWxlc0Zyb21FdmVudCwgb25EcmFnRW50ZXIsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXVxuICApXG5cbiAgY29uc3Qgb25EcmFnT3ZlckNiID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQucGVyc2lzdCgpXG4gICAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpXG5cbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICAgICAgICB9IGNhdGNoIHt9IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHkgKi9cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSAmJiBvbkRyYWdPdmVyKSB7XG4gICAgICAgIG9uRHJhZ092ZXIoZXZlbnQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG4gICAgW29uRHJhZ092ZXIsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXVxuICApXG5cbiAgY29uc3Qgb25EcmFnTGVhdmVDYiA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnBlcnNpc3QoKVxuICAgICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KVxuXG4gICAgICAvLyBPbmx5IGRlYWN0aXZhdGUgb25jZSB0aGUgZHJvcHpvbmUgYW5kIGFsbCBjaGlsZHJlbiBoYXZlIGJlZW4gbGVmdFxuICAgICAgY29uc3QgdGFyZ2V0cyA9IGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQuZmlsdGVyKFxuICAgICAgICB0YXJnZXQgPT4gcm9vdFJlZi5jdXJyZW50ICYmIHJvb3RSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpXG4gICAgICApXG4gICAgICAvLyBNYWtlIHN1cmUgdG8gcmVtb3ZlIGEgdGFyZ2V0IHByZXNlbnQgbXVsdGlwbGUgdGltZXMgb25seSBvbmNlXG4gICAgICAvLyAoRmlyZWZveCBtYXkgZmlyZSBkcmFnZW50ZXIvZHJhZ2xlYXZlIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIGVsZW1lbnQpXG4gICAgICBjb25zdCB0YXJnZXRJZHggPSB0YXJnZXRzLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuICAgICAgaWYgKHRhcmdldElkeCAhPT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0cy5zcGxpY2UodGFyZ2V0SWR4LCAxKVxuICAgICAgfVxuICAgICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IHRhcmdldHNcbiAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ3NldERyYWdnZWRGaWxlcycsXG4gICAgICAgIGRyYWdnZWRGaWxlczogW11cbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkgJiYgb25EcmFnTGVhdmUpIHtcbiAgICAgICAgb25EcmFnTGVhdmUoZXZlbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcm9vdFJlZiwgb25EcmFnTGVhdmUsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXVxuICApXG5cbiAgY29uc3Qgb25Ecm9wQ2IgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAvLyBQZXJzaXN0IGhlcmUgYmVjYXVzZSB3ZSBuZWVkIHRoZSBldmVudCBsYXRlciBhZnRlciBnZXRGaWxlc0Zyb21FdmVudCgpIGlzIGRvbmVcbiAgICAgIGV2ZW50LnBlcnNpc3QoKVxuICAgICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KVxuXG4gICAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gW11cblxuICAgICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoZ2V0RmlsZXNGcm9tRXZlbnQoZXZlbnQpKS50aGVuKGZpbGVzID0+IHtcbiAgICAgICAgICBpZiAoaXNQcm9wYWdhdGlvblN0b3BwZWQoZXZlbnQpICYmICFub0RyYWdFdmVudHNCdWJibGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlcyA9IFtdXG4gICAgICAgICAgY29uc3QgZmlsZVJlamVjdGlvbnMgPSBbXVxuXG4gICAgICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFthY2NlcHRlZCwgYWNjZXB0RXJyb3JdID0gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdClcbiAgICAgICAgICAgIGNvbnN0IFtzaXplTWF0Y2gsIHNpemVFcnJvcl0gPSBmaWxlTWF0Y2hTaXplKGZpbGUsIG1pblNpemUsIG1heFNpemUpXG4gICAgICAgICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSB2YWxpZGF0b3IgPyB2YWxpZGF0b3IoZmlsZSkgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoICYmICFjdXN0b21FcnJvcnMpIHtcbiAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gW2FjY2VwdEVycm9yLCBzaXplRXJyb3JdO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbUVycm9ycykge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoY3VzdG9tRXJyb3JzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZpbGVSZWplY3Rpb25zLnB1c2goeyBmaWxlLCBlcnJvcnM6IGVycm9ycy5maWx0ZXIoZSA9PiBlKSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAoKCFtdWx0aXBsZSAmJiBhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDEpIHx8IChtdWx0aXBsZSAmJiBtYXhGaWxlcyA+PSAxICYmICBhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IG1heEZpbGVzKSkge1xuICAgICAgICAgICAgLy8gUmVqZWN0IGV2ZXJ5dGhpbmcgYW5kIGVtcHR5IGFjY2VwdGVkIGZpbGVzXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgICAgIGZpbGVSZWplY3Rpb25zLnB1c2goeyBmaWxlLCBlcnJvcnM6IFtUT09fTUFOWV9GSUxFU19SRUpFQ1RJT05dIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcy5zcGxpY2UoMClcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXMsXG4gICAgICAgICAgICBmaWxlUmVqZWN0aW9ucyxcbiAgICAgICAgICAgIHR5cGU6ICdzZXRGaWxlcydcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKG9uRHJvcCkge1xuICAgICAgICAgICAgb25Ecm9wKGFjY2VwdGVkRmlsZXMsIGZpbGVSZWplY3Rpb25zLCBldmVudClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmlsZVJlamVjdGlvbnMubGVuZ3RoID4gMCAmJiBvbkRyb3BSZWplY3RlZCkge1xuICAgICAgICAgICAgb25Ecm9wUmVqZWN0ZWQoZmlsZVJlamVjdGlvbnMsIGV2ZW50KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcbiAgICAgICAgICAgIG9uRHJvcEFjY2VwdGVkKGFjY2VwdGVkRmlsZXMsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3Jlc2V0JyB9KVxuICAgIH0sXG4gICAgW1xuICAgICAgbXVsdGlwbGUsXG4gICAgICBhY2NlcHQsXG4gICAgICBtaW5TaXplLFxuICAgICAgbWF4U2l6ZSxcbiAgICAgIG1heEZpbGVzLFxuICAgICAgZ2V0RmlsZXNGcm9tRXZlbnQsXG4gICAgICBvbkRyb3AsXG4gICAgICBvbkRyb3BBY2NlcHRlZCxcbiAgICAgIG9uRHJvcFJlamVjdGVkLFxuICAgICAgbm9EcmFnRXZlbnRzQnViYmxpbmdcbiAgICBdXG4gIClcblxuICBjb25zdCBjb21wb3NlSGFuZGxlciA9IGZuID0+IHtcbiAgICByZXR1cm4gZGlzYWJsZWQgPyBudWxsIDogZm5cbiAgfVxuXG4gIGNvbnN0IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIgPSBmbiA9PiB7XG4gICAgcmV0dXJuIG5vS2V5Ym9hcmQgPyBudWxsIDogY29tcG9zZUhhbmRsZXIoZm4pXG4gIH1cblxuICBjb25zdCBjb21wb3NlRHJhZ0hhbmRsZXIgPSBmbiA9PiB7XG4gICAgcmV0dXJuIG5vRHJhZyA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbilcbiAgfVxuXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGV2ZW50ID0+IHtcbiAgICBpZiAobm9EcmFnRXZlbnRzQnViYmxpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0Um9vdFByb3BzID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgcmVmS2V5ID0gJ3JlZicsXG4gICAgICBvbktleURvd24sXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25CbHVyLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uRHJhZ0VudGVyLFxuICAgICAgb25EcmFnT3ZlcixcbiAgICAgIG9uRHJhZ0xlYXZlLFxuICAgICAgb25Ecm9wLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB7fSkgPT4gKHtcbiAgICAgIG9uS2V5RG93bjogY29tcG9zZUtleWJvYXJkSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbktleURvd24sIG9uS2V5RG93bkNiKSksXG4gICAgICBvbkZvY3VzOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIG9uRm9jdXNDYikpLFxuICAgICAgb25CbHVyOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQmx1ciwgb25CbHVyQ2IpKSxcbiAgICAgIG9uQ2xpY2s6IGNvbXBvc2VIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIG9uQ2xpY2tDYikpLFxuICAgICAgb25EcmFnRW50ZXI6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdFbnRlciwgb25EcmFnRW50ZXJDYikpLFxuICAgICAgb25EcmFnT3ZlcjogY29tcG9zZURyYWdIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRHJhZ092ZXIsIG9uRHJhZ092ZXJDYikpLFxuICAgICAgb25EcmFnTGVhdmU6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdMZWF2ZSwgb25EcmFnTGVhdmVDYikpLFxuICAgICAgb25Ecm9wOiBjb21wb3NlRHJhZ0hhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25Ecm9wLCBvbkRyb3BDYikpLFxuICAgICAgW3JlZktleV06IHJvb3RSZWYsXG4gICAgICAuLi4oIWRpc2FibGVkICYmICFub0tleWJvYXJkID8geyB0YWJJbmRleDogMCB9IDoge30pLFxuICAgICAgLi4ucmVzdFxuICAgIH0pLFxuICAgIFtcbiAgICAgIHJvb3RSZWYsXG4gICAgICBvbktleURvd25DYixcbiAgICAgIG9uRm9jdXNDYixcbiAgICAgIG9uQmx1ckNiLFxuICAgICAgb25DbGlja0NiLFxuICAgICAgb25EcmFnRW50ZXJDYixcbiAgICAgIG9uRHJhZ092ZXJDYixcbiAgICAgIG9uRHJhZ0xlYXZlQ2IsXG4gICAgICBvbkRyb3BDYixcbiAgICAgIG5vS2V5Ym9hcmQsXG4gICAgICBub0RyYWcsXG4gICAgICBkaXNhYmxlZFxuICAgIF1cbiAgKVxuXG4gIGNvbnN0IG9uSW5wdXRFbGVtZW50Q2xpY2sgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSwgW10pXG5cbiAgY29uc3QgZ2V0SW5wdXRQcm9wcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHsgcmVmS2V5ID0gJ3JlZicsIG9uQ2hhbmdlLCBvbkNsaWNrLCAuLi5yZXN0IH0gPSB7fSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgYWNjZXB0LFxuICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgb25DaGFuZ2U6IGNvbXBvc2VIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2hhbmdlLCBvbkRyb3BDYikpLFxuICAgICAgICBvbkNsaWNrOiBjb21wb3NlSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkNsaWNrLCBvbklucHV0RWxlbWVudENsaWNrKSksXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgW3JlZktleV06IGlucHV0UmVmXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlucHV0UHJvcHMsXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpbnB1dFJlZiwgYWNjZXB0LCBtdWx0aXBsZSwgb25Ecm9wQ2IsIGRpc2FibGVkXVxuICApXG5cbiAgY29uc3QgZmlsZUNvdW50ID0gZHJhZ2dlZEZpbGVzLmxlbmd0aFxuICBjb25zdCBpc0RyYWdBY2NlcHQgPSBmaWxlQ291bnQgPiAwICYmIGFsbEZpbGVzQWNjZXB0ZWQoeyBmaWxlczogZHJhZ2dlZEZpbGVzLCBhY2NlcHQsIG1pblNpemUsIG1heFNpemUsIG11bHRpcGxlLCBtYXhGaWxlcyB9KVxuICBjb25zdCBpc0RyYWdSZWplY3QgPSBmaWxlQ291bnQgPiAwICYmICFpc0RyYWdBY2NlcHRcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzRHJhZ0FjY2VwdCxcbiAgICBpc0RyYWdSZWplY3QsXG4gICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQgJiYgIWRpc2FibGVkLFxuICAgIGdldFJvb3RQcm9wcyxcbiAgICBnZXRJbnB1dFByb3BzLFxuICAgIHJvb3RSZWYsXG4gICAgaW5wdXRSZWYsXG4gICAgb3BlbjogY29tcG9zZUhhbmRsZXIob3BlbkZpbGVEaWFsb2cpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdmb2N1cyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGb2N1c2VkOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSAnYmx1cic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ29wZW5EaWFsb2cnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRmlsZURpYWxvZ0FjdGl2ZTogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgJ2Nsb3NlRGlhbG9nJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnc2V0RHJhZ2dlZEZpbGVzJzpcbiAgICAgIC8qIGVzbGludCBuby1jYXNlLWRlY2xhcmF0aW9uczogMCAqL1xuICAgICAgY29uc3QgeyBpc0RyYWdBY3RpdmUsIGRyYWdnZWRGaWxlcyB9ID0gYWN0aW9uXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZHJhZ2dlZEZpbGVzLFxuICAgICAgICBpc0RyYWdBY3RpdmVcbiAgICAgIH1cbiAgICBjYXNlICdzZXRGaWxlcyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogYWN0aW9uLmFjY2VwdGVkRmlsZXMsXG4gICAgICAgIGZpbGVSZWplY3Rpb25zOiBhY3Rpb24uZmlsZVJlamVjdGlvbnNcbiAgICAgIH1cbiAgICBjYXNlICdyZXNldCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dlZEZpbGVzOiBbXSxcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogW10sXG4gICAgICAgIGZpbGVSZWplY3Rpb25zOiBbXSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGSUxFX0lOVkFMSURfVFlQRSIsIkZJTEVfVE9PX0xBUkdFIiwiRklMRV9UT09fU01BTEwiLCJUT09fTUFOWV9GSUxFUyIsImdldEludmFsaWRUeXBlUmVqZWN0aW9uRXJyIiwiYWNjZXB0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWVzc2FnZVN1ZmZpeCIsImpvaW4iLCJjb2RlIiwibWVzc2FnZSIsImdldFRvb0xhcmdlUmVqZWN0aW9uRXJyIiwibWF4U2l6ZSIsImdldFRvb1NtYWxsUmVqZWN0aW9uRXJyIiwibWluU2l6ZSIsIlRPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTiIsImZpbGVBY2NlcHRlZCIsImZpbGUiLCJpc0FjY2VwdGFibGUiLCJ0eXBlIiwiYWNjZXB0cyIsImZpbGVNYXRjaFNpemUiLCJpc0RlZmluZWQiLCJzaXplIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJhbGxGaWxlc0FjY2VwdGVkIiwiZmlsZXMiLCJtdWx0aXBsZSIsIm1heEZpbGVzIiwiZXZlcnkiLCJhY2NlcHRlZCIsInNpemVNYXRjaCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiZXZlbnQiLCJjYW5jZWxCdWJibGUiLCJpc0V2dFdpdGhGaWxlcyIsImRhdGFUcmFuc2ZlciIsInRhcmdldCIsInByb3RvdHlwZSIsInNvbWUiLCJjYWxsIiwidHlwZXMiLCJvbkRvY3VtZW50RHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlzSWUiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNFZGdlIiwiaXNJZU9yRWRnZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsImNvbXBvc2VFdmVudEhhbmRsZXJzIiwiZm5zIiwiYXJncyIsImZuIiwiRHJvcHpvbmUiLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hpbGRyZW4iLCJwYXJhbXMiLCJ1c2VEcm9wem9uZSIsIm9wZW4iLCJwcm9wcyIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJSZWFjdCIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsImdldEZpbGVzRnJvbUV2ZW50IiwiZnJvbUV2ZW50IiwiSW5maW5pdHkiLCJwcmV2ZW50RHJvcE9uRG9jdW1lbnQiLCJub0NsaWNrIiwibm9LZXlib2FyZCIsIm5vRHJhZyIsIm5vRHJhZ0V2ZW50c0J1YmJsaW5nIiwidmFsaWRhdG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwib25GaWxlRGlhbG9nQ2FuY2VsIiwib25EcmFnRW50ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJvbkRyb3BBY2NlcHRlZCIsIm9uRHJvcFJlamVjdGVkIiwiaW5pdGlhbFN0YXRlIiwiaXNGb2N1c2VkIiwiaXNGaWxlRGlhbG9nQWN0aXZlIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnQWNjZXB0IiwiaXNEcmFnUmVqZWN0IiwiZHJhZ2dlZEZpbGVzIiwiYWNjZXB0ZWRGaWxlcyIsImZpbGVSZWplY3Rpb25zIiwib3B0aW9ucyIsInJvb3RSZWYiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9wZW5GaWxlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbldpbmRvd0ZvY3VzIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25LZXlEb3duQ2IiLCJpc0VxdWFsTm9kZSIsImtleUNvZGUiLCJvbkZvY3VzQ2IiLCJvbkJsdXJDYiIsIm9uQ2xpY2tDYiIsImRyYWdUYXJnZXRzUmVmIiwib25Eb2N1bWVudERyb3AiLCJjb250YWlucyIsImRvY3VtZW50Iiwib25EcmFnRW50ZXJDYiIsInBlcnNpc3QiLCJzdG9wUHJvcGFnYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJvbkRyYWdPdmVyQ2IiLCJkcm9wRWZmZWN0Iiwib25EcmFnTGVhdmVDYiIsInRhcmdldHMiLCJmaWx0ZXIiLCJ0YXJnZXRJZHgiLCJzcGxpY2UiLCJvbkRyb3BDYiIsImZvckVhY2giLCJhY2NlcHRFcnJvciIsInNpemVFcnJvciIsImN1c3RvbUVycm9ycyIsInB1c2giLCJlcnJvcnMiLCJjb25jYXQiLCJlIiwiY29tcG9zZUhhbmRsZXIiLCJjb21wb3NlS2V5Ym9hcmRIYW5kbGVyIiwiY29tcG9zZURyYWdIYW5kbGVyIiwiZ2V0Um9vdFByb3BzIiwidXNlTWVtbyIsInJlZktleSIsIm9uS2V5RG93biIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNsaWNrIiwicmVzdCIsInRhYkluZGV4Iiwib25JbnB1dEVsZW1lbnRDbGljayIsImdldElucHV0UHJvcHMiLCJvbkNoYW5nZSIsImlucHV0UHJvcHMiLCJzdHlsZSIsImRpc3BsYXkiLCJhdXRvQ29tcGxldGUiLCJmaWxlQ291bnQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0VBQ0E7QUFDQTtFQUNBO0VBQ0E7QUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFxREE7RUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7RUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7RUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0VBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQzlFLEtBQUssQ0FBQyxDQUFDO0VBQ1AsQ0FBQztBQUNEO0VBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtFQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0VBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0VBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtFQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtFQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0VBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0VBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0VBQ2pFLGdCQUFnQjtFQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtFQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtFQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0VBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7RUFDdkYsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7RUFDMUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0VBQzNDLGFBQWE7RUFDYixZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN2QyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDbEUsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0VBQ3pGLEtBQUs7RUFDTCxDQUFDO0FBeUJEO0VBQ08sU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUM3QixJQUFJLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQy9ELElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztFQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ3JDLElBQUksSUFBSTtFQUNSLFFBQVEsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ25GLEtBQUs7RUFDTCxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7RUFDM0MsWUFBWTtFQUNaLFFBQVEsSUFBSTtFQUNaLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdELFNBQVM7RUFDVCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtFQUN6QyxLQUFLO0VBQ0wsSUFBSSxPQUFPLEVBQUUsQ0FBQztFQUNkLENBQUM7QUFDRDtFQUNPLFNBQVMsUUFBUSxHQUFHO0VBQzNCLElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7RUFDdEQsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM3QyxJQUFJLE9BQU8sRUFBRSxDQUFDO0VBQ2Q7O0VDdEpPLElBQUksaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUM7RUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7RUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7RUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7RUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7RUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7RUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQztFQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDO0VBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO0VBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7RUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7RUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQztFQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDO0VBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUUseUVBQXlFLENBQUM7RUFDdkYsQ0FBQyxDQUFDLENBQUM7RUFDSSxTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0VBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9CLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0VBQ3BDLFFBQVEsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7RUFDekQsUUFBUSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUU7RUFDekMsWUFBWSxLQUFLLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUTtFQUMzQyxrQkFBa0IsSUFBSTtFQUN0QjtFQUNBO0VBQ0E7RUFDQSxrQkFBa0IsT0FBTyxrQkFBa0IsS0FBSyxRQUFRLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUM7RUFDekYsc0JBQXNCLGtCQUFrQjtFQUN4QyxzQkFBc0IsSUFBSSxDQUFDLElBQUk7RUFDL0IsWUFBWSxRQUFRLEVBQUUsS0FBSztFQUMzQixZQUFZLFlBQVksRUFBRSxLQUFLO0VBQy9CLFlBQVksVUFBVSxFQUFFLElBQUk7RUFDNUIsU0FBUyxDQUFDLENBQUM7RUFDWCxLQUFLO0VBQ0wsSUFBSSxPQUFPLENBQUMsQ0FBQztFQUNiLENBQUM7RUFDRCxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7RUFDNUIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3pCLElBQUksSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDNUQsSUFBSSxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7RUFDcEMsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUNqQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0VBQ2pDLFFBQVEsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLFFBQVEsSUFBSSxJQUFJLEVBQUU7RUFDbEIsWUFBWSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7RUFDaEQsZ0JBQWdCLEtBQUssRUFBRSxJQUFJO0VBQzNCLGdCQUFnQixRQUFRLEVBQUUsS0FBSztFQUMvQixnQkFBZ0IsWUFBWSxFQUFFLEtBQUs7RUFDbkMsZ0JBQWdCLFVBQVUsRUFBRSxJQUFJO0VBQ2hDLGFBQWEsQ0FBQyxDQUFDO0VBQ2YsU0FBUztFQUNULEtBQUs7RUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCOztFQ2xEQSxJQUFJLGVBQWUsR0FBRztFQUN0QjtFQUNBLElBQUksV0FBVztFQUNmLElBQUksV0FBVztFQUNmLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNPLFNBQVMsU0FBUyxDQUFDLEdBQUcsRUFBRTtFQUMvQixJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZO0VBQ3ZELFFBQVEsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFO0VBQy9DLFlBQVksT0FBTyxDQUFDLENBQUMsYUFBYSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVk7RUFDcEUsc0JBQXNCLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztFQUN0RSxzQkFBc0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDMUMsU0FBUyxDQUFDLENBQUM7RUFDWCxLQUFLLENBQUMsQ0FBQztFQUNQLENBQUM7RUFDRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7RUFDMUIsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0VBQ2hDLENBQUM7RUFDRCxTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUU7RUFDNUIsSUFBSSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNuQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztFQUMxQixjQUFjLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUN4QyxjQUFjLEVBQUU7RUFDaEIsVUFBVSxFQUFFLENBQUM7RUFDYixJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZFLENBQUM7RUFDRCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7RUFDeEIsSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUM7RUFDMUIsQ0FBQztFQUNELFNBQVMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRTtFQUN4QyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZO0VBQ3ZELFFBQVEsSUFBSSxLQUFLLEVBQUUsS0FBSyxDQUFDO0VBQ3pCLFFBQVEsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFO0VBQy9DLFlBQVksUUFBUSxFQUFFLENBQUMsS0FBSztFQUM1QixnQkFBZ0IsS0FBSyxDQUFDO0VBQ3RCLG9CQUFvQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQzNELG9CQUFvQixLQUFLLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFDOUMseUJBQXlCLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbEY7RUFDQTtFQUNBLG9CQUFvQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7RUFDekMsd0JBQXdCLE9BQU8sQ0FBQyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUM7RUFDckQscUJBQXFCO0VBQ3JCLG9CQUFvQixPQUFPLENBQUMsQ0FBQyxZQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakYsZ0JBQWdCLEtBQUssQ0FBQztFQUN0QixvQkFBb0IsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUN0QyxvQkFBb0IsT0FBTyxDQUFDLENBQUMsYUFBYSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMxRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsYUFBYSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFDL0UseUJBQXlCLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqRixhQUFhO0VBQ2IsU0FBUyxDQUFDLENBQUM7RUFDWCxLQUFLLENBQUMsQ0FBQztFQUNQLENBQUM7RUFDRCxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUU7RUFDL0IsSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQy9GLENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtFQUN6QixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNuQjtFQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDM0MsUUFBUSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDNUIsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pCLEtBQUs7RUFDTCxJQUFJLE9BQU8sS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFDRDtFQUNBLFNBQVMsY0FBYyxDQUFDLElBQUksRUFBRTtFQUM5QixJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO0VBQ3JELFFBQVEsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMxQyxLQUFLO0VBQ0wsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztFQUN4QztFQUNBO0VBQ0E7RUFDQSxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7RUFDcEMsUUFBUSxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNuQyxLQUFLO0VBQ0wsSUFBSSxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RDLENBQUM7RUFDRCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7RUFDeEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDaEksQ0FBQztFQUNELFNBQVMsb0JBQW9CLENBQUMsSUFBSSxFQUFFO0VBQ3BDLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0VBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtFQUNmLFFBQVEsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3ZELEtBQUs7RUFDTCxJQUFJLElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuQyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNoQyxDQUFDO0VBQ0Q7RUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7RUFDMUIsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWTtFQUN2RCxRQUFRLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRTtFQUMvQyxZQUFZLE9BQU8sQ0FBQyxDQUFDLGFBQWEsS0FBSyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDbEcsU0FBUyxDQUFDLENBQUM7RUFDWCxLQUFLLENBQUMsQ0FBQztFQUNQLENBQUM7RUFDRDtFQUNBLFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRTtFQUM3QixJQUFJLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztFQUN0QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQ2xELFFBQVEsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0VBQ3pCLFFBQVEsU0FBUyxXQUFXLEdBQUc7RUFDL0IsWUFBWSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7RUFDN0I7RUFDQTtFQUNBLFlBQVksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZO0VBQ3RHLGdCQUFnQixJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0VBQ3hDLGdCQUFnQixPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7RUFDdkQsb0JBQW9CLFFBQVEsRUFBRSxDQUFDLEtBQUs7RUFDcEMsd0JBQXdCLEtBQUssQ0FBQztFQUM5Qiw0QkFBNEIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ3hFLDRCQUE0QixFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztFQUN6Qyx3QkFBd0IsS0FBSyxDQUFDO0VBQzlCLDRCQUE0QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RCw0QkFBNEIsT0FBTyxDQUFDLENBQUMsWUFBWSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDdkUsd0JBQXdCLEtBQUssQ0FBQztFQUM5Qiw0QkFBNEIsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUM5Qyw0QkFBNEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzNDLDRCQUE0QixPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0VBQ3BELHdCQUF3QixLQUFLLENBQUM7RUFDOUIsNEJBQTRCLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDOUMsNEJBQTRCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUMxQyw0QkFBNEIsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUNwRCx3QkFBd0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUN4RCx3QkFBd0IsS0FBSyxDQUFDO0VBQzlCLDRCQUE0QixLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7RUFDdEUsNEJBQTRCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDaEQ7RUFDQSw0QkFBNEIsV0FBVyxFQUFFLENBQUM7RUFDMUMsNEJBQTRCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQ3pDLHdCQUF3QixLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUM7RUFDdEQscUJBQXFCO0VBQ3JCLGlCQUFpQixDQUFDLENBQUM7RUFDbkIsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFO0VBQ2xDLGdCQUFnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDNUIsYUFBYSxDQUFDLENBQUM7RUFDZixTQUFTO0VBQ1QsUUFBUSxXQUFXLEVBQUUsQ0FBQztFQUN0QixLQUFLLENBQUMsQ0FBQztFQUNQLENBQUM7RUFDRDtFQUNBLFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRTtFQUM5QixJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZO0VBQ3ZELFFBQVEsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFO0VBQy9DLFlBQVksT0FBTyxDQUFDLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDekUsb0JBQW9CLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7RUFDL0Msd0JBQXdCLElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ3ZFLHdCQUF3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDckMscUJBQXFCLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDdEMsd0JBQXdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNwQyxxQkFBcUIsQ0FBQyxDQUFDO0VBQ3ZCLGlCQUFpQixDQUFDLENBQUMsQ0FBQztFQUNwQixTQUFTLENBQUMsQ0FBQztFQUNYLEtBQUssQ0FBQyxDQUFDO0VBQ1A7Ozs7Ozs7Ozs7O0FDdEtBO0VBQ0Esa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQzFCO0VBQ0EsZUFBZSxHQUFHLFVBQVUsSUFBSSxFQUFFLGFBQWEsRUFBRTtFQUNqRCxFQUFFLElBQUksSUFBSSxJQUFJLGFBQWEsRUFBRTtFQUM3QixJQUFJLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNyRyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0VBQ25DLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7RUFDbkMsSUFBSSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztFQUNyRCxJQUFJLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO0VBQ25ELE1BQU0sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xDO0VBQ0EsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0VBQ3ZDLFFBQVEsT0FBTyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0VBQ3hFLE9BQU8sTUFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDM0M7RUFDQSxRQUFRLE9BQU8sWUFBWSxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQy9ELE9BQU87QUFDUDtFQUNBLE1BQU0sT0FBTyxRQUFRLEtBQUssU0FBUyxDQUFDO0VBQ3BDLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRztBQUNIO0VBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztFQUNkLENBQUM7Ozs7O0VDdEJNLElBQU1BLGlCQUFpQixHQUFHLG1CQUExQjtFQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7RUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0VBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2Qjs7RUFHQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUFDLE1BQU0sRUFBSTtFQUNsREEsRUFBQUEsTUFBTSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsTUFBZCxLQUF5QkEsTUFBTSxDQUFDRyxNQUFQLEtBQWtCLENBQTNDLEdBQStDSCxNQUFNLENBQUMsQ0FBRCxDQUFyRCxHQUEyREEsTUFBcEU7RUFDQSxNQUFNSSxhQUFhLEdBQUdILEtBQUssQ0FBQ0MsT0FBTixDQUFjRixNQUFkLHFCQUFrQ0EsTUFBTSxDQUFDSyxJQUFQLENBQVksSUFBWixDQUFsQyxJQUF3REwsTUFBOUU7RUFDQSxTQUFPO0VBQ0xNLElBQUFBLElBQUksRUFBRVgsaUJBREQ7RUFFTFksSUFBQUEsT0FBTyw4QkFBdUJILGFBQXZCO0VBRkYsR0FBUDtFQUlELENBUE07RUFTQSxJQUFNSSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLE9BQU8sRUFBSTtFQUNoRCxTQUFPO0VBQ0xILElBQUFBLElBQUksRUFBRVYsY0FERDtFQUVMVyxJQUFBQSxPQUFPLGdDQUF5QkUsT0FBekI7RUFGRixHQUFQO0VBSUQsQ0FMTTtFQU9BLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUMsT0FBTyxFQUFJO0VBQ2hELFNBQU87RUFDTEwsSUFBQUEsSUFBSSxFQUFFVCxjQUREO0VBRUxVLElBQUFBLE9BQU8saUNBQTBCSSxPQUExQjtFQUZGLEdBQVA7RUFJRCxDQUxNO0VBT0EsSUFBTUMsd0JBQXdCLEdBQUc7RUFDdENOLEVBQUFBLElBQUksRUFBRVIsY0FEZ0M7RUFFdENTLEVBQUFBLE9BQU8sRUFBRTtFQUY2QixDQUFqQztFQU1QOztFQUNPLFNBQVNNLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCZCxNQUE1QixFQUFvQztFQUN6QyxNQUFNZSxZQUFZLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxLQUFjLHdCQUFkLElBQTBDQyxPQUFPLENBQUNILElBQUQsRUFBT2QsTUFBUCxDQUF0RTtFQUNBLFNBQU8sQ0FBQ2UsWUFBRCxFQUFlQSxZQUFZLEdBQUcsSUFBSCxHQUFVaEIsMEJBQTBCLENBQUNDLE1BQUQsQ0FBL0QsQ0FBUDtFQUNEO0VBRU0sU0FBU2tCLGFBQVQsQ0FBdUJKLElBQXZCLEVBQTZCSCxPQUE3QixFQUFzQ0YsT0FBdEMsRUFBK0M7RUFDcEQsTUFBSVUsU0FBUyxDQUFDTCxJQUFJLENBQUNNLElBQU4sQ0FBYixFQUEwQjtFQUN4QixRQUFJRCxTQUFTLENBQUNSLE9BQUQsQ0FBVCxJQUFzQlEsU0FBUyxDQUFDVixPQUFELENBQW5DLEVBQThDO0VBQzVDLFVBQUlLLElBQUksQ0FBQ00sSUFBTCxHQUFZWCxPQUFoQixFQUF5QixPQUFPLENBQUMsS0FBRCxFQUFRRCx1QkFBdUIsQ0FBQ0MsT0FBRCxDQUEvQixDQUFQO0VBQ3pCLFVBQUlLLElBQUksQ0FBQ00sSUFBTCxHQUFZVCxPQUFoQixFQUF5QixPQUFPLENBQUMsS0FBRCxFQUFRRCx1QkFBdUIsQ0FBQ0MsT0FBRCxDQUEvQixDQUFQO0VBQzFCLEtBSEQsTUFHTyxJQUFJUSxTQUFTLENBQUNSLE9BQUQsQ0FBVCxJQUFzQkcsSUFBSSxDQUFDTSxJQUFMLEdBQVlULE9BQXRDLEVBQ0wsT0FBTyxDQUFDLEtBQUQsRUFBUUQsdUJBQXVCLENBQUNDLE9BQUQsQ0FBL0IsQ0FBUCxDQURLLEtBRUYsSUFBSVEsU0FBUyxDQUFDVixPQUFELENBQVQsSUFBc0JLLElBQUksQ0FBQ00sSUFBTCxHQUFZWCxPQUF0QyxFQUNILE9BQU8sQ0FBQyxLQUFELEVBQVFELHVCQUF1QixDQUFDQyxPQUFELENBQS9CLENBQVA7RUFDSDs7RUFDRCxTQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBUDtFQUNEOztFQUVELFNBQVNVLFNBQVQsQ0FBbUJFLEtBQW5CLEVBQTBCO0VBQ3hCLFNBQU9BLEtBQUssS0FBS0MsU0FBVixJQUF1QkQsS0FBSyxLQUFLLElBQXhDO0VBQ0Q7O0VBRU0sU0FBU0UsZ0JBQVQsT0FBbUY7RUFBQSxNQUF2REMsS0FBdUQsUUFBdkRBLEtBQXVEO0VBQUEsTUFBaER4QixNQUFnRCxRQUFoREEsTUFBZ0Q7RUFBQSxNQUF4Q1csT0FBd0MsUUFBeENBLE9BQXdDO0VBQUEsTUFBL0JGLE9BQStCLFFBQS9CQSxPQUErQjtFQUFBLE1BQXRCZ0IsUUFBc0IsUUFBdEJBLFFBQXNCO0VBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztFQUN4RixNQUFLLENBQUNELFFBQUQsSUFBYUQsS0FBSyxDQUFDckIsTUFBTixHQUFlLENBQTdCLElBQW9Dc0IsUUFBUSxJQUFJQyxRQUFRLElBQUksQ0FBeEIsSUFBOEJGLEtBQUssQ0FBQ3JCLE1BQU4sR0FBZXVCLFFBQXJGLEVBQWlHO0VBQy9GLFdBQU8sS0FBUDtFQUNEOztFQUVELFNBQU9GLEtBQUssQ0FBQ0csS0FBTixDQUFZLFVBQUFiLElBQUksRUFBSTtFQUFBLHdCQUNORCxZQUFZLENBQUNDLElBQUQsRUFBT2QsTUFBUCxDQUROO0VBQUE7RUFBQSxRQUNsQjRCLFFBRGtCOztFQUFBLHlCQUVMVixhQUFhLENBQUNKLElBQUQsRUFBT0gsT0FBUCxFQUFnQkYsT0FBaEIsQ0FGUjtFQUFBO0VBQUEsUUFFbEJvQixTQUZrQjs7RUFHekIsV0FBT0QsUUFBUSxJQUFJQyxTQUFuQjtFQUNELEdBSk0sQ0FBUDtFQUtEO0VBR0Q7RUFDQTs7RUFDTyxTQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7RUFDMUMsTUFBSSxPQUFPQSxLQUFLLENBQUNELG9CQUFiLEtBQXNDLFVBQTFDLEVBQXNEO0VBQ3BELFdBQU9DLEtBQUssQ0FBQ0Qsb0JBQU4sRUFBUDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLEtBQUssQ0FBQ0MsWUFBYixLQUE4QixXQUFsQyxFQUErQztFQUNwRCxXQUFPRCxLQUFLLENBQUNDLFlBQWI7RUFDRDs7RUFDRCxTQUFPLEtBQVA7RUFDRDtFQUVNLFNBQVNDLGNBQVQsQ0FBd0JGLEtBQXhCLEVBQStCO0VBQ3BDLE1BQUksQ0FBQ0EsS0FBSyxDQUFDRyxZQUFYLEVBQXlCO0VBQ3ZCLFdBQU8sQ0FBQyxDQUFDSCxLQUFLLENBQUNJLE1BQVIsSUFBa0IsQ0FBQyxDQUFDSixLQUFLLENBQUNJLE1BQU4sQ0FBYVgsS0FBeEM7RUFDRCxHQUhtQztFQUtwQzs7O0VBQ0EsU0FBT3ZCLEtBQUssQ0FBQ21DLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCQyxJQUFyQixDQUNMUCxLQUFLLENBQUNHLFlBQU4sQ0FBbUJLLEtBRGQsRUFFTCxVQUFBdkIsSUFBSTtFQUFBLFdBQUlBLElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJLEtBQUssd0JBQWpDO0VBQUEsR0FGQyxDQUFQO0VBSUQ7O0VBT00sU0FBU3dCLGtCQUFULENBQTRCVCxLQUE1QixFQUFtQztFQUN4Q0EsRUFBQUEsS0FBSyxDQUFDVSxjQUFOO0VBQ0Q7O0VBRUQsU0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0VBQ3ZCLFNBQU9BLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixNQUFsQixNQUE4QixDQUFDLENBQS9CLElBQW9DRCxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsVUFBbEIsTUFBa0MsQ0FBQyxDQUE5RTtFQUNEOztFQUVELFNBQVNDLE1BQVQsQ0FBZ0JGLFNBQWhCLEVBQTJCO0VBQ3pCLFNBQU9BLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixPQUFsQixNQUErQixDQUFDLENBQXZDO0VBQ0Q7O0VBRU0sU0FBU0UsVUFBVCxHQUE0RDtFQUFBLE1BQXhDSCxTQUF3Qyx1RUFBNUJJLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkwsU0FBVztFQUNqRSxTQUFPRCxJQUFJLENBQUNDLFNBQUQsQ0FBSixJQUFtQkUsTUFBTSxDQUFDRixTQUFELENBQWhDO0VBQ0Q7RUFFRDs7Ozs7Ozs7Ozs7RUFVTyxTQUFTTSxvQkFBVCxHQUFzQztFQUFBLG9DQUFMQyxHQUFLO0VBQUxBLElBQUFBLEdBQUs7RUFBQTs7RUFDM0MsU0FBTyxVQUFDbkIsS0FBRDtFQUFBLHVDQUFXb0IsSUFBWDtFQUFXQSxNQUFBQSxJQUFYO0VBQUE7O0VBQUEsV0FDTEQsR0FBRyxDQUFDYixJQUFKLENBQVMsVUFBQWUsRUFBRSxFQUFJO0VBQ2IsVUFBSSxDQUFDdEIsb0JBQW9CLENBQUNDLEtBQUQsQ0FBckIsSUFBZ0NxQixFQUFwQyxFQUF3QztFQUN0Q0EsUUFBQUEsRUFBRSxNQUFGLFVBQUdyQixLQUFILFNBQWFvQixJQUFiO0VBQ0Q7O0VBQ0QsYUFBT3JCLG9CQUFvQixDQUFDQyxLQUFELENBQTNCO0VBQ0QsS0FMRCxDQURLO0VBQUEsR0FBUDtFQU9EOztFQy9HRDs7Ozs7Ozs7Ozs7Ozs7O01BY01zQixRQUFRLGdCQUFHQyxnQkFBVSxDQUFDLGdCQUEwQkMsR0FBMUIsRUFBa0M7RUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0VBQUEsTUFBbEJDLE1BQWtCOztFQUFBLHFCQUNqQ0MsV0FBVyxDQUFDRCxNQUFELENBRHNCO0VBQUEsTUFDcERFLElBRG9ELGdCQUNwREEsSUFEb0Q7RUFBQSxNQUMzQ0MsS0FEMkM7O0VBRzVEQyxFQUFBQSx5QkFBbUIsQ0FBQ04sR0FBRCxFQUFNO0VBQUEsV0FBTztFQUFFSSxNQUFBQSxJQUFJLEVBQUpBO0VBQUYsS0FBUDtFQUFBLEdBQU4sRUFBd0IsQ0FBQ0EsSUFBRCxDQUF4QixDQUFuQixDQUg0RDs7RUFNNUQsc0JBQU9HLHdDQUFDQyxjQUFELFFBQVdQLFFBQVEsbUNBQU1JLEtBQU47RUFBYUQsSUFBQUEsSUFBSSxFQUFKQTtFQUFiLEtBQW5CLENBQVA7RUFDRCxDQVAwQjtFQVMzQk4sUUFBUSxDQUFDVyxXQUFULEdBQXVCLFVBQXZCOztFQUdBLElBQU1DLFlBQVksR0FBRztFQUNuQkMsRUFBQUEsUUFBUSxFQUFFLEtBRFM7RUFFbkJDLEVBQUFBLGlCQUFpQixFQUFFQyxTQUZBO0VBR25CM0QsRUFBQUEsT0FBTyxFQUFFNEQsUUFIVTtFQUluQjFELEVBQUFBLE9BQU8sRUFBRSxDQUpVO0VBS25CYyxFQUFBQSxRQUFRLEVBQUUsSUFMUztFQU1uQkMsRUFBQUEsUUFBUSxFQUFFLENBTlM7RUFPbkI0QyxFQUFBQSxxQkFBcUIsRUFBRSxJQVBKO0VBUW5CQyxFQUFBQSxPQUFPLEVBQUUsS0FSVTtFQVNuQkMsRUFBQUEsVUFBVSxFQUFFLEtBVE87RUFVbkJDLEVBQUFBLE1BQU0sRUFBRSxLQVZXO0VBV25CQyxFQUFBQSxvQkFBb0IsRUFBRSxLQVhIO0VBWW5CQyxFQUFBQSxTQUFTLEVBQUU7RUFaUSxDQUFyQjtFQWVBdEIsUUFBUSxDQUFDWSxZQUFULEdBQXdCQSxZQUF4QjtFQUVBWixRQUFRLENBQUN1QixTQUFULEdBQXFCO0VBQ25COzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JBcEIsRUFBQUEsUUFBUSxFQUFFcUIsNkJBQVMsQ0FBQ0MsSUFqQkQ7O0VBbUJuQjs7Ozs7Ozs7RUFRQTlFLEVBQUFBLE1BQU0sRUFBRTZFLDZCQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsNkJBQVMsQ0FBQ0csTUFBWCxFQUFtQkgsNkJBQVMsQ0FBQ0ksT0FBVixDQUFrQkosNkJBQVMsQ0FBQ0csTUFBNUIsQ0FBbkIsQ0FBcEIsQ0EzQlc7O0VBNkJuQjs7O0VBR0F2RCxFQUFBQSxRQUFRLEVBQUVvRCw2QkFBUyxDQUFDSyxJQWhDRDs7RUFrQ25COzs7RUFHQVosRUFBQUEscUJBQXFCLEVBQUVPLDZCQUFTLENBQUNLLElBckNkOztFQXVDbkI7OztFQUdBWCxFQUFBQSxPQUFPLEVBQUVNLDZCQUFTLENBQUNLLElBMUNBOztFQTRDbkI7Ozs7RUFJQVYsRUFBQUEsVUFBVSxFQUFFSyw2QkFBUyxDQUFDSyxJQWhESDs7RUFrRG5COzs7RUFHQVQsRUFBQUEsTUFBTSxFQUFFSSw2QkFBUyxDQUFDSyxJQXJEQzs7RUF1RG5COzs7RUFHQVIsRUFBQUEsb0JBQW9CLEVBQUVHLDZCQUFTLENBQUNLLElBMURiOztFQTREbkI7OztFQUdBdkUsRUFBQUEsT0FBTyxFQUFFa0UsNkJBQVMsQ0FBQ00sTUEvREE7O0VBaUVuQjs7O0VBR0ExRSxFQUFBQSxPQUFPLEVBQUVvRSw2QkFBUyxDQUFDTSxNQXBFQTs7RUFxRW5COzs7O0VBSUF6RCxFQUFBQSxRQUFRLEVBQUVtRCw2QkFBUyxDQUFDTSxNQXpFRDs7RUEyRW5COzs7RUFHQWpCLEVBQUFBLFFBQVEsRUFBRVcsNkJBQVMsQ0FBQ0ssSUE5RUQ7O0VBZ0ZuQjs7Ozs7RUFLQWYsRUFBQUEsaUJBQWlCLEVBQUVVLDZCQUFTLENBQUNDLElBckZWOztFQXVGbkI7OztFQUdBTSxFQUFBQSxrQkFBa0IsRUFBRVAsNkJBQVMsQ0FBQ0MsSUExRlg7O0VBNEZuQjs7Ozs7RUFLQU8sRUFBQUEsV0FBVyxFQUFFUiw2QkFBUyxDQUFDQyxJQWpHSjs7RUFtR25COzs7OztFQUtBUSxFQUFBQSxXQUFXLEVBQUVULDZCQUFTLENBQUNDLElBeEdKOztFQTBHbkI7Ozs7O0VBS0FTLEVBQUFBLFVBQVUsRUFBRVYsNkJBQVMsQ0FBQ0MsSUEvR0g7O0VBaUhuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJBVSxFQUFBQSxNQUFNLEVBQUVYLDZCQUFTLENBQUNDLElBL0lDOztFQWlKbkI7Ozs7Ozs7RUFPQVcsRUFBQUEsY0FBYyxFQUFFWiw2QkFBUyxDQUFDQyxJQXhKUDs7RUEwSm5COzs7Ozs7O0VBT0FZLEVBQUFBLGNBQWMsRUFBRWIsNkJBQVMsQ0FBQ0MsSUFqS1A7O0VBbUtuQjs7Ozs7RUFLQUgsRUFBQUEsU0FBUyxFQUFFRSw2QkFBUyxDQUFDQztFQXhLRixDQUFyQjtFQTZLQTs7Ozs7Ozs7O0VBU0E7Ozs7Ozs7Ozs7RUFVQTs7Ozs7Ozs7OztFQVVBOzs7Ozs7Ozs7RUFTQTs7Ozs7Ozs7O0VBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUJBLElBQU1hLFlBQVksR0FBRztFQUNuQkMsRUFBQUEsU0FBUyxFQUFFLEtBRFE7RUFFbkJDLEVBQUFBLGtCQUFrQixFQUFFLEtBRkQ7RUFHbkJDLEVBQUFBLFlBQVksRUFBRSxLQUhLO0VBSW5CQyxFQUFBQSxZQUFZLEVBQUUsS0FKSztFQUtuQkMsRUFBQUEsWUFBWSxFQUFFLEtBTEs7RUFNbkJDLEVBQUFBLFlBQVksRUFBRSxFQU5LO0VBT25CQyxFQUFBQSxhQUFhLEVBQUUsRUFQSTtFQVFuQkMsRUFBQUEsY0FBYyxFQUFFO0VBUkcsQ0FBckI7RUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdFTyxTQUFTekMsV0FBVCxHQUFtQztFQUFBLE1BQWQwQyxPQUFjLHVFQUFKLEVBQUk7O0VBQUEsZ0VBdUJuQ25DLFlBdkJtQyxHQXdCbkNtQyxPQXhCbUM7RUFBQSxNQUV0Q3BHLE1BRnNDLHlCQUV0Q0EsTUFGc0M7RUFBQSxNQUd0Q2tFLFFBSHNDLHlCQUd0Q0EsUUFIc0M7RUFBQSxNQUl0Q0MsaUJBSnNDLHlCQUl0Q0EsaUJBSnNDO0VBQUEsTUFLdEMxRCxPQUxzQyx5QkFLdENBLE9BTHNDO0VBQUEsTUFNdENFLE9BTnNDLHlCQU10Q0EsT0FOc0M7RUFBQSxNQU90Q2MsUUFQc0MseUJBT3RDQSxRQVBzQztFQUFBLE1BUXRDQyxRQVJzQyx5QkFRdENBLFFBUnNDO0VBQUEsTUFTdEMyRCxXQVRzQyx5QkFTdENBLFdBVHNDO0VBQUEsTUFVdENDLFdBVnNDLHlCQVV0Q0EsV0FWc0M7RUFBQSxNQVd0Q0MsVUFYc0MseUJBV3RDQSxVQVhzQztFQUFBLE1BWXRDQyxNQVpzQyx5QkFZdENBLE1BWnNDO0VBQUEsTUFhdENDLGNBYnNDLHlCQWF0Q0EsY0Fic0M7RUFBQSxNQWN0Q0MsY0Fkc0MseUJBY3RDQSxjQWRzQztFQUFBLE1BZXRDTixrQkFmc0MseUJBZXRDQSxrQkFmc0M7RUFBQSxNQWdCdENkLHFCQWhCc0MseUJBZ0J0Q0EscUJBaEJzQztFQUFBLE1BaUJ0Q0MsT0FqQnNDLHlCQWlCdENBLE9BakJzQztFQUFBLE1Ba0J0Q0MsVUFsQnNDLHlCQWtCdENBLFVBbEJzQztFQUFBLE1BbUJ0Q0MsTUFuQnNDLHlCQW1CdENBLE1BbkJzQztFQUFBLE1Bb0J0Q0Msb0JBcEJzQyx5QkFvQnRDQSxvQkFwQnNDO0VBQUEsTUFxQnRDQyxTQXJCc0MseUJBcUJ0Q0EsU0FyQnNDOztFQTJCeEMsTUFBTTBCLE9BQU8sR0FBR0MsWUFBTSxDQUFDLElBQUQsQ0FBdEI7RUFDQSxNQUFNQyxRQUFRLEdBQUdELFlBQU0sQ0FBQyxJQUFELENBQXZCOztFQTVCd0Msb0JBOEJkRSxnQkFBVSxDQUFDQyxPQUFELEVBQVVkLFlBQVYsQ0E5Qkk7RUFBQTtFQUFBLE1BOEJqQ2UsS0E5QmlDO0VBQUEsTUE4QjFCQyxRQTlCMEI7O0VBQUEsTUErQmhDZixTQS9CZ0MsR0ErQmdCYyxLQS9CaEIsQ0ErQmhDZCxTQS9CZ0M7RUFBQSxNQStCckJDLGtCQS9CcUIsR0ErQmdCYSxLQS9CaEIsQ0ErQnJCYixrQkEvQnFCO0VBQUEsTUErQkRJLFlBL0JDLEdBK0JnQlMsS0EvQmhCLENBK0JEVCxZQS9CQzs7RUFrQ3hDLE1BQU1XLGNBQWMsR0FBR0MsaUJBQVcsQ0FBQyxZQUFNO0VBQ3ZDLFFBQUlOLFFBQVEsQ0FBQ08sT0FBYixFQUFzQjtFQUNwQkgsTUFBQUEsUUFBUSxDQUFDO0VBQUUzRixRQUFBQSxJQUFJLEVBQUU7RUFBUixPQUFELENBQVI7RUFDQXVGLE1BQUFBLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQnpGLEtBQWpCLEdBQXlCLElBQXpCO0VBQ0FrRixNQUFBQSxRQUFRLENBQUNPLE9BQVQsQ0FBaUJDLEtBQWpCO0VBQ0Q7RUFDRixHQU5pQyxFQU0vQixDQUFDSixRQUFELENBTitCLENBQWxDLENBbEN3Qzs7RUEyQ3hDLE1BQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtFQUMxQjtFQUNBLFFBQUluQixrQkFBSixFQUF3QjtFQUN0Qm9CLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0VBQ2YsWUFBSVYsUUFBUSxDQUFDTyxPQUFiLEVBQXNCO0VBQUEsY0FDWnRGLEtBRFksR0FDRitFLFFBQVEsQ0FBQ08sT0FEUCxDQUNadEYsS0FEWTs7RUFHcEIsY0FBSSxDQUFDQSxLQUFLLENBQUNyQixNQUFYLEVBQW1CO0VBQ2pCd0csWUFBQUEsUUFBUSxDQUFDO0VBQUUzRixjQUFBQSxJQUFJLEVBQUU7RUFBUixhQUFELENBQVI7O0VBRUEsZ0JBQUksT0FBT29FLGtCQUFQLEtBQThCLFVBQWxDLEVBQThDO0VBQzVDQSxjQUFBQSxrQkFBa0I7RUFDbkI7RUFDRjtFQUNGO0VBQ0YsT0FaUyxFQVlQLEdBWk8sQ0FBVjtFQWFEO0VBQ0YsR0FqQkQ7O0VBa0JBOEIsRUFBQUEsZUFBUyxDQUFDLFlBQU07RUFDZG5FLElBQUFBLE1BQU0sQ0FBQ29FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDSCxhQUFqQyxFQUFnRCxLQUFoRDtFQUNBLFdBQU8sWUFBTTtFQUNYakUsTUFBQUEsTUFBTSxDQUFDcUUsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NKLGFBQXBDLEVBQW1ELEtBQW5EO0VBQ0QsS0FGRDtFQUdELEdBTFEsRUFLTixDQUFDVCxRQUFELEVBQVdWLGtCQUFYLEVBQStCVCxrQkFBL0IsQ0FMTSxDQUFULENBN0R3Qzs7RUFxRXhDLE1BQU1pQyxXQUFXLEdBQUdSLGlCQUFXLENBQzdCLFVBQUE5RSxLQUFLLEVBQUk7RUFDUDtFQUNBLFFBQUksQ0FBQ3NFLE9BQU8sQ0FBQ1MsT0FBVCxJQUFvQixDQUFDVCxPQUFPLENBQUNTLE9BQVIsQ0FBZ0JRLFdBQWhCLENBQTRCdkYsS0FBSyxDQUFDSSxNQUFsQyxDQUF6QixFQUFvRTtFQUNsRTtFQUNEOztFQUVELFFBQUlKLEtBQUssQ0FBQ3dGLE9BQU4sS0FBa0IsRUFBbEIsSUFBd0J4RixLQUFLLENBQUN3RixPQUFOLEtBQWtCLEVBQTlDLEVBQWtEO0VBQ2hEeEYsTUFBQUEsS0FBSyxDQUFDVSxjQUFOO0VBQ0FtRSxNQUFBQSxjQUFjO0VBQ2Y7RUFDRixHQVg0QixFQVk3QixDQUFDUCxPQUFELEVBQVVFLFFBQVYsQ0FaNkIsQ0FBL0IsQ0FyRXdDOztFQXFGeEMsTUFBTWlCLFNBQVMsR0FBR1gsaUJBQVcsQ0FBQyxZQUFNO0VBQ2xDRixJQUFBQSxRQUFRLENBQUM7RUFBRTNGLE1BQUFBLElBQUksRUFBRTtFQUFSLEtBQUQsQ0FBUjtFQUNELEdBRjRCLEVBRTFCLEVBRjBCLENBQTdCO0VBR0EsTUFBTXlHLFFBQVEsR0FBR1osaUJBQVcsQ0FBQyxZQUFNO0VBQ2pDRixJQUFBQSxRQUFRLENBQUM7RUFBRTNGLE1BQUFBLElBQUksRUFBRTtFQUFSLEtBQUQsQ0FBUjtFQUNELEdBRjJCLEVBRXpCLEVBRnlCLENBQTVCLENBeEZ3Qzs7RUE2RnhDLE1BQU0wRyxTQUFTLEdBQUdiLGlCQUFXLENBQUMsWUFBTTtFQUNsQyxRQUFJdEMsT0FBSixFQUFhO0VBQ1g7RUFDRCxLQUhpQztFQU1sQztFQUNBOzs7RUFDQSxRQUFJekIsVUFBVSxFQUFkLEVBQWtCO0VBQ2hCbUUsTUFBQUEsVUFBVSxDQUFDTCxjQUFELEVBQWlCLENBQWpCLENBQVY7RUFDRCxLQUZELE1BRU87RUFDTEEsTUFBQUEsY0FBYztFQUNmO0VBQ0YsR0FiNEIsRUFhMUIsQ0FBQ0wsUUFBRCxFQUFXaEMsT0FBWCxDQWIwQixDQUE3QjtFQWVBLE1BQU1vRCxjQUFjLEdBQUdyQixZQUFNLENBQUMsRUFBRCxDQUE3Qjs7RUFDQSxNQUFNc0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBN0YsS0FBSyxFQUFJO0VBQzlCLFFBQUlzRSxPQUFPLENBQUNTLE9BQVIsSUFBbUJULE9BQU8sQ0FBQ1MsT0FBUixDQUFnQmUsUUFBaEIsQ0FBeUI5RixLQUFLLENBQUNJLE1BQS9CLENBQXZCLEVBQStEO0VBQzdEO0VBQ0E7RUFDRDs7RUFDREosSUFBQUEsS0FBSyxDQUFDVSxjQUFOO0VBQ0FrRixJQUFBQSxjQUFjLENBQUNiLE9BQWYsR0FBeUIsRUFBekI7RUFDRCxHQVBEOztFQVNBSSxFQUFBQSxlQUFTLENBQUMsWUFBTTtFQUNkLFFBQUk1QyxxQkFBSixFQUEyQjtFQUN6QndELE1BQUFBLFFBQVEsQ0FBQ1gsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MzRSxrQkFBdEMsRUFBMEQsS0FBMUQ7RUFDQXNGLE1BQUFBLFFBQVEsQ0FBQ1gsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0NTLGNBQWxDLEVBQWtELEtBQWxEO0VBQ0Q7O0VBRUQsV0FBTyxZQUFNO0VBQ1gsVUFBSXRELHFCQUFKLEVBQTJCO0VBQ3pCd0QsUUFBQUEsUUFBUSxDQUFDVixtQkFBVCxDQUE2QixVQUE3QixFQUF5QzVFLGtCQUF6QztFQUNBc0YsUUFBQUEsUUFBUSxDQUFDVixtQkFBVCxDQUE2QixNQUE3QixFQUFxQ1EsY0FBckM7RUFDRDtFQUNGLEtBTEQ7RUFNRCxHQVpRLEVBWU4sQ0FBQ3ZCLE9BQUQsRUFBVS9CLHFCQUFWLENBWk0sQ0FBVDtFQWNBLE1BQU15RCxhQUFhLEdBQUdsQixpQkFBVyxDQUMvQixVQUFBOUUsS0FBSyxFQUFJO0VBQ1BBLElBQUFBLEtBQUssQ0FBQ1UsY0FBTixHQURPOztFQUdQVixJQUFBQSxLQUFLLENBQUNpRyxPQUFOO0VBQ0FDLElBQUFBLGVBQWUsQ0FBQ2xHLEtBQUQsQ0FBZjtFQUVBNEYsSUFBQUEsY0FBYyxDQUFDYixPQUFmLGdDQUE2QmEsY0FBYyxDQUFDYixPQUE1QyxJQUFxRC9FLEtBQUssQ0FBQ0ksTUFBM0Q7O0VBRUEsUUFBSUYsY0FBYyxDQUFDRixLQUFELENBQWxCLEVBQTJCO0VBQ3pCbUcsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCaEUsaUJBQWlCLENBQUNwQyxLQUFELENBQWpDLEVBQTBDcUcsSUFBMUMsQ0FBK0MsVUFBQW5DLFlBQVksRUFBSTtFQUM3RCxZQUFJbkUsb0JBQW9CLENBQUNDLEtBQUQsQ0FBcEIsSUFBK0IsQ0FBQzJDLG9CQUFwQyxFQUEwRDtFQUN4RDtFQUNEOztFQUVEaUMsUUFBQUEsUUFBUSxDQUFDO0VBQ1BWLFVBQUFBLFlBQVksRUFBWkEsWUFETztFQUVQSCxVQUFBQSxZQUFZLEVBQUUsSUFGUDtFQUdQOUUsVUFBQUEsSUFBSSxFQUFFO0VBSEMsU0FBRCxDQUFSOztFQU1BLFlBQUlxRSxXQUFKLEVBQWlCO0VBQ2ZBLFVBQUFBLFdBQVcsQ0FBQ3RELEtBQUQsQ0FBWDtFQUNEO0VBQ0YsT0FkRDtFQWVEO0VBQ0YsR0ExQjhCLEVBMkIvQixDQUFDb0MsaUJBQUQsRUFBb0JrQixXQUFwQixFQUFpQ1gsb0JBQWpDLENBM0IrQixDQUFqQztFQThCQSxNQUFNMkQsWUFBWSxHQUFHeEIsaUJBQVcsQ0FDOUIsVUFBQTlFLEtBQUssRUFBSTtFQUNQQSxJQUFBQSxLQUFLLENBQUNVLGNBQU47RUFDQVYsSUFBQUEsS0FBSyxDQUFDaUcsT0FBTjtFQUNBQyxJQUFBQSxlQUFlLENBQUNsRyxLQUFELENBQWY7O0VBRUEsUUFBSUEsS0FBSyxDQUFDRyxZQUFWLEVBQXdCO0VBQ3RCLFVBQUk7RUFDRkgsUUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1Cb0csVUFBbkIsR0FBZ0MsTUFBaEM7RUFDRCxPQUZELENBRUUsZ0JBQU07RUFBRzs7RUFDWjs7RUFFRCxRQUFJckcsY0FBYyxDQUFDRixLQUFELENBQWQsSUFBeUJ3RCxVQUE3QixFQUF5QztFQUN2Q0EsTUFBQUEsVUFBVSxDQUFDeEQsS0FBRCxDQUFWO0VBQ0Q7O0VBRUQsV0FBTyxLQUFQO0VBQ0QsR0FqQjZCLEVBa0I5QixDQUFDd0QsVUFBRCxFQUFhYixvQkFBYixDQWxCOEIsQ0FBaEM7RUFxQkEsTUFBTTZELGFBQWEsR0FBRzFCLGlCQUFXLENBQy9CLFVBQUE5RSxLQUFLLEVBQUk7RUFDUEEsSUFBQUEsS0FBSyxDQUFDVSxjQUFOO0VBQ0FWLElBQUFBLEtBQUssQ0FBQ2lHLE9BQU47RUFDQUMsSUFBQUEsZUFBZSxDQUFDbEcsS0FBRCxDQUFmLENBSE87O0VBTVAsUUFBTXlHLE9BQU8sR0FBR2IsY0FBYyxDQUFDYixPQUFmLENBQXVCMkIsTUFBdkIsQ0FDZCxVQUFBdEcsTUFBTTtFQUFBLGFBQUlrRSxPQUFPLENBQUNTLE9BQVIsSUFBbUJULE9BQU8sQ0FBQ1MsT0FBUixDQUFnQmUsUUFBaEIsQ0FBeUIxRixNQUF6QixDQUF2QjtFQUFBLEtBRFEsQ0FBaEIsQ0FOTztFQVVQOztFQUNBLFFBQU11RyxTQUFTLEdBQUdGLE9BQU8sQ0FBQzVGLE9BQVIsQ0FBZ0JiLEtBQUssQ0FBQ0ksTUFBdEIsQ0FBbEI7O0VBQ0EsUUFBSXVHLFNBQVMsS0FBSyxDQUFDLENBQW5CLEVBQXNCO0VBQ3BCRixNQUFBQSxPQUFPLENBQUNHLE1BQVIsQ0FBZUQsU0FBZixFQUEwQixDQUExQjtFQUNEOztFQUNEZixJQUFBQSxjQUFjLENBQUNiLE9BQWYsR0FBeUIwQixPQUF6Qjs7RUFDQSxRQUFJQSxPQUFPLENBQUNySSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0VBQ3RCO0VBQ0Q7O0VBRUR3RyxJQUFBQSxRQUFRLENBQUM7RUFDUGIsTUFBQUEsWUFBWSxFQUFFLEtBRFA7RUFFUDlFLE1BQUFBLElBQUksRUFBRSxpQkFGQztFQUdQaUYsTUFBQUEsWUFBWSxFQUFFO0VBSFAsS0FBRCxDQUFSOztFQU1BLFFBQUloRSxjQUFjLENBQUNGLEtBQUQsQ0FBZCxJQUF5QnVELFdBQTdCLEVBQTBDO0VBQ3hDQSxNQUFBQSxXQUFXLENBQUN2RCxLQUFELENBQVg7RUFDRDtFQUNGLEdBOUI4QixFQStCL0IsQ0FBQ3NFLE9BQUQsRUFBVWYsV0FBVixFQUF1Qlosb0JBQXZCLENBL0IrQixDQUFqQztFQWtDQSxNQUFNa0UsUUFBUSxHQUFHL0IsaUJBQVcsQ0FDMUIsVUFBQTlFLEtBQUssRUFBSTtFQUNQQSxJQUFBQSxLQUFLLENBQUNVLGNBQU4sR0FETzs7RUFHUFYsSUFBQUEsS0FBSyxDQUFDaUcsT0FBTjtFQUNBQyxJQUFBQSxlQUFlLENBQUNsRyxLQUFELENBQWY7RUFFQTRGLElBQUFBLGNBQWMsQ0FBQ2IsT0FBZixHQUF5QixFQUF6Qjs7RUFFQSxRQUFJN0UsY0FBYyxDQUFDRixLQUFELENBQWxCLEVBQTJCO0VBQ3pCbUcsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCaEUsaUJBQWlCLENBQUNwQyxLQUFELENBQWpDLEVBQTBDcUcsSUFBMUMsQ0FBK0MsVUFBQTVHLEtBQUssRUFBSTtFQUN0RCxZQUFJTSxvQkFBb0IsQ0FBQ0MsS0FBRCxDQUFwQixJQUErQixDQUFDMkMsb0JBQXBDLEVBQTBEO0VBQ3hEO0VBQ0Q7O0VBRUQsWUFBTXdCLGFBQWEsR0FBRyxFQUF0QjtFQUNBLFlBQU1DLGNBQWMsR0FBRyxFQUF2QjtFQUVBM0UsUUFBQUEsS0FBSyxDQUFDcUgsT0FBTixDQUFjLFVBQUEvSCxJQUFJLEVBQUk7RUFBQSw4QkFDWUQsWUFBWSxDQUFDQyxJQUFELEVBQU9kLE1BQVAsQ0FEeEI7RUFBQTtFQUFBLGNBQ2I0QixRQURhO0VBQUEsY0FDSGtILFdBREc7O0VBQUEsK0JBRVc1SCxhQUFhLENBQUNKLElBQUQsRUFBT0gsT0FBUCxFQUFnQkYsT0FBaEIsQ0FGeEI7RUFBQTtFQUFBLGNBRWJvQixTQUZhO0VBQUEsY0FFRmtILFNBRkU7O0VBR3BCLGNBQU1DLFlBQVksR0FBR3JFLFNBQVMsR0FBR0EsU0FBUyxDQUFDN0QsSUFBRCxDQUFaLEdBQXFCLElBQW5EOztFQUVBLGNBQUljLFFBQVEsSUFBSUMsU0FBWixJQUF5QixDQUFDbUgsWUFBOUIsRUFBNEM7RUFDMUM5QyxZQUFBQSxhQUFhLENBQUMrQyxJQUFkLENBQW1CbkksSUFBbkI7RUFDRCxXQUZELE1BRU87RUFDTCxnQkFBSW9JLE1BQU0sR0FBRyxDQUFDSixXQUFELEVBQWNDLFNBQWQsQ0FBYjs7RUFFQSxnQkFBSUMsWUFBSixFQUFrQjtFQUNoQkUsY0FBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsWUFBZCxDQUFUO0VBQ0Q7O0VBRUQ3QyxZQUFBQSxjQUFjLENBQUM4QyxJQUFmLENBQW9CO0VBQUVuSSxjQUFBQSxJQUFJLEVBQUpBLElBQUY7RUFBUW9JLGNBQUFBLE1BQU0sRUFBRUEsTUFBTSxDQUFDVCxNQUFQLENBQWMsVUFBQVcsQ0FBQztFQUFBLHVCQUFJQSxDQUFKO0VBQUEsZUFBZjtFQUFoQixhQUFwQjtFQUNEO0VBQ0YsU0FoQkQ7O0VBa0JBLFlBQUssQ0FBQzNILFFBQUQsSUFBYXlFLGFBQWEsQ0FBQy9GLE1BQWQsR0FBdUIsQ0FBckMsSUFBNENzQixRQUFRLElBQUlDLFFBQVEsSUFBSSxDQUF4QixJQUE4QndFLGFBQWEsQ0FBQy9GLE1BQWQsR0FBdUJ1QixRQUFyRyxFQUFnSDtFQUM5RztFQUNBd0UsVUFBQUEsYUFBYSxDQUFDMkMsT0FBZCxDQUFzQixVQUFBL0gsSUFBSSxFQUFJO0VBQzVCcUYsWUFBQUEsY0FBYyxDQUFDOEMsSUFBZixDQUFvQjtFQUFFbkksY0FBQUEsSUFBSSxFQUFKQSxJQUFGO0VBQVFvSSxjQUFBQSxNQUFNLEVBQUUsQ0FBQ3RJLHdCQUFEO0VBQWhCLGFBQXBCO0VBQ0QsV0FGRDtFQUdBc0YsVUFBQUEsYUFBYSxDQUFDeUMsTUFBZCxDQUFxQixDQUFyQjtFQUNEOztFQUVEaEMsUUFBQUEsUUFBUSxDQUFDO0VBQ1BULFVBQUFBLGFBQWEsRUFBYkEsYUFETztFQUVQQyxVQUFBQSxjQUFjLEVBQWRBLGNBRk87RUFHUG5GLFVBQUFBLElBQUksRUFBRTtFQUhDLFNBQUQsQ0FBUjs7RUFNQSxZQUFJd0UsTUFBSixFQUFZO0VBQ1ZBLFVBQUFBLE1BQU0sQ0FBQ1UsYUFBRCxFQUFnQkMsY0FBaEIsRUFBZ0NwRSxLQUFoQyxDQUFOO0VBQ0Q7O0VBRUQsWUFBSW9FLGNBQWMsQ0FBQ2hHLE1BQWYsR0FBd0IsQ0FBeEIsSUFBNkJ1RixjQUFqQyxFQUFpRDtFQUMvQ0EsVUFBQUEsY0FBYyxDQUFDUyxjQUFELEVBQWlCcEUsS0FBakIsQ0FBZDtFQUNEOztFQUVELFlBQUltRSxhQUFhLENBQUMvRixNQUFkLEdBQXVCLENBQXZCLElBQTRCc0YsY0FBaEMsRUFBZ0Q7RUFDOUNBLFVBQUFBLGNBQWMsQ0FBQ1MsYUFBRCxFQUFnQm5FLEtBQWhCLENBQWQ7RUFDRDtFQUNGLE9BbkREO0VBb0REOztFQUNENEUsSUFBQUEsUUFBUSxDQUFDO0VBQUUzRixNQUFBQSxJQUFJLEVBQUU7RUFBUixLQUFELENBQVI7RUFDRCxHQWhFeUIsRUFpRTFCLENBQ0VTLFFBREYsRUFFRXpCLE1BRkYsRUFHRVcsT0FIRixFQUlFRixPQUpGLEVBS0VpQixRQUxGLEVBTUV5QyxpQkFORixFQU9FcUIsTUFQRixFQVFFQyxjQVJGLEVBU0VDLGNBVEYsRUFVRWhCLG9CQVZGLENBakUwQixDQUE1Qjs7RUErRUEsTUFBTTJFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQWpHLEVBQUUsRUFBSTtFQUMzQixXQUFPYyxRQUFRLEdBQUcsSUFBSCxHQUFVZCxFQUF6QjtFQUNELEdBRkQ7O0VBSUEsTUFBTWtHLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQWxHLEVBQUUsRUFBSTtFQUNuQyxXQUFPb0IsVUFBVSxHQUFHLElBQUgsR0FBVTZFLGNBQWMsQ0FBQ2pHLEVBQUQsQ0FBekM7RUFDRCxHQUZEOztFQUlBLE1BQU1tRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFuRyxFQUFFLEVBQUk7RUFDL0IsV0FBT3FCLE1BQU0sR0FBRyxJQUFILEdBQVU0RSxjQUFjLENBQUNqRyxFQUFELENBQXJDO0VBQ0QsR0FGRDs7RUFJQSxNQUFNNkUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBbEcsS0FBSyxFQUFJO0VBQy9CLFFBQUkyQyxvQkFBSixFQUEwQjtFQUN4QjNDLE1BQUFBLEtBQUssQ0FBQ2tHLGVBQU47RUFDRDtFQUNGLEdBSkQ7O0VBTUEsTUFBTXVCLFlBQVksR0FBR0MsYUFBTyxDQUMxQjtFQUFBLFdBQU07RUFBQSxzRkFXRixFQVhFO0VBQUEsK0JBQ0pDLE1BREk7RUFBQSxVQUNKQSxNQURJLDZCQUNLLEtBREw7RUFBQSxVQUVKQyxTQUZJLFNBRUpBLFNBRkk7RUFBQSxVQUdKQyxPQUhJLFNBR0pBLE9BSEk7RUFBQSxVQUlKQyxNQUpJLFNBSUpBLE1BSkk7RUFBQSxVQUtKQyxPQUxJLFNBS0pBLE9BTEk7RUFBQSxVQU1KekUsV0FOSSxTQU1KQSxXQU5JO0VBQUEsVUFPSkUsVUFQSSxTQU9KQSxVQVBJO0VBQUEsVUFRSkQsV0FSSSxTQVFKQSxXQVJJO0VBQUEsVUFTSkUsTUFUSSxTQVNKQSxNQVRJO0VBQUEsVUFVRHVFLElBVkM7O0VBQUE7RUFZSkosUUFBQUEsU0FBUyxFQUFFTCxzQkFBc0IsQ0FBQ3JHLG9CQUFvQixDQUFDMEcsU0FBRCxFQUFZdEMsV0FBWixDQUFyQixDQVo3QjtFQWFKdUMsUUFBQUEsT0FBTyxFQUFFTixzQkFBc0IsQ0FBQ3JHLG9CQUFvQixDQUFDMkcsT0FBRCxFQUFVcEMsU0FBVixDQUFyQixDQWIzQjtFQWNKcUMsUUFBQUEsTUFBTSxFQUFFUCxzQkFBc0IsQ0FBQ3JHLG9CQUFvQixDQUFDNEcsTUFBRCxFQUFTcEMsUUFBVCxDQUFyQixDQWQxQjtFQWVKcUMsUUFBQUEsT0FBTyxFQUFFVCxjQUFjLENBQUNwRyxvQkFBb0IsQ0FBQzZHLE9BQUQsRUFBVXBDLFNBQVYsQ0FBckIsQ0FmbkI7RUFnQkpyQyxRQUFBQSxXQUFXLEVBQUVrRSxrQkFBa0IsQ0FBQ3RHLG9CQUFvQixDQUFDb0MsV0FBRCxFQUFjMEMsYUFBZCxDQUFyQixDQWhCM0I7RUFpQkp4QyxRQUFBQSxVQUFVLEVBQUVnRSxrQkFBa0IsQ0FBQ3RHLG9CQUFvQixDQUFDc0MsVUFBRCxFQUFhOEMsWUFBYixDQUFyQixDQWpCMUI7RUFrQkovQyxRQUFBQSxXQUFXLEVBQUVpRSxrQkFBa0IsQ0FBQ3RHLG9CQUFvQixDQUFDcUMsV0FBRCxFQUFjaUQsYUFBZCxDQUFyQixDQWxCM0I7RUFtQkovQyxRQUFBQSxNQUFNLEVBQUUrRCxrQkFBa0IsQ0FBQ3RHLG9CQUFvQixDQUFDdUMsTUFBRCxFQUFTb0QsUUFBVCxDQUFyQjtFQW5CdEIsU0FvQkhjLE1BcEJHLEVBb0JNckQsT0FwQk4sR0FxQkEsQ0FBQ25DLFFBQUQsSUFBYSxDQUFDTSxVQUFkLEdBQTJCO0VBQUV3RixRQUFBQSxRQUFRLEVBQUU7RUFBWixPQUEzQixHQUE2QyxFQXJCN0MsR0FzQkRELElBdEJDO0VBQUEsS0FBTjtFQUFBLEdBRDBCLEVBeUIxQixDQUNFMUQsT0FERixFQUVFZ0IsV0FGRixFQUdFRyxTQUhGLEVBSUVDLFFBSkYsRUFLRUMsU0FMRixFQU1FSyxhQU5GLEVBT0VNLFlBUEYsRUFRRUUsYUFSRixFQVNFSyxRQVRGLEVBVUVwRSxVQVZGLEVBV0VDLE1BWEYsRUFZRVAsUUFaRixDQXpCMEIsQ0FBNUI7RUF5Q0EsTUFBTStGLG1CQUFtQixHQUFHcEQsaUJBQVcsQ0FBQyxVQUFBOUUsS0FBSyxFQUFJO0VBQy9DQSxJQUFBQSxLQUFLLENBQUNrRyxlQUFOO0VBQ0QsR0FGc0MsRUFFcEMsRUFGb0MsQ0FBdkM7RUFJQSxNQUFNaUMsYUFBYSxHQUFHVCxhQUFPLENBQzNCO0VBQUEsV0FBTSxZQUF5RDtFQUFBLHNGQUFQLEVBQU87RUFBQSwrQkFBdERDLE1BQXNEO0VBQUEsVUFBdERBLE1BQXNELDZCQUE3QyxLQUE2QztFQUFBLFVBQXRDUyxRQUFzQyxTQUF0Q0EsUUFBc0M7RUFBQSxVQUE1QkwsT0FBNEIsU0FBNUJBLE9BQTRCO0VBQUEsVUFBaEJDLElBQWdCOztFQUM3RCxVQUFNSyxVQUFVO0VBQ2RwSyxRQUFBQSxNQUFNLEVBQU5BLE1BRGM7RUFFZHlCLFFBQUFBLFFBQVEsRUFBUkEsUUFGYztFQUdkVCxRQUFBQSxJQUFJLEVBQUUsTUFIUTtFQUlkcUosUUFBQUEsS0FBSyxFQUFFO0VBQUVDLFVBQUFBLE9BQU8sRUFBRTtFQUFYLFNBSk87RUFLZEgsUUFBQUEsUUFBUSxFQUFFZCxjQUFjLENBQUNwRyxvQkFBb0IsQ0FBQ2tILFFBQUQsRUFBV3ZCLFFBQVgsQ0FBckIsQ0FMVjtFQU1ka0IsUUFBQUEsT0FBTyxFQUFFVCxjQUFjLENBQUNwRyxvQkFBb0IsQ0FBQzZHLE9BQUQsRUFBVUcsbUJBQVYsQ0FBckIsQ0FOVDtFQU9kTSxRQUFBQSxZQUFZLEVBQUUsS0FQQTtFQVFkUCxRQUFBQSxRQUFRLEVBQUUsQ0FBQztFQVJHLFNBU2JOLE1BVGEsRUFTSm5ELFFBVEksQ0FBaEI7O0VBWUEsK0NBQ0s2RCxVQURMLEdBRUtMLElBRkw7RUFJRCxLQWpCRDtFQUFBLEdBRDJCLEVBbUIzQixDQUFDeEQsUUFBRCxFQUFXdkcsTUFBWCxFQUFtQnlCLFFBQW5CLEVBQTZCbUgsUUFBN0IsRUFBdUMxRSxRQUF2QyxDQW5CMkIsQ0FBN0I7RUFzQkEsTUFBTXNHLFNBQVMsR0FBR3ZFLFlBQVksQ0FBQzlGLE1BQS9CO0VBQ0EsTUFBTTRGLFlBQVksR0FBR3lFLFNBQVMsR0FBRyxDQUFaLElBQWlCakosZ0JBQWdCLENBQUM7RUFBRUMsSUFBQUEsS0FBSyxFQUFFeUUsWUFBVDtFQUF1QmpHLElBQUFBLE1BQU0sRUFBTkEsTUFBdkI7RUFBK0JXLElBQUFBLE9BQU8sRUFBUEEsT0FBL0I7RUFBd0NGLElBQUFBLE9BQU8sRUFBUEEsT0FBeEM7RUFBaURnQixJQUFBQSxRQUFRLEVBQVJBLFFBQWpEO0VBQTJEQyxJQUFBQSxRQUFRLEVBQVJBO0VBQTNELEdBQUQsQ0FBdEQ7RUFDQSxNQUFNc0UsWUFBWSxHQUFHd0UsU0FBUyxHQUFHLENBQVosSUFBaUIsQ0FBQ3pFLFlBQXZDO0VBRUEsMkNBQ0tXLEtBREw7RUFFRVgsSUFBQUEsWUFBWSxFQUFaQSxZQUZGO0VBR0VDLElBQUFBLFlBQVksRUFBWkEsWUFIRjtFQUlFSixJQUFBQSxTQUFTLEVBQUVBLFNBQVMsSUFBSSxDQUFDMUIsUUFKM0I7RUFLRXNGLElBQUFBLFlBQVksRUFBWkEsWUFMRjtFQU1FVSxJQUFBQSxhQUFhLEVBQWJBLGFBTkY7RUFPRTdELElBQUFBLE9BQU8sRUFBUEEsT0FQRjtFQVFFRSxJQUFBQSxRQUFRLEVBQVJBLFFBUkY7RUFTRTVDLElBQUFBLElBQUksRUFBRTBGLGNBQWMsQ0FBQ3pDLGNBQUQ7RUFUdEI7RUFXRDs7RUFFRCxTQUFTSCxPQUFULENBQWlCQyxLQUFqQixFQUF3QitELE1BQXhCLEVBQWdDO0VBQzlCO0VBQ0EsVUFBUUEsTUFBTSxDQUFDekosSUFBZjtFQUNFLFNBQUssT0FBTDtFQUNFLCtDQUNLMEYsS0FETDtFQUVFZCxRQUFBQSxTQUFTLEVBQUU7RUFGYjs7RUFJRixTQUFLLE1BQUw7RUFDRSwrQ0FDS2MsS0FETDtFQUVFZCxRQUFBQSxTQUFTLEVBQUU7RUFGYjs7RUFJRixTQUFLLFlBQUw7RUFDRSwrQ0FDS2MsS0FETDtFQUVFYixRQUFBQSxrQkFBa0IsRUFBRTtFQUZ0Qjs7RUFJRixTQUFLLGFBQUw7RUFDRSwrQ0FDS2EsS0FETDtFQUVFYixRQUFBQSxrQkFBa0IsRUFBRTtFQUZ0Qjs7RUFJRixTQUFLLGlCQUFMO0VBQ0U7RUFERixVQUVVQyxZQUZWLEdBRXlDMkUsTUFGekMsQ0FFVTNFLFlBRlY7RUFBQSxVQUV3QkcsWUFGeEIsR0FFeUN3RSxNQUZ6QyxDQUV3QnhFLFlBRnhCO0VBR0UsK0NBQ0tTLEtBREw7RUFFRVQsUUFBQUEsWUFBWSxFQUFaQSxZQUZGO0VBR0VILFFBQUFBLFlBQVksRUFBWkE7RUFIRjs7RUFLRixTQUFLLFVBQUw7RUFDRSwrQ0FDS1ksS0FETDtFQUVFUixRQUFBQSxhQUFhLEVBQUV1RSxNQUFNLENBQUN2RSxhQUZ4QjtFQUdFQyxRQUFBQSxjQUFjLEVBQUVzRSxNQUFNLENBQUN0RTtFQUh6Qjs7RUFLRixTQUFLLE9BQUw7RUFDRSwrQ0FDS08sS0FETDtFQUVFYixRQUFBQSxrQkFBa0IsRUFBRSxLQUZ0QjtFQUdFQyxRQUFBQSxZQUFZLEVBQUUsS0FIaEI7RUFJRUcsUUFBQUEsWUFBWSxFQUFFLEVBSmhCO0VBS0VDLFFBQUFBLGFBQWEsRUFBRSxFQUxqQjtFQU1FQyxRQUFBQSxjQUFjLEVBQUU7RUFObEI7O0VBUUY7RUFDRSxhQUFPTyxLQUFQO0VBN0NKO0VBK0NEOzs7Ozs7Ozs7Ozs7OyJ9
