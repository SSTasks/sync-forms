(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/preview-page/preview-page.component */ "./src/app/forms/preview-page/preview-page.component.ts");
/* harmony import */ var _forms_constructor_page_constructor_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/constructor-page/constructor-page.component */ "./src/app/forms/constructor-page/constructor-page.component.ts");
/* harmony import */ var _forms_interview_page_interview_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/interview-page/interview-page.component */ "./src/app/forms/interview-page/interview-page.component.ts");
/* harmony import */ var _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/admin/admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/notfound/notfound.component */ "./src/app/modules/notfound/notfound.component.ts");
/* harmony import */ var _modules_statistics_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/statistics/statistics/statistics.component */ "./src/app/modules/statistics/statistics/statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"] },
    { path: 'preview', component: _forms_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_3__["PreviewPageComponent"] },
    { path: 'constructor', component: _forms_constructor_page_constructor_page_component__WEBPACK_IMPORTED_MODULE_4__["ConstructorPageComponent"] },
    { path: 'interview-page', component: _forms_interview_page_interview_page_component__WEBPACK_IMPORTED_MODULE_5__["InterviewPageComponent"] },
    { path: 'admin', component: _modules_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'statistics', component: _modules_statistics_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"] },
    { path: '**', component: _modules_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [Title]=\"Title\"></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0 15px;\n  margin: 0 auto;\n  max-width: 1200px; }\n\n.logo, .router {\n  margin: 30px 0 0 100px;\n  float: left; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.Title = 'SyncForms';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_material_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material/material */ "./src/app/modules/material/material.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _forms_forms_page_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/forms-page.module */ "./src/app/forms/forms-page.module.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts");
/* harmony import */ var _modules_statistics_statistics_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/statistics/statistics.module */ "./src/app/modules/statistics/statistics.module.ts");
/* harmony import */ var _modules_notfound_notfound_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/notfound/notfound.module */ "./src/app/modules/notfound/notfound.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"]
            ],
            imports: [
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _modules_material_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _forms_forms_page_module__WEBPACK_IMPORTED_MODULE_12__["FormsPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _modules_statistics_statistics_module__WEBPACK_IMPORTED_MODULE_14__["StatisticsModule"],
                _modules_notfound_notfound_module__WEBPACK_IMPORTED_MODULE_15__["NotfoundModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <div class=\"logo\"></div>\r\n        <h1 class=\"header-logo\" [routerLink]=\"['/main']\">{{Title}}</h1>\r\n        <span class=\"header-spacer\"></span>\r\n        <ul class=\"header-list headernav\">\r\n            <button *ngIf=\"isInterviewer || isMaster\" class=\"header-button-spacer disabled\" mat-menu-item routerLinkActive disabled [routerLink]=\"[ '/interviews' ]\" >Interviews</button>\r\n            <button *ngIf=\"isInterviewer || isMaster\" class=\"header-button-spacer\" mat-menu-item [routerLink]=\"[ '/preview' ]\" >Preview</button>\r\n            <button *ngIf=\"isInterviewer || isMaster\" class=\"header-button-spacer\" mat-menu-item routerLinkActive [routerLink]=\"[ '/statistics' ]\" >Statistics</button>\r\n            <button *ngIf=\"isMaster\" class=\"header-button-spacer\" color=\"white\" mat-menu-item routerLinkActive [routerLink]=\"[ '/admin' ]\">Admin</button>\r\n            <a *ngIf=\"!user?.fullname\" class=\"header-button-spacer\" mat-raised-button [routerLink]=\"[ '/login' ]\">Log in</a>\r\n            <button *ngIf=\"user?.fullname\" class=\"header-user header-button-spacer\" mat-button [matMenuTriggerFor]=\"menu\">{{user.fullname}}</button>\r\n                <mat-menu #menu=\"matMenu\" xPosition=\"after\">\r\n                    <a mat-menu-item (click)=\"onLogout()\" class=\"logout\">Log out</a>\r\n                </mat-menu>\r\n        </ul>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  font-family: 'Russo One', sans-serif;\n  cursor: pointer; }\n\n.header-spacer {\n  flex: 1 1 auto; }\n\n.header-user {\n  text-transform: capitalize;\n  font-weight: 300;\n  font-size: 23px; }\n\n.header-button-spacer {\n  margin: 0 10px; }\n\n.header-list {\n  display: flex;\n  align-items: center; }\n\n.mobile .mat-menu-item {\n  color: black; }\n\n.headernav button {\n  color: white !important; }\n\nbutton.mat-menu-item {\n  width: auto; }\n\nmat-menu-content {\n  display: flex;\n  justify-content: center; }\n\n.logout {\n  text-align: center; }\n\n.disabled {\n  opacity: 0.3; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.isMaster = false;
        this.isCandidate = false;
        this.isInterviewer = false;
        this.authService.subscriber()
            .subscribe(function (user) { return _this.user = user; });
        this.authService.subscriber()
            .subscribe(function (user) { return _this.roleCheck(user); });
    }
    HeaderComponent.prototype.roleCheck = function (user) {
        if (user.role === 'master') {
            this.isMaster = true;
        }
        else if (user.role === 'candidate') {
            this.isCandidate = true;
        }
        else if (user.role === 'interviewer') {
            this.isInterviewer = true;
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout().subscribe();
        this.router.navigate(['/main']);
        this.isMaster = false;
        this.isCandidate = false;
        this.isInterviewer = false;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(window.localStorage.getItem('currentUser'));
        if (this.user) {
            this.roleCheck(this.user);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "Title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\r\n    <p><button mat-button (click)=\"sidenav.toggle()\">FAQ</button></p>\r\n    <h3>Welcome to the app for interviewing candidates for the QA Tester post.</h3>\r\n    <p>Before you begin the interview, wait until the expert runs the test form.<br>\r\n    </p>\r\n      <ol>\r\n        <li>Choose an accessible form from the list of interviews.</li>\r\n        <li>Interact with form elements to identify problems</li>\r\n      </ol>\r\n    \r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <p><button mat-button (click)=\"sidenav.toggle()\">FAQ</button></p>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\r\n  <table mat-table [dataSource]=\"formsSource\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"interviewer\">\r\n      <th mat-header-cell *matHeaderCellDef> Interviewer </th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.interviewer}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"formName\">\r\n      <th mat-header-cell *matHeaderCellDef> Form name </th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.formName}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"creationTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Created </th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.creationTime}}</td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n      [ngClass]=\"{'highlight': selectedRowIndex == row.interviewId}\" \r\n      (click)=\"highlight(row)\">\r\n    </tr>\r\n  </table>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\r\n  <button mat-raised-button color=\"primary\" (click)=\"startInterview()\" [disabled]=\"selectedRowIndex === -1\">\r\n    Join interview\r\n  </button>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.example-radio-button:hover {\n  opacity: 0,5; }\n\n.example-selected-value {\n  margin: 15px 0; }\n\n.example-viewport {\n  height: 200px;\n  width: 60%;\n  margin-bottom: 20px; }\n\n.example-dt {\n  height: 30px;\n  font-weight: bold; }\n\n.example-dd {\n  height: 30px; }\n\n#scroll::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n\n#scroll::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n\n#scroll::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.example-container {\n  width: 15%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.1); }\n\ntable {\n  width: 70%;\n  margin-bottom: 5%; }\n\n.highlight {\n  background: rgba(0, 0, 0, 0.1); }\n"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/services/http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forms_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
/* harmony import */ var _forms_services_socket_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/services/socket-service.service */ "./src/app/forms/services/socket-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(http, socketService, broadcast, router) {
        this.http = http;
        this.socketService = socketService;
        this.broadcast = broadcast;
        this.router = router;
        // displayedColumns = ['author', 'groups', 'title'];
        this.displayedColumns = ['interviewer', 'formName', 'creationTime'];
        this.selectedRowIndex = -1;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('over');
    }
    MainPageComponent.prototype.renderUsersList = function () {
        this.formsSource = this.initDataSource(this.forms);
    };
    MainPageComponent.prototype.initDataSource = function (data) {
        var dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        return dataSource;
    };
    MainPageComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.interviewId;
        this.broadcast.selectForm(row.interviewForm);
        this.socketService.setInterviewId(row.interviewId);
    };
    MainPageComponent.prototype.updateTable = function () {
        var _this = this;
        return this.socketService.updateInterviewList()
            .subscribe(function (tableData) {
            _this.forms = tableData;
            _this.renderUsersList();
            _this.selectedRowIndex = -1;
        });
    };
    MainPageComponent.prototype.startInterview = function () {
        this.router.navigate(['/interview-page']);
    };
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.connectToSockets();
        this.http.getAvailableInterviews()
            .subscribe(function (data) {
            _this.forms = data;
            _this.renderUsersList();
            console.log(_this.formsSource);
        });
        this.unsubUpdateTable = this.updateTable();
    };
    MainPageComponent.prototype.ngOnDestroy = function () {
        if (this.unsubUpdateTable) {
            this.unsubUpdateTable.unsubscribe();
        }
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/components/main-page/main-page.component.scss")],
            providers: [],
        }),
        __metadata("design:paramtypes", [_forms_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _forms_services_socket_service_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _forms_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());

// https://medium.com/codingthesmartway-com-blog/angular-material-part-4-data-table-23874582f23a


/***/ }),

/***/ "./src/app/directives/confirm-equal-validator.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/directives/confirm-equal-validator.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        else {
            return null;
        }
    };
    var ConfirmEqualValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/forms/constructor-page/constructor-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/forms/constructor-page/constructor-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container full-height\" fxLayout=\"row\">\r\n    <mat-sidenav fxFlex.sm=\"1 0 230px\"\r\n                 fxFlex.md=\"1 1 25%\"\r\n                 fxFlex.gt-md=\"1 1 20%\"\r\n                 #drawer class=\"sidenav\"\r\n                 fixedInViewport=\"true\"\r\n                 [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n                 [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n                 [opened]=\"!(isHandset$ | async)\">\r\n        <mat-toolbar fxLayout=\"row\"\r\n                     fxLayoutAlign=\"center center\">\r\n            <mat-slide-toggle (click)=\"showEditPanel()\"\r\n                              checked=\"true\"\r\n                              fxHide.xs=\"true\"\r\n                              labelPosition=\"before\">\r\n                <span>Hide edit panel</span>\r\n            </mat-slide-toggle>\r\n        </mat-toolbar>\r\n        <mat-nav-list>\r\n            <app-nav-constructor *ngIf=\"!configPanel\"></app-nav-constructor>\r\n            <app-nav-config *ngIf=\"configPanel\"></app-nav-config>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content fxFlex.sm=\"1 1 70%\"\r\n                         fxFlex.md=\"1 1 75%\"\r\n                         fxFlex.gt-md=\"1 1 80%\"\r\n                         class=\"preview-bg\">\r\n\r\n        <div class=\"form\">\r\n            <form class=\"form-info\" [formGroup]=\"formInfo\">\r\n                <div class=\"form-info-inputs\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <mat-label>Form title</mat-label>\r\n                        <input matInput type=\"text\" formControlName=\"title\" required>\r\n                        <mat-error>Min title length: 3</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Group name</mat-label>\r\n                        <mat-select formControlName=\"groups\" multiple required>\r\n                            <mat-option *ngFor=\"let group of groups\" [value]=\"group\">{{group}}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error>Please choose group</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"form-info-buttons\">\r\n                    <mat-toolbar>\r\n                    <button mat-raised-button [disabled]=\"formSavingProcess || !formInfo.valid\" (click)=\"saveForm()\" color=\"primary\">Save form</button>\r\n                    <button mat-raised-button [disabled]=\"!form._id\" (click)=\"delForm(form)\" color=\"warn\">Remove form</button>\r\n                    </mat-toolbar>\r\n                </div>\r\n            </form>\r\n\r\n            <form class=\"example-container\">\r\n                <!--container for row-->\r\n                <div class=\"row-container\" *ngFor=\"let row of form.rows; let rowIndex = index\">\r\n                    <!--row-->\r\n                    <div class=\"row\">\r\n\r\n                        <button mat-mini-fab color=\"primary\" (click)=\"addCell(rowIndex)\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n\r\n                        <!--container for cell-->\r\n                        <div class=\"cell-container\" *ngFor=\"let cell of row.cells; let cellIndex = index\">\r\n                            <!--cell-->\r\n                            <div class=\"cell\">\r\n                                <div class=\"element flex-grow\" *ngFor=\"let elem of cell.elements; let elemIndex = index\">\r\n\r\n                                    <!--<div  *ngIf=\"elem.type==='text'\" [innerHtml]=\"elem | type\"></div>-->\r\n\r\n                                    <!--if element is input TEXT-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width flex-grow\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"text\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input NUMBER-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='number'\" class=\"example-full-width flex-grow\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"number\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [min]=\"elem.config.min\"\r\n                                               [max]=\"elem.config.max\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input EMAIL-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='email'\" class=\"example-full-width flex-grow\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"email\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input PASSWORD-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='password'\" class=\"example-full-width flex-grow\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"password\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is SLIDER-->\r\n                                    <section *ngIf=\"elem.type==='slider'\" class=\"example-section flex-grow\"\r\n                                             (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-slider\r\n                                                class=\"example-margin\"\r\n                                                [value]=\"elem.config.value\"\r\n                                                [invert]=\"elem.config.invert\"\r\n                                                [max]=\"elem.config.max\"\r\n                                                [min]=\"elem.config.min\"\r\n                                                [step]=\"elem.config.step\"\r\n                                                [thumbLabel]=\"elem.config.thumbLabel\"\r\n                                                [vertical]=\"elem.config.vertical\"\r\n                                                [disabled]=\"elem.config.disabled\">\r\n                                        </mat-slider>\r\n                                    </section>\r\n\r\n                                    <!--if element is TOGGLE-->\r\n                                    <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\"\r\n                                             (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n\r\n                                        <mat-slide-toggle class=\"example-margin\"\r\n                                                          [color]=\"elem.config.color\"\r\n                                                          [checked]=\"elem.config.checked\"\r\n                                                          [disabled]=\"elem.config.disabled\">\r\n                                            {{elem.config.label}}\r\n                                        </mat-slide-toggle>\r\n                                    </section>\r\n\r\n                                    <!--if element is SELECT-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='select'\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-select [disabled]=\"elem.config.disabled\"\r\n                                                    [required]=\"elem.config.required\">\r\n                                            <mat-option *ngFor=\"let option of elem.config.options\" value=\"{{option}}\">\r\n                                                {{option}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input CHECKBOX-->\r\n                                    <section class=\"example-section example-section-checkbox\"\r\n                                             *ngIf=\"elem.type==='checkbox'\"\r\n                                             [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\"\r\n                                             (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-checkbox *ngFor=\"let option of elem.config.options\"\r\n                                                      class=\"example-margin example-margin-checkbox\"\r\n                                                      [value]=\"option\"\r\n                                                      [color]=\"elem.config.color\"\r\n                                                      [disabled]=\"elem.config.disabled\"\r\n                                                      [required]=\"elem.config.required\">{{option}}\r\n                                        </mat-checkbox>\r\n                                    </section>\r\n\r\n                                    <!--if element is input RADIO-->\r\n                                    <mat-radio-group class=\"example-radio-group\" *ngIf=\"elem.type==='radio'\"\r\n                                                     [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\"\r\n                                                     (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-radio-button class=\"example-radio-button\"\r\n                                                          *ngFor=\"let option of elem.config.options\"\r\n                                                          [value]=\"option\"\r\n                                                          [color]=\"elem.config.color\"\r\n                                                          [disabled]=\"elem.config.disabled\"\r\n                                                          [required]=\"elem.config.required\">{{option}}\r\n                                        </mat-radio-button>\r\n                                    </mat-radio-group>\r\n\r\n                                    <!--if element is TEXTAREA-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width flex-grow\"\r\n                                                    (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <textarea matInput\r\n                                                  [value]=\"elem.config.value\"\r\n                                                  [placeholder]=\"elem.config.placeholder\"\r\n                                                  [disabled]=\"elem.config.disabled\"></textarea>\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is BUTTON-->\r\n                                    <div *ngIf=\"elem.type==='button'\" class=\"example-button-row flex-grow\"\r\n                                         (click)=\"addConfig(elem, rowIndex, cellIndex)\">\r\n                                        <button mat-raised-button\r\n                                                [color]=\"elem.config.color\"\r\n                                                [disabled]=\"elem.config.disabled\">{{elem.config.value}}\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                    <button mat-mini-fab color=\"primary\" (click)=\"delElem(rowIndex, cellIndex)\">\r\n                                        <mat-icon>remove</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <button mat-mini-fab color=\"primary\" *ngIf=\"!cell.elements.length\"\r\n                                        (click)=\"addElem(rowIndex, cellIndex)\">\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                            <button mat-mini-fab color=\"primary\" (click)=\"delCell(rowIndex, cellIndex)\">\r\n                                <mat-icon>remove</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <button mat-mini-fab color=\"primary\" (click)=\"delRow(rowIndex)\">\r\n                        <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                </div>\r\n\r\n                <button mat-mini-fab color=\"primary\" (click)=\"addRow()\">\r\n                    <mat-icon>add</mat-icon>\r\n                </button>\r\n               </form>\r\n            </div>\r\n        <app-form-screenshot [form]=\"form\"></app-form-screenshot>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/forms/constructor-page/constructor-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/forms/constructor-page/constructor-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 50%; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  background: inherit; }\n\n.mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #fff; }\n\n.mat-toolbar .mat-toolbar-single-row {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.mat-list, .mat-nav-list, .mat-selection-list {\n  padding-top: 0; }\n\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: #fff !important;\n  font-size: 20px;\n  font-weight: normal; }\n\n.new-form-button, .save-form-button {\n  margin-right: 10px; }\n\nmat-sidenav-container {\n  text-align: center; }\n\nmat-sidenav {\n  min-width: 200px; }\n\nmat-card {\n  margin: 16px;\n  padding-bottom: 0; }\n\nmat-card mat-card-title {\n  font-size: 20px; }\n\nmat-card img {\n  max-width: 700px; }\n\n@media only screen and (min-width: 600px) {\n  mat-sidenav {\n    position: relative;\n    max-width: 25%; }\n  mat-sidenav-content {\n    margin-left: 0 !important; } }\n\n.full-height {\n  height: calc(100vh - 64px); }\n\n.flex-grow {\n  flex-grow: 1; }\n\n.flex-grow button {\n    width: 100%; }\n\n.form {\n  margin-top: 50px; }\n\n.form .form-info {\n    display: flex;\n    width: 90%;\n    margin: 10px auto;\n    align-items: center;\n    justify-content: center; }\n\n.form .form-info .form-info-inputs {\n      width: 45%;\n      text-align: left; }\n\n.form .form-info .form-info-inputs .mat-form-field {\n        margin-right: 10px;\n        font-size: 20px; }\n\n.form .form-info .form-info-buttons {\n      width: 55%;\n      text-align: right; }\n\n.form .form-info .form-info-buttons mat-toolbar {\n        justify-content: flex-end; }\n\n.form .form-info .form-info-buttons button {\n        margin-left: 10px; }\n\n.form .example-container {\n    margin: 10px auto;\n    width: 90%;\n    border: 1px solid #c9c9c9;\n    min-height: 50px;\n    padding: 5px;\n    border-radius: 5px; }\n\n.form .example-container .row-container {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.form .example-container .row-container .row {\n        display: flex;\n        margin: 5px;\n        padding: 5px;\n        width: 100%;\n        min-height: 20px;\n        border-radius: 5px;\n        border: 1px solid #c9c9c9;\n        align-items: center; }\n\n.form .example-container .row-container .row .cell-container {\n          display: flex;\n          width: 100%;\n          margin-right: 5px;\n          align-items: center;\n          justify-content: center; }\n\n.form .example-container .row-container .row .cell-container .cell {\n            display: flex;\n            margin: 5px;\n            padding: 5px;\n            width: 100%;\n            min-height: 20px;\n            border-radius: 5px;\n            border: 1px solid #c9c9c9; }\n\n.form .example-container .row-container .row .cell-container .cell .element {\n              display: flex;\n              align-items: center; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field {\n                margin: 0 15px; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field ::ng-deep .mat-form-field-infix {\n                  width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slider {\n                width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slide-toggle {\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-select {\n                width: 140px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-group {\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-button {\n                margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical {\n                display: block !important;\n                text-align: left; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical .mat-radio-button, .form .example-container .row-container .row .cell-container .cell .element .vertical .mat-checkbox {\n                  margin: 10px;\n                  display: block; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-section-checkbox {\n                display: flex;\n                align-content: center;\n                align-items: center;\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-margin-checkbox {\n                margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-button-row {\n                margin: 5px; }\n\n.form .example-container .row-container .mat-mini-fab {\n        width: 30px;\n        height: 30px; }\n\n.form .example-container .row-container .mat-mini-fab mat-icon {\n          width: 20px;\n          height: 30px;\n          font-size: 20px; }\n\n.form .example-container .mat-mini-fab {\n      width: 40px;\n      height: 40px;\n      padding: 3px; }\n\n.form .example-container .mat-mini-fab mat-icon {\n        margin-top: -8px;\n        padding: 0;\n        width: 30px;\n        height: 30px;\n        font-size: 30px; }\n\n/*my mixins*/\n\n.preview-bg {\n  background-color: #fff !important; }\n\n#screenshot {\n  position: relative;\n  left: -100%; }\n"

/***/ }),

/***/ "./src/app/forms/constructor-page/constructor-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/forms/constructor-page/constructor-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConstructorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructorPageComponent", function() { return ConstructorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _modules_admin_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/admin/services/http.service */ "./src/app/modules/admin/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../options/confirm-removing-form/confirm-removing-form.component */ "./src/app/options/confirm-removing-form/confirm-removing-form.component.ts");
/* harmony import */ var _services_screenshot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/screenshot.service */ "./src/app/forms/services/screenshot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var emptyForm = {
    title: 'New form',
    author: 'Ya',
    preview: '',
    groups: ['Dnipro-142'],
    rows: [],
    description: ''
};
var ConstructorPageComponent = /** @class */ (function () {
    function ConstructorPageComponent(breakpoint, fb, broadcast, http, router, httpAdmin, dialog, screenshotService) {
        var _this = this;
        this.breakpoint = breakpoint;
        this.fb = fb;
        this.broadcast = broadcast;
        this.http = http;
        this.router = router;
        this.httpAdmin = httpAdmin;
        this.dialog = dialog;
        this.screenshotService = screenshotService;
        this.isHandset$ = this.breakpoint.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        // get template of element from constructor
        this.broadcast.subscriberSendElem()
            .subscribe(function (elem) {
            _this.pushElem(elem);
        });
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    ConstructorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultForm = JSON.parse(JSON.stringify(emptyForm)), // getting template of empty form
        selectedForm = this.broadcast.selectedForm; // getting selected form
        // adding default template for creating new form
        this.form = selectedForm ? selectedForm : defaultForm;
        this.configPanel = false;
        // form builder for name and group current form
        this.httpAdmin.getGroups()
            .subscribe(function (groups) { return _this.groups = groups.map(function (group) { return group.name; }); });
        this.formBuild();
    };
    // form builder for name and group current form
    ConstructorPageComponent.prototype.formBuild = function () {
        this.formInfo = this.fb.group({
            title: [this.form.title, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
                ]],
            groups: [this.form.groups, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    ConstructorPageComponent.prototype.showEditPanel = function () {
        this.router.navigate(['/preview']);
    };
    ConstructorPageComponent.prototype.saveForm = function () {
        var _this = this;
        this.formSavingProcess = true;
        var currentDate = new Date().valueOf();
        var imgName = currentDate + '.png';
        this.form.title = this.formInfo.value.title;
        this.form.author = JSON.parse(window.localStorage.getItem('currentUser')).username;
        this.form.groups = this.formInfo.value.groups;
        if (this.form.preview === '') {
            this.form.preview = imgName;
        }
        this.http.saveForm(this.form)
            .subscribe(function (data) {
            var isFormSaved = Array.isArray(data);
            if (isFormSaved) {
                if (_this.form._id) {
                    var forms = data.filter(function (form) { return form._id === _this.form._id; });
                    _this.form = forms[0]; // show updated form
                }
                else {
                    var forms = data.filter(function (form) { return form.preview === _this.form.preview; });
                    ; // show created form
                    _this.form = forms[0];
                }
                _this.screenshotService.saveScreenshot(_this.form);
            }
            else {
                _this.screenshotService.showSaveMessage(_this.form.title, isFormSaved);
            }
            _this.formSavingProcess = false;
        });
    };
    ConstructorPageComponent.prototype.delForm = function (form) {
        var _this = this;
        var confirmRemovingRef = this.dialog.open(_options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmRemovingFormComponent"]);
        confirmRemovingRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.http.delForm(form._id)
                    .subscribe(function (data) {
                    var isFormDeleted = Array.isArray(data);
                    if (isFormDeleted) {
                        _this.showEditPanel();
                        _this.screenshotService.deleteScreenshot(form);
                    }
                    else {
                        _this.screenshotService.showDeleteMessage(_this.form.title, isFormDeleted);
                    }
                });
            }
        });
    };
    ConstructorPageComponent.prototype.addRow = function () {
        this.hideConfig();
        this.form.rows.push({ cells: [] });
    };
    ConstructorPageComponent.prototype.delRow = function (rowIndex) {
        this.hideConfig();
        this.form.rows.splice(rowIndex, 1);
    };
    ConstructorPageComponent.prototype.addCell = function (rowIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells.push({ elements: [] });
    };
    ConstructorPageComponent.prototype.delCell = function (rowIndex, cellIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells.splice(cellIndex, 1);
    };
    ConstructorPageComponent.prototype.addElem = function (rowIndex, cellIndex) {
        var _this = this;
        this.hideConfig();
        this.elemParams = { row: rowIndex, cell: cellIndex }; // saves row and cell for new element
        setTimeout(function () {
            _this.broadcast.activationConstructor();
        }, 100);
    };
    ConstructorPageComponent.prototype.pushElem = function (elem) {
        console.log(this.elemParams);
        var copyElem = JSON.parse(JSON.stringify(elem));
        var elements = this.form.rows[this.elemParams.row].cells[this.elemParams.cell].elements;
        this.hideConfig();
        if (!elements.length) {
            elements.push(copyElem);
        }
    };
    ConstructorPageComponent.prototype.delElem = function (rowIndex, cellIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells[cellIndex].elements.splice(0, 1);
    };
    ConstructorPageComponent.prototype.addConfig = function (elem, rowIndex, cellIndex) {
        var _this = this;
        this.elemParams = { row: rowIndex, cell: cellIndex }; // saves row and cell for new config of element
        this.configPanel = true;
        setTimeout(function () {
            _this.broadcast.activationConfig(elem.config);
        }, 100);
    };
    ConstructorPageComponent.prototype.hideConfig = function () {
        this.configPanel = false;
    };
    ConstructorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-constructor-page',
            template: __webpack_require__(/*! ./constructor-page.component.html */ "./src/app/forms/constructor-page/constructor-page.component.html"),
            styles: [__webpack_require__(/*! ./constructor-page.component.scss */ "./src/app/forms/constructor-page/constructor-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _modules_admin_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpAdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _services_screenshot_service__WEBPACK_IMPORTED_MODULE_10__["ScreenshotService"]])
    ], ConstructorPageComponent);
    return ConstructorPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--block for snapshots-->\r\n <div class=\"form\" *ngIf=\"form\" id=\"screenshot\" #screenshot>\r\n   <form class=\"example-container\">\r\n       <!--container for row-->\r\n       <div class=\"row-container\" *ngFor=\"let row of form.rows; let rowIndex = index\">\r\n           <!--row-->\r\n           <div class=\"row\">\r\n               <!--container for cell-->\r\n               <div class=\"cell-container\" *ngFor=\"let cell of row.cells; let cellIndex = index\">\r\n                   <!--cell-->\r\n                   <div class=\"cell\">\r\n                       <div class=\"element flex-grow\" *ngFor=\"let elem of cell.elements; let elemIndex = index\">\r\n\r\n                           <!--if element is input TEXT-->\r\n                           <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <input matInput type=\"text\"\r\n                                      [value]=\"elem.config.value\"\r\n                                      [placeholder]=\"elem.config.placeholder\"\r\n                                      [disabled]=\"elem.config.disabled\"\r\n                                      [required]=\"elem.config.required\">\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is input NUMBER-->\r\n                           <mat-form-field *ngIf=\"elem.type==='number'\" class=\"example-full-width flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <input matInput type=\"number\"\r\n                                      [value]=\"elem.config.value\"\r\n                                      [placeholder]=\"elem.config.placeholder\"\r\n                                      [min]=\"elem.config.min\"\r\n                                      [max]=\"elem.config.max\"\r\n                                      [disabled]=\"elem.config.disabled\"\r\n                                      [required]=\"elem.config.required\">\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is input EMAIL-->\r\n                           <mat-form-field *ngIf=\"elem.type==='email'\" class=\"example-full-width flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <input matInput type=\"email\"\r\n                                      [value]=\"elem.config.value\"\r\n                                      [placeholder]=\"elem.config.placeholder\"\r\n                                      [disabled]=\"elem.config.disabled\"\r\n                                      [required]=\"elem.config.required\">\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is input PASSWORD-->\r\n                           <mat-form-field *ngIf=\"elem.type==='password'\" class=\"example-full-width flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <input matInput type=\"password\"\r\n                                      [value]=\"elem.config.value\"\r\n                                      [placeholder]=\"elem.config.placeholder\"\r\n                                      [disabled]=\"elem.config.disabled\"\r\n                                      [required]=\"elem.config.required\">\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is SLIDER-->\r\n                           <section *ngIf=\"elem.type==='slider'\" class=\"example-section flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <mat-slider\r\n                                       class=\"example-margin\"\r\n                                       [value]=\"elem.config.value\"\r\n                                       [invert]=\"elem.config.invert\"\r\n                                       [max]=\"elem.config.max\"\r\n                                       [min]=\"elem.config.min\"\r\n                                       [step]=\"elem.config.step\"\r\n                                       [thumbLabel]=\"elem.config.thumbLabel\"\r\n                                       [vertical]=\"elem.config.vertical\"\r\n                                       [disabled]=\"elem.config.disabled\">\r\n                               </mat-slider>\r\n                           </section>\r\n\r\n                           <!--if element is TOGGLE-->\r\n                           <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\" >\r\n\r\n                               <mat-slide-toggle class=\"example-margin\"\r\n                                                 [color]=\"elem.config.color\"\r\n                                                 [checked]=\"elem.config.checked\"\r\n                                                 [disabled]=\"elem.config.disabled\">\r\n                                   {{elem.config.label}}\r\n                               </mat-slide-toggle>\r\n                           </section>\r\n\r\n                           <!--if element is SELECT-->\r\n                           <mat-form-field *ngIf=\"elem.type==='select'\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <mat-select [disabled]=\"elem.config.disabled\"\r\n                                           [required]=\"elem.config.required\">\r\n                                   <mat-option *ngFor=\"let option of elem.config.options\" value=\"{{option}}\">\r\n                                       {{option}}\r\n                                   </mat-option>\r\n                               </mat-select>\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is input CHECKBOX-->\r\n                           <section class=\"example-section example-section-checkbox\"\r\n                                    *ngIf=\"elem.type==='checkbox'\"\r\n                                    [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <mat-checkbox *ngFor=\"let option of elem.config.options\" class=\"example-margin example-margin-checkbox\"\r\n                                             [value]=\"option\"\r\n                                             [color]=\"elem.config.color\"\r\n                                             [disabled]=\"elem.config.disabled\"\r\n                                             [required]=\"elem.config.required\">{{option}}</mat-checkbox>\r\n                           </section>\r\n\r\n                           <!--if element is input RADIO-->\r\n                           <mat-radio-group class=\"example-radio-group\"\r\n                                            *ngIf=\"elem.type==='radio'\"\r\n                                            [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <mat-radio-button class=\"example-radio-button\" *ngFor=\"let option of elem.config.options\"\r\n                                                 [value]=\"option\"\r\n                                                 [color]=\"elem.config.color\"\r\n                                                 [disabled]=\"elem.config.disabled\"\r\n                                                 [required]=\"elem.config.required\">{{option}}</mat-radio-button>\r\n                           </mat-radio-group>\r\n\r\n                           <!--if element is TEXTAREA-->\r\n                           <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width flex-grow\">\r\n                               <mat-label>{{elem.config.label}}</mat-label>\r\n                               <textarea matInput\r\n                                         [value]=\"elem.config.value\"\r\n                                         [placeholder]=\"elem.config.placeholder\"\r\n                                         [disabled]=\"elem.config.disabled\"></textarea>\r\n                           </mat-form-field>\r\n\r\n                           <!--if element is BUTTON-->\r\n                           <div *ngIf=\"elem.type==='button'\" class=\"example-button-row flex-grow\">\r\n                               <button mat-raised-button\r\n                                       [color]=\"elem.config.color\"\r\n                                       [disabled]=\"elem.config.disabled\">{{elem.config.value}}</button>\r\n                           </div>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n   </form>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FormScreenshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormScreenshotComponent", function() { return FormScreenshotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_screenshot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/screenshot.service */ "./src/app/forms/services/screenshot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormScreenshotComponent = /** @class */ (function () {
    function FormScreenshotComponent(screenshotService) {
        this.screenshotService = screenshotService;
    }
    FormScreenshotComponent.prototype.ngOnInit = function () { };
    FormScreenshotComponent.prototype.ngAfterViewInit = function () {
        this.screenshotService.HTMLElement = this.screenshot.nativeElement;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormScreenshotComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('screenshot'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormScreenshotComponent.prototype, "screenshot", void 0);
    FormScreenshotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-screenshot',
            template: __webpack_require__(/*! ./form-screenshot.component.html */ "./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.html"),
            styles: [__webpack_require__(/*! ../constructor-page.component.scss */ "./src/app/forms/constructor-page/constructor-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_screenshot_service__WEBPACK_IMPORTED_MODULE_1__["ScreenshotService"]])
    ], FormScreenshotComponent);
    return FormScreenshotComponent;
}());



/***/ }),

/***/ "./src/app/forms/constructor-page/nav-config/nav-config.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-config/nav-config.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"config.hasOwnProperty('label')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"text\" placeholder=\"Label\" [(ngModel)]=\"config.label\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('value')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"text\" placeholder=\"Value\" [(ngModel)]=\"config.value\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('placeholder')\">\r\n    <mat-form-field class=\"example-margin\" >\r\n        <input matInput type=\"text\" placeholder=\"Placeholder\" [(ngModel)]=\"config.placeholder\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('min')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"config.min\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('max')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"config.max\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('step')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"config.step\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('tickInterval')\">\r\n    <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"config.tickInterval\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('color')\">\r\n    <mat-form-field>\r\n        <mat-select [(ngModel)]=\"config.color\" placeholder=\"Color\">\r\n            <mat-option value=\"primary\">primary</mat-option>\r\n            <mat-option value=\"warn\">warn</mat-option>\r\n            <mat-option value=\"accent\">accent</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('thumbLabel')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.thumbLabel\">Show thumb label</mat-checkbox>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('vertical')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.vertical\">Vertical</mat-checkbox>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('invert')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.invert\">Inverted</mat-checkbox>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('checked')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.checked\">Checked</mat-checkbox>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('disabled')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.disabled\">Disabled</mat-checkbox>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"config.hasOwnProperty('required')\">\r\n    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"config.required\">Required</mat-checkbox>\r\n</mat-card>\r\n\r\n<div class=\"options\" *ngIf=\"config.hasOwnProperty('options')\">\r\n    <h4>Options</h4>\r\n    <mat-card *ngFor=\"let option of config.options; let i = index; trackBy: customTrackBy\">\r\n        <mat-form-field class=\"example-margin\">\r\n            <input matInput type=\"text\" placeholder=\"Text\" [(ngModel)]=\"config.options[i]\">\r\n        </mat-form-field>\r\n        <button *ngIf=\"config.options.length > 1\" mat-icon-button color=\"primary\" (click)=\"delOption(i)\">\r\n            <mat-icon>remove_circle</mat-icon>\r\n        </button>\r\n    </mat-card>\r\n    <button mat-icon-button color=\"primary\" (click)=\"addOption()\">\r\n        <mat-icon>add_circle</mat-icon>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/constructor-page/nav-config/nav-config.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-config/nav-config.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 16px;\n  padding: 8px;\n  height: 60px;\n  font-size: 18px;\n  font-weight: normal;\n  box-shadow: 1px 1px 10px .1px #e6e6e6 !important; }\n\n.options {\n  margin: 16px;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: normal;\n  box-shadow: 1px 1px 10px .1px #e6e6e6 !important;\n  background: white; }\n\n.options h4 {\n    font-size: 18px;\n    font-weight: normal; }\n\n.options .mat-card {\n    margin: 5px 2px;\n    padding: 10px 4px 0 10px;\n    font-size: 18px;\n    font-weight: normal;\n    box-shadow: none !important;\n    border: 1px solid #e6e6e6; }\n\n.options .mat-card ::ng-deep .mat-form-field-infix {\n      width: 140px !important; }\n\n.options button {\n    padding: 0;\n    width: 25px;\n    height: 25px;\n    fort-size: 14px;\n    line-height: 14px; }\n"

/***/ }),

/***/ "./src/app/forms/constructor-page/nav-config/nav-config.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-config/nav-config.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavConfigComponent", function() { return NavConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavConfigComponent = /** @class */ (function () {
    function NavConfigComponent(broadcast) {
        var _this = this;
        this.broadcast = broadcast;
        this.broadcast.subscriberActivationConfig()
            .subscribe(function (config) {
            _this.config = config;
            console.log(_this.config);
            console.log(_this.config.hasOwnProperty('options'));
        });
    }
    NavConfigComponent.prototype.ngOnInit = function () {
        this.config = {
            options: []
        };
    };
    NavConfigComponent.prototype.addOption = function () {
        this.config.options.push('text');
    };
    NavConfigComponent.prototype.delOption = function (index) {
        this.config.options.splice(index, 1);
    };
    // for ngModel in array
    NavConfigComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    NavConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-config',
            template: __webpack_require__(/*! ./nav-config.component.html */ "./src/app/forms/constructor-page/nav-config/nav-config.component.html"),
            styles: [__webpack_require__(/*! ./nav-config.component.scss */ "./src/app/forms/constructor-page/nav-config/nav-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_broadcast_service__WEBPACK_IMPORTED_MODULE_1__["BroadcastService"]])
    ], NavConfigComponent);
    return NavConfigComponent;
}());



/***/ }),

/***/ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"addElem(elements.text)\">\r\n    <mat-form-field>\r\n        <mat-label>Text</mat-label>\r\n        <input matInput [disabled]=\"true\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.number)\">\r\n    <mat-form-field>\r\n        <mat-label>Number</mat-label>\r\n        <input matInput [disabled]=\"true\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.email)\">\r\n    <mat-form-field>\r\n        <mat-label>Email</mat-label>\r\n        <input matInput [disabled]=\"true\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.password)\">\r\n    <mat-form-field>\r\n        <mat-label>Password</mat-label>\r\n        <input matInput [disabled]=\"true\">\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.select)\">\r\n    <mat-form-field>\r\n        <mat-label>Select</mat-label>\r\n        <mat-select [disabled]=\"true\">\r\n            <mat-option>\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.textarea)\">\r\n    <mat-form-field>\r\n        <mat-label>Textarea</mat-label>\r\n        <textarea rows=\"1\" matInput [disabled]=\"true\"></textarea>\r\n    </mat-form-field>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.slider)\">\r\n    <mat-slider [disabled]=\"true\"></mat-slider>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.radio)\">\r\n    <mat-radio-group>\r\n        <mat-radio-button [disabled]=\"true\" checked>Radio</mat-radio-button>\r\n    </mat-radio-group>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.toggle)\">\r\n    <mat-slide-toggle [disabled]=\"true\">Slide me!</mat-slide-toggle>\r\n</mat-card>\r\n\r\n<mat-card (click)=\"addElem(elements.checkbox)\">\r\n    <mat-checkbox [disabled]=\"true\">Checkbox</mat-checkbox>\r\n</mat-card>\r\n\r\n\r\n<mat-card (click)=\"addElem(elements.button)\">\r\n    <button mat-raised-button [disabled]=\"true\">Button</button>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 16px;\n  padding: 8px;\n  height: 60px;\n  font-size: 18px;\n  font-weight: normal;\n  box-shadow: 1px 1px 10px .1px #e6e6e6 !important; }\n\n.activeElem {\n  box-shadow: 1px 1px 4px .1px #3f51b5 !important; }\n\n.activeElem:hover {\n    cursor: pointer; }\n\n.activeElem:active {\n    box-shadow: 1px 1px 2px .1px #3f51b5 !important; }\n\ninput:hover,\nmat-select:hover,\ntextarea:hover,\nmat-slider:hover,\nmat-radio-button:hover,\nmat-slide-toggle:hover,\nmat-checkbox:hover,\nmat-label:hover,\nbutton:hover {\n  cursor: pointer; }\n\nmat-form-field {\n  width: 100%; }\n\nmat-form-field {\n  padding: 8px; }\n\nmat-radio-button {\n  padding: 5px; }\n\nbutton {\n  font-size: 18px;\n  font-weight: normal;\n  background-color: #000;\n  color: #fff; }\n\nmat-label {\n  color: #000; }\n\n/* To change the color of underline: */\n\n::ng-deep .mat-form-field-underline .mat-form-field-ripple {\n  color: red !important;\n  background-color: black !important; }\n\n.mat-input-flex.mat-form-field-flex {\n  border: 1px solid black !important; }\n"

/***/ }),

/***/ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NavConstructorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavConstructorComponent", function() { return NavConstructorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// templates for each of the element
var elements = {
    text: {
        type: 'text',
        handlers: [],
        config: {
            label: 'Name',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    email: {
        type: 'email',
        handlers: [],
        config: {
            label: 'Email',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    number: {
        type: 'number',
        handlers: [],
        config: {
            label: 'Price',
            value: '',
            placeholder: '',
            min: 3,
            max: 10,
            disabled: false,
            required: false
        }
    },
    password: {
        type: 'password',
        handlers: [],
        config: {
            label: 'Password',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    slider: {
        type: 'slider',
        handlers: [],
        config: {
            label: 'Level',
            value: 120,
            invert: false,
            min: 5,
            max: 350,
            step: 5,
            thumbLabel: false,
            vertical: false,
            disabled: false
        }
    },
    toggle: {
        type: 'toggle',
        handlers: [],
        config: {
            label: 'Click me!',
            color: 'primary',
            checked: false,
            disabled: false
        }
    },
    select: {
        type: 'select',
        handlers: [],
        config: {
            label: 'Choose',
            value: '',
            placeholder: '',
            disabled: false,
            required: false,
            options: ['1', '2']
        }
    },
    textarea: {
        type: 'textarea',
        handlers: [],
        config: {
            label: 'Description',
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    button: {
        type: 'button',
        handlers: [],
        config: {
            value: 'button',
            type: '',
            color: 'primary',
            disabled: false
        }
    },
    radio: {
        type: 'radio',
        handlers: [],
        config: {
            label: 'Radio:',
            color: 'warn',
            vertical: false,
            disabled: false,
            required: false,
            options: ['1', '2', '3']
        }
    },
    checkbox: {
        type: 'checkbox',
        handlers: [],
        config: {
            label: 'Checkbox:',
            color: 'accent',
            vertical: false,
            disabled: false,
            required: false,
            options: ['1', '2', '3']
        }
    }
};
var NavConstructorComponent = /** @class */ (function () {
    function NavConstructorComponent(broadcast) {
        var _this = this;
        this.broadcast = broadcast;
        this.broadcast.subscriberActivationConstructor()
            .subscribe(function (state) {
            _this.stateConstructor = state;
            constructorActivation(state);
        });
    }
    NavConstructorComponent.prototype.ngOnInit = function () {
        this.elements = elements;
    };
    NavConstructorComponent.prototype.addElem = function (elem) {
        if (this.stateConstructor) {
            this.stateConstructor = false;
            constructorActivation(this.stateConstructor);
            this.broadcast.sendElem(elem);
        }
    };
    NavConstructorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-constructor',
            template: __webpack_require__(/*! ./nav-constructor.component.html */ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.html"),
            styles: [__webpack_require__(/*! ./nav-constructor.component.scss */ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_broadcast_service__WEBPACK_IMPORTED_MODULE_1__["BroadcastService"]])
    ], NavConstructorComponent);
    return NavConstructorComponent;
}());

// add or remove class
function constructorActivation(state) {
    var constructor = Array.from(document.querySelectorAll('.mat-card'));
    constructor.forEach(function (elem) {
        if (state) {
            elem.classList.add('activeElem');
        }
        else {
            elem.classList.remove('activeElem');
        }
    });
}


/***/ }),

/***/ "./src/app/forms/forms-page.module.ts":
/*!********************************************!*\
  !*** ./src/app/forms/forms-page.module.ts ***!
  \********************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modules_material_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/material/material */ "./src/app/modules/material/material.ts");
/* harmony import */ var _pipes_element_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/element-type.pipe */ "./src/app/forms/pipes/element-type.pipe.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
/* harmony import */ var _services_socket_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/socket-service.service */ "./src/app/forms/services/socket-service.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _constructor_page_nav_constructor_nav_constructor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constructor-page/nav-constructor/nav-constructor.component */ "./src/app/forms/constructor-page/nav-constructor/nav-constructor.component.ts");
/* harmony import */ var _preview_page_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preview-page/nav-list/nav-list.component */ "./src/app/forms/preview-page/nav-list/nav-list.component.ts");
/* harmony import */ var _constructor_page_nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constructor-page/nav-config/nav-config.component */ "./src/app/forms/constructor-page/nav-config/nav-config.component.ts");
/* harmony import */ var _interview_page_interview_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interview-page/interview-page.component */ "./src/app/forms/interview-page/interview-page.component.ts");
/* harmony import */ var _preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./preview-page/preview-page.component */ "./src/app/forms/preview-page/preview-page.component.ts");
/* harmony import */ var _constructor_page_constructor_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constructor-page/constructor-page.component */ "./src/app/forms/constructor-page/constructor-page.component.ts");
/* harmony import */ var _services_screenshot_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/screenshot.service */ "./src/app/forms/services/screenshot.service.ts");
/* harmony import */ var _options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../options/confirm-removing-form/confirm-removing-form.component */ "./src/app/options/confirm-removing-form/confirm-removing-form.component.ts");
/* harmony import */ var _constructor_page_form_screenshot_form_screenshot_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./constructor-page/form-screenshot/form-screenshot.component */ "./src/app/forms/constructor-page/form-screenshot/form-screenshot.component.ts");
/* harmony import */ var _options_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../options/snackbar/snackbar.component */ "./src/app/options/snackbar/snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import {MainNavComponent} from './main-nav/main-nav.component';










var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _constructor_page_nav_constructor_nav_constructor_component__WEBPACK_IMPORTED_MODULE_11__["NavConstructorComponent"],
                _preview_page_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_12__["NavListComponent"],
                _constructor_page_nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_13__["NavConfigComponent"],
                _pipes_element_type_pipe__WEBPACK_IMPORTED_MODULE_7__["ElementTypePipe"],
                _interview_page_interview_page_component__WEBPACK_IMPORTED_MODULE_14__["InterviewPageComponent"],
                _preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_15__["PreviewPageComponent"],
                _constructor_page_constructor_page_component__WEBPACK_IMPORTED_MODULE_16__["ConstructorPageComponent"],
                _options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmRemovingFormComponent"],
                _constructor_page_form_screenshot_form_screenshot_component__WEBPACK_IMPORTED_MODULE_19__["FormScreenshotComponent"],
                _options_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_20__["SnackbarComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _modules_material_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [
                _services_broadcast_service__WEBPACK_IMPORTED_MODULE_8__["BroadcastService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"], { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_5__["GestureConfig"] },
                _services_socket_service_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"],
                _services_screenshot_service__WEBPACK_IMPORTED_MODULE_17__["ScreenshotService"],
                _constructor_page_form_screenshot_form_screenshot_component__WEBPACK_IMPORTED_MODULE_19__["FormScreenshotComponent"],
                _options_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_20__["SnackbarComponent"]
            ],
            entryComponents: [_options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmRemovingFormComponent"]],
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/app/forms/interview-page/interview-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/forms/interview-page/interview-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar fxLayout=\"row\" *ngIf=\"form\" class=\"finishToolbar\">\r\n    <div>\r\n    <button (click)=\"endInterview()\" fxLayoutAlign=\"center\"\r\n            fxFlex.lt-md=\"0 1 150px\"\r\n            fxFlex.md=\"200px\"\r\n            fxFlex.gt-md=\"260px\"\r\n            mat-raised-button color=\"primary\" class=\"new-form-button\">{{buttonInscription}}\r\n    </button>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<div class=\"form\" *ngIf=\"form\">\r\n    <!--<h2 class=\"mat-h2\">{{form.title}}</h2>-->\r\n    <form class=\"example-container\" [formGroup]=\"options\">\r\n        <fieldset class=\"form\">\r\n            <legend>\r\n                <h2>{{form.title}}</h2>\r\n            </legend>\r\n            <!--container for row-->\r\n            <div class=\"row-container\" *ngFor=\"let row of form.rows; let rowIndex = index\">\r\n                <!--row-->\r\n                <div class=\"row\">\r\n\r\n                    <!--container for cell-->\r\n                    <div class=\"cell-container\" *ngFor=\"let cell of row.cells; let cellIndex = index\">\r\n                        <!--cell-->\r\n                        <div class=\"cell\">\r\n                            <div class=\"element flex-grow\" *ngFor=\"let elem of cell.elements; let elemIndex = index\">\r\n                                <!--<div  [innerHtml]=\"cell.element | type\"></div>-->\r\n\r\n                                <!--if element is input TEXT-->\r\n                                <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width form-element flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <input matInput type=\"text\"\r\n                                            [value]=\"elem.config.value\"\r\n                                            [placeholder]=\"elem.config.placeholder\"\r\n                                            [disabled]=\"elem.config.disabled\"\r\n                                            [required]=\"elem.config.required\"\r\n                                    >\r\n                                </mat-form-field>\r\n\r\n                                <!--if element is input NUMBER-->\r\n                                <mat-form-field *ngIf=\"elem.type==='number'\" class=\"example-full-width form-element flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <input matInput type=\"number\"\r\n                                            [value]=\"elem.config.value\"\r\n                                            [placeholder]=\"elem.config.placeholder\"\r\n                                            [min]=\"elem.config.min\"\r\n                                            [max]=\"elem.config.max\"\r\n                                            [disabled]=\"elem.config.disabled\"\r\n                                            [required]=\"elem.config.required\"\r\n                                    >\r\n                                            \r\n                                </mat-form-field>\r\n\r\n                                <!--if element is input EMAIL-->\r\n                                <mat-form-field *ngIf=\"elem.type==='email'\" class=\"example-full-width form-element flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <input matInput type=\"email\"\r\n                                            [value]=\"elem.config.value\"\r\n                                            [placeholder]=\"elem.config.placeholder\"\r\n                                            [disabled]=\"elem.config.disabled\"\r\n                                            [required]=\"elem.config.required\"\r\n                                    >\r\n                                </mat-form-field>\r\n\r\n                                <!--if element is input PASSWORD-->\r\n                                <mat-form-field *ngIf=\"elem.type==='password'\" class=\"example-full-width form-element flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <input matInput type=\"password\"\r\n                                            [value]=\"elem.config.value\"\r\n                                            [placeholder]=\"elem.config.placeholder\"\r\n                                            [disabled]=\"elem.config.disabled\"\r\n                                            [required]=\"elem.config.required\"\r\n                                    >\r\n                                </mat-form-field>\r\n\r\n                                <!--if element is SLIDER-->\r\n                                <section *ngIf=\"elem.type==='slider'\" class=\"example-section flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <mat-slider\r\n                                                class=\"example-margin form-element\"\r\n                                                [value]=\"elem.config.value\"\r\n                                                [invert]=\"elem.config.invert\"\r\n                                                [max]=\"elem.config.max\"\r\n                                                [min]=\"elem.config.min\"\r\n                                                [step]=\"elem.config.step\"\r\n                                                [thumbLabel]=\"elem.config.thumbLabel\"\r\n                                                [vertical]=\"elem.config.vertical\"\r\n                                                [disabled]=\"elem.config.disabled\"\r\n                                    >\r\n                                    </mat-slider>\r\n                                </section>\r\n\r\n                                <!--if element is TOGGLE-->\r\n                                <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\" >\r\n\r\n                                    <mat-slide-toggle class=\"example-margin form-element\"\r\n                                            [color]=\"elem.config.color\"\r\n                                            [checked]=\"elem.config.checked\"\r\n                                            [disabled]=\"elem.config.disabled\"\r\n                                    >\r\n                                        {{elem.config.label}}\r\n                                    </mat-slide-toggle>\r\n                                </section>\r\n\r\n                                <!--if element is SELECT-->\r\n                                <mat-form-field *ngIf=\"elem.type==='select'\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <select matNativeControl  [disabled]=\"elem.config.disabled\"\r\n                                                [required]=\"elem.config.required\"\r\n                                                class=\"form-element\"\r\n                                    >\r\n                                        <option *ngFor=\"let option of elem.config.options\" value=\"{{option}}\">\r\n                                            {{option}}\r\n                                        </option>\r\n                                    </select>\r\n                                </mat-form-field>\r\n\r\n                                <!--if element is input CHECKBOX-->\r\n                                <section class=\"example-section example-section-checkbox\" *ngIf=\"elem.type==='checkbox'\" \r\n                                [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <mat-checkbox *ngFor=\"let option of elem.config.options\" class=\"example-margin example-margin-checkbox form-element\"\r\n                                                    [value]=\"option\"\r\n                                                    [color]=\"elem.config.color\"\r\n                                                    [disabled]=\"elem.config.disabled\"\r\n                                                    [required]=\"elem.config.required\"\r\n                                    >\r\n                                        {{option}}\r\n                                    </mat-checkbox>\r\n                                </section>\r\n\r\n                                <!--if element is input RADIO-->\r\n                                <mat-radio-group class=\"example-radio-group\" *ngIf=\"elem.type==='radio'\"\r\n                                [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <mat-radio-button class=\"example-radio-button form-element\" *ngFor=\"let option of elem.config.options\"\r\n                                                        [value]=\"option\"\r\n                                                        [color]=\"elem.config.color\"\r\n                                                        [disabled]=\"elem.config.disabled\"\r\n                                                        [required]=\"elem.config.required\">\r\n                                        {{option}}\r\n                                    </mat-radio-button>\r\n                                </mat-radio-group>\r\n\r\n                                <!--if element is TEXTAREA-->\r\n                                <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width form-element flex-grow\" >\r\n                                    <mat-label>{{elem.config.label}}</mat-label>\r\n                                    <textarea matInput\r\n                                                [value]=\"elem.config.value\"\r\n                                                [placeholder]=\"elem.config.placeholder\"\r\n                                                [disabled]=\"elem.config.disabled\"\r\n                                    ></textarea>\r\n                                </mat-form-field>\r\n\r\n                                <!--if element is BUTTON-->\r\n                                <div *ngIf=\"elem.type==='button'\" class=\"example-button-row form-element flex-grow\" >\r\n                                    <button mat-raised-button\r\n                                            [color]=\"elem.config.color\"\r\n                                            [disabled]=\"elem.config.disabled\">{{elem.config.value}}</button>\r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> \r\n        </fieldset>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/forms/interview-page/interview-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/forms/interview-page/interview-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hovered {\n  outline: 4px solid deeppink; }\n\n.sidenav {\n  width: 50%; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  background: inherit; }\n\n.mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #fff; }\n\n.mat-list, .mat-nav-list, .mat-selection-list {\n  padding-top: 0; }\n\n.mat-toolbar .mat-toolbar-single-row {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: #fff !important;\n  font-size: 20px;\n  font-weight: normal; }\n\n.new-form-button, .save-form-button {\n  margin-right: 10px; }\n\n.flex-grow {\n  flex-grow: 1; }\n\n.flex-grow button {\n    width: 100%; }\n\n.form .example-container {\n  margin: 10px auto;\n  width: 70%;\n  min-height: 50px;\n  padding: 5px; }\n\n.form .example-container fieldset {\n    margin: 0;\n    border: 1px solid #c9c9c9;\n    border-radius: 5px; }\n\n.form .example-container fieldset legend {\n      padding: 10px;\n      color: #464646; }\n\n.form .example-container fieldset legend h2 {\n        margin: 5px 0; }\n\n.form .example-container .row-container {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.form .example-container .row-container .row {\n      display: flex;\n      margin: 5px;\n      width: 100%;\n      min-height: 20px;\n      align-items: center; }\n\n.form .example-container .row-container .row .cell-container {\n        display: flex;\n        width: 100%;\n        margin-right: 5px;\n        align-items: center;\n        justify-content: center; }\n\n.form .example-container .row-container .row .cell-container .cell {\n          display: flex;\n          margin: 5px;\n          width: 100%;\n          min-height: 20px; }\n\n.form .example-container .row-container .row .cell-container .cell .element {\n            display: flex;\n            align-items: center; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field {\n              margin: 0 15px; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field ::ng-deep .mat-form-field-infix {\n                width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slider {\n              width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slide-toggle {\n              margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-select {\n              width: 140px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-group {\n              margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-button {\n              margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical {\n              display: block !important;\n              text-align: left; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical .mat-radio-button, .form .example-container .row-container .row .cell-container .cell .element .vertical .mat-checkbox {\n                margin: 10px;\n                display: block; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-section-checkbox {\n              display: flex;\n              align-content: center;\n              align-items: center;\n              margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-margin-checkbox {\n              margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-button-row {\n              margin: 5px; }\n\n.form .example-container .row-container .row .cell-container .cell .vertical {\n            display: block !important;\n            text-align: left; }\n\n.form .example-container .row-container .row .cell-container .cell .vertical .mat-radio-button, .form .example-container .row-container .row .cell-container .cell .vertical .mat-checkbox {\n              margin: 10px;\n              display: block; }\n\n.finishToolbar {\n  justify-content: flex-end; }\n\nselect {\n  width: 180px !important; }\n"

/***/ }),

/***/ "./src/app/forms/interview-page/interview-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/forms/interview-page/interview-page.component.ts ***!
  \******************************************************************/
/*! exports provided: InterviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewPageComponent", function() { return InterviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
/* harmony import */ var _services_socket_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/socket-service.service */ "./src/app/forms/services/socket-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { userInfo } from 'os';
var InterviewPageComponent = /** @class */ (function () {
    function InterviewPageComponent(breakpoint, fb, _http, router, broadcast, socketService, snackBar) {
        this.breakpoint = breakpoint;
        this.fb = fb;
        this._http = _http;
        this.router = router;
        this.broadcast = broadcast;
        this.socketService = socketService;
        this.snackBar = snackBar;
        this.mouseEventOptions = {
            view: window,
            bubbles: true,
            cancelable: true,
            which: 1,
        };
        this.elementConfigs = [];
        this.isSpectator = false;
        this.buttonInscription = 'Finish interview';
        this._url = '../assets/form.json';
        this._formData = null;
        this.isHandset$ = this.breakpoint.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }
    InterviewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.broadcast.selectedForm;
        this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
        if (!this.form) {
            this.router.navigate(['/main']);
            return;
        }
        if (!this.currentUser) {
            this.currentUser = {
                fullname: 'Anonymous Candidate',
                role: 'candidate'
            };
        }
        this.socketService.connectToSockets();
        // decide whether we should create a new interview or connect to
        // an existing one
        if ((this.currentUser.role === 'master' || this.currentUser.role === 'interviewer')
            && !this.socketService.interviewId) {
            var interviewData = {
                interviewer: this.currentUser.fullname,
                interviewId: Math.round(Math.random() * 10000),
                interviewForm: this.form,
                formName: this.form.title,
                creationTime: this.addCreationTime()
            };
            this.socketService.initiateInterview(interviewData);
        }
        else {
            this.isSpectator = true;
            this.buttonInscription = 'Exit interview';
            this.socketService.joinInterview(this.currentUser);
        }
        window.onbeforeunload = function () { return _this.ngOnDestroy(); };
    };
    InterviewPageComponent.prototype.ngAfterViewInit = function () {
        if (!this.form) {
            this.router.navigate(['/main']);
        }
        else {
            this.addListeners();
            this.getElementConfigs();
            this.unsubClick = this.clickEventEmitter();
            this.unsubMouseMove = this.mouseMoveEmitter();
            this.unsubFocus = this.focusEmitter();
            this.unsubKeyboard = this.keyboardEventEmitter();
            this.unsubOnChange = this.onChangeEventEmitter();
            this.unsubConnectionMessage = this.showConnectionMessage();
            this.unsubDisconnectTrigger = this.disconnectInterview();
        }
    };
    InterviewPageComponent.prototype.endInterview = function () {
        if (this.currentUser.role === 'candidate') {
            this.router.navigate(['/main']);
        }
        else {
            this.router.navigate(['/preview']);
        }
    };
    InterviewPageComponent.prototype.disconnectInterview = function () {
        var _this = this;
        return this.socketService.finishInterview()
            .subscribe(function (triggerFinish) {
            setTimeout(function () { return _this.endInterview(); }, 2000);
        });
    };
    InterviewPageComponent.prototype.addCreationTime = function () {
        var timezoneOffset = (new Date()).getTimezoneOffset() * 60000;
        var dateNow = (new Date(Date.now() - timezoneOffset)).toISOString();
        var day = dateNow.slice(8, 10);
        var month = dateNow.slice(5, 7);
        var time = dateNow.slice(11, 16);
        return day + "." + month + " " + time;
    };
    InterviewPageComponent.prototype.showConnectionMessage = function () {
        var _this = this;
        return this.socketService.showMessage()
            .subscribe(function (message) {
            _this.snackBar.open(message, ' ', {
                duration: 3000
            });
        });
    };
    // primaly written to be able to change slider value
    InterviewPageComponent.prototype.getElementConfigs = function () {
        var form = this.form;
        for (var i = 0; i < form.rows.length; i++) {
            for (var j = 0; j < form.rows[i].cells.length; j++) {
                for (var k = 0; k < form.rows[i].cells[j].elements.length; k++) {
                    var elem = form.rows[i].cells[j].elements[k];
                    this.elementConfigs.push(elem.config);
                }
            }
        }
    };
    InterviewPageComponent.prototype.addListeners = function () {
        var _this = this;
        this.formElements = document.querySelectorAll('.form-element');
        this.formElements.forEach(function (element, index) {
            element.addEventListener('click', _this.clickEventInjector(index));
            element.addEventListener('mouseenter', _this.mouseMoveEventInjector(index));
            element.addEventListener('mouseleave', _this.mouseMoveEventInjector(index));
            element.addEventListener('focus', _this.focusEventInjector(index));
            element.addEventListener('keypress', _this.keyEventInjector(index));
            element.addEventListener('keyup', _this.keyUpEventInjector(index));
            element.addEventListener('change', _this.onChangeEventInjector(index));
        });
    };
    InterviewPageComponent.prototype.clickEventInjector = function (index) {
        return this.catchClick.bind(this, index);
    };
    InterviewPageComponent.prototype.mouseMoveEventInjector = function (index) {
        return this.catchMouseMove.bind(this, index);
    };
    InterviewPageComponent.prototype.focusEventInjector = function (index) {
        return this.catchFocus.bind(this, index);
    };
    InterviewPageComponent.prototype.keyEventInjector = function (index) {
        return this.catchTextInput.bind(this, index);
    };
    InterviewPageComponent.prototype.keyUpEventInjector = function (index) {
        return this.catchSpecialKeys.bind(this, index);
    };
    InterviewPageComponent.prototype.onChangeEventInjector = function (index) {
        return this.catchOnChange.bind(this, index);
    };
    //////////// event emitters  ////////////////////
    InterviewPageComponent.prototype.clickEventEmitter = function () {
        var _this = this;
        return this.socketService.getClickEvent()
            .subscribe(function (event) {
            var targetElement = _this.formElements[event.elementIndex];
            var mouseEvent = new MouseEvent('click', _this.mouseEventOptions);
            if (event.sliderValue) {
                if (targetElement && targetElement.tagName === 'MAT-SLIDER') {
                    _this.elementConfigs[event.elementIndex].value = event.sliderValue;
                }
                return;
            }
            targetElement.querySelector(event.targetElement).dispatchEvent(mouseEvent);
        });
    };
    InterviewPageComponent.prototype.mouseMoveEmitter = function () {
        var _this = this;
        return this.socketService.getMouseMove()
            .subscribe(function (event) {
            if (event.eventType === 'mouseenter') {
                if (_this.lastHoveredTarget === event.targetElement) {
                    return;
                }
                _this.lastHoveredTarget = event.targetElement;
                _this.formElements[event.targetElement].classList.add('hovered');
            }
            else {
                _this.lastHoveredTarget = -1;
                _this.formElements[event.targetElement].classList.remove('hovered');
            }
        });
    };
    InterviewPageComponent.prototype.focusEmitter = function () {
        var _this = this;
        return this.socketService.getFocusEvent()
            .subscribe(function (event) {
            var elementToFocus = _this.formElements[event.elementIndex].querySelector(event.targetElement);
            if (elementToFocus) {
                elementToFocus.focus();
            }
            else {
                _this.formElements[event.elementIndex].focus();
            }
        });
    };
    InterviewPageComponent.prototype.keyboardEventEmitter = function () {
        var _this = this;
        return this.socketService.getKeyboardEvent()
            .subscribe(function (event) {
            var targetElement = _this.formElements[event.targetElementIndex];
            var changeEvent = new Event('change');
            targetElement.querySelector(event.elementType).value = event.newValue;
            targetElement.querySelector(event.elementType).dispatchEvent(changeEvent);
        });
    };
    InterviewPageComponent.prototype.onChangeEventEmitter = function () {
        var _this = this;
        return this.socketService.getOnChangeEvent()
            .subscribe(function (event) {
            var targetElement = _this.formElements[event.targetElementIndex];
            // angular material places target elements differently
            if (event.targetElement === 'select') {
                targetElement.value = event.newValue;
            }
            else {
                targetElement.querySelector(event.targetElement).value = event.newValue;
            }
        });
    };
    //////////// event catchers  ////////////////////
    InterviewPageComponent.prototype.catchClick = function (elementIndex, event) {
        var shouldBeSent = true;
        var eventInfo = {
            elementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase(),
            sliderValue: null
        };
        // if event initiated programatically don't react to it
        if (!event.isTrusted) {
            shouldBeSent = false;
        }
        if (event.target.tagName === 'SELECT') {
            shouldBeSent = false;
        }
        if (event.target.tagName === 'MAT-SLIDER') {
            eventInfo.sliderValue = event.target.getAttribute('aria-valuenow');
        }
        if (shouldBeSent) {
            this.socketService.sendClick(eventInfo);
        }
    };
    InterviewPageComponent.prototype.catchMouseMove = function (elementIndex, event) {
        var eventInfo = {
            targetElement: elementIndex,
            eventType: event.type
        };
        this.socketService.sendMouseMovement(eventInfo);
    };
    InterviewPageComponent.prototype.catchFocus = function (elementIndex, event) {
        var eventInfo = {
            elementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase()
        };
        this.socketService.sendFocusEvent(eventInfo);
    };
    InterviewPageComponent.prototype.catchTextInput = function (elementIndex, event) {
        var newValue = event.target.value + event.key;
        // prevents typing 'Enter' into the input
        // catchOnChange already cares about datepickers
        if (event.key === 'Enter' || event.target.type === 'date') {
            return;
        }
        if (event.target.type === 'number'
            && (isNaN(newValue) || event.key === '.' || event.key === ' ')) {
            return;
        }
        this.keyboardEventHandler(event, newValue, elementIndex);
    };
    InterviewPageComponent.prototype.catchSpecialKeys = function (elementIndex, event) {
        console.log(event);
        if (!event.key) {
            return;
        }
        else if (event.key === 'Backspace'
            || event.key === 'Delete'
            || event.ctrlKey
            || event.key.slice(0, 5) === 'Arrow') {
            var newValue = event.target.value;
            this.keyboardEventHandler(event, newValue, elementIndex);
            // process focus caused by 'Tab' key
        }
        else if (event.key === 'Tab') {
            this.catchFocus(elementIndex, event);
        }
    };
    InterviewPageComponent.prototype.keyboardEventHandler = function (event, newValue, elementIndex) {
        var switchEventInfo = {
            elementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase()
        };
        // if these elements were interacted by keyboard
        if (event.key.slice(0, 5) === 'Arrow' && event.target.type === 'radio') {
            this.socketService.sendClick(switchEventInfo);
            return;
        }
        if ((event.target.type === 'checkbox' || event.target.type === 'radio')
            && event.key === ' ') {
            this.socketService.sendClick(switchEventInfo);
            return;
        }
        if (event.target.tagName === 'MAT-SLIDER'
            || event.target.tagName === 'SELECT') {
            return;
        }
        var eventInfo = {
            targetElementIndex: elementIndex,
            newValue: newValue,
            elementType: event.target.tagName.toLowerCase()
        };
        this.socketService.sendKeysEvent(eventInfo);
    };
    InterviewPageComponent.prototype.catchOnChange = function (elementIndex, event) {
        var eventInfo = {
            targetElementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase(),
            newValue: event.target.value
        };
        this.socketService.sendOnChangetEvent(eventInfo);
    };
    InterviewPageComponent.prototype.ngOnDestroy = function () {
        if (!this.currentUser) {
            return;
        }
        else if (this.currentUser.role === 'candidate' || this.isSpectator) {
            this.socketService.emitConnectionMessage(this.currentUser, 'disconnect');
            this.socketService.setInterviewId(null);
        }
        else {
            this.socketService.endInterview(this.currentUser);
        }
        if (this.unsubClick) {
            this.unsubClick.unsubscribe();
            this.unsubMouseMove.unsubscribe();
            this.unsubFocus.unsubscribe();
            this.unsubKeyboard.unsubscribe();
            this.unsubOnChange.unsubscribe();
            this.unsubConnectionMessage.unsubscribe();
            this.unsubDisconnectTrigger.unsubscribe();
        }
    };
    InterviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interview-page',
            template: __webpack_require__(/*! ./interview-page.component.html */ "./src/app/forms/interview-page/interview-page.component.html"),
            styles: [__webpack_require__(/*! ./interview-page.component.scss */ "./src/app/forms/interview-page/interview-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
            _services_socket_service_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], InterviewPageComponent);
    return InterviewPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/pipes/element-type.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/pipes/element-type.pipe.ts ***!
  \**************************************************/
/*! exports provided: ElementTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementTypePipe", function() { return ElementTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElementTypePipe = /** @class */ (function () {
    function ElementTypePipe(sanitizer) {
        this.sanitizer = sanitizer;
        this.templates = [
            {
                type: 'text',
                view: '<mat-form-field class="t">\n' +
                    '        <mat-label>Input</mat-label>\n' +
                    '        <input matInput [disabled]="true">\n' +
                    '    </mat-form-field>'
            }
        ];
    }
    ElementTypePipe.prototype.transform = function (elem, args) {
        // this.templates.forEach( template => {
        //
        //     if (template.type === elem.type) {
        //         let view = template.view;
        //         console.log(view);
        //         return view;
        //     }
        // });
        var template;
        if (elem.type === 'text') {
            template = '<mat-form-field class="t">\n' +
                '        <mat-label>Input</mat-label>\n' +
                '        <input matInput [disabled]="true">\n' +
                '    </mat-form-field>';
        }
        return this.sanitizer.bypassSecurityTrustHtml(template);
    };
    ElementTypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'type'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ElementTypePipe);
    return ElementTypePipe;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    return Templates;
}());


/***/ }),

/***/ "./src/app/forms/preview-page/nav-list/nav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/forms/preview-page/nav-list/nav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n   margin: 16px;\r\n   padding-bottom: 0;\r\n}\r\n \r\n mat-card mat-card-title {\r\n    font-size: 20px;\r\n }\r\n \r\n ::ng-deep .mat-input-wrapper{\r\n   width:400px !important;\r\n }"

/***/ }),

/***/ "./src/app/forms/preview-page/nav-list/nav-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/forms/preview-page/nav-list/nav-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngFor=\"let form of forms\" (click)=\"showForm(form)\">\r\n   <mat-card-header></mat-card-header>\r\n   <mat-card-title>{{form.title}}</mat-card-title>\r\n   <img mat-card-image [src]=\"'assets/img/' + form.preview\">\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/forms/preview-page/nav-list/nav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forms/preview-page/nav-list/nav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListComponent", function() { return NavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavListComponent = /** @class */ (function () {
    function NavListComponent(http, broadcast) {
        var _this = this;
        this.http = http;
        this.broadcast = broadcast;
        this.broadcast.subscriberCurrentForms()
            .subscribe(function (forms) {
            _this.forms = forms;
        });
    }
    NavListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getAllForms()
            .subscribe(function (forms) {
            _this.forms = forms;
        });
    };
    NavListComponent.prototype.showForm = function (item) {
        this.broadcast.selectForm(item);
    };
    NavListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-list',
            template: __webpack_require__(/*! ./nav-list.component.html */ "./src/app/forms/preview-page/nav-list/nav-list.component.html"),
            styles: [__webpack_require__(/*! ./nav-list.component.css */ "./src/app/forms/preview-page/nav-list/nav-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]])
    ], NavListComponent);
    return NavListComponent;
}());



/***/ }),

/***/ "./src/app/forms/preview-page/preview-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forms/preview-page/preview-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container full-height\" fxLayout=\"row\">\r\n    <mat-sidenav fxFlex.sm=\"1 0 230px\"\r\n                 fxFlex.md=\"1 1 25%\"\r\n                 fxFlex.gt-md=\"1 1 20%\"\r\n                 #drawer class=\"sidenav\"\r\n                 fixedInViewport=\"true\"\r\n                 [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n                 [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n                 [opened]=\"!(isHandset$ | async)\">\r\n        <mat-toolbar fxLayout=\"row\"\r\n                     fxLayoutAlign=\"center center\">\r\n            <mat-slide-toggle (click)=\"showEditPanel()\"\r\n                              fxHide.xs=\"true\"\r\n                              labelPosition=\"before\">\r\n                <span>Show edit panel</span>\r\n            </mat-slide-toggle>\r\n        </mat-toolbar>\r\n        <mat-nav-list>\r\n            <app-nav-list></app-nav-list>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content fxFlex.sm=\"1 1 70%\"\r\n                         fxFlex.md=\"1 1 75%\"\r\n                         fxFlex.gt-md=\"1 1 80%\">\r\n        <mat-toolbar fxLayout=\"row\"\r\n                     fxLayoutAlign=\"space-between center\"\r\n                     fxLayoutAlign.gt-xs=\"end center\"\r\n                     color=\"primary\">\r\n            <button type=\"button\"\r\n                    aria-label=\"Toggle sidenav\"\r\n                    mat-icon-button\r\n                    (click)=\"drawer.toggle()\"\r\n                    *ngIf=\"isHandset$ | async\"\r\n                    color=\"primary\">\r\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n            </button>\r\n            <button fxFlex=\"1 1 260px\" mat-raised-button color=\"primary\" (click)=\"startInterview()\" [disabled]=\"!form\">\r\n                Start interview\r\n            </button>\r\n        </mat-toolbar>\r\n\r\n        <div class=\"form\" *ngIf=\"form\">\r\n            <div class=\"form-info-buttons\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"showEditPanel()\">Edit form</button>\r\n                <button mat-raised-button color=\"warn\" (click)=\"delForm(form)\">Remove form</button>\r\n            </div>\r\n            <form class=\"example-container\">\r\n                <fieldset class=\"form\">\r\n                    <legend>\r\n                        <h2>{{form.title}}</h2>\r\n                    </legend>\r\n                    <!--container for row-->\r\n                    <div class=\"row-container\" *ngFor=\"let row of form.rows; let rowIndex = index\">\r\n                    <!--row-->\r\n                    <div class=\"row\">\r\n                        <!--container for cell-->\r\n                        <div class=\"cell-container\" *ngFor=\"let cell of row.cells; let cellIndex = index\">\r\n                            <!--cell-->\r\n                            <div class=\"cell\">\r\n                                <div class=\"element flex-grow\" *ngFor=\"let elem of cell.elements; let elemIndex = index\">\r\n\r\n                                    <!--if element is input TEXT-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"text\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input NUMBER-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='number'\" class=\"example-full-width flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"number\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [min]=\"elem.config.min\"\r\n                                               [max]=\"elem.config.max\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input EMAIL-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='email'\" class=\"example-full-width flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"email\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input PASSWORD-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='password'\" class=\"example-full-width flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <input matInput type=\"password\"\r\n                                               [value]=\"elem.config.value\"\r\n                                               [placeholder]=\"elem.config.placeholder\"\r\n                                               [disabled]=\"elem.config.disabled\"\r\n                                               [required]=\"elem.config.required\">\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is SLIDER-->\r\n                                    <section *ngIf=\"elem.type==='slider'\" class=\"example-section flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-slider\r\n                                                class=\"example-margin\"\r\n                                                [value]=\"elem.config.value\"\r\n                                                [invert]=\"elem.config.invert\"\r\n                                                [max]=\"elem.config.max\"\r\n                                                [min]=\"elem.config.min\"\r\n                                                [step]=\"elem.config.step\"\r\n                                                [thumbLabel]=\"elem.config.thumbLabel\"\r\n                                                [vertical]=\"elem.config.vertical\"\r\n                                                [disabled]=\"elem.config.disabled\">\r\n                                        </mat-slider>\r\n                                    </section>\r\n\r\n                                    <!--if element is TOGGLE-->\r\n                                    <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\" >\r\n\r\n                                        <mat-slide-toggle class=\"example-margin\"\r\n                                                          [color]=\"elem.config.color\"\r\n                                                          [checked]=\"elem.config.checked\"\r\n                                                          [disabled]=\"elem.config.disabled\">\r\n                                            {{elem.config.label}}\r\n                                        </mat-slide-toggle>\r\n                                    </section>\r\n\r\n                                    <!--if element is SELECT-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='select'\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-select [disabled]=\"elem.config.disabled\"\r\n                                                    [required]=\"elem.config.required\">\r\n                                            <mat-option *ngFor=\"let option of elem.config.options\" value=\"{{option}}\">\r\n                                                {{option}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is input CHECKBOX-->\r\n                                    <section class=\"example-section example-section-checkbox\"\r\n                                             *ngIf=\"elem.type==='checkbox'\"\r\n                                             [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-checkbox *ngFor=\"let option of elem.config.options\" class=\"example-margin example-margin-checkbox\"\r\n                                                      [value]=\"option\"\r\n                                                      [color]=\"elem.config.color\"\r\n                                                      [disabled]=\"elem.config.disabled\"\r\n                                                      [required]=\"elem.config.required\">{{option}}</mat-checkbox>\r\n                                    </section>\r\n\r\n                                    <!--if element is input RADIO-->\r\n                                    <mat-radio-group class=\"example-radio-group\"\r\n                                                     *ngIf=\"elem.type==='radio'\"\r\n                                                     [ngClass]=\"elem.config.vertical ? 'vertical' : 'horizontal'\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let option of elem.config.options\"\r\n                                                          [value]=\"option\"\r\n                                                          [color]=\"elem.config.color\"\r\n                                                          [disabled]=\"elem.config.disabled\"\r\n                                                          [required]=\"elem.config.required\">{{option}}</mat-radio-button>\r\n                                    </mat-radio-group>\r\n\r\n                                    <!--if element is TEXTAREA-->\r\n                                    <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width flex-grow\">\r\n                                        <mat-label>{{elem.config.label}}</mat-label>\r\n                                        <textarea matInput\r\n                                                  [value]=\"elem.config.value\"\r\n                                                  [placeholder]=\"elem.config.placeholder\"\r\n                                                  [disabled]=\"elem.config.disabled\"></textarea>\r\n                                    </mat-form-field>\r\n\r\n                                    <!--if element is BUTTON-->\r\n                                    <div *ngIf=\"elem.type==='button'\" class=\"example-button-row flex-grow\">\r\n                                        <button mat-raised-button\r\n                                                [color]=\"elem.config.color\"\r\n                                                [disabled]=\"elem.config.disabled\">{{elem.config.value}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/forms/preview-page/preview-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forms/preview-page/preview-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 50%; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  background: inherit; }\n\n.mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #fff; }\n\n.mat-toolbar .mat-toolbar-single-row {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.mat-list, .mat-nav-list, .mat-selection-list {\n  padding-top: 0; }\n\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: #fff !important;\n  font-size: 20px;\n  font-weight: normal; }\n\n.new-form-button, .save-form-button {\n  margin-right: 10px; }\n\nmat-sidenav-container {\n  text-align: center; }\n\nmat-sidenav {\n  min-width: 200px; }\n\nmat-card {\n  margin: 16px;\n  padding-bottom: 0; }\n\nmat-card mat-card-title {\n  font-size: 20px; }\n\nmat-card img {\n  max-width: 700px; }\n\n@media only screen and (min-width: 600px) {\n  mat-sidenav {\n    position: relative;\n    max-width: 25%; }\n  mat-sidenav-content {\n    margin-left: 0 !important; } }\n\n.full-height {\n  height: calc(100vh - 64px); }\n\n.flex-grow {\n  flex-grow: 1; }\n\n.flex-grow button {\n    width: 100%; }\n\n.form {\n  margin-top: 30px; }\n\n.form-info-buttons {\n    margin: 0 auto;\n    width: 90%;\n    text-align: right;\n    justify-content: flex-end; }\n\n.form-info-buttons button {\n      margin-left: 10px; }\n\n.form .example-container {\n    margin: 0 auto;\n    width: 90%;\n    min-height: 50px;\n    padding: 5px; }\n\n.form .example-container fieldset {\n      margin: 0;\n      border: 1px solid #c9c9c9;\n      border-radius: 5px; }\n\n.form .example-container fieldset legend {\n        padding: 0 10px;\n        color: #464646; }\n\n.form .example-container fieldset legend h2 {\n          margin: 5px 0; }\n\n.form .example-container .row-container {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n\n.form .example-container .row-container .row {\n        display: flex;\n        margin: 5px;\n        padding: 5px;\n        width: 100%;\n        min-height: 20px;\n        border-radius: 5px;\n        border: 1px solid #c9c9c9;\n        align-items: center; }\n\n.form .example-container .row-container .row .cell-container {\n          display: flex;\n          width: 100%;\n          margin-right: 5px;\n          align-items: center;\n          justify-content: center; }\n\n.form .example-container .row-container .row .cell-container .cell {\n            display: flex;\n            margin: 5px;\n            padding: 5px;\n            width: 100%;\n            min-height: 20px;\n            border-radius: 5px;\n            border: 1px solid #c9c9c9; }\n\n.form .example-container .row-container .row .cell-container .cell .element {\n              display: flex;\n              align-items: center; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field {\n                margin: 0 15px; }\n\n.form .example-container .row-container .row .cell-container .cell .element mat-form-field ::ng-deep .mat-form-field-infix {\n                  width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slider {\n                width: 100%; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-slide-toggle {\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .mat-select {\n                width: 140px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-group {\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-radio-button {\n                margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical {\n                display: block !important;\n                text-align: left; }\n\n.form .example-container .row-container .row .cell-container .cell .element .vertical .mat-radio-button, .form .example-container .row-container .row .cell-container .cell .element .vertical .mat-checkbox {\n                  margin: 10px;\n                  display: block; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-section-checkbox {\n                display: flex;\n                align-content: center;\n                align-items: center;\n                margin: 0 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-margin-checkbox {\n                margin-left: 10px; }\n\n.form .example-container .row-container .row .cell-container .cell .element .example-button-row {\n                margin: 5px; }\n\n.form .example-container .row-container .mat-mini-fab {\n        width: 30px;\n        height: 30px; }\n\n.form .example-container .row-container .mat-mini-fab mat-icon {\n          width: 20px;\n          height: 30px;\n          font-size: 20px; }\n\n.form .example-container .mat-mini-fab {\n      width: 40px;\n      height: 40px;\n      padding: 3px; }\n\n.form .example-container .mat-mini-fab mat-icon {\n        margin-top: -8px;\n        padding: 0;\n        width: 30px;\n        height: 30px;\n        font-size: 30px; }\n\n/*my mixins*/\n"

/***/ }),

/***/ "./src/app/forms/preview-page/preview-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/preview-page/preview-page.component.ts ***!
  \**************************************************************/
/*! exports provided: PreviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageComponent", function() { return PreviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../options/confirm-removing-form/confirm-removing-form.component */ "./src/app/options/confirm-removing-form/confirm-removing-form.component.ts");
/* harmony import */ var _services_screenshot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/screenshot.service */ "./src/app/forms/services/screenshot.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PreviewPageComponent = /** @class */ (function () {
    function PreviewPageComponent(breakpoint, fb, http, broadcast, router, dialog, screenshotService) {
        var _this = this;
        this.breakpoint = breakpoint;
        this.fb = fb;
        this.http = http;
        this.broadcast = broadcast;
        this.router = router;
        this.dialog = dialog;
        this.screenshotService = screenshotService;
        this.isHandset$ = this.breakpoint.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.broadcast.subscriberSelectForm()
            .subscribe(function (form) {
            _this.form = form;
        });
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    PreviewPageComponent.prototype.ngOnInit = function () {
        this.broadcast.selectedForm = null;
    };
    PreviewPageComponent.prototype.startInterview = function () {
        this.router.navigate(['/interview-page']);
    };
    PreviewPageComponent.prototype.showEditPanel = function () {
        this.router.navigate(['/constructor']);
    };
    PreviewPageComponent.prototype.delForm = function (form) {
        var _this = this;
        var confirmRemovingRef = this.dialog.open(_options_confirm_removing_form_confirm_removing_form_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmRemovingFormComponent"]);
        confirmRemovingRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.http.delForm(form._id)
                    .subscribe(function (data) {
                    var isFormDeleted = Array.isArray(data);
                    if (isFormDeleted) {
                        _this.broadcast.selectedForm = null;
                        _this.form = null;
                        _this.screenshotService.deleteScreenshot(form);
                    }
                    else {
                        _this.screenshotService.showDeleteMessage(_this.form.title, isFormDeleted);
                    }
                });
            }
        });
    };
    PreviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-page',
            template: __webpack_require__(/*! ./preview-page.component.html */ "./src/app/forms/preview-page/preview-page.component.html"),
            styles: [__webpack_require__(/*! ./preview-page.component.scss */ "./src/app/forms/preview-page/preview-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _services_screenshot_service__WEBPACK_IMPORTED_MODULE_9__["ScreenshotService"]])
    ], PreviewPageComponent);
    return PreviewPageComponent;
}());



/***/ }),

/***/ "./src/app/forms/services/broadcast.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/forms/services/broadcast.service.ts ***!
  \*****************************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this.active = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // value for activate constructor
        this.elem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // element for selected cell
        this.config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // config for selected element
        this.form = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.forms = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // current state of forms array
    }
    // get current state of forms array
    BroadcastService.prototype.currentForms = function (forms) {
        this.forms.emit(forms);
    };
    BroadcastService.prototype.subscriberCurrentForms = function () {
        return this.forms;
    };
    // sending request to activate constructor
    BroadcastService.prototype.activationConstructor = function () {
        this.active.emit(true);
    };
    BroadcastService.prototype.subscriberActivationConstructor = function () {
        return this.active;
    };
    // sending element to the cell
    BroadcastService.prototype.sendElem = function (elem) {
        this.elem.emit(elem);
    };
    BroadcastService.prototype.subscriberSendElem = function () {
        return this.elem;
    };
    // sending request to activate config
    BroadcastService.prototype.activationConfig = function (config) {
        this.config.emit(config);
    };
    BroadcastService.prototype.subscriberActivationConfig = function () {
        return this.config;
    };
    // sending selected form
    BroadcastService.prototype.selectForm = function (form) {
        console.log(form);
        this.selectedForm = JSON.parse(JSON.stringify(form));
        this.form.emit(form);
    };
    BroadcastService.prototype.subscriberSelectForm = function () {
        return this.form;
    };
    BroadcastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BroadcastService);
    return BroadcastService;
}());



/***/ }),

/***/ "./src/app/forms/services/http.service.ts":
/*!************************************************!*\
  !*** ./src/app/forms/services/http.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http, broadcast) {
        this.http = http;
        this.broadcast = broadcast;
    }
    // http get all the forms
    HttpService.prototype.getAllForms = function () {
        var _this = this;
        return this.http.get('/form')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (forms) {
            console.log(forms);
            _this.forms = forms;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addForm', [])));
    };
    // add or update current form
    HttpService.prototype.saveForm = function (form) {
        var _this = this;
        if (!form._id) {
            console.log('add', form);
            return this.http.post('/form', form)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (forms) {
                if (Array.isArray(forms)) {
                    console.log(forms);
                    _this.forms = forms;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addForm', [])));
        }
        else {
            console.log('update', form);
            return this.http.put('/form', form)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (forms) {
                console.log(forms);
                _this.forms = forms;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateForm', [])));
        }
    };
    // http delete current form
    HttpService.prototype.delForm = function (id) {
        var _this = this;
        console.log(id);
        return this.http.delete("/form/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (forms) {
            console.log(forms);
            _this.forms = forms;
            _this.broadcast.currentForms(forms);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delForm', [])));
    };
    HttpService.prototype.getAvailableInterviews = function () {
        return this.http.get('/interviews')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (interviews) {
            console.log(interviews);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getInterview', [])));
    };
    HttpService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpService.prototype.postScreenshotData = function (imgData) {
        return this.http.post('/screenshot', imgData);
    };
    HttpService.prototype.deleteScreenshotData = function (imgName) {
        console.log(imgName);
        return this.http.delete("/screenshot/" + imgName);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/forms/services/screenshot.service.ts":
/*!******************************************************!*\
  !*** ./src/app/forms/services/screenshot.service.ts ***!
  \******************************************************/
/*! exports provided: ScreenshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenshotService", function() { return ScreenshotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_options_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/options/snackbar/snackbar.component */ "./src/app/options/snackbar/snackbar.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/forms/services/http.service.ts");
/* harmony import */ var _broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast.service */ "./src/app/forms/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScreenshotService = /** @class */ (function () {
    function ScreenshotService(http, snackbarComponent, broadcastService) {
        this.http = http;
        this.snackbarComponent = snackbarComponent;
        this.broadcastService = broadcastService;
        this.fileSaveResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScreenshotService.prototype.saveScreenshot = function (form) {
        var _this = this;
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(this.HTMLElement, {
            scale: 0.3
        })
            .then(function (canvas) {
            var imgFile = canvas.toDataURL();
            _this.http.postScreenshotData({ 'imgFile': imgFile, 'fileName': form.preview })
                .subscribe(function (isFileSaved) {
                _this.showSaveMessage(form.title, isFileSaved);
            });
        });
    };
    ScreenshotService.prototype.isScreenshotSaved = function (response) {
        return this.fileSaveResult;
    };
    ScreenshotService.prototype.showSaveMessage = function (title, isAllSaved) {
        if (isAllSaved) {
            this.snackbarComponent.openSnackBar(title + " has been saved", 'success');
        }
        else {
            this.snackbarComponent.openSnackBar(title + " has not been saved", 'fail');
        }
    };
    ScreenshotService.prototype.deleteScreenshot = function (form) {
        var _this = this;
        this.http.deleteScreenshotData(form.preview)
            .subscribe(function (isFileDeleted) {
            _this.showDeleteMessage(form.title, isFileDeleted);
        });
    };
    ScreenshotService.prototype.showDeleteMessage = function (title, isAllSaved) {
        if (isAllSaved) {
            this.snackbarComponent.openSnackBar(title + " has been removed", 'success');
        }
        else {
            this.snackbarComponent.openSnackBar(title + " has not been removed", 'fail');
        }
    };
    ScreenshotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            src_app_options_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"],
            _broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]])
    ], ScreenshotService);
    return ScreenshotService;
}());



/***/ }),

/***/ "./src/app/forms/services/socket-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/services/socket-service.service.ts ***!
  \**********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = '/';
    }
    SocketService.prototype.connectToSockets = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect(this.url);
    };
    SocketService.prototype.setInterviewId = function (id) {
        this.interviewId = id;
    };
    SocketService.prototype.initiateInterview = function (interviewData) {
        this.interviewId = interviewData.interviewId;
        this.socket.emit('initiateInterview', interviewData);
    };
    SocketService.prototype.joinInterview = function (userInfo) {
        var connectionInfo = this.emitConnectionMessage(userInfo, 'connect');
        this.socket.emit('joinInterview', connectionInfo);
    };
    SocketService.prototype.endInterview = function (userInfo) {
        // if we weren't connected, there is no need to unsub
        if (!this.socket) {
            return;
        }
        var eventInfo = this.emitConnectionMessage(userInfo, 'end interview');
        this.socket.emit('endInterview', eventInfo);
        this.interviewId = null;
    };
    SocketService.prototype.emitConnectionMessage = function (userInfo, eventType) {
        var role = userInfo.role[0].toUpperCase() + userInfo.role.slice(1);
        var messageText = role + " " + userInfo.fullname;
        var connectionInfo = {
            interviewId: this.interviewId,
            messageText: messageText
        };
        if (eventType === 'connect') {
            connectionInfo.messageText += ' has joined the interview';
            return connectionInfo;
        }
        else if (eventType === 'end interview') {
            connectionInfo.messageText += ' has finished the interview. Thank you for participating.';
            return connectionInfo;
        }
        else {
            connectionInfo.messageText += ' has left the interview';
            this.socket.emit('onLeave', connectionInfo);
        }
    };
    SocketService.prototype.updateInterviewList = function () {
        var _this = this;
        var interviewInfoProvider = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('updateInterviewList', function (interviewData) {
                observer.next(interviewData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return interviewInfoProvider;
    };
    // interview events
    SocketService.prototype.sendClick = function (eventInfo) {
        eventInfo.interviewId = this.interviewId;
        this.socket.emit('click', eventInfo);
    };
    SocketService.prototype.sendMouseMovement = function (eventInfo) {
        eventInfo.interviewId = this.interviewId;
        this.socket.emit('mouseMove', eventInfo);
    };
    SocketService.prototype.sendFocusEvent = function (eventInfo) {
        eventInfo.interviewId = this.interviewId;
        this.socket.emit('focusEvent', eventInfo);
    };
    SocketService.prototype.sendKeysEvent = function (eventInfo) {
        eventInfo.interviewId = this.interviewId;
        this.socket.emit('keyPress', eventInfo);
    };
    SocketService.prototype.sendOnChangetEvent = function (eventInfo) {
        eventInfo.interviewId = this.interviewId;
        this.socket.emit('onChange', eventInfo);
    };
    SocketService.prototype.showMessage = function () {
        var _this = this;
        var messageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('showMessage', function (message) {
                observer.next(message);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return messageObservable;
    };
    SocketService.prototype.getClickEvent = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('mouseClick', function (eventData) {
                observer.next(eventData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100));
    };
    SocketService.prototype.getMouseMove = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('newMouseMove', function (eventData) {
                observer.next(eventData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable;
    };
    SocketService.prototype.getFocusEvent = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('newFocus', function (eventData) {
                observer.next(eventData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable;
    };
    SocketService.prototype.getKeyboardEvent = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('newKeyPress', function (eventData) {
                observer.next(eventData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable;
    };
    SocketService.prototype.getOnChangeEvent = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('newOnChange', function (eventData) {
                observer.next(eventData);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable;
    };
    SocketService.prototype.finishInterview = function () {
        var _this = this;
        var eventObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('finishInterview', function (triggerFinish) {
                observer.next(triggerFinish);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return eventObservable;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/admin/admin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\r\n    <mat-drawer mode=\"side\" opened>\r\n        <mat-toolbar>\r\n            <mat-icon color=\"primary\">settings</mat-icon>\r\n            {{title}}\r\n        </mat-toolbar>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"interviewers\">\r\n                Interviewers\r\n            </a>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n            <a mat-list-item routerLink=\"groups\">\r\n                Groups\r\n            </a>\r\n        </mat-nav-list>\r\n    </mat-drawer>\r\n    <mat-drawer-content>\r\n        <section>\r\n            <router-outlet></router-outlet>\r\n        </section>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/modules/admin/admin.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/admin/admin.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-drawer {\n  width: 250px; }\n\nmat-drawer-container {\n  height: calc(100vh - 64px); }\n\nmat-nav-list {\n  padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/modules/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.title = 'Admin panel';
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (this.router.routerState.snapshot.url === '/admin') {
            this.router.navigate(['admin/interviewers']);
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/modules/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/modules/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material */ "./src/app/modules/material/material.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var _components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/interviewers/interviewers.component */ "./src/app/modules/admin/components/interviewers/interviewers.component.ts");
/* harmony import */ var _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/groups/groups.component */ "./src/app/modules/admin/components/groups/groups.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/modules/admin/components/list/list.component.ts");
/* harmony import */ var _components_listcontrols_listcontrols_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/listcontrols/listcontrols.component */ "./src/app/modules/admin/components/listcontrols/listcontrols.component.ts");
/* harmony import */ var _components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialog/users.dialog */ "./src/app/modules/admin/components/dialog/users.dialog.ts");
/* harmony import */ var _components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dialog/group.dialog */ "./src/app/modules/admin/components/dialog/group.dialog.ts");
/* harmony import */ var _components_dynamicform_dynamicform_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dynamicform/dynamicform.module */ "./src/app/modules/admin/components/dynamicform/dynamicform.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var adminRoutes = [
    { path: 'admin', component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], children: [
            { path: 'interviewers', component: _components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_7__["InterviewersComponent"] },
            { path: 'groups', component: _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"] }
        ]
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(adminRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _components_dynamicform_dynamicform_module__WEBPACK_IMPORTED_MODULE_13__["DynamicformModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _components_listcontrols_listcontrols_component__WEBPACK_IMPORTED_MODULE_10__["ListControls"],
                _components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_11__["UsersDialogComponent"],
                _components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_12__["GroupDialogComponent"],
                _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"],
                _components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_7__["InterviewersComponent"]
            ],
            exports: [
                _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
            ],
            entryComponents: [
                _components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_11__["UsersDialogComponent"],
                _components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_12__["GroupDialogComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dialog/group.dialog.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/group.dialog.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> {{getTitle()}} </h2>\r\n<mat-dialog-content>\r\n    <dynamic-form [fields]=\"groupConfig\" #form=\"dynamicForm\">\r\n    </dynamic-form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n   <button mat-raised-button mat-dialog-close color=\"warn\" *ngIf=\"!data\"> Cancel </button>\r\n   <button mat-raised-button mat-dialog-close color=\"primary\" *ngIf=\"data\"> Cancel </button>\r\n   <button mat-raised-button [disabled]=\"!form?.valid\" [mat-dialog-close]=\"form?.value\" color=\"primary\" *ngIf=\"!data\"> Create </button>\r\n   <button mat-raised-button [disabled]=\"!form?.valid\" [mat-dialog-close]=\"form?.value\" color=\"accent\" *ngIf=\"data?.edit\"> Save </button>\r\n   <button mat-raised-button [mat-dialog-close]=\"{shouldDelete: true}\" color=\"warn\" *ngIf=\"data && !data.edit\"> Delete </button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/modules/admin/components/dialog/group.dialog.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/group.dialog.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  font-size: 13px;\n  color: #c7254e;\n  background: #f9f2f4;\n  border-radius: 3px;\n  padding: 15px;\n  margin: -26px 0 15px; }\n\n.field_label {\n  margin: 0 !important; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/dialog/group.dialog.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/group.dialog.ts ***!
  \*****************************************************************/
/*! exports provided: GroupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDialogComponent", function() { return GroupDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dynamicform/dynamic-form-container/dynamic-form-container.component */ "./src/app/modules/admin/components/dynamicform/dynamic-form-container/dynamic-form-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GroupDialogComponent = /** @class */ (function () {
    function GroupDialogComponent(data) {
        this.data = data;
        this.groupConfig = [{
                type: "input",
                label: "Title",
                inputType: "text",
                name: "name",
                validations: [{
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Title required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            },
            {
                type: "input",
                label: "Description",
                inputType: "description",
                name: "description",
                validations: [{
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Description Required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            }
        ];
        this.messages = {
            new: 'Create new group',
            edit: 'Edit grop',
            del: 'Delete group',
        };
    }
    //remove setTimeout before production
    GroupDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.form) {
            setTimeout(function () {
                if (_this.data && !_this.data.edit) {
                    _this.data.forEach(function (field) {
                        _this.form.setValue(field.title, field.value);
                        _this.form.setDisabled(field.title, true);
                    });
                }
                else if (_this.data && _this.data.edit) {
                    _this.data.object.forEach(function (field) {
                        _this.form.setValue(field.title, field.value);
                    });
                }
            });
        }
    };
    GroupDialogComponent.prototype.getTitle = function () {
        return !this.data ? this.messages.new : this.data.edit ? this.messages.edit : this.messages.del;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormComponent"]),
        __metadata("design:type", _dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormComponent"])
    ], GroupDialogComponent.prototype, "form", void 0);
    GroupDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-dialog',
            template: __webpack_require__(/*! ./group.dialog.html */ "./src/app/modules/admin/components/dialog/group.dialog.html"),
            styles: [__webpack_require__(/*! ./group.dialog.scss */ "./src/app/modules/admin/components/dialog/group.dialog.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], GroupDialogComponent);
    return GroupDialogComponent;
}());

// 19.11.2018 olez: instead of using ngAfterViewInit, add properties with getValue() and isDisabled()
// you can use this code for adding field value and disabling it in case of removing object
//
// getValue(fieldTitle: string){
//     (this.data && !this.data.edit) ? 
//         this.data.filter( field => field.title === fieldTitle)[0].value : 
//     (this.data && this.data.edit) ?
//         this.data.object.filter( field => field.title === fieldTitle)[0].value :
//         null;
// }
// isDisabled(){
//     return this.data && !this.data.edit;
// }


/***/ }),

/***/ "./src/app/modules/admin/components/dialog/users.dialog.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/users.dialog.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> {{getTitle()}} </h2>\r\n<mat-dialog-content>\r\n    <dynamic-form [fields]=\"userConfig\" #form=\"dynamicForm\">\r\n    </dynamic-form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n   <button mat-raised-button mat-dialog-close color=\"warn\" *ngIf=\"!data\"> Cancel </button>\r\n   <button mat-raised-button mat-dialog-close color=\"primary\" *ngIf=\"data\"> Cancel </button>\r\n   <button mat-raised-button [disabled]=\"!form?.valid\" [mat-dialog-close]=\"form?.value\" color=\"primary\" *ngIf=\"!data\"> Create </button>\r\n   <button mat-raised-button [disabled]=\"!form?.valid\" [mat-dialog-close]=\"form?.value\" color=\"accent\" *ngIf=\"data?.edit\"> Save </button>\r\n   <button mat-raised-button [mat-dialog-close]=\"{shouldDelete: true}\" color=\"warn\" *ngIf=\"data && !data.edit\"> Delete </button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/modules/admin/components/dialog/users.dialog.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/users.dialog.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field_label {\n  margin: 0 !important; }\n\n.mat-dialog-content {\n  overflow: visible; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/dialog/users.dialog.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/components/dialog/users.dialog.ts ***!
  \*****************************************************************/
/*! exports provided: UsersDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDialogComponent", function() { return UsersDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/modules/admin/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamicform/dynamic-form-container/dynamic-form-container.component */ "./src/app/modules/admin/components/dynamicform/dynamic-form-container/dynamic-form-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UsersDialogComponent = /** @class */ (function () {
    function UsersDialogComponent(http, data) {
        this.http = http;
        this.data = data;
        this.checked = false;
        this.messages = {
            new: 'Create new user',
            edit: 'Edit user',
            del: 'Delete user',
        };
        this.userConfig = [{
                type: "input",
                label: "Name",
                inputType: "text",
                name: "fullname",
                validations: [{
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        message: "Name required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            },
            {
                type: "input",
                label: "Username",
                inputType: "text",
                name: "username",
                validations: [{
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        message: "Username required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            },
            {
                type: "input",
                label: "Password",
                inputType: "password",
                name: "password",
                validations: [{
                        name: "required",
                        validator: this.isPassRequired(),
                        message: "Password required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            },
            {
                type: "select",
                label: "User group",
                name: "group",
                options: [],
                validations: [{
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        message: "Password required"
                    },
                    {
                        name: "minlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                        message: "Minimum length is 3 symbols"
                    },
                    {
                        name: "maxlength",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                        message: "Maximum length is 15 symbols"
                    }
                ]
            },
            {
                type: "toggle",
                label: "Master",
                name: "role",
                value: this.checked,
                validations: []
            }
        ];
    }
    UsersDialogComponent.prototype.ngOnInit = function () { };
    //remove setTimeout before production
    UsersDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.form) {
            setTimeout(function () {
                _this.http.getGroups().subscribe(function (groups) {
                    _this.form.fields.filter(function (field) {
                        if (field.name === 'group') {
                            var loadedGroups = groups.map(function (group) { return group.name; });
                            field.options = loadedGroups;
                        }
                    });
                });
                if (_this.data && !_this.data.edit) {
                    _this.data.forEach(function (field) {
                        _this.form.setValue(field.title, field.value);
                        _this.form.setDisabled(field.title, true);
                    });
                }
                else if (_this.data && _this.data.edit) {
                    _this.data.object.forEach(function (field) {
                        _this.form.setValue(field.title, field.value);
                    });
                }
            });
        }
    };
    UsersDialogComponent.prototype.getTitle = function () {
        return !this.data ? this.messages.new : this.data.edit ? this.messages.edit : this.messages.del;
    };
    UsersDialogComponent.prototype.isPassRequired = function () {
        return (this.data && this.data.edit) ? _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator : _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]),
        __metadata("design:type", _dynamicform_dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"])
    ], UsersDialogComponent.prototype, "form", void 0);
    UsersDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'users-dialog',
            template: __webpack_require__(/*! ./users.dialog.html */ "./src/app/modules/admin/components/dialog/users.dialog.html"),
            styles: [__webpack_require__(/*! ./users.dialog.scss */ "./src/app/modules/admin/components/dialog/users.dialog.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpAdminService"], Object])
    ], UsersDialogComponent);
    return UsersDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/dynamic-field/dynamic-field.directive.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/dynamic-field/dynamic-field.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_controls_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-controls/input.component */ "./src/app/modules/admin/components/dynamicform/form-controls/input.component.ts");
/* harmony import */ var _form_controls_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-controls/select.component */ "./src/app/modules/admin/components/dynamicform/form-controls/select.component.ts");
/* harmony import */ var _form_controls_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-controls/toggle.component */ "./src/app/modules/admin/components/dynamicform/form-controls/toggle.component.ts");
/* harmony import */ var _form_controls_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-controls/button.component */ "./src/app/modules/admin/components/dynamicform/form-controls/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var componentMapper = {
    input: _form_controls_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"],
    select: _form_controls_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"],
    toggle: _form_controls_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"],
    button: _form_controls_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]
};
var DynamicFieldDirective = /** @class */ (function () {
    //ComponentFactoryResolver is used to resolve the component at run time
    //ViewContainerRef to gain access to the view container of the element that will host the dynamically added component.
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnInit = function () {
        var factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/dynamic-form-container/dynamic-form-container.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/dynamic-form-container/dynamic-form-container.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.fields = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: function () {
            return this.fields.filter(function (_a) {
                var type = _a.type;
                return type !== 'button';
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: function () {
            return this.form.valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: function () {
            return this.form.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: function () {
            return this.form.value;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.createGroup();
    };
    DynamicFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.form) {
            var controls_1 = Object.keys(this.form.controls);
            var configControls_1 = this.controls.map(function (item) { return item.name; });
            controls_1
                .filter(function (control) { return !configControls_1.includes(control); })
                .forEach(function (control) { return _this.form.removeControl(control); });
            configControls_1
                .filter(function (control) { return !controls_1.includes(control); })
                .forEach(function (name) {
                var config = _this.fields.find(function (control) { return control.name === name; });
                _this.form.addControl(name, _this.createControl(config));
            });
        }
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({});
        this.controls.forEach(function (control) { return group.addControl(control.name, _this.createControl(control)); });
        return group;
    };
    DynamicFormComponent.prototype.createControl = function (config) {
        var disabled = config.disabled, validations = config.validations, value = config.value;
        return this.fb.control({
            disabled: disabled,
            value: value
        }, this.bindValidations(validations || []));
    };
    DynamicFormComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    DynamicFormComponent.prototype.setDisabled = function (name, disable) {
        if (this.form.controls[name]) {
            var method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.fields = this.fields.map(function (item) {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    };
    DynamicFormComponent.prototype.setValue = function (name, value) {
        this.form.controls[name].setValue(value, {
            emitEvent: true
        });
    };
    DynamicFormComponent.prototype.remove = function (name, value) {
        this.form.controls[name].setValue(value, {
            emitEvent: true
        });
    };
    DynamicFormComponent.prototype.bindValidations = function (validations) {
        if (validations.length > 0) {
            var validList_1 = [];
            validations.forEach(function (valid) {
                validList_1.push(valid.validator);
            });
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(validList_1);
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "fields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submit", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-form',
            exportAs: 'dynamicForm',
            template: "\n  <form \n    class=\"dynamic-form\"\n    [formGroup]=\"form\"\n    (submit)=\"onSubmit($event)\"\n    >\n    <ng-container *ngFor=\"let field of fields\"\n                  dynamicField\n                  [field]=\"field\"\n                  [group]=\"form\">\n    </ng-container>\n  </form>\n  ",
            styles: ["\n      mat-form-field {\n        display: block;\n      }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/dynamicform.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/dynamicform.module.ts ***!
  \****************************************************************************/
/*! exports provided: DynamicformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicformModule", function() { return DynamicformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material/material */ "./src/app/modules/material/material.ts");
/* harmony import */ var _form_controls_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-controls/input.component */ "./src/app/modules/admin/components/dynamicform/form-controls/input.component.ts");
/* harmony import */ var _form_controls_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-controls/select.component */ "./src/app/modules/admin/components/dynamicform/form-controls/select.component.ts");
/* harmony import */ var _form_controls_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-controls/toggle.component */ "./src/app/modules/admin/components/dynamicform/form-controls/toggle.component.ts");
/* harmony import */ var _form_controls_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-controls/button.component */ "./src/app/modules/admin/components/dynamicform/form-controls/button.component.ts");
/* harmony import */ var _dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-field/dynamic-field.directive */ "./src/app/modules/admin/components/dynamicform/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var _dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form-container/dynamic-form-container.component */ "./src/app/modules/admin/components/dynamicform/dynamic-form-container/dynamic-form-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DynamicformModule = /** @class */ (function () {
    function DynamicformModule() {
    }
    DynamicformModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _form_controls_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"],
                _form_controls_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
                _form_controls_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ToggleComponent"],
                _form_controls_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
                _dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__["DynamicFieldDirective"],
                _dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]
            ],
            exports: [
                _dynamic_form_container_dynamic_form_container_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]
            ],
            entryComponents: [
                _form_controls_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"],
                _form_controls_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
                _form_controls_toggle_component__WEBPACK_IMPORTED_MODULE_6__["ToggleComponent"],
                _form_controls_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]
            ]
        })
    ], DynamicformModule);
    return DynamicformModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/form-controls/button.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/form-controls/button.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: "\n  <button [type]=\"field.name\" mat-raised-button [color]=\"field.color\" [formGroup]=\"group\">{{field.label}}</button>\n  ",
            styles: ["\n  button {\n    margin: 8px 8px 0 0;\n  }"]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/form-controls/input.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/form-controls/input.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: "\n  <mat-form-field [formGroup]=\"group\">\n    <input matInput [formControlName]=\"field.name\" [placeholder]=\"field.label\" [type]=\"field.inputType\">\n    <ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n      <mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n    </ng-container>\n  </mat-form-field>\n  ",
            styles: ["\n    mat-form-field {\n      display: block;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/form-controls/select.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/form-controls/select.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: "\n  <mat-form-field [formGroup]=\"group\">\n    <mat-select [placeholder]=\"field.label\" [formControlName]=\"field.name\">\n      <mat-option *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/dynamicform/form-controls/toggle.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/components/dynamicform/form-controls/toggle.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    ToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle',
            template: "\n  <div [formGroup]=\"group\" >\n    <mat-slide-toggle [formControlName]=\"field.name\">{{field.label}}</mat-slide-toggle>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/groups/groups.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/components/groups/groups.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row\">\r\n  <interviewers-list [dataSource]=\"groupsSource\"\r\n                     [columns]=\"groupsColumns\" \r\n                     [headers]=\"groupsColumnsHeaders\"\r\n                     (onAdd)=\"addGroup()\"\r\n                     (selectGroup)=\"selectGroup($event)\"\r\n                     (contextMenu)=\"openContextMenu($event)\">\r\n      <h2>\r\n          <i class=\"material-icons\">\r\n              group\r\n          </i>\r\n          Group list\r\n      </h2>\r\n\r\n      <mat-paginator class=\"paginator groups__paginator\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\" #groupsPaginator >\r\n      </mat-paginator>\r\n\r\n      Add\r\n      <i class=\"material-icons\">\r\n              group_add\r\n      </i>\r\n  </interviewers-list>\r\n</section>\r\n\r\n<mat-menu #editMenu=\"matMenu\" class=\"editMenu\">\r\n  <button mat-menu-item (click)=\"edit($event)\">Edit</button>\r\n  <button mat-menu-item (click)=\"remove($event)\">Remove</button>\r\n</mat-menu>\r\n\r\n<div [matMenuTriggerFor]=\"editMenu\" class=\"menuButton\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/components/groups/groups.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/components/groups/groups.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "interviewers-list {\n  flex-grow: 1; }\n\ninterviewers-list:first-of-type {\n  border-right: 10px solid rgba(245, 245, 245, 0.3); }\n\nh2 {\n  margin-left: 20px;\n  height: 24px; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/groups/groups.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/components/groups/groups.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/modules/admin/services/http.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/modules/admin/services/dialog.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/snackbar.service */ "./src/app/modules/admin/services/snackbar.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(http, dialog, message) {
        this.http = http;
        this.dialog = dialog;
        this.message = message;
        this.groupsColumns = [{
                title: "name",
                value: "Title",
                error: [{ minlength: "Length > 3" }, { symbol: "Symbol not allowed" }]
            },
            {
                title: "description",
                value: "Description",
                error: [{ minlength: "Length > 3" }, { symbol: "Symbol not allowed" }]
            }
        ];
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getGroups();
        this.groupsColumnsHeaders = this.groupsColumns.map(function (field) { return field.title; });
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.http.getGroups()
            .subscribe(function (groups) {
            _this.groupsData = groups;
            _this.renderGroupsList();
        });
    };
    GroupsComponent.prototype.initDataSource = function (data, paginator) {
        var dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        dataSource.paginator = paginator;
        return dataSource;
    };
    GroupsComponent.prototype.renderGroupsList = function () {
        this.groupsSource = this.initDataSource(this.groupsData, this.groupsPaginator);
    };
    GroupsComponent.prototype.addGroup = function () {
        var _this = this;
        this.dialog.addGroup()
            .afterClosed()
            .subscribe(function (data) {
            if (data) {
                if (_this.doExist(data.name, _this.groupsData)) {
                    return _this.message.show(data.name + " already exists!");
                }
                _this.groupsData.push(data);
                _this.renderGroupsList();
                _this.http.addGroup(data)
                    .subscribe(function (_) {
                    _this.message.show(data.name + " was created!");
                });
            }
        });
    };
    GroupsComponent.prototype.selectGroup = function (event) {
        var name = event.target.parentNode.querySelector('.cdk-column-name').innerText ||
            event.target.innerText;
        this.http.setSelectedGroup(name);
    };
    GroupsComponent.prototype.openContextMenu = function (event) {
        this.dialog.openContextMenu(event, this.trigger);
    };
    GroupsComponent.prototype.remove = function () {
        var _this = this;
        if (this.dialog.target) {
            this.dialog.deleteGroup()
                .afterClosed()
                .subscribe(function (response) {
                if (response && response.shouldDelete) {
                    _this.removeGroup(_this.dialog.target);
                    _this.dialog.target = null;
                }
            });
        }
    };
    GroupsComponent.prototype.edit = function () {
        var _this = this;
        if (this.dialog.target) {
            this.dialog.editGroup()
                .afterClosed()
                .subscribe(function (changedGroup) {
                if (changedGroup) {
                    _this.groupsData = _this.groupsData.map(function (group) {
                        if (group.name === _this.dialog.target.name) {
                            group = __assign({}, group, changedGroup);
                        }
                        return group;
                    });
                    _this.renderGroupsList();
                    _this.http.updateGroup(__assign({}, changedGroup, { previousName: _this.dialog.target.name }))
                        .subscribe(function (_) {
                        console.log(changedGroup, 'was updated');
                        _this.dialog.target = null;
                    });
                }
                ;
            });
        }
    };
    GroupsComponent.prototype.removeGroup = function (targetGroup) {
        var _this = this;
        this.groupsData = this.groupsData.filter(function (group) { return group.name != targetGroup.name; });
        this.renderGroupsList();
        this.message.show(targetGroup.name + ", was removed");
        this.http.deleteGroup(targetGroup._id)
            .subscribe(function (_) {
            return _this.message.show(targetGroup.name + ", was removed");
        });
    };
    GroupsComponent.prototype.doExist = function (name, array) {
        return array.some(function (group) { return group.name === name; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('groupsPaginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], GroupsComponent.prototype, "groupsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], GroupsComponent.prototype, "trigger", void 0);
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/modules/admin/components/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.scss */ "./src/app/modules/admin/components/groups/groups.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpAdminService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/interviewers/interviewers.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/components/interviewers/interviewers.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row\">\r\n    <interviewers-list [dataSource]=\"usersSource\"\r\n                       [columns]=\"usersColumns\"\r\n                       [headers]=\"usersColumnsHeaders\"\r\n                       (onAdd)=\"addUser()\"\r\n                       (contextMenu)=\"openContextMenu($event)\">\r\n        <h2>\r\n            <i class=\"material-icons\">\r\n                    person\r\n            </i>\r\n            Interviewers list <span *ngIf=\"selectedGroup\">: {{selectedGroup}}</span>\r\n        </h2> \r\n        \r\n        <mat-paginator class=\"paginator users__paginator\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\" #usersPaginator>\r\n        </mat-paginator>\r\n\r\n        Add\r\n        <i class=\"material-icons\">\r\n                person_add\r\n        </i>\r\n\r\n        <button *ngIf=\"selectedGroup\" (click)=\"showAll()\" class=\"showAll\" mat-raised-button color=\"accent\">\r\n            Show all\r\n        </button>\r\n    </interviewers-list>\r\n</section>\r\n\r\n<mat-menu #editMenu=\"matMenu\" class=\"editMenu\">\r\n    <button mat-menu-item (click)=\"edit($event)\">Edit</button>\r\n    <button mat-menu-item (click)=\"remove($event)\">Remove</button>\r\n</mat-menu>\r\n\r\n<div [matMenuTriggerFor]=\"editMenu\" class=\"menuButton\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/components/interviewers/interviewers.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/components/interviewers/interviewers.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "interviewers-list {\n  flex-grow: 1; }\n\ninterviewers-list:first-of-type {\n  border-right: 10px solid rgba(245, 245, 245, 0.3); }\n\nh2 {\n  margin-left: 20px;\n  height: 24px; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/interviewers/interviewers.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/components/interviewers/interviewers.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InterviewersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewersComponent", function() { return InterviewersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/modules/admin/services/http.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/modules/admin/services/dialog.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/snackbar.service */ "./src/app/modules/admin/services/snackbar.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterviewersComponent = /** @class */ (function () {
    function InterviewersComponent(http, dialog, message) {
        this.http = http;
        this.dialog = dialog;
        this.message = message;
        this.usersColumns = [{
                title: "username",
                value: "Username"
            }, {
                title: "fullname",
                value: "Name"
            },
            {
                title: "group",
                value: "Group"
            },
            {
                title: "role",
                value: "Role"
            }
        ];
    }
    InterviewersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.usersColumnsHeaders = this.usersColumns.map(function (field) { return field.title; });
    };
    InterviewersComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.getUsers()
            .subscribe(function (users) {
            _this.usersData = users;
            _this.renderUsersList();
        });
    };
    InterviewersComponent.prototype.renderUsersList = function () {
        var _this = this;
        if (!this.selectedGroup) {
            this.usersSource = this.initDataSource(this.usersData, this.usersPaginator);
        }
        else {
            var selectedUsers = this.usersData.filter(function (user) { return user.group === _this.selectedGroup; });
            this.usersSource = this.initDataSource(selectedUsers, this.usersPaginator);
            this.http.setSelectedGroup(this.selectedGroup);
        }
    };
    InterviewersComponent.prototype.initDataSource = function (data, paginator) {
        var dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        dataSource.paginator = paginator;
        return dataSource;
    };
    InterviewersComponent.prototype.addUser = function () {
        var _this = this;
        this.dialog.addUser()
            .afterClosed()
            .subscribe(function (data) {
            if (data) {
                if (_this.doExist(data.username, _this.usersData)) {
                    return _this.message.show("Unsuccessful. " + data.username + " already exists.");
                }
                var user = data;
                user.role ? user.role = 'master' : user.role = 'interviewer';
                _this.usersData.push(data);
                _this.renderUsersList();
                _this.http.addUser(data)
                    .subscribe(function (_) {
                    _this.message.show(data.username + " was added.");
                });
            }
        });
    };
    InterviewersComponent.prototype.openContextMenu = function (event) {
        this.dialog.openContextMenu(event, this.trigger);
    };
    InterviewersComponent.prototype.remove = function () {
        var _this = this;
        if (this.dialog.target) {
            this.dialog.deleteUser()
                .afterClosed()
                .subscribe(function (response) {
                if (response && response.shouldDelete) {
                    _this.removeUser(_this.dialog.target);
                    _this.dialog.target = null;
                }
            });
        }
    };
    InterviewersComponent.prototype.removeUser = function (targetUser) {
        var _this = this;
        this.usersData = this.usersData.filter(function (user) { return user.username != targetUser.username; });
        this.renderUsersList();
        this.message.show(targetUser.username + ", was removed");
        this.http.deleteUser(targetUser._id)
            .subscribe(function (_) {
            return _this.message.show(targetUser.username + ", was removed");
        });
    };
    InterviewersComponent.prototype.selectGroup = function (event) {
        this.selectedGroup = name;
        this.renderUsersList();
    };
    InterviewersComponent.prototype.edit = function () {
        var _this = this;
        if (this.dialog.target) {
            console.log(this.dialog.target);
            this.dialog.editUser()
                .afterClosed()
                .subscribe(function (changedUser) {
                if (changedUser) {
                    if (changedUser) {
                        _this.usersData = _this.usersData.map(function (user) {
                            changedUser.role = changedUser.role ? 'master' : 'interviewer';
                            if (user.username === _this.dialog.target.username) {
                                user = __assign({}, user, changedUser);
                            }
                            return user;
                        });
                        _this.renderUsersList();
                        _this.http.updateUser(__assign({}, changedUser, { previousName: _this.dialog.target.username }))
                            .subscribe(function (_) {
                            console.log(changedUser, 'was updated');
                            _this.dialog.target = null;
                        });
                    }
                    ;
                }
            });
        }
    };
    InterviewersComponent.prototype.doExist = function (name, array) {
        return array.some(function (user) { return user.username === name; });
    };
    InterviewersComponent.prototype.showAll = function () {
        this.selectedGroup = '';
        this.renderUsersList();
        this.http.setSelectedGroup(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usersPaginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InterviewersComponent.prototype, "usersPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('groupsPaginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InterviewersComponent.prototype, "groupsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], InterviewersComponent.prototype, "trigger", void 0);
    InterviewersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interviewers',
            template: __webpack_require__(/*! ./interviewers.component.html */ "./src/app/modules/admin/components/interviewers/interviewers.component.html"),
            styles: [__webpack_require__(/*! ./interviewers.component.scss */ "./src/app/modules/admin/components/interviewers/interviewers.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpAdminService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]])
    ], InterviewersComponent);
    return InterviewersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/list/list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/list/list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"dataSource\">\r\n    <ng-content select=\"h2\"></ng-content>\r\n    <mat-table [(dataSource)]=\"dataSource\" matSort>\r\n        <ng-container matColumnDef=\"{{column.title}}\" *ngFor=\"let column of columns;\">\r\n            <!-- columns header -->\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                {{ column.value }}\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <!-- columns value -->\r\n                {{ item[column.title] }}\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"headers\">\r\n        </mat-header-row>\r\n\r\n        <mat-row *matRowDef=\"let row; columns: headers; let item\" (contextmenu)=\"editContextMenu($event, item)\" (click)=\"select($event)\">\r\n        </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-toolbar class=\"list--tolbar\">\r\n        <ng-content select=\".paginator\"></ng-content>\r\n        <list-controls (onAdd)=\"add()\">\r\n            <ng-content></ng-content>\r\n        </list-controls>\r\n        <ng-content select=\".showAll\"></ng-content>\r\n    </mat-toolbar>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/components/list/list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/components/list/list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list--tolbar {\n  background-color: #fff; }\n\n.title {\n  display: flex;\n  justify-content: flex-start;\n  vertical-align: middle;\n  align-items: center;\n  margin-left: 16px; }\n\n.title i {\n    opacity: 0.6;\n    margin-right: 8px; }\n\nmat-row:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  transition: background-color .3s ease; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/list/list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/components/list/list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/modules/admin/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(http) {
        this.http = http;
        this.selectedGroup = this.http.selectedGroup;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.http.getSelectedGroup()
            .subscribe();
    };
    ListComponent.prototype.add = function () {
        this.onAdd.emit(true);
    };
    ListComponent.prototype.select = function (group) {
        this.selectGroup.emit(group);
    };
    ListComponent.prototype.editContextMenu = function (event, item) {
        var eventObject = { event: event, item: item };
        this.contextMenu.emit(eventObject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListComponent.prototype, "onAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListComponent.prototype, "selectGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListComponent.prototype, "contextMenu", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interviewers-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/modules/admin/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/modules/admin/components/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpAdminService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/listcontrols/listcontrols.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/components/listcontrols/listcontrols.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"add()\">\r\n    <ng-content></ng-content>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/components/listcontrols/listcontrols.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/components/listcontrols/listcontrols.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 16px; }\n"

/***/ }),

/***/ "./src/app/modules/admin/components/listcontrols/listcontrols.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/components/listcontrols/listcontrols.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControls", function() { return ListControls; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListControls = /** @class */ (function () {
    function ListControls() {
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListControls.prototype.add = function () {
        this.onAdd.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListControls.prototype, "onAdd", void 0);
    ListControls = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-controls',
            template: __webpack_require__(/*! ./listcontrols.component.html */ "./src/app/modules/admin/components/listcontrols/listcontrols.component.html"),
            styles: [__webpack_require__(/*! ./listcontrols.component.scss */ "./src/app/modules/admin/components/listcontrols/listcontrols.component.scss")]
        })
    ], ListControls);
    return ListControls;
}());



/***/ }),

/***/ "./src/app/modules/admin/services/dialog.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/admin/services/dialog.service.ts ***!
  \**********************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dialog/group.dialog */ "./src/app/modules/admin/components/dialog/group.dialog.ts");
/* harmony import */ var _components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dialog/users.dialog */ "./src/app/modules/admin/components/dialog/users.dialog.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http.service */ "./src/app/modules/admin/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogService = /** @class */ (function () {
    function DialogService(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.messages = {
            addGroup: 'Add new group',
            delGroup: 'Delete group'
        };
    }
    DialogService.prototype.addGroup = function () {
        return this.dialog.open(_components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_2__["GroupDialogComponent"]);
    };
    DialogService.prototype.addUser = function () {
        return this.dialog.open(_components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_3__["UsersDialogComponent"]);
    };
    DialogService.prototype.deleteGroup = function () {
        return this.dialog.open(_components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_2__["GroupDialogComponent"], {
            data: this.formArray(this.target)
        });
    };
    DialogService.prototype.deleteUser = function () {
        return this.dialog.open(_components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_3__["UsersDialogComponent"], {
            data: this.formArray(this.target)
        });
    };
    DialogService.prototype.editGroup = function () {
        return this.dialog.open(_components_dialog_group_dialog__WEBPACK_IMPORTED_MODULE_2__["GroupDialogComponent"], {
            data: {
                object: this.formArray(this.target),
                edit: true
            }
        });
    };
    DialogService.prototype.editUser = function () {
        return this.dialog.open(_components_dialog_users_dialog__WEBPACK_IMPORTED_MODULE_3__["UsersDialogComponent"], {
            data: {
                object: this.formArray(this.target),
                edit: true
            }
        });
    };
    DialogService.prototype.openContextMenu = function (event, trigger) {
        event.event.preventDefault();
        var triggerButton = document.querySelector('.menuButton');
        triggerButton.setAttribute('style', this.getClickPositionStyle(event.event));
        this.target = event.item;
        if (!this.target._id) {
            this.target = this.target.username ? this.getUser(this.target.username, trigger) :
                this.getGroup(this.target.name, trigger);
        }
        else {
            trigger.openMenu(event);
        }
    };
    DialogService.prototype.getUser = function (username, trigger) {
        var _this = this;
        this.http.getUser(username)
            .subscribe(function (user) {
            _this.target = user;
            trigger.openMenu(event);
        });
    };
    DialogService.prototype.getGroup = function (name, trigger) {
        var _this = this;
        this.http.getGroup(name)
            .subscribe(function (group) {
            _this.target = group;
            trigger.openMenu(event);
        });
    };
    DialogService.prototype.formArray = function (object) {
        var arr = [], regex = /^\_/;
        for (var property in object) {
            if (!property.match(regex)) {
                if (property.match('password')) {
                    arr.push({
                        title: property,
                        value: ''
                    });
                }
                else {
                    arr.push({
                        title: property,
                        value: object[property]
                    });
                }
            }
        }
        return arr;
    };
    DialogService.prototype.getClickPositionStyle = function (event) {
        return "position: fixed;\n                left: " + (event.pageX + 10) + "px;\n                top: " + (event.pageY + 10) + "px; \n                z-index: 1000";
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpAdminService"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/modules/admin/services/http.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/admin/services/http.service.ts ***!
  \********************************************************/
/*! exports provided: HttpAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAdminService", function() { return HttpAdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpAdminService = /** @class */ (function () {
    function HttpAdminService(http) {
        this.http = http;
        this.selectedGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    HttpAdminService.prototype.getUsers = function () {
        return this.http.get("/adm/users");
    };
    HttpAdminService.prototype.getUser = function (name) {
        return this.http.get("/adm/user/" + name);
    };
    HttpAdminService.prototype.getGroups = function () {
        return this.http.get("/adm/groups");
    };
    HttpAdminService.prototype.getGroup = function (name) {
        return this.http.get("/adm/group/" + name);
    };
    HttpAdminService.prototype.addGroup = function (group) {
        return this.http.post("/adm/groups", group);
    };
    HttpAdminService.prototype.addUser = function (user) {
        return this.http.post("/adm/users", user);
    };
    HttpAdminService.prototype.deleteUser = function (id) {
        return this.http.delete("/adm/user/" + id);
    };
    HttpAdminService.prototype.deleteGroup = function (id) {
        return this.http.delete("/adm/group/" + id);
    };
    HttpAdminService.prototype.updateUser = function (user) {
        return this.http.put('/adm/user/', user);
    };
    HttpAdminService.prototype.updateGroup = function (group) {
        return this.http.put('/adm/group/', group);
    };
    HttpAdminService.prototype.getSelectedGroup = function () {
        return this.selectedGroup.asObservable();
    };
    HttpAdminService.prototype.setSelectedGroup = function (group) {
        this.selectedGroup.next(group);
    };
    HttpAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpAdminService);
    return HttpAdminService;
}());



/***/ }),

/***/ "./src/app/modules/admin/services/snackbar.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/admin/services/snackbar.service.ts ***!
  \************************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarService = /** @class */ (function () {
    function SnackbarService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarService.prototype.show = function (message) {
        this.snackBar.open(message, '', {
            duration: 1500,
        });
    };
    SnackbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarService);
    return SnackbarService;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/modules/auth/auth.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/auth.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/modules/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/modules/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var src_app_directives_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/confirm-equal-validator.directive */ "./src/app/directives/confirm-equal-validator.directive.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material */ "./src/app/modules/material/material.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/modules/auth/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], src_app_directives_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__["ConfirmEqualValidatorDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], src_app_directives_confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_7__["ConfirmEqualValidatorDirective"]],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"form-card\">\r\n    <div class=\"form-info\">\r\n        <h1 class=\"form-title\">SyncForms</h1>\r\n    </div>\r\n    <div class=\"form-toggle\">\r\n        <mat-slide-toggle\r\n            class=\"form-toggle\"\r\n            [checked]=\"checked\"\r\n            (change)=\"onChange($event)\"\r\n        >\r\n            <span *ngIf=\"checked == false\">Log in as candidate</span>\r\n            <span *ngIf=\"checked == true\">Log in as master or interviewer</span>\r\n        </mat-slide-toggle>\r\n    </div>\r\n    <mat-error class=\"text-center\" *ngIf=\"message\">Wrong username or password</mat-error>\r\n    <form\r\n        [formGroup]='form'\r\n        (ngSubmit)='onSubmit()'\r\n        class=\"form\"\r\n        *ngIf=\"checked == false\"\r\n    >\r\n        <mat-form-field \r\n            class=\"form-input-full\"\r\n            appearance=\"outline\"\r\n        >\r\n            <mat-label>Enter username</mat-label>\r\n            <input \r\n                matInput \r\n                placeholder=\"Username\"\r\n                type=\"text\"\r\n                formControlName='username'\r\n            >\r\n            <mat-error *ngIf=\"form.get('username').errors?.required\">Username field must not be empty</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field \r\n            class=\"form-input-full\"\r\n            appearance=\"outline\"\r\n        >\r\n            <mat-label>Enter password</mat-label>\r\n            <input \r\n                matInput \r\n                placeholder=\"Password\"\r\n                [type]=\"passwordType\"\r\n                formControlName='password'\r\n            >\r\n            <i [ngClass]=\"{'active': active}\" class=\"material-icons form-show\" (click)=\"togglePassword()\">remove_red_eye</i>\r\n            <mat-error *ngIf=\"form.get('password').errors?.required\">Password field must not be empty</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"form-button\">\r\n            <button \r\n                mat-raised-button \r\n                color=\"primary\"\r\n                [disabled]='form.invalid'\r\n            >\r\n            Log in\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <form\r\n        [formGroup]='formCandidate'\r\n        (ngSubmit)='onSubmitCandidate()'\r\n        class=\"form\" \r\n        *ngIf=\"checked == true\"\r\n    >\r\n        <mat-form-field \r\n            class=\"form-input-full\"\r\n            appearance=\"outline\"\r\n        >\r\n            <mat-label>Enter username</mat-label>\r\n            <input \r\n                matInput \r\n                placeholder=\"Username\"\r\n                type=\"text\"\r\n                formControlName='username'\r\n            >\r\n            <mat-error *ngIf=\"formCandidate.get('username').errors?.required\">Username field must not be empty</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"form-button\">\r\n            <button \r\n                mat-raised-button \r\n                color=\"primary\"\r\n                [disabled]='formCandidate.invalid'\r\n            >\r\n            Log in\r\n            </button>\r\n        </div>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-top: 30px; }\n  .form-title {\n    font-family: 'Russo One', sans-serif !important; }\n  .form-card {\n    max-width: 400px;\n    padding: 30px !important;\n    margin: 0 auto;\n    margin-top: 100px; }\n  .form-info {\n    text-align: center; }\n  .form-button {\n    text-align: center;\n    margin-top: 10px; }\n  .form-show {\n    position: absolute;\n    right: 0px;\n    bottom: 15px;\n    cursor: pointer;\n    color: #a2a7aa; }\n  .form-input-full {\n    width: 100%; }\n  .form-login, .form-registration {\n    font-family: 'Montserrat', sans-serif;\n    color: #2196f3;\n    margin-bottom: 10px; }\n  .text-center {\n  text-align: center; }\n  .active {\n  color: #000; }\n  .form-toggle {\n  text-align: center;\n  margin: 12px 0; }\n"

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/modules/auth/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    // user: object;
    function LoginComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.passwordType = 'password';
        this.passwordShow = false;
        this.active = false;
        this.checked = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form.value, username = _a.username, password = _a.password;
        this.authService.login(username, password)
            .subscribe(function (data) {
            _this.router.navigate(['/main']);
        }, function (error) {
            _this.alertService.error(error);
            _this.form.reset();
        });
    };
    LoginComponent.prototype.onSubmitCandidate = function () {
        var username = this.formCandidate.value.username;
        var user = { fullname: username, role: 'candidate' };
        this.authService.loginCandidate(user);
        this.router.navigate(['/main']);
    };
    LoginComponent.prototype.onChange = function (event) {
        this.checked = event.checked;
        if (this.checked) {
            this.formCandidate.get('username').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formCandidate.get('username').updateValueAndValidity();
            this.form.get('username').clearValidators();
            this.form.get('username').updateValueAndValidity();
            this.form.get('password').clearValidators();
            this.form.get('password').updateValueAndValidity();
        }
        else {
            this.form.get('username').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.form.get('username').updateValueAndValidity();
            this.form.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.form.get('password').updateValueAndValidity();
            this.formCandidate.get('username').clearValidators();
            this.formCandidate.get('username').updateValueAndValidity();
        }
    };
    LoginComponent.prototype.togglePassword = function () {
        if (this.passwordShow) {
            this.passwordType = 'password';
            this.passwordShow = false;
            this.active = false;
        }
        else {
            this.passwordType = 'text';
            this.passwordShow = true;
            this.active = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.formCandidate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/services/alert.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/services/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/users/auth', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            _this.user.emit(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        window.localStorage.clear();
        this.user.emit({});
        return this.http.get('/users/logout');
    };
    AuthService.prototype.loginCandidate = function (username) {
        localStorage.setItem('currentUser', JSON.stringify(username));
        this.user.emit(username);
    };
    AuthService.prototype.subscriber = function () {
        return this.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/material/material.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/material/material.ts ***!
  \**********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]
            ],
            exports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/notfound/notfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/notfound/notfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>\r\n  Oooops...\r\n  <br> \r\n  404\r\n</h1>\r\n</div>\r\n\r\n<div>\r\n    <h2>\r\n        Page not found.\r\n    </h2>\r\n</div>\r\n\r\n<div>\r\n  <button href=\"/main\" mat-raised-button color=\"primary\">Go to homepage</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/notfound/notfound.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/notfound/notfound.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/notfound/notfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/notfound/notfound.component.ts ***!
  \********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent(router) {
        this.router = router;
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/modules/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/modules/notfound/notfound.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/notfound/notfound.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/notfound/notfound.module.ts ***!
  \*****************************************************/
/*! exports provided: NotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundModule", function() { return NotfoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound.component */ "./src/app/modules/notfound/notfound.component.ts");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material */ "./src/app/modules/material/material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotfoundModule = /** @class */ (function () {
    function NotfoundModule() {
    }
    NotfoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            declarations: [_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"]],
            exports: [
                _notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"]
            ]
        })
    ], NotfoundModule);
    return NotfoundModule;
}());



/***/ }),

/***/ "./src/app/modules/statistics/services/statistics.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/statistics/services/statistics.service.ts ***!
  \*******************************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsService = /** @class */ (function () {
    function StatisticsService() {
    }
    StatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "./src/app/modules/statistics/statistics.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/statistics/statistics.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/modules/statistics/statistics/statistics.component.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/statistics.service */ "./src/app/modules/statistics/services/statistics.service.ts");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material */ "./src/app/modules/material/material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            providers: [
                _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__["StatisticsService"]
            ],
            declarations: [_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"]],
            exports: [
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"]
            ]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "./src/app/modules/statistics/statistics/statistics.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/statistics/statistics/statistics.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"dataSource\">\r\n    <div class=\"title\">\r\n            <i class=\"material-icons\">\r\n                    info\r\n            </i>\r\n\r\n            <h2>{{title}}</h2>\r\n    </div>\r\n    <mat-table [dataSource]=\"interviewsSource\" matSort>\r\n        <ng-container matColumnDef=\"{{column.title}}\" *ngFor=\"let column of interviewColumns;\">\r\n            <!-- columns header -->\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                    <!-- <i class=\"material-icons\" *ngIf=\"column?.icon\">\r\n                            {{ column.icon }}\r\n                    </i> -->\r\n                {{ column.value }}\r\n            </mat-header-cell>\r\n\r\n            <mat-cell *matCellDef=\"let item;\">\r\n   \r\n            <button mat-raised-button color=\"primary\" *ngIf=\"column?.icon && column.title==='info'\">\r\n                <i class=\"material-icons\">\r\n                        {{ column.icon }}\r\n                </i>\r\n            </button>\r\n                {{ item[column.title] }}\r\n            </mat-cell>\r\n        </ng-container>\r\n        \r\n        <mat-header-row *matHeaderRowDef=\"interviewsColumnsHeaders\">\r\n        </mat-header-row>\r\n                                 \r\n        <mat-row *matRowDef=\"let row; columns: interviewsColumnsHeaders; let item\">\r\n        </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-toolbar class=\"list--tolbar\">\r\n        <mat-paginator class=\"paginator users__paginator\" \r\n                       [pageSize]=\"10\" \r\n                       [pageSizeOptions]=\"[5,10,25]\" \r\n                       #interviewsPaginator>\r\n        </mat-paginator>\r\n    </mat-toolbar>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/statistics/statistics/statistics.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/statistics/statistics/statistics.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list--tolbar {\n  background-color: #fff; }\n\n.title {\n  display: flex;\n  justify-content: flex-start;\n  vertical-align: middle;\n  align-items: center;\n  margin-left: 16px; }\n\n.title i {\n    opacity: 0.6;\n    margin-right: 8px; }\n\nmat-row:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  transition: background-color .3s ease; }\n"

/***/ }),

/***/ "./src/app/modules/statistics/statistics/statistics.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/statistics/statistics/statistics.component.ts ***!
  \***********************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
        this.title = "Interviews statistic";
        this.panelOpenState = false;
        this.dataSource = [{
                id: 1,
                startTime: '11:32',
                endTime: '11:45',
                candidate: 'Alexey',
                interviewer: 'Happy Man',
                formTitle: 'Registration Form',
                logInOut: 'Expand to view',
                actions: 'Expand',
                comments: 'Expand'
            },
            {
                id: 2,
                startTime: '11:57',
                endTime: '12:03',
                candidate: 'Ehor',
                interviewer: 'Валера',
                formTitle: 'Registration Form',
                logInOut: 'Expand to view',
                actions: 'Expand',
                comments: 'Expand'
            },
            {
                id: 3,
                startTime: '12:54',
                endTime: '13:20',
                candidate: 'Donald',
                interviewer: 'epicmaster',
                formTitle: 'Registration Form',
                logInOut: 'Expand to view',
                actions: 'Expand',
                comments: 'Expand'
            }
        ];
        this.interviewColumns = [{
                title: 'id',
                value: 'Interview id',
            },
            {
                title: 'startTime',
                value: 'Start Time',
                icon: 'timer'
            },
            {
                title: 'endTime',
                value: 'End Time',
                icon: 'timer_off'
            },
            {
                title: 'candidate',
                value: 'Candidate'
            },
            {
                title: 'interviewer',
                value: 'Interviewer'
            },
            {
                title: 'formTitle',
                value: 'Form title'
            },
            {
                title: 'info',
                value: 'Info',
                icon: 'pageview'
            }
        ];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.interviewsColumnsHeaders = this.interviewColumns.map(function (field) { return field.title; });
        this.renderInterviewsList();
    };
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        this.interviewsSource.paginator = this.interviewsPaginator;
    };
    StatisticsComponent.prototype.renderInterviewsList = function () {
        this.interviewsSource = this.initDataSource(this.dataSource, this.interviewsPaginator);
    };
    StatisticsComponent.prototype.initDataSource = function (data, paginator) {
        var dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        dataSource.paginator = paginator;
        return dataSource;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('interviewsPaginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], StatisticsComponent.prototype, "interviewsPaginator", void 0);
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/modules/statistics/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/modules/statistics/statistics/statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/options/confirm-removing-form/confirm-removing-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/options/confirm-removing-form/confirm-removing-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Do you really want to delete this form?</h1>\r\n<mat-dialog-actions fxLayoutAlign=\"space-between center\">\r\n   <button mat-raised-button \r\n           [mat-dialog-close]=\"true\" \r\n           fxFlex=\"0 1 150px\" \r\n           color=\"primary\"\r\n           class=\"button_yes\">Yes</button>\r\n   <button mat-raised-button \r\n           [mat-dialog-close]=\"false\" \r\n           fxFlex=\"0 1 150px\"\r\n           color=\"warn\"\r\n           class=\"button_no\">No</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/options/confirm-removing-form/confirm-removing-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/options/confirm-removing-form/confirm-removing-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-size: 20px;\n  font-weight: normal; }\n"

/***/ }),

/***/ "./src/app/options/confirm-removing-form/confirm-removing-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/options/confirm-removing-form/confirm-removing-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmRemovingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRemovingFormComponent", function() { return ConfirmRemovingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmRemovingFormComponent = /** @class */ (function () {
    function ConfirmRemovingFormComponent() {
    }
    ConfirmRemovingFormComponent.prototype.ngOnInit = function () {
    };
    ConfirmRemovingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-removing-form',
            template: __webpack_require__(/*! ./confirm-removing-form.component.html */ "./src/app/options/confirm-removing-form/confirm-removing-form.component.html"),
            styles: [__webpack_require__(/*! ./confirm-removing-form.component.scss */ "./src/app/options/confirm-removing-form/confirm-removing-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmRemovingFormComponent);
    return ConfirmRemovingFormComponent;
}());



/***/ }),

/***/ "./src/app/options/snackbar/snackbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/options/snackbar/snackbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  snackbar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/options/snackbar/snackbar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/options/snackbar/snackbar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/options/snackbar/snackbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/options/snackbar/snackbar.component.ts ***!
  \********************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
    };
    SnackbarComponent.prototype.openSnackBar = function (message, messageType, durationTime, action) {
        if (durationTime === void 0) { durationTime = 3000; }
        var messageCenter = 'snackbar-font-center';
        var success = 'snackbar-success';
        var fail = 'snackbar-fail';
        var msgStyle = (messageType === 'success') ? success :
            (messageType === 'fail') ? fail : '';
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.panelClass = [messageCenter, msgStyle];
        config.duration = durationTime,
            this.snackBar.open(message, action, config);
    };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/options/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/options/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

// fix for socket's error
window.global = window;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\heroku\sync-forms\app-client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map