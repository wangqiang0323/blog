webpackJsonp([0,5],Array(886).concat([
/* 886 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_ng2_main__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_ng2_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ag_grid_ng2_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_component__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hero_hero_component__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_menu_side_menu_component__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_bar_search_bar_component__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vkrms_component__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hero_new_person_new_person_component__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_chart_my_chart_component__ = __webpack_require__(1199);
/* harmony export (binding) */ __webpack_require__.d(exports, "routes", function() { return routes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_14__vkrms_component__["a" /* VkrmsComponent */], children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
            { path: 'hero', component: __WEBPACK_IMPORTED_MODULE_10__hero_hero_component__["a" /* HeroComponent */] },
            { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_component__["a" /* ScheduleComponent */] },
            { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_16__my_chart_my_chart_component__["a" /* MyChartComponent */] }
        ]
    },
];
var VkrmsModule = (function () {
    function VkrmsModule() {
    }
    VkrmsModule.routes = routes;
    VkrmsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                // Components / Directives/ Pipes
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__vkrms_component__["a" /* VkrmsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__hero_new_person_new_person_component__["a" /* NewPersonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__my_chart_my_chart_component__["a" /* MyChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_4_ag_grid_ng2_main__["AgGridModule"].withNg2ComponentSupport(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* BootstrapModalModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(routes),
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__hero_new_person_new_person_component__["a" /* NewPersonComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__vkrms_component__["a" /* VkrmsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], VkrmsModule);
    return VkrmsModule;
}());
/* harmony default export */ exports["default"] = VkrmsModule;


/***/ },
/* 887 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var MulticastObservable_1 = __webpack_require__(895);
var ConnectableObservable_1 = __webpack_require__(891);
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} an Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    return !selector ?
        new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) :
        new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ },
/* 888 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var Subscription_1 = __webpack_require__(141);
/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 889 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var queue_1 = __webpack_require__(908);
var observeOn_1 = __webpack_require__(536);
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 890 */
/***/ function(module, exports) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 891 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var Observable_1 = __webpack_require__(15);
var Subscriber_1 = __webpack_require__(33);
var Subscription_1 = __webpack_require__(141);
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source._subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 892 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isScheduler_1 = __webpack_require__(530);
var ArrayObservable_1 = __webpack_require__(199);
var mergeAll_1 = __webpack_require__(144);
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {Observable} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return concatStatic.apply(void 0, [this].concat(observables));
}
exports.concat = concat;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins multiple Observables together by subscribing to them one at a time and
 * merging their results into the output Observable. Will wait for each
 * Observable to complete before moving on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = Rx.Observable.concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = Rx.Observable.concat(timer1, timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {Observable} input1 An input Observable to concatenate with others.
 * @param {Observable} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
        scheduler = args.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
}
exports.concatStatic = concatStatic;
//# sourceMappingURL=concat.js.map

/***/ },
/* 893 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(199);
var isArray_1 = __webpack_require__(142);
var Subscriber_1 = __webpack_require__(33);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
var iterator_1 = __webpack_require__(201);
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return zipStatic.apply(this, observables);
}
exports.zipProto = zipProto;
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
}
exports.zipStatic = zipStatic;
var ZipOperator = (function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) { values = Object.create(null); }
        _super.call(this, destination);
        this.index = 0;
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        var index = this.index++;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.$$iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable, index) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.index = index;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ },
/* 894 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isArray_1 = __webpack_require__(142);
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 895 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var ConnectableObservable_1 = __webpack_require__(891);
var MulticastObservable = (function (_super) {
    __extends(MulticastObservable, _super);
    function MulticastObservable(source, subjectFactory, selector) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastObservable.prototype._subscribe = function (subscriber) {
        var _a = this, selector = _a.selector, source = _a.source;
        var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
        var subscription = selector(connectable).subscribe(subscriber);
        subscription.add(connectable.connect());
        return subscription;
    };
    return MulticastObservable;
}(Observable_1.Observable));
exports.MulticastObservable = MulticastObservable;
//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 896 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(53);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var Observable_1 = __webpack_require__(15);
var Subscriber_1 = __webpack_require__(33);
var map_1 = __webpack_require__(143);
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        var xhr = new root_1.root.XMLHttpRequest();
        if ('withCredentials' in xhr) {
            xhr.withCredentials = !!this.withCredentials;
        }
        return xhr;
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxGetJSON(url, headers) {
    return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', headers: headers })
        .lift(new map_1.MapOperator(function (x, index) { return x.response; }, null));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // open XHR first
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout and responseType can be set once the XHR is open
            xhr.timeout = request.timeout;
            xhr.responseType = request.responseType;
            // set headers
            this.setHeaders(xhr, headers);
            // now set up the events
            this.setupEvents(xhr, request);
            // finally send the request
            if (body) {
                xhr.send(body);
            }
            else {
                xhr.send();
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        xhr.ontimeout = function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        };
        xhr.ontimeout.request = request;
        xhr.ontimeout.subscriber = this;
        xhr.ontimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr && root_1.root.XDomainRequest) {
            if (progressSubscriber) {
                xhr.onprogress = function xhrProgress(e) {
                    var progressSubscriber = xhrProgress.progressSubscriber;
                    progressSubscriber.next(e);
                };
                xhr.onprogress.progressSubscriber = progressSubscriber;
            }
            xhr.onerror = function xhrError(e) {
                var _a = xhrError, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror.request = request;
            xhr.onerror.subscriber = this;
            xhr.onerror.progressSubscriber = progressSubscriber;
        }
        xhr.onreadystatechange = function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        };
        xhr.onreadystatechange.subscriber = this;
        xhr.onreadystatechange.progressSubscriber = progressSubscriber;
        xhr.onreadystatechange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4) {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        switch (this.responseType) {
            case 'json':
                if ('response' in xhr) {
                    //IE does not support json as responseType, parse it internally
                    this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
                }
                else {
                    this.response = JSON.parse(xhr.responseText || 'null');
                }
                break;
            case 'xml':
                this.response = xhr.responseXML;
                break;
            case 'text':
            default:
                this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
                break;
        }
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;
//# sourceMappingURL=AjaxObservable.js.map

/***/ },
/* 897 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(compare, flushes) {
    return this.lift(new DistinctOperator(compare, flushes));
}
exports.distinct = distinct;
var DistinctOperator = (function () {
    function DistinctOperator(compare, flushes) {
        this.compare = compare;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = (function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, compare, flushes) {
        _super.call(this, destination);
        this.values = [];
        if (typeof compare === 'function') {
            this.compare = compare;
        }
        if (flushes) {
            this.add(subscribeToResult_1.subscribeToResult(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.length = 0;
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        var found = false;
        var values = this.values;
        var len = values.length;
        try {
            for (var i = 0; i < len; i++) {
                if (this.compare(values[i], value)) {
                    found = true;
                    return;
                }
            }
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.values.push(value);
        this.destination.next(value);
    };
    DistinctSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    return DistinctSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.DistinctSubscriber = DistinctSubscriber;
//# sourceMappingURL=distinct.js.map

/***/ },
/* 898 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 899 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
}
exports.find = find;
var FindValueOperator = (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
exports.FindValueOperator = FindValueOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = (function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber_1.Subscriber));
exports.FindValueSubscriber = FindValueSubscriber;
//# sourceMappingURL=find.js.map

/***/ },
/* 900 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(199);
var mergeAll_1 = __webpack_require__(144);
var isScheduler_1 = __webpack_require__(530);
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {Observable} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
}
exports.merge = merge;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {Observable} input1 An input Observable to merge with others.
 * @param {Observable} input2 An input Observable to merge with others.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (observables.length === 1) {
        return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
}
exports.mergeStatic = mergeStatic;
//# sourceMappingURL=merge.js.map

/***/ },
/* 901 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
}
exports.mergeMapTo = mergeMapTo;
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = (function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
exports.MergeMapToOperator = MergeMapToOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = (function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapToSubscriber = MergeMapToSubscriber;
//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 902 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FromObservable_1 = __webpack_require__(542);
var isArray_1 = __webpack_require__(142);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return this.lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNext = onErrorResumeNext;
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
var OnErrorResumeNextOperator = (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = (function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(subscribeToResult_1.subscribeToResult(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 903 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__(142);
var ArrayObservable_1 = __webpack_require__(199);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables
 * @param {...Observables} ...observables sources used to race for which Observable emits first.
 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    observables.unshift(this);
    return raceStatic.apply(this, observables);
}
exports.race = race;
function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
}
exports.raceStatic = raceStatic;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                    this.add(subscription);
                }
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ },
/* 904 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var async_1 = __webpack_require__(529);
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimeIntervalOperator(scheduler));
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;
;
var TimeIntervalOperator = (function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = (function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 905 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var async_1 = __webpack_require__(529);
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new TimestampOperator(scheduler));
}
exports.timestamp = timestamp;
var Timestamp = (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
exports.Timestamp = Timestamp;
;
var TimestampOperator = (function () {
    function TimestampOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimestampOperator.prototype.call = function (observer, source) {
        return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
    };
    return TimestampOperator;
}());
var TimestampSubscriber = (function (_super) {
    __extends(TimestampSubscriber, _super);
    function TimestampSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
    }
    TimestampSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        this.destination.next(new Timestamp(value, now));
    };
    return TimestampSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timestamp.js.map

/***/ },
/* 906 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(531);
var AsyncScheduler_1 = __webpack_require__(532);
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return !this.id ?
            _super.prototype.schedule.call(this, state, delay) : this.add(new VirtualAction(this.scheduler, this.work)).schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ },
/* 907 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsapAction_1 = __webpack_require__(1156);
var AsapScheduler_1 = __webpack_require__(1157);
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ },
/* 908 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var QueueAction_1 = __webpack_require__(1158);
var QueueScheduler_1 = __webpack_require__(1159);
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ },
/* 909 */
/***/ function(module, exports) {

"use strict";
"use strict";
var SubscriptionLog = (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
exports.SubscriptionLog = SubscriptionLog;
//# sourceMappingURL=SubscriptionLog.js.map

/***/ },
/* 910 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var SubscriptionLog_1 = __webpack_require__(909);
var SubscriptionLoggable = (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ },
/* 911 */
/***/ function(module, exports) {

"use strict";
"use strict";
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map

/***/ },
/* 912 */
/***/ function(module, exports) {

"use strict";
"use strict";
/* tslint:disable:no-empty */
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ },
/* 913 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var toPromise_1 = __webpack_require__(545);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ },
/* 914 */,
/* 915 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = __webpack_require__(69);
exports.Subject = Subject_1.Subject;
/* tslint:enable:no-unused-variable */
var Observable_1 = __webpack_require__(15);
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__(916);
__webpack_require__(917);
__webpack_require__(918);
__webpack_require__(919);
__webpack_require__(920);
__webpack_require__(923);
__webpack_require__(924);
__webpack_require__(925);
__webpack_require__(926);
__webpack_require__(927);
__webpack_require__(928);
__webpack_require__(929);
__webpack_require__(930);
__webpack_require__(931);
__webpack_require__(932);
__webpack_require__(937);
__webpack_require__(933);
__webpack_require__(934);
__webpack_require__(935);
__webpack_require__(936);
__webpack_require__(938);
__webpack_require__(941);
__webpack_require__(939);
__webpack_require__(940);
__webpack_require__(942);
//dom
__webpack_require__(921);
__webpack_require__(922);
//operators
__webpack_require__(945);
__webpack_require__(946);
__webpack_require__(947);
__webpack_require__(948);
__webpack_require__(949);
__webpack_require__(950);
__webpack_require__(951);
__webpack_require__(952);
__webpack_require__(539);
__webpack_require__(953);
__webpack_require__(954);
__webpack_require__(955);
__webpack_require__(956);
__webpack_require__(957);
__webpack_require__(962);
__webpack_require__(958);
__webpack_require__(959);
__webpack_require__(960);
__webpack_require__(540);
__webpack_require__(961);
__webpack_require__(963);
__webpack_require__(964);
__webpack_require__(965);
__webpack_require__(966);
__webpack_require__(967);
__webpack_require__(970);
__webpack_require__(971);
__webpack_require__(972);
__webpack_require__(968);
__webpack_require__(541);
__webpack_require__(973);
__webpack_require__(974);
__webpack_require__(975);
__webpack_require__(976);
__webpack_require__(977);
__webpack_require__(978);
__webpack_require__(979);
__webpack_require__(943);
__webpack_require__(944);
__webpack_require__(980);
__webpack_require__(981);
__webpack_require__(969);
__webpack_require__(982);
__webpack_require__(983);
__webpack_require__(984);
__webpack_require__(985);
__webpack_require__(986);
__webpack_require__(987);
__webpack_require__(988);
__webpack_require__(989);
__webpack_require__(990);
__webpack_require__(991);
__webpack_require__(992);
__webpack_require__(993);
__webpack_require__(994);
__webpack_require__(995);
__webpack_require__(996);
__webpack_require__(997);
__webpack_require__(998);
__webpack_require__(999);
__webpack_require__(1001);
__webpack_require__(1000);
__webpack_require__(1002);
__webpack_require__(1003);
__webpack_require__(1004);
__webpack_require__(1005);
__webpack_require__(1006);
__webpack_require__(1007);
__webpack_require__(1008);
__webpack_require__(1009);
__webpack_require__(1010);
__webpack_require__(1011);
__webpack_require__(1012);
__webpack_require__(1013);
__webpack_require__(1014);
__webpack_require__(1015);
__webpack_require__(1016);
__webpack_require__(1017);
__webpack_require__(1018);
__webpack_require__(1019);
__webpack_require__(1020);
__webpack_require__(1021);
__webpack_require__(1022);
__webpack_require__(1023);
__webpack_require__(1024);
__webpack_require__(1025);
__webpack_require__(1026);
__webpack_require__(1027);
__webpack_require__(1028);
__webpack_require__(1029);
__webpack_require__(1030);
__webpack_require__(1031);
__webpack_require__(1032);
__webpack_require__(913);
__webpack_require__(1033);
__webpack_require__(1034);
__webpack_require__(1035);
__webpack_require__(1036);
__webpack_require__(1037);
__webpack_require__(1038);
__webpack_require__(1039);
__webpack_require__(1040);
/* tslint:disable:no-unused-variable */
var Subscription_1 = __webpack_require__(141);
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(33);
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = __webpack_require__(888);
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = __webpack_require__(889);
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = __webpack_require__(312);
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var MulticastObservable_1 = __webpack_require__(895);
exports.MulticastObservable = MulticastObservable_1.MulticastObservable;
var ConnectableObservable_1 = __webpack_require__(891);
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = __webpack_require__(311);
exports.Notification = Notification_1.Notification;
var EmptyError_1 = __webpack_require__(202);
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = __webpack_require__(890);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = __webpack_require__(319);
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(546);
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = __webpack_require__(904);
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = __webpack_require__(905);
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = __webpack_require__(1163);
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = __webpack_require__(906);
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = __webpack_require__(896);
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var asap_1 = __webpack_require__(907);
var async_1 = __webpack_require__(529);
var queue_1 = __webpack_require__(908);
var animationFrame_1 = __webpack_require__(1160);
var rxSubscriber_1 = __webpack_require__(206);
var iterator_1 = __webpack_require__(201);
var observable_1 = __webpack_require__(205);
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
    observable: observable_1.$$observable,
    iterator: iterator_1.$$iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ },
/* 916 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bindCallback_1 = __webpack_require__(1057);
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 917 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bindNodeCallback_1 = __webpack_require__(1058);
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 918 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var combineLatest_1 = __webpack_require__(1059);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 919 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var concat_1 = __webpack_require__(1060);
Observable_1.Observable.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ },
/* 920 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var defer_1 = __webpack_require__(1061);
Observable_1.Observable.defer = defer_1.defer;
//# sourceMappingURL=defer.js.map

/***/ },
/* 921 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var ajax_1 = __webpack_require__(1063);
Observable_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ },
/* 922 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var webSocket_1 = __webpack_require__(1064);
Observable_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ },
/* 923 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var empty_1 = __webpack_require__(1065);
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ },
/* 924 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var forkJoin_1 = __webpack_require__(1066);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 925 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var from_1 = __webpack_require__(203);
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ },
/* 926 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var fromEvent_1 = __webpack_require__(1067);
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 927 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var fromEventPattern_1 = __webpack_require__(1068);
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 928 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var fromPromise_1 = __webpack_require__(204);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 929 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var GenerateObservable_1 = __webpack_require__(1048);
Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
//# sourceMappingURL=generate.js.map

/***/ },
/* 930 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var if_1 = __webpack_require__(1069);
Observable_1.Observable.if = if_1._if;
//# sourceMappingURL=if.js.map

/***/ },
/* 931 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var interval_1 = __webpack_require__(1070);
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ },
/* 932 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var merge_1 = __webpack_require__(1071);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ },
/* 933 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var never_1 = __webpack_require__(1072);
Observable_1.Observable.never = never_1.never;
//# sourceMappingURL=never.js.map

/***/ },
/* 934 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var of_1 = __webpack_require__(100);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },
/* 935 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var onErrorResumeNext_1 = __webpack_require__(902);
Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 936 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var pairs_1 = __webpack_require__(1073);
Observable_1.Observable.pairs = pairs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ },
/* 937 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var race_1 = __webpack_require__(903);
Observable_1.Observable.race = race_1.raceStatic;
//# sourceMappingURL=race.js.map

/***/ },
/* 938 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var range_1 = __webpack_require__(1074);
Observable_1.Observable.range = range_1.range;
//# sourceMappingURL=range.js.map

/***/ },
/* 939 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var throw_1 = __webpack_require__(1075);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ },
/* 940 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var timer_1 = __webpack_require__(1076);
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ },
/* 941 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var using_1 = __webpack_require__(1077);
Observable_1.Observable.using = using_1.using;
//# sourceMappingURL=using.js.map

/***/ },
/* 942 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var zip_1 = __webpack_require__(1078);
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ },
/* 943 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var audit_1 = __webpack_require__(1079);
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ },
/* 944 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var auditTime_1 = __webpack_require__(1080);
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ },
/* 945 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var buffer_1 = __webpack_require__(1081);
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ },
/* 946 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bufferCount_1 = __webpack_require__(1082);
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 947 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bufferTime_1 = __webpack_require__(1083);
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 948 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bufferToggle_1 = __webpack_require__(1084);
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 949 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var bufferWhen_1 = __webpack_require__(1085);
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 950 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var cache_1 = __webpack_require__(1086);
Observable_1.Observable.prototype.cache = cache_1.cache;
//# sourceMappingURL=cache.js.map

/***/ },
/* 951 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var catch_1 = __webpack_require__(314);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ },
/* 952 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var combineAll_1 = __webpack_require__(1087);
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ },
/* 953 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var concat_1 = __webpack_require__(892);
Observable_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ },
/* 954 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var concatAll_1 = __webpack_require__(315);
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ },
/* 955 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var concatMap_1 = __webpack_require__(316);
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ },
/* 956 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var concatMapTo_1 = __webpack_require__(1088);
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 957 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var count_1 = __webpack_require__(1089);
Observable_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ },
/* 958 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var debounce_1 = __webpack_require__(1090);
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ },
/* 959 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var debounceTime_1 = __webpack_require__(1091);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 960 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var defaultIfEmpty_1 = __webpack_require__(1092);
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 961 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var delayWhen_1 = __webpack_require__(1093);
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 962 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var dematerialize_1 = __webpack_require__(1094);
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 963 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var distinct_1 = __webpack_require__(897);
Observable_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ },
/* 964 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var distinctKey_1 = __webpack_require__(1095);
Observable_1.Observable.prototype.distinctKey = distinctKey_1.distinctKey;
//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 965 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var distinctUntilChanged_1 = __webpack_require__(898);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 966 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var distinctUntilKeyChanged_1 = __webpack_require__(1096);
Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 967 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var do_1 = __webpack_require__(1097);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ },
/* 968 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var elementAt_1 = __webpack_require__(1098);
Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ },
/* 969 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var every_1 = __webpack_require__(317);
Observable_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ },
/* 970 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var exhaust_1 = __webpack_require__(1099);
Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ },
/* 971 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var exhaustMap_1 = __webpack_require__(1100);
Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 972 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var expand_1 = __webpack_require__(1101);
Observable_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ },
/* 973 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var finally_1 = __webpack_require__(1102);
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ },
/* 974 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var find_1 = __webpack_require__(899);
Observable_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ },
/* 975 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var findIndex_1 = __webpack_require__(1103);
Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ },
/* 976 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var first_1 = __webpack_require__(543);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ },
/* 977 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var groupBy_1 = __webpack_require__(1104);
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ },
/* 978 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var ignoreElements_1 = __webpack_require__(1105);
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 979 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var isEmpty_1 = __webpack_require__(1106);
Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 980 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var last_1 = __webpack_require__(544);
Observable_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ },
/* 981 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var let_1 = __webpack_require__(1107);
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ },
/* 982 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var map_1 = __webpack_require__(143);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ },
/* 983 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var mapTo_1 = __webpack_require__(1108);
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ },
/* 984 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var materialize_1 = __webpack_require__(1109);
Observable_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ },
/* 985 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var max_1 = __webpack_require__(1110);
Observable_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ },
/* 986 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var merge_1 = __webpack_require__(900);
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ },
/* 987 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var mergeAll_1 = __webpack_require__(144);
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 988 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var mergeMap_1 = __webpack_require__(115);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 989 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var mergeMapTo_1 = __webpack_require__(901);
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 990 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var mergeScan_1 = __webpack_require__(1111);
Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 991 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var min_1 = __webpack_require__(1112);
Observable_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ },
/* 992 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var multicast_1 = __webpack_require__(887);
Observable_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ },
/* 993 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var observeOn_1 = __webpack_require__(536);
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ },
/* 994 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var onErrorResumeNext_1 = __webpack_require__(902);
Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 995 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var pairwise_1 = __webpack_require__(1113);
Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ },
/* 996 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var partition_1 = __webpack_require__(1114);
Observable_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ },
/* 997 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var pluck_1 = __webpack_require__(1115);
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ },
/* 998 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var publish_1 = __webpack_require__(1116);
Observable_1.Observable.prototype.publish = publish_1.publish;
//# sourceMappingURL=publish.js.map

/***/ },
/* 999 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var publishBehavior_1 = __webpack_require__(1117);
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 1000 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var publishLast_1 = __webpack_require__(1118);
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ },
/* 1001 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var publishReplay_1 = __webpack_require__(1119);
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 1002 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var race_1 = __webpack_require__(903);
Observable_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ },
/* 1003 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var reduce_1 = __webpack_require__(533);
Observable_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ },
/* 1004 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var repeat_1 = __webpack_require__(1120);
Observable_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ },
/* 1005 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var repeatWhen_1 = __webpack_require__(1121);
Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 1006 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var retry_1 = __webpack_require__(1122);
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ },
/* 1007 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var retryWhen_1 = __webpack_require__(1123);
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 1008 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var sample_1 = __webpack_require__(1124);
Observable_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ },
/* 1009 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var sampleTime_1 = __webpack_require__(1125);
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 1010 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var scan_1 = __webpack_require__(1126);
Observable_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ },
/* 1011 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var sequenceEqual_1 = __webpack_require__(1127);
Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 1012 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var share_1 = __webpack_require__(1128);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ },
/* 1013 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var single_1 = __webpack_require__(1129);
Observable_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ },
/* 1014 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var skip_1 = __webpack_require__(1130);
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ },
/* 1015 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var skipUntil_1 = __webpack_require__(1131);
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 1016 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var skipWhile_1 = __webpack_require__(1132);
Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 1017 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var startWith_1 = __webpack_require__(1133);
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ },
/* 1018 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var subscribeOn_1 = __webpack_require__(1134);
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 1019 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var switch_1 = __webpack_require__(1135);
Observable_1.Observable.prototype.switch = switch_1._switch;
Observable_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ },
/* 1020 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var switchMap_1 = __webpack_require__(1136);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ },
/* 1021 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var switchMapTo_1 = __webpack_require__(1137);
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 1022 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var take_1 = __webpack_require__(1138);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ },
/* 1023 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var takeLast_1 = __webpack_require__(1139);
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ },
/* 1024 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var takeUntil_1 = __webpack_require__(1140);
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 1025 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var takeWhile_1 = __webpack_require__(1141);
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 1026 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var throttle_1 = __webpack_require__(1142);
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ },
/* 1027 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var throttleTime_1 = __webpack_require__(1143);
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 1028 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var timeInterval_1 = __webpack_require__(904);
Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 1029 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var timeout_1 = __webpack_require__(1144);
Observable_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ },
/* 1030 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var timeoutWith_1 = __webpack_require__(1145);
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 1031 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var timestamp_1 = __webpack_require__(905);
Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ },
/* 1032 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var toArray_1 = __webpack_require__(1146);
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ },
/* 1033 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var window_1 = __webpack_require__(1147);
Observable_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ },
/* 1034 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var windowCount_1 = __webpack_require__(1148);
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ },
/* 1035 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var windowTime_1 = __webpack_require__(1149);
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ },
/* 1036 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var windowToggle_1 = __webpack_require__(1150);
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 1037 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var windowWhen_1 = __webpack_require__(1151);
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 1038 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var withLatestFrom_1 = __webpack_require__(1152);
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 1039 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var zip_1 = __webpack_require__(893);
Observable_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ },
/* 1040 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var zipAll_1 = __webpack_require__(1153);
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ },
/* 1041 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var AsyncSubject_1 = __webpack_require__(888);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The output of `bindCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable where the
     * results will be delivered to.
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} selector A function which takes the arguments from the
     * callback and maps those a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_2 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 1042 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var AsyncSubject_1 = __webpack_require__(888);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error, while remaining
     * arguments are the callback result. The output of `bindNodeCallback` is a
     * function that takes the same parameters as `func`, except the last one (the
     * callback). When the output function is called with arguments, it will
     * return an Observable where the results will be delivered to.
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} selector A function which takes the arguments from the
     * callback and maps those a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                subject.error(err);
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 1043 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = (function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * @see {@link create}
     *
     * @param {function(): Observable|Promise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(Observable_1.Observable));
exports.DeferObservable = DeferObservable;
var DeferSubscriber = (function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return DeferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 1044 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 1045 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var EmptyObservable_1 = __webpack_require__(309);
var isArray_1 = __webpack_require__(142);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ForkJoinObservable = (function (_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
        _super.call(this);
        this.sources = sources;
        this.resultSelector = resultSelector;
    }
    /* tslint:enable:max-line-length */
    /**
     * @param sources
     * @return {any}
     * @static true
     * @name forkJoin
     * @owner Observable
     */
    ForkJoinObservable.create = function () {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i - 0] = arguments[_i];
        }
        if (sources === null || arguments.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        var resultSelector = null;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function (subscriber) {
        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
}(Observable_1.Observable));
exports.ForkJoinObservable = ForkJoinObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
        _super.call(this, destination);
        this.sources = sources;
        this.resultSelector = resultSelector;
        this.completed = 0;
        this.haveValues = 0;
        var len = sources.length;
        this.total = len;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
            if (innerSubscription) {
                innerSubscription.outerIndex = i;
                this.add(innerSubscription);
            }
        }
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            var value = resultSelector ? resultSelector.apply(this, values) : values;
            destination.next(value);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 1046 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var tryCatch_1 = __webpack_require__(528);
var isFunction_1 = __webpack_require__(320);
var errorObject_1 = __webpack_require__(308);
var Subscription_1 = __webpack_require__(141);
function isNodeStyleEventEmmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * Creates an Observable by attaching an event listener to an "event target",
     * which may be an object with `addEventListener` and `removeEventListener`,
     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
     * the output Observable is subscribed, and removed when the Subscription is
     * unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOMElement, event target, Node.js
     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject_1.errorObject) {
                subscriber.error(errorObject_1.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
exports.FromEventObservable = FromEventObservable;
//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 1047 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var Subscription_1 = __webpack_require__(141);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = (function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function): void} removeHandler A function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        this._callAddHandler(handler, subscriber);
        subscriber.add(new Subscription_1.Subscription(function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            this.addHandler(handler);
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(Observable_1.Observable));
exports.FromEventPatternObservable = FromEventPatternObservable;
//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 1048 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var isScheduler_1 = __webpack_require__(530);
var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = (function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(Observable_1.Observable));
exports.GenerateObservable = GenerateObservable;
//# sourceMappingURL=GenerateObservable.js.map

/***/ },
/* 1049 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = (function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(Observable_1.Observable));
exports.IfObservable = IfObservable;
var IfSubscriber = (function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=IfObservable.js.map

/***/ },
/* 1050 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(894);
var Observable_1 = __webpack_require__(15);
var async_1 = __webpack_require__(529);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified Scheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` Scheduler to provide a notion of time, but you may pass any
     * Scheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 1051 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var noop_1 = __webpack_require__(912);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = (function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please not
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        noop_1.noop();
    };
    return NeverObservable;
}(Observable_1.Observable));
exports.NeverObservable = NeverObservable;
//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 1052 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = (function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional Scheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional Scheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(Observable_1.Observable));
exports.PairsObservable = PairsObservable;
//# sourceMappingURL=PairsObservable.js.map

/***/ },
/* 1053 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = (function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * Scheduler and just delivers the notifications synchronously, but may use
     * an optional Scheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(Observable_1.Observable));
exports.RangeObservable = RangeObservable;
//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 1054 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var asap_1 = __webpack_require__(907);
var isNumeric_1 = __webpack_require__(894);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) { delayTime = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = asap_1.asap;
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) { delay = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return source.subscribe(subscriber);
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable_1.Observable));
exports.SubscribeOnObservable = SubscribeOnObservable;
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 1055 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(894);
var Observable_1 = __webpack_require__(15);
var async_1 = __webpack_require__(529);
var isScheduler_1 = __webpack_require__(530);
var isDate_1 = __webpack_require__(534);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = (function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        this.scheduler = scheduler;
        this.dueTime = isDate_1.isDate(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` Scheduler to provide a notion of time, but you
     * may pass any Scheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) { initialDelay = 0; }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(Observable_1.Observable));
exports.TimerObservable = TimerObservable;
//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 1056 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = (function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(Observable_1.Observable));
exports.UsingObservable = UsingObservable;
var UsingSubscriber = (function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=UsingObservable.js.map

/***/ },
/* 1057 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BoundCallbackObservable_1 = __webpack_require__(1041);
exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 1058 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BoundNodeCallbackObservable_1 = __webpack_require__(1042);
exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 1059 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isScheduler_1 = __webpack_require__(530);
var isArray_1 = __webpack_require__(142);
var ArrayObservable_1 = __webpack_require__(199);
var combineLatest_1 = __webpack_require__(535);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable, in order, and
 * collecting an array of each of the most recent values any time any of the
 * input Observables emits, then either taking that array and passing it as
 * arguments to an optional `project` function and emitting the return value of
 * that, or just emitting the array of recent values directly if there is no
 * `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} observable1 An input Observable to combine with the
 * source Observable.
 * @param {Observable} observable2 An input Observable to combine with the
 * source Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 1060 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var concat_1 = __webpack_require__(892);
exports.concat = concat_1.concatStatic;
//# sourceMappingURL=concat.js.map

/***/ },
/* 1061 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var DeferObservable_1 = __webpack_require__(1043);
exports.defer = DeferObservable_1.DeferObservable.create;
//# sourceMappingURL=defer.js.map

/***/ },
/* 1062 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var Subscriber_1 = __webpack_require__(33);
var Observable_1 = __webpack_require__(15);
var Subscription_1 = __webpack_require__(141);
var root_1 = __webpack_require__(53);
var ReplaySubject_1 = __webpack_require__(889);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var assign_1 = __webpack_require__(1169);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = (function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof Observable_1.Observable) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = root_1.root.WebSocket;
            this._output = new Subject_1.Subject();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                assign_1.assign(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * @param urlConfigOrSource
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable_1.Observable(function (observer) {
            var result = tryCatch_1.tryCatch(subMsg)();
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = tryCatch_1.tryCatch(messageFilter)(x);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = tryCatch_1.tryCatch(unsubMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription_1.Subscription(function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this.destination = new ReplaySubject_1.ReplaySubject();
                _this.socket = null;
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this.destination = new ReplaySubject_1.ReplaySubject();
                _this.socket = null;
            });
            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) { return observer.error(e); };
        socket.onclose = function (e) {
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new Subscription_1.Subscription();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0 && socket && socket.readyState === 1) {
                socket.close();
                _this.socket = null;
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this.socket = null;
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    };
    return WebSocketSubject;
}(Subject_1.AnonymousSubject));
exports.WebSocketSubject = WebSocketSubject;
//# sourceMappingURL=WebSocketSubject.js.map

/***/ },
/* 1063 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AjaxObservable_1 = __webpack_require__(896);
exports.ajax = AjaxObservable_1.AjaxObservable.create;
//# sourceMappingURL=ajax.js.map

/***/ },
/* 1064 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var WebSocketSubject_1 = __webpack_require__(1062);
exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
//# sourceMappingURL=webSocket.js.map

/***/ },
/* 1065 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var EmptyObservable_1 = __webpack_require__(309);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ },
/* 1066 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ForkJoinObservable_1 = __webpack_require__(1045);
exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 1067 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FromEventObservable_1 = __webpack_require__(1046);
exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 1068 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FromEventPatternObservable_1 = __webpack_require__(1047);
exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 1069 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var IfObservable_1 = __webpack_require__(1049);
exports._if = IfObservable_1.IfObservable.create;
//# sourceMappingURL=if.js.map

/***/ },
/* 1070 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var IntervalObservable_1 = __webpack_require__(1050);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ },
/* 1071 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var merge_1 = __webpack_require__(900);
exports.merge = merge_1.mergeStatic;
//# sourceMappingURL=merge.js.map

/***/ },
/* 1072 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var NeverObservable_1 = __webpack_require__(1051);
exports.never = NeverObservable_1.NeverObservable.create;
//# sourceMappingURL=never.js.map

/***/ },
/* 1073 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var PairsObservable_1 = __webpack_require__(1052);
exports.pairs = PairsObservable_1.PairsObservable.create;
//# sourceMappingURL=pairs.js.map

/***/ },
/* 1074 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var RangeObservable_1 = __webpack_require__(1053);
exports.range = RangeObservable_1.RangeObservable.create;
//# sourceMappingURL=range.js.map

/***/ },
/* 1075 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ErrorObservable_1 = __webpack_require__(1044);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ },
/* 1076 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var TimerObservable_1 = __webpack_require__(1055);
exports.timer = TimerObservable_1.TimerObservable.create;
//# sourceMappingURL=timer.js.map

/***/ },
/* 1077 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var UsingObservable_1 = __webpack_require__(1056);
exports.using = UsingObservable_1.UsingObservable.create;
//# sourceMappingURL=using.js.map

/***/ },
/* 1078 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var zip_1 = __webpack_require__(893);
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ },
/* 1079 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return this.lift(new AuditOperator(durationSelector));
}
exports.audit = audit;
var AuditOperator = (function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditSubscriber = (function (_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
            if (duration === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=audit.js.map

/***/ },
/* 1080 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(529);
var Subscriber_1 = __webpack_require__(33);
/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link Scheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new AuditTimeOperator(duration, scheduler));
}
exports.auditTime = auditTime;
var AuditTimeOperator = (function () {
    function AuditTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
    }
    AuditTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return AuditTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditTimeSubscriber = (function (_super) {
    __extends(AuditTimeSubscriber, _super);
    function AuditTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.hasValue = false;
    }
    AuditTimeSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
        }
    };
    AuditTimeSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    return AuditTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.clearThrottle();
}
//# sourceMappingURL=auditTime.js.map

/***/ },
/* 1081 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ },
/* 1082 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}
exports.bufferCount = bufferCount;
var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [[]];
        this.count = 0;
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var count = (this.count += 1);
        var destination = this.destination;
        var bufferSize = this.bufferSize;
        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
        var buffers = this.buffers;
        var len = buffers.length;
        var remove = -1;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = 0; i < len; i++) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                remove = i;
                destination.next(buffer);
            }
        }
        if (remove !== -1) {
            buffers.splice(remove, 1);
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var buffers = this.buffers;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 1083 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(529);
var Subscriber_1 = __webpack_require__(33);
var isScheduler_1 = __webpack_require__(530);
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 1084 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(141);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}
exports.bufferToggle = bufferToggle;
var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 1085 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(141);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
}
exports.bufferWhen = bufferWhen;
var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            closingSubscription = new Subscription_1.Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 1086 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var ReplaySubject_1 = __webpack_require__(889);
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {Observable<any>}
 * @method cache
 * @owner Observable
 */
function cache(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    var subject;
    var source = this;
    var refs = 0;
    var outerSub;
    var getSubject = function () {
        subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        return subject;
    };
    return new Observable_1.Observable(function (observer) {
        if (!subject) {
            subject = getSubject();
            outerSub = source.subscribe(function (value) { return subject.next(value); }, function (err) {
                var s = subject;
                subject = null;
                s.error(err);
            }, function () { return subject.complete(); });
        }
        refs++;
        if (!subject) {
            subject = getSubject();
        }
        var innerSub = subject.subscribe(observer);
        return function () {
            refs--;
            if (innerSub) {
                innerSub.unsubscribe();
            }
            if (refs === 0) {
                outerSub.unsubscribe();
            }
        };
    });
}
exports.cache = cache;
//# sourceMappingURL=cache.js.map

/***/ },
/* 1087 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var combineLatest_1 = __webpack_require__(535);
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ },
/* 1088 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var mergeMapTo_1 = __webpack_require__(901);
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 1089 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting an value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
}
exports.count = count;
var CountOperator = (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=count.js.map

/***/ },
/* 1090 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
}
exports.debounce = debounce;
var DebounceOperator = (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult_1.subscribeToResult(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=debounce.js.map

/***/ },
/* 1091 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var async_1 = __webpack_require__(529);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link Scheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 1092 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        _super.call(this, destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 1093 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var Observable_1 = __webpack_require__(15);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return new SubscriptionDelayObservable(this, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
}
exports.delayWhen = delayWhen;
var DelayWhenOperator = (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = (function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
        this.add(notifierSubscription);
        this.delayNotifierSubscriptions.push(notifierSubscription);
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = (function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable_1.Observable));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = (function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 1094 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return this.lift(new DeMaterializeOperator());
}
exports.dematerialize = dematerialize;
var DeMaterializeOperator = (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = (function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 1095 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var distinct_1 = __webpack_require__(897);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
 * using a property accessed by using the key provided to check if the two items are distinct.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
 * @param {string} key string key for object property lookup on each item.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
 * @method distinctKey
 * @owner Observable
 */
function distinctKey(key, compare, flushes) {
    return distinct_1.distinct.call(this, function (x, y) {
        if (compare) {
            return compare(x[key], y[key]);
        }
        return x[key] === y[key];
    }, flushes);
}
exports.distinctKey = distinctKey;
//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 1096 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var distinctUntilChanged_1 = __webpack_require__(898);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 * If a comparator function is not provided, an equality check is used by default.
 * @param {string} key string key for object property lookup on each item.
 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
        if (compare) {
            return compare(x[key], y[key]);
        }
        return x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 1097 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ },
/* 1098 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var ArgumentOutOfRangeError_1 = __webpack_require__(890);
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return this.lift(new ElementAtOperator(index, defaultValue));
}
exports.elementAt = elementAt;
var ElementAtOperator = (function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = (function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=elementAt.js.map

/***/ },
/* 1099 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} Returns an Observable that takes a source of Observables
 * and propagates the first observable exclusively until it completes before
 * subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return this.lift(new SwitchFirstOperator());
}
exports.exhaust = exhaust;
var SwitchFirstOperator = (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = (function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaust.js.map

/***/ },
/* 1100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
}
exports.exhaustMap = exhaustMap;
var SwitchFirstMapOperator = (function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = (function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 1101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
}
exports.expand = expand;
var ExpandOperator = (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
exports.ExpandOperator = ExpandOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = (function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = tryCatch_1.tryCatch(this.project)(value, index);
            if (result === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.ExpandSubscriber = ExpandSubscriber;
//# sourceMappingURL=expand.js.map

/***/ },
/* 1102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var Subscription_1 = __webpack_require__(141);
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback function to be called when source terminates.
 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return this.lift(new FinallyOperator(callback));
}
exports._finally = _finally;
var FinallyOperator = (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FinallySubscriber = (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        _super.call(this, destination);
        this.add(new Subscription_1.Subscription(callback));
    }
    return FinallySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=finally.js.map

/***/ },
/* 1103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var find_1 = __webpack_require__(899);
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ },
/* 1104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var Subscription_1 = __webpack_require__(141);
var Observable_1 = __webpack_require__(15);
var Subject_1 = __webpack_require__(69);
var Map_1 = __webpack_require__(1167);
var FastMap_1 = __webpack_require__(1165);
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @param {function(value: T): K} keySelector a function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] a function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * a function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
        this.source = source;
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            groups.set(key, group = new Subject_1.Subject());
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed && !this.attemptedToUnsubscribe) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this._complete();
    };
    GroupDurationSubscriber.prototype._error = function (err) {
        var group = this.group;
        if (!group.closed) {
            group.error(err);
        }
        this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype._complete = function () {
        var group = this.group;
        if (!group.closed) {
            group.complete();
        }
        this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ },
/* 1105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var noop_1 = __webpack_require__(912);
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} an empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
}
exports.ignoreElements = ignoreElements;
;
var IgnoreElementsOperator = (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        noop_1.noop();
    };
    return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 1106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} an Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return this.lift(new IsEmptyOperator());
}
exports.isEmpty = isEmpty;
var IsEmptyOperator = (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source._subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = (function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 1107 */
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ },
/* 1108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return this.lift(new MapToOperator(value));
}
exports.mapTo = mapTo;
var MapToOperator = (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=mapTo.js.map

/***/ },
/* 1109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var Notification_1 = __webpack_require__(311);
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return this.lift(new MaterializeOperator());
}
exports.materialize = materialize;
var MaterializeOperator = (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = (function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=materialize.js.map

/***/ },
/* 1110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var reduce_1 = __webpack_require__(533);
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
 * and when source Observable completes it emits a single item: the item with the largest number.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
 * items.
 * @return {Observable} an Observable that emits item with the largest number.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(max));
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ },
/* 1111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var subscribeToResult_1 = __webpack_require__(140);
var OuterSubscriber_1 = __webpack_require__(139);
/**
 * @param project
 * @param seed
 * @param concurrent
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(project, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeScanOperator(project, seed, concurrent));
}
exports.mergeScan = mergeScan;
var MergeScanOperator = (function () {
    function MergeScanOperator(project, seed, concurrent) {
        this.project = project;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
exports.MergeScanOperator = MergeScanOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = (function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, project, acc, concurrent) {
        _super.call(this, destination);
        this.project = project;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
            var destination = this.destination;
            if (ish === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeScanSubscriber = MergeScanSubscriber;
//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 1112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var reduce_1 = __webpack_require__(533);
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
 * and when source Observable completes it emits a single item: the item with the smallest number.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
 * @return {Observable<R>} an Observable that emits item with the smallest number.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return this.lift(new reduce_1.ReduceOperator(min));
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ },
/* 1113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return this.lift(new PairwiseOperator());
}
exports.pairwise = pairwise;
var PairwiseOperator = (function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var PairwiseSubscriber = (function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        _super.call(this, destination);
        this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    };
    return PairwiseSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=pairwise.js.map

/***/ },
/* 1114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var not_1 = __webpack_require__(1170);
var filter_1 = __webpack_require__(318);
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return [
        filter_1.filter.call(this, predicate),
        filter_1.filter.call(this, not_1.not(predicate, thisArg))
    ];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ },
/* 1115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var map_1 = __webpack_require__(143);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} Returns a new Observable of property values from the
 * source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ },
/* 1116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Subject_1 = __webpack_require__(69);
var multicast_1 = __webpack_require__(887);
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} Optional selector function which can use the multicasted source sequence as many times as needed,
 * without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ? multicast_1.multicast.call(this, function () { return new Subject_1.Subject(); }, selector) :
        multicast_1.multicast.call(this, new Subject_1.Subject());
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ },
/* 1117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var BehaviorSubject_1 = __webpack_require__(312);
var multicast_1 = __webpack_require__(887);
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 1118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsyncSubject_1 = __webpack_require__(888);
var multicast_1 = __webpack_require__(887);
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ },
/* 1119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ReplaySubject_1 = __webpack_require__(889);
var multicast_1 = __webpack_require__(887);
/**
 * @param bufferSize
 * @param windowTime
 * @param scheduler
 * @return {ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 1120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var EmptyObservable_1 = __webpack_require__(309);
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
 * on a particular Scheduler.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else if (count < 0) {
        return this.lift(new RepeatOperator(-1, this));
    }
    else {
        return this.lift(new RepeatOperator(count - 1, this));
    }
}
exports.repeat = repeat;
var RepeatOperator = (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = (function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            this.unsubscribe();
            this.isStopped = false;
            this.closed = false;
            source.subscribe(this);
        }
    };
    return RepeatSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=repeat.js.map

/***/ },
/* 1121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Returns an Observable that emits the same values as the source observable with the exception of a `complete`.
 * A `complete` will cause the emission of the Throwable that cause the complete to the Observable returned from
 * notificationHandler. If that Observable calls onComplete or `complete` then retry will call `complete` or `error`
 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
 * Scheduler.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
 * aborting the retry.
 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
 * @return {Observable} the source Observable modified with retry logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return this.lift(new RepeatWhenOperator(notifier, this));
}
exports.repeatWhen = repeatWhen;
var RepeatWhenOperator = (function () {
    function RepeatWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = (function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RepeatWhenSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var notifications = this.notifications;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                notifications = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(notifications);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.complete.call(this);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.notifications = null;
                this.retriesSubscription = null;
            }
            this.unsubscribe();
            this.closed = false;
            this.notifications = notifications;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 1122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
 * predicate returns true for that specific exception and retry count.
 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} number of retry attempts before failing.
 * @return {Observable} the source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return this.lift(new RetryOperator(count, this));
}
exports.retry = retry;
var RetryOperator = (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            this.unsubscribe();
            this.isStopped = false;
            this.closed = false;
            source.subscribe(this);
        }
    };
    return RetrySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=retry.js.map

/***/ },
/* 1123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
 * Scheduler.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
 * aborting the retry.
 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
 * @return {Observable} the source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
}
exports.retryWhen = retryWhen;
var RetryWhenOperator = (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = (function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(errors);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this.unsubscribe();
            this.closed = false;
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 1124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
}
exports.sample = sample;
var SampleOperator = (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = (function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=sample.js.map

/***/ },
/* 1125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var async_1 = __webpack_require__(529);
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new SampleTimeOperator(period, scheduler));
}
exports.sampleTime = sampleTime;
var SampleTimeOperator = (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = (function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 1126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    return this.lift(new ScanOperator(accumulator, seed));
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed) {
        this.accumulator = accumulator;
        this.seed = seed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
    };
    return ScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, seed) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.index = 0;
        this.accumulatorSet = false;
        this.seed = seed;
        this.accumulatorSet = typeof seed !== 'undefined';
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.accumulatorSet = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.accumulatorSet) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ },
/* 1127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo the observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return this.lift(new SequenceEqualOperator(compareTo, comparor));
}
exports.sequenceEqual = sequenceEqual;
var SequenceEqualOperator = (function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
exports.SequenceEqualOperator = SequenceEqualOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = (function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = tryCatch_1.tryCatch(comparor)(a, b);
                if (areEqual === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber_1.Subscriber));
exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
var SequenceEqualCompareToSubscriber = (function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 1128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var multicast_1 = __webpack_require__(887);
var Subject_1 = __webpack_require__(69);
function shareSubjectFactory() {
    return new Subject_1.Subject();
}
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for .publish().refCount().
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
 * @method share
 * @owner Observable
 */
function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
}
exports.share = share;
;
//# sourceMappingURL=share.js.map

/***/ },
/* 1129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var EmptyError_1 = __webpack_require__(202);
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
}
exports.single = single;
var SingleOperator = (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var predicate = this.predicate;
        this.index++;
        if (predicate) {
            this.tryNext(value);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value) {
        try {
            var result = this.predicate(value, this.index, this.source);
            if (result) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=single.js.map

/***/ },
/* 1130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Returns an Observable that skips `n` items emitted by an Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
 * @return {Observable} an Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(total) {
    return this.lift(new SkipOperator(total));
}
exports.skip = skip;
var SkipOperator = (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skip.js.map

/***/ },
/* 1131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
}
exports.skipUntil = skipUntil;
var SkipUntilOperator = (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = (function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 1132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - a function to test each item emitted from the source Observable.
 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
}
exports.skipWhile = skipWhile;
var SkipWhileOperator = (function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipWhileSubscriber = (function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 1133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ArrayObservable_1 = __webpack_require__(199);
var ScalarObservable_1 = __webpack_require__(313);
var EmptyObservable_1 = __webpack_require__(309);
var concat_1 = __webpack_require__(892);
var isScheduler_1 = __webpack_require__(530);
/**
 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
 * source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
    }
    else {
        scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    }
    else if (len > 1) {
        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    }
    else {
        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ },
/* 1134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var SubscribeOnObservable_1 = __webpack_require__(1054);
/**
 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} the Scheduler to perform subscription actions on.
 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 1135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return this.lift(new SwitchOperator());
}
exports._switch = _switch;
var SwitchOperator = (function () {
    function SwitchOperator() {
    }
    SwitchOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchSubscriber = (function (_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
        _super.call(this, destination);
        this.active = 0;
        this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function (value) {
        this.unsubscribeInner();
        this.active++;
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function () {
        this.active = this.active > 0 ? this.active - 1 : 0;
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
            this.remove(innerSubscription);
        }
    };
    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function () {
        this.unsubscribeInner();
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return SwitchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switch.js.map

/***/ },
/* 1136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ },
/* 1137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {Observable} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` every time a value is emitted on the source Observable.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
}
exports.switchMapTo = switchMapTo;
var SwitchMapToOperator = (function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = (function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 1138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var ArgumentOutOfRangeError_1 = __webpack_require__(890);
var EmptyObservable_1 = __webpack_require__(309);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        if (++this.count <= total) {
            this.destination.next(value);
            if (this.count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ },
/* 1139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var ArgumentOutOfRangeError_1 = __webpack_require__(890);
var EmptyObservable_1 = __webpack_require__(309);
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeLastOperator(count));
    }
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ },
/* 1140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value or a complete notification, the output Observable stops
 * mirroring the source Observable and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
}
exports.takeUntil = takeUntil;
var TakeUntilOperator = (function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeUntilSubscriber = (function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 1141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
}
exports.takeWhile = takeWhile;
var TakeWhileOperator = (function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 1142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector) {
    return this.lift(new ThrottleOperator(durationSelector));
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (!this.throttled) {
            this.tryDurationSelector(value);
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        var duration = null;
        try {
            duration = this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.emitAndThrottle(value, duration);
    };
    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        this.destination.next(value);
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var throttled = this.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ },
/* 1143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var async_1 = __webpack_require__(529);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link Scheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new ThrottleTimeOperator(duration, scheduler));
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (!this.throttled) {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            this.destination.next(value);
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 1144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(529);
var isDate_1 = __webpack_require__(534);
var Subscriber_1 = __webpack_require__(33);
/**
 * @param due
 * @param errorToSend
 * @param scheduler
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeout
 * @owner Observable
 */
function timeout(due, errorToSend, scheduler) {
    if (errorToSend === void 0) { errorToSend = null; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
}
exports.timeout = timeout;
var TimeoutOperator = (function () {
    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = (function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
        this.index = 0;
        this._previousIndex = 0;
        this._hasCompleted = false;
        this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
        get: function () {
            return this._previousIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
        get: function () {
            return this._hasCompleted;
        },
        enumerable: true,
        configurable: true
    });
    TimeoutSubscriber.dispatchTimeout = function (state) {
        var source = state.subscriber;
        var currentIndex = state.index;
        if (!source.hasCompleted && source.previousIndex === currentIndex) {
            source.notifyTimeout();
        }
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var currentIndex = this.index;
        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
        this.index++;
        this._previousIndex = currentIndex;
    };
    TimeoutSubscriber.prototype._next = function (value) {
        this.destination.next(value);
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
    };
    TimeoutSubscriber.prototype._error = function (err) {
        this.destination.error(err);
        this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype._complete = function () {
        this.destination.complete();
        this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype.notifyTimeout = function () {
        this.error(this.errorToSend || new Error('timeout'));
    };
    return TimeoutSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeout.js.map

/***/ },
/* 1145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__(529);
var isDate_1 = __webpack_require__(534);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * @param due
 * @param withObservable
 * @param scheduler
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
}
exports.timeoutWith = timeoutWith;
var TimeoutWithOperator = (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = (function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this);
        this.destination = destination;
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.timeoutSubscription = undefined;
        this.index = 0;
        this._previousIndex = 0;
        this._hasCompleted = false;
        destination.add(this);
        this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
        get: function () {
            return this._previousIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
        get: function () {
            return this._hasCompleted;
        },
        enumerable: true,
        configurable: true
    });
    TimeoutWithSubscriber.dispatchTimeout = function (state) {
        var source = state.subscriber;
        var currentIndex = state.index;
        if (!source.hasCompleted && source.previousIndex === currentIndex) {
            source.handleTimeout();
        }
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var currentIndex = this.index;
        var timeoutState = { subscriber: this, index: currentIndex };
        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
        this.index++;
        this._previousIndex = currentIndex;
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        this.destination.next(value);
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
    };
    TimeoutWithSubscriber.prototype._error = function (err) {
        this.destination.error(err);
        this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype._complete = function () {
        this.destination.complete();
        this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype.handleTimeout = function () {
        if (!this.closed) {
            var withObservable = this.withObservable;
            this.unsubscribe();
            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
        }
    };
    return TimeoutWithSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 1146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
/**
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return this.lift(new ToArrayOperator());
}
exports.toArray = toArray;
var ToArrayOperator = (function () {
    function ToArrayOperator() {
    }
    ToArrayOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ToArraySubscriber = (function (_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
        _super.call(this, destination);
        this.array = [];
    }
    ToArraySubscriber.prototype._next = function (x) {
        this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function () {
        this.destination.next(this.array);
        this.destination.complete();
    };
    return ToArraySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=toArray.js.map

/***/ },
/* 1147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
}
exports.window = window;
var WindowOperator = (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source._subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new Subject_1.Subject();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject_1.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=window.js.map

/***/ },
/* 1148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(33);
var Subject_1 = __webpack_require__(69);
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
}
exports.windowCount = windowCount;
var WindowCountOperator = (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = (function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new Subject_1.Subject()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject_1.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=windowCount.js.map

/***/ },
/* 1149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var async_1 = __webpack_require__(529);
var Subscriber_1 = __webpack_require__(33);
/**
 * Branch out the source Observable values as a nested Observable periodically
 * in time.
 *
 * <span class="informal">It's like {@link bufferTime}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowTime.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable starts a new window periodically, as
 * determined by the `windowCreationInterval` argument. It emits each window
 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
 * source Observable completes or encounters an error, the output Observable
 * emits the current window and propagates the notification from the source
 * Observable. If `windowCreationInterval` is not provided, the output
 * Observable starts a new window when the previous window of duration
 * `windowTimeSpan` completes.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowTime(1000)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowTime(1000, 5000)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferTime}
 *
 * @param {number} windowTimeSpan The amount of time to fill each window.
 * @param {number} [windowCreationInterval] The interval at which to start new
 * windows.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine window boundaries.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowTime
 * @owner Observable
 */
function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
}
exports.windowTime = windowTime;
var WindowTimeOperator = (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
    };
    return WindowTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = (function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
        this.windows = [];
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var window_1 = this.openWindow();
            var closeState = { subscriber: this, window: window_1, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var window_2 = this.openWindow();
            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_3 = windows[i];
            if (!window_3.closed) {
                window_3.next(value);
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_4 = windows.shift();
            if (!window_4.closed) {
                window_4.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new Subject_1.Subject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(arg) {
    var subscriber = arg.subscriber, window = arg.window, context = arg.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ },
/* 1150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var Subscription_1 = __webpack_require__(141);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
}
exports.windowToggle = windowToggle;
var WindowToggleOperator = (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = (function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
            if (closingNotifier === errorObject_1.errorObject) {
                return this.error(errorObject_1.errorObject.e);
            }
            else {
                var window_1 = new Subject_1.Subject();
                var subscription = new Subscription_1.Subscription();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 1151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var tryCatch_1 = __webpack_require__(528);
var errorObject_1 = __webpack_require__(308);
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
}
exports.windowWhen = windowWhen;
var WindowOperator = (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) { innerSub = null; }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject_1.Subject();
        this.destination.next(window);
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            var err = errorObject_1.errorObject.e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 1152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(139);
var subscribeToResult_1 = __webpack_require__(140);
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {Observable} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
        project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
}
exports.withLatestFrom = withLatestFrom;
/* tslint:enable:max-line-length */
var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 1153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var zip_1 = __webpack_require__(893);
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ },
/* 1154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(531);
var AnimationFrame_1 = __webpack_require__(1164);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, recycle as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ },
/* 1155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(532);
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function () {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        var action = actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ },
/* 1156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = __webpack_require__(1166);
var AsyncAction_1 = __webpack_require__(531);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, recycle as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 1157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(532);
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function () {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        var action = actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 1158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(531);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, enqueue as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 1159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(532);
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 1160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AnimationFrameAction_1 = __webpack_require__(1154);
var AnimationFrameScheduler_1 = __webpack_require__(1155);
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ },
/* 1161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var Subscription_1 = __webpack_require__(141);
var SubscriptionLoggable_1 = __webpack_require__(910);
var applyMixins_1 = __webpack_require__(911);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = (function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable_1.Observable));
exports.ColdObservable = ColdObservable;
applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map

/***/ },
/* 1162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(69);
var Subscription_1 = __webpack_require__(141);
var SubscriptionLoggable_1 = __webpack_require__(910);
var applyMixins_1 = __webpack_require__(911);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map

/***/ },
/* 1163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(15);
var Notification_1 = __webpack_require__(311);
var ColdObservable_1 = __webpack_require__(1161);
var HotObservable_1 = __webpack_require__(1162);
var SubscriptionLog_1 = __webpack_require__(909);
var VirtualTimeScheduler_1 = __webpack_require__(906);
var defaultMaxFrame = 750;
var TestScheduler = (function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof Observable_1.Observable) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        }
        else {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = Notification_1.Notification.createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = Notification_1.Notification.createError(errorValue || 'error');
                    break;
                default:
                    notification = Notification_1.Notification.createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(VirtualTimeScheduler_1.VirtualTimeScheduler));
exports.TestScheduler = TestScheduler;
//# sourceMappingURL=TestScheduler.js.map

/***/ },
/* 1164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(53);
var RequestAnimationFrameDefinition = (function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
//# sourceMappingURL=AnimationFrame.js.map

/***/ },
/* 1165 */
/***/ function(module, exports) {

"use strict";
"use strict";
var FastMap = (function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
exports.FastMap = FastMap;
//# sourceMappingURL=FastMap.js.map

/***/ },
/* 1166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
"use strict";
var root_1 = __webpack_require__(53);
var ImmediateDefinition = (function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
exports.ImmediateDefinition = ImmediateDefinition;
exports.Immediate = new ImmediateDefinition(root_1.root);
//# sourceMappingURL=Immediate.js.map

/***/ },
/* 1167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(53);
var MapPolyfill_1 = __webpack_require__(1168);
exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
//# sourceMappingURL=Map.js.map

/***/ },
/* 1168 */
/***/ function(module, exports) {

"use strict";
"use strict";
var MapPolyfill = (function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
exports.MapPolyfill = MapPolyfill;
//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 1169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(53);
var Object = root_1.root.Object;
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function assignPolyfill(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError('cannot convert undefined or null to object');
            }
            var output = Object(target);
            var len = sources.length;
            for (var index = 0; index < len; index++) {
                var source = sources[index];
                if (source !== undefined && source !== null) {
                    for (var key in source) {
                        if (source.hasOwnProperty(key)) {
                            output[key] = source[key];
                        }
                    }
                }
            }
            return output;
        };
    })();
}
exports.assign = Object.assign;
//# sourceMappingURL=assign.js.map

/***/ },
/* 1170 */
/***/ function(module, exports) {

"use strict";
"use strict";
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ },
/* 1171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartPointComponent = (function () {
    function ChartPointComponent() {
        this.click = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.unselect = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    ChartPointComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'point'
                },] },
    ];
    ChartPointComponent.ctorParameters = [];
    ChartPointComponent.propDecorators = {
        'click': [{ type: core_1.Output },],
        'remove': [{ type: core_1.Output },],
        'select': [{ type: core_1.Output },],
        'unselect': [{ type: core_1.Output },],
        'mouseOver': [{ type: core_1.Output },],
        'mouseOut': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
    };
    return ChartPointComponent;
}());
exports.ChartPointComponent = ChartPointComponent;
//# sourceMappingURL=ChartPointComponent.js.map

/***/ },
/* 1172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartPointComponent_1 = __webpack_require__(1171);
var ChartSeriesComponent = (function () {
    function ChartSeriesComponent() {
        this.click = new core_1.EventEmitter();
        this.afterAnimate = new core_1.EventEmitter();
        this.checkboxClick = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        this.legendItemClick = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
    }
    ChartSeriesComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'series'
                },] },
    ];
    ChartSeriesComponent.ctorParameters = [];
    ChartSeriesComponent.propDecorators = {
        'point': [{ type: core_1.ContentChild, args: [ChartPointComponent_1.ChartPointComponent,] },],
        'click': [{ type: core_1.Output },],
        'afterAnimate': [{ type: core_1.Output },],
        'checkboxClick': [{ type: core_1.Output },],
        'hide': [{ type: core_1.Output },],
        'legendItemClick': [{ type: core_1.Output },],
        'mouseOver': [{ type: core_1.Output },],
        'mouseOut': [{ type: core_1.Output },],
        'show': [{ type: core_1.Output },],
    };
    return ChartSeriesComponent;
}());
exports.ChartSeriesComponent = ChartSeriesComponent;
//# sourceMappingURL=ChartSeriesComponent.js.map

/***/ },
/* 1173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartXAxisComponent = (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartXAxisComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'xAxis'
                },] },
    ];
    ChartXAxisComponent.ctorParameters = [];
    ChartXAxisComponent.propDecorators = {
        'afterBreaks': [{ type: core_1.Output },],
        'afterSetExtremes': [{ type: core_1.Output },],
        'pointBreak': [{ type: core_1.Output },],
        'pointInBreak': [{ type: core_1.Output },],
        'setExtremes': [{ type: core_1.Output },],
    };
    return ChartXAxisComponent;
}());
exports.ChartXAxisComponent = ChartXAxisComponent;
//# sourceMappingURL=ChartXAxisComponent.js.map

/***/ },
/* 1174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartYAxisComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'yAxis'
                },] },
    ];
    ChartYAxisComponent.ctorParameters = [];
    ChartYAxisComponent.propDecorators = {
        'afterBreaks': [{ type: core_1.Output },],
        'afterSetExtremes': [{ type: core_1.Output },],
        'pointBreak': [{ type: core_1.Output },],
        'pointInBreak': [{ type: core_1.Output },],
        'setExtremes': [{ type: core_1.Output },],
    };
    return ChartYAxisComponent;
}());
exports.ChartYAxisComponent = ChartYAxisComponent;
//# sourceMappingURL=ChartYAxisComponent.js.map

/***/ },
/* 1175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getHeroes(); });
    };
    HeroService.prototype.getHero = function (id, name) {
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.find(function (hero) { return (hero.id == id || hero.name == name); });
        });
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (id, name, age) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ id: id, name: name, age: age }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Http */]) === 'function' && _a) || Object])
    ], HeroService);
    return HeroService;
    var _a;
}());


/***/ },
/* 1176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__(1175);
/* unused harmony export NewPersonComponentContext */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewPersonComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPersonComponentContext = (function (_super) {
    __extends(NewPersonComponentContext, _super);
    function NewPersonComponentContext() {
        _super.apply(this, arguments);
    }
    return NewPersonComponentContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* BSModalContext */]));
var NewPersonComponent = (function () {
    function NewPersonComponent(dialog, heroService) {
        this.dialog = dialog;
        this.heroService = heroService;
        this.id = null;
        this.name = '';
        this.age = '';
        this.context = dialog.context;
        this.wrongAnswer = true;
        dialog.setCloseGuard(this);
    }
    NewPersonComponent.prototype.onKeyUp = function (value) {
        this.dialog.close();
    };
    NewPersonComponent.prototype.ok = function () {
        var _this = this;
        this.heroService.create(this.id, this.name, this.age).then(function (hero) {
            _this.dialog.close(hero);
        });
    };
    NewPersonComponent.prototype.close = function () {
        this.dialog.close();
    };
    NewPersonComponent.prototype.beforeDismiss = function () {
        return true;
    };
    NewPersonComponent.prototype.beforeClose = function () {
        return false;
    };
    NewPersonComponent.prototype.ngOnInit = function () {
    };
    NewPersonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-person',
            template: __webpack_require__(1228),
            styles: [__webpack_require__(1214)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]) === 'function' && _b) || Object])
    ], NewPersonComponent);
    return NewPersonComponent;
    var _a, _b;
}());


/***/ },
/* 1177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartSeriesComponent_1 = __webpack_require__(1172);
var ChartXAxisComponent_1 = __webpack_require__(1173);
var ChartYAxisComponent_1 = __webpack_require__(1174);
var HighchartsService_1 = __webpack_require__(1179);
var initChart_1 = __webpack_require__(1184);
var createBaseOpts_1 = __webpack_require__(1181);
var ChartComponent = (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.addSeries = new core_1.EventEmitter();
        this.afterPrint = new core_1.EventEmitter();
        this.beforePrint = new core_1.EventEmitter();
        this.drilldown = new core_1.EventEmitter();
        this.drillup = new core_1.EventEmitter();
        this.load = new core_1.EventEmitter();
        this.redraw = new core_1.EventEmitter();
        this.selection = new core_1.EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart_1.initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts_1.createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'chart',
                    template: '',
                    providers: [HighchartsService_1.HighchartsService],
                },] },
    ];
    ChartComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: HighchartsService_1.HighchartsService, },
    ];
    ChartComponent.propDecorators = {
        'series': [{ type: core_1.ContentChild, args: [ChartSeriesComponent_1.ChartSeriesComponent,] },],
        'xAxis': [{ type: core_1.ContentChild, args: [ChartXAxisComponent_1.ChartXAxisComponent,] },],
        'yAxis': [{ type: core_1.ContentChild, args: [ChartYAxisComponent_1.ChartYAxisComponent,] },],
        'create': [{ type: core_1.Output },],
        'click': [{ type: core_1.Output },],
        'addSeries': [{ type: core_1.Output },],
        'afterPrint': [{ type: core_1.Output },],
        'beforePrint': [{ type: core_1.Output },],
        'drilldown': [{ type: core_1.Output },],
        'drillup': [{ type: core_1.Output },],
        'load': [{ type: core_1.Output },],
        'redraw': [{ type: core_1.Output },],
        'selection': [{ type: core_1.Output },],
        'type': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
    };
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map

/***/ },
/* 1178 */
/***/ function(module, exports) {

"use strict";
"use strict";
var ChartEvent = (function () {
    function ChartEvent(event, context) {
        this.originalEvent = event;
        this.context = context;
    }
    return ChartEvent;
}());
exports.ChartEvent = ChartEvent;
//# sourceMappingURL=ChartEvent.js.map

/***/ },
/* 1179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var HighchartsWrapper_1 = __webpack_require__(1180);
var core_1 = __webpack_require__(0);
var HighchartsService = (function () {
    function HighchartsService() {
        this.Highcharts = HighchartsWrapper_1.Highcharts;
    }
    HighchartsService.decorators = [
        { type: core_1.Injectable },
    ];
    HighchartsService.ctorParameters = [];
    return HighchartsService;
}());
exports.HighchartsService = HighchartsService;
//# sourceMappingURL=HighchartsService.js.map

/***/ },
/* 1180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Highcharts = __webpack_require__(1206);
exports.Highcharts = Highcharts;
//# sourceMappingURL=HighchartsWrapper.js.map

/***/ },
/* 1181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ChartEvent_1 = __webpack_require__(1178);
var chartEvents = [
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];
var seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];
var pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];
var xAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
var yAxisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];
function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, element) {
    var opts = {
        chart: {
            renderTo: element,
            events: {}
        },
        plotOptions: {
            series: {
                events: {},
                point: {
                    events: {}
                }
            }
        },
        xAxis: {
            events: {}
        },
        yAxis: {
            events: {}
        }
    };
    chartEvents.forEach(function (eventName) {
        opts.chart.events[eventName] = opts.chart.events[eventName] || function (event) {
            chartCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
        };
    });
    if (seriesCmp) {
        seriesEvents.forEach(function (eventName) {
            opts.plotOptions.series.events[eventName] = opts.plotOptions.series.events[eventName] || function (event) {
                seriesCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (pointCmp) {
        pointEvents.forEach(function (eventName) {
            opts.plotOptions.series.point.events[eventName] = opts.plotOptions.series.point.events[eventName] || function (event) {
                pointCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (xAxisCmp) {
        xAxisEvents.forEach(function (eventName) {
            opts.xAxis.events[eventName] = opts.xAxis.events[eventName] || function (event) {
                xAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    if (yAxisCmp) {
        yAxisEvents.forEach(function (eventName) {
            opts.yAxis.events[eventName] = opts.yAxis.events[eventName] || function (event) {
                yAxisCmp[eventName].emit(new ChartEvent_1.ChartEvent(event, this));
            };
        });
    }
    return opts;
}
exports.createBaseOpts = createBaseOpts;
//# sourceMappingURL=createBaseOpts.js.map

/***/ },
/* 1182 */
/***/ function(module, exports) {

"use strict";
"use strict";
var isObj = function (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Sources cannot be null or undefined');
    }
    return Object(val);
}
function assignKey(to, from, key) {
    var val = from[key];
    if (val === undefined || val === null) {
        return;
    }
    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }
    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
    }
    else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}
function assign(to, from) {
    if (to === from) {
        return to;
    }
    from = Object(from);
    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key);
        }
    }
    return to;
}
function deepAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    target = toObject(target);
    for (var s = 0; s < args.length; s++) {
        assign(target, args[s]);
    }
    return target;
}
exports.deepAssign = deepAssign;
//# sourceMappingURL=deepAssign.js.map

/***/ },
/* 1183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var ChartComponent_1 = __webpack_require__(1177);
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = __webpack_require__(1172);
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = __webpack_require__(1171);
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = __webpack_require__(1173);
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = __webpack_require__(1174);
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [CHART_DIRECTIVES],
                    exports: [CHART_DIRECTIVES]
                },] },
    ];
    ChartModule.ctorParameters = [];
    return ChartModule;
}());
exports.ChartModule = ChartModule;
;
//# sourceMappingURL=index.js.map

/***/ },
/* 1184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var deepAssign_1 = __webpack_require__(1182);
function initChart(highchartsService, userOpts, baseOpts, type) {
    if (!highchartsService.Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new highchartsService.Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map

/***/ },
/* 1185 */
/***/ function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1183));

/***/ },
/* 1186 */,
/* 1187 */,
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */,
/* 1194 */,
/* 1195 */,
/* 1196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(1226),
            styles: [__webpack_require__(1212)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());


/***/ },
/* 1197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_person_new_person_component__ = __webpack_require__(1176);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroComponent = (function () {
    function HeroComponent(heroService, modal) {
        this.heroService = heroService;
        this.modal = modal;
    }
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.rowData = heroes.sort(function (a, b) {
                return a.id - b.id;
            });
            setTimeout(function () {
                _this.gridOptions.api.sizeColumnsToFit();
            }, 0);
        });
    };
    HeroComponent.prototype.ngOnInit = function () {
        this.gridOptions = {
            onGridReady: function (params) {
                params.api.sizeColumnsToFit();
            }
        };
        this.getHeroes();
        this.createColumnDefs();
        this.showGrid = true;
        this.CustomOption = {
            pagetitle: 'hero'
        };
    };
    HeroComponent.prototype.search = function ($event) {
        var _this = this;
        if ($event.id || $event.name) {
            this.heroService.getHero($event.id, $event.name).then(function (hero) {
                _this.rowData = [];
                _this.rowData.push(hero);
            });
        }
        else {
            this.getHeroes();
        }
    };
    HeroComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            { headerName: 'id', field: "id", cellClass: 'grid-align', width: 100 },
            { headerName: 'name', field: "name", cellClass: 'grid-align', width: 100 },
            {
                headerName: 'age', field: "age", cellClass: 'grid-align', width: 100,
                cellClassRules: {
                    'rag-green': 'x < 25',
                    'rag-amber': 'x >= 25 && x < 60',
                    'rag-red': 'x >= 60'
                }
            },
            {
                headerName: "Square Component", field: "id",
                // instead of cellRenderer we use cellRendererFramework
                cellRendererFramework: {
                    component: SquareComponent,
                },
                // specify all the other fields as normal
                editable: false, cellStyle: { 'border': 'none' }, cellClass: 'grid-align', colId: "square", width: 50
            }
        ];
    };
    HeroComponent.prototype.openCustom = function () {
        var _this = this;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_4__new_person_new_person_component__["a" /* NewPersonComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* BSModalContext */])).then(function (dialog) { return dialog.result; }).then(function (result) {
            console.log(result);
            _this.getHeroes();
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], HeroComponent.prototype, "CustomOption", void 0);
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(1227),
            styles: [__webpack_require__(1213)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */]) === 'function' && _b) || Object])
    ], HeroComponent);
    return HeroComponent;
    var _a, _b;
}());
var SquareComponent = (function () {
    function SquareComponent(heroService) {
        this.heroService = heroService;
    }
    SquareComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SquareComponent.prototype.valueSquared = function () {
        console.log('this.params.value:' + this.params.value);
        return this.params.value;
    };
    SquareComponent.prototype.delete = function () {
        var _this = this;
        this.heroService.delete(this.params.value).then(function () {
            return _this.heroService.getHeroes();
        }).then(function (heroes) {
            _this.params.api.setRowData(heroes.sort(function (a, b) {
                return a.id - b.id;
            }));
        });
    };
    SquareComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'square-cell',
            template: "<button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"delete()\">\u5220\u9664</button>",
            providers: [__WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object])
    ], SquareComponent);
    return SquareComponent;
    var _a;
}());


/***/ },
/* 1198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.CustomOption = {
            pagetitle: 'home',
            multiple: true
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "CustomOption", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(1229),
            styles: [__webpack_require__(1215)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());


/***/ },
/* 1199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyChartComponent = (function () {
    function MyChartComponent(jsonp) {
        this.jsonp = jsonp;
    }
    MyChartComponent.prototype.ngOnInit = function () {
        // this.setOptionsOne();
        this.setOptionsTwo();
        this.setOptionsThree();
    };
    // setOptionsOne() {
    //     this.jsonp.request('http://datas.org.cn/jsonp?filename=json/usdeur.json&callback=JSONP_CALLBACK').subscribe(res => {
    //         this.optionsOne = {
    //             timezoneOffset: -8,
    //             chart: {
    //                 zoomType: 'x'
    //             },
    //             title: {
    //                 text: '美元兑欧元汇率走势图'
    //             },
    //             subtitle: {
    //                 text: document.ontouchstart === undefined ?
    //                     '鼠标拖动可以进行缩放' : '手势操作进行缩放'
    //             },
    //             xAxis: {
    //                 type: 'datetime',
    //                 dateTimeLabelFormats: {
    //                     millisecond: '%H:%M:%S.%L',
    //                     second: '%H:%M:%S',
    //                     minute: '%H:%M',
    //                     hour: '%H:%M',
    //                     day: '%m-%d',
    //                     week: '%m-%d',
    //                     month: '%Y-%m',
    //                     year: '%Y'
    //                 }
    //             },
    //             tooltip: {
    //                 dateTimeLabelFormats: {
    //                     millisecond: '%H:%M:%S.%L',
    //                     second: '%H:%M:%S',
    //                     minute: '%H:%M',
    //                     hour: '%H:%M',
    //                     day: '%Y-%m-%d',
    //                     week: '%m-%d',
    //                     month: '%Y-%m',
    //                     year: '%Y'
    //                 }
    //             },
    //             yAxis: {
    //                 title: {
    //                     text: 'Exchange rate'
    //                 }
    //             },
    //             legend: {
    //                 enabled: false
    //             },
    //             plotOptions: {
    //                 area: {
    //                     fillColor: {
    //                         linearGradient: {
    //                             x1: 0,
    //                             y1: 0,
    //                             x2: 0,
    //                             y2: 1
    //                         },
    //                         stops: [
    //                             [0, highcharts.getOptions().colors[0]],
    //                             [1, highcharts.Color(highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
    //                         ]
    //                     },
    //                     marker: {
    //                         radius: 2
    //                     },
    //                     lineWidth: 1,
    //                     states: {
    //                         hover: {
    //                             lineWidth: 1
    //                         }
    //                     },
    //                     threshold: null
    //                 }
    //             },
    //             series: [{
    //                 type: 'area',
    //                 name: '美元兑欧元',
    //                 data: res.json()
    //             }]
    //         };
    //     });
    // }
    MyChartComponent.prototype.setOptionsTwo = function () {
        var _this = this;
        this.jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(function (res) {
            _this.optionsTwo = {
                title: { text: 'AAPL Stock Price' },
                series: [{
                        name: 'AAPL',
                        data: res.json(),
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
            };
        });
    };
    MyChartComponent.prototype.setOptionsThree = function () {
        this.optionsThree = {
            chart: { type: 'spline' },
            title: { text: 'dynamic data example' },
            series: [{ data: [2, 3, 5, 8, 13] }]
        };
    };
    MyChartComponent.prototype.setOptionsFour = function () {
        this.optionsFour = {};
    };
    MyChartComponent.prototype.saveInstance = function (chartInstance) {
        setInterval(function () { return chartInstance.series[0].addPoint(Math.random() * 10); }, 1000);
    };
    MyChartComponent.prototype.onChartSelection = function (e) {
    };
    MyChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-chart',
            template: __webpack_require__(1230),
            styles: [__webpack_require__(1216)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* Jsonp */]) === 'function' && _a) || Object])
    ], MyChartComponent);
    return MyChartComponent;
    var _a;
}());


/***/ },
/* 1200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var RefData = (function () {
    function RefData() {
    }
    RefData.IT_SKILLS = ['android', 'css', 'html5', 'mac', 'windows'];
    RefData.IT_SKILLS_NAMES = ['Android', 'CSS', 'HTML 5', 'Mac', 'Windows'];
    RefData.firstNames = ["Sophie", "Isabelle", "Emily", "Olivia", "Lily", "Chloe", "Isabella",
        "Amelia", "Jessica", "Sophia", "Ava", "Charlotte", "Mia", "Lucy", "Grace", "Ruby",
        "Ella", "Evie", "Freya", "Isla", "Poppy", "Daisy", "Layla"];
    RefData.lastNames = ["Beckham", "Black", "Braxton", "Brennan", "Brock", "Bryson", "Cadwell",
        "Cage", "Carson", "Chandler", "Cohen", "Cole", "Corbin", "Dallas", "Dalton", "Dane",
        "Donovan", "Easton", "Fisher", "Fletcher", "Grady", "Greyson", "Griffin", "Gunner",
        "Hayden", "Hudson", "Hunter", "Jacoby", "Jagger", "Jaxon", "Jett", "Kade", "Kane",
        "Keating", "Keegan", "Kingston", "Kobe"];
    RefData.COUNTRY_CODES = {
        Ireland: "ie",
        Spain: "es",
        "United Kingdom": "gb",
        France: "fr",
        Germany: "de",
        Sweden: "se",
        Italy: "it",
        Greece: "gr",
        Iceland: "is",
        Portugal: "pt",
        Malta: "mt",
        Norway: "no",
        Brazil: "br",
        Argentina: "ar",
        Colombia: "co",
        Peru: "pe",
        Venezuela: "ve",
        Uruguay: "uy"
    };
    RefData.countries = [
        { country: "Ireland", continent: "Europe", language: "English" },
        { country: "Spain", continent: "Europe", language: "Spanish" },
        { country: "United Kingdom", continent: "Europe", language: "English" },
        { country: "France", continent: "Europe", language: "French" },
        { country: "Germany", continent: "Europe", language: "(other)" },
        { country: "Sweden", continent: "Europe", language: "(other)" },
        { country: "Norway", continent: "Europe", language: "(other)" },
        { country: "Italy", continent: "Europe", language: "(other)" },
        { country: "Greece", continent: "Europe", language: "(other)" },
        { country: "Iceland", continent: "Europe", language: "(other)" },
        { country: "Portugal", continent: "Europe", language: "Portuguese" },
        { country: "Malta", continent: "Europe", language: "(other)" },
        { country: "Brazil", continent: "South America", language: "Portuguese" },
        { country: "Argentina", continent: "South America", language: "Spanish" },
        { country: "Colombia", continent: "South America", language: "Spanish" },
        { country: "Peru", continent: "South America", language: "Spanish" },
        { country: "Venezuela", continent: "South America", language: "Spanish" },
        { country: "Uruguay", continent: "South America", language: "Spanish" }
    ];
    RefData.addresses = [
        '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        '2722 Hazy Turnabout, Burnt Cabins, NY, 14120-5642, US, (917) 604-6597',
        '6686 Lazy Ledge, Two Rock, CA, 92639-3020, US, (619) 901-9911',
        '2000 Dewy Limits, Wacahoota, NF, A4L-2V9, CA, (709) 065-3959',
        '7710 Noble Pond Avenue, Bolivia, RI, 02931-1842, US, (401) 865-2160',
        '3452 Sunny Vale, Pyro, ON, M8V-4Z0, CA, (519) 072-8609',
        '4402 Dusty Cove, Many Farms, UT, 84853-8223, US, (435) 518-0673',
        '5198 Silent Parade, Round Bottom, MD, 21542-9798, US, (301) 060-7245',
        '8550 Shady Moor, Kitty Fork, CO, 80941-6207, US, (303) 502-3767',
        '2131 Old Dell, Merry Midnight, AK, 99906-8842, US, (907) 369-2206',
        '7390 Harvest Crest, Mosquito Crossing, RI, 02957-6116, US, (401) 463-6348',
        '874 Little Point, Hot Coffee, BC, V3U-2P6, CA, (250) 706-9207',
        '8834 Stony Pioneer Heights, Newlove, OR, 97419-8670, US, (541) 408-2213',
        '9829 Grand Beach, Flint, UT, 84965-9900, US, (435) 700-5161',
        '3799 Cozy Blossom Ramp, Ptarmigan, MS, 38715-0313, US, (769) 740-1526',
        '3254 Silver Island Loop, Maunaloa, DE, 19869-3169, US, (302) 667-7671',
        '1081 Middle Wood, Taylors Gut Landing, OR, 97266-2873, US, (541) 357-6310',
        '1137 Umber Trail, Shacktown, NW, X3U-5Y8, CA, (867) 702-6883',
        '9914 Hidden Bank, Wyoming, MO, 64635-9665, US, (636) 280-4192',
        '7080 Misty Nectar Townline, Coward, AB, T9U-3N4, CA, (403) 623-2838',
        '1184 Wishing Grounds, Vibank, NW, X7D-0V9, CA, (867) 531-2730',
        '126 Easy Pointe, Grandview Beach, KY, 40928-9539, US, (502) 548-0956',
        '6683 Colonial Street, Swan River, BC, V1A-9I8, CA, (778) 014-4257',
        '960 Gentle Oak Lane, Shakopee, ND, 58618-6277, US, (701) 327-1219',
        '6918 Cotton Pine Corner, Kenaston, IA, 52165-3975, US, (515) 906-7427',
        '2368 Burning Woods, Ernfold, NY, 11879-9186, US, (646) 819-0355',
        '5646 Quiet Shadow Chase, Tiger Tail, IA, 52283-5537, US, (712) 375-9225',
        '5466 Foggy Mountain Dale, Sweet Home, MT, 59738-0251, US, (406) 881-1706',
        '5313 Clear Willow Route, Amazon, BC, V0S-2S6, CA, (604) 340-7596',
        '7000 Pleasant Autoroute, Spaceport City, UT, 84749-2448, US, (435) 154-3360',
        '8359 Quaking Anchor Road, Gross, BC, V9O-0H5, CA, (250) 985-3859',
        '5143 Amber Deer Hollow, New Deal, ND, 58446-0853, US, (701) 927-0322',
        '6230 Jagged Bear Key, Young, AR, 72337-3811, US, (501) 805-7239',
        '7207 Heather Vista, Devon, WY, 82520-1771, US, (307) 358-7092',
        '9416 Red Rise Place, Spraytown, OK, 73809-4766, US, (580) 867-1973',
        '3770 Golden Horse Diversion, Yelland, IL, 60471-1487, US, (224) 717-9349',
        '4819 Honey Treasure Park, Alaska, NB, E1U-3I0, CA, (506) 656-9138',
        '6187 Round Front, Land O Lakes, AK, 99873-6403, US, (907) 853-9063',
        '9218 Crystal Highway, Pickelville, MT, 59847-9299, US, (406) 076-0024',
        '6737 Bright Quay, Lazy Mountain, KY, 42390-4772, US, (606) 256-7288',
        '237 Merry Campus, Twentysix, SC, 29330-4909, US, (864) 945-0157',
        '446 Fallen Gate Rise, Petrolia, SC, 29959-9527, US, (864) 826-0553',
        '2347 Indian Boulevard, Frisbee, VA, 23797-6458, US, (703) 656-8445',
        '365 Emerald Grove Line, Level, NC, 28381-1514, US, (919) 976-7958',
        '1207 Iron Extension, Klickitat, SC, 29197-8571, US, (803) 535-7888',
        '6770 Cinder Glen, Caronport, OH, 45053-5002, US, (440) 369-4018',
        '7619 Tawny Carrefour, Senlac, NV, 89529-9876, US, (775) 901-6433'];
    return RefData;
}());
/* harmony default export */ exports["a"] = RefData;


/***/ },
/* 1201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__refData__ = __webpack_require__(1200);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = (function () {
    function ScheduleComponent() {
        this.gridOptions = {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
        this.gridOptions = {
            onGridReady: function () {
                // this.gridOptions.api.sizeColumnsToFit();
            }
        };
    }
    ScheduleComponent.prototype.search = function () {
        console.log('search');
    };
    ScheduleComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 100; i++) {
            var countryData = __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].countries[i % __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].countries.length];
            rowData.push({
                name: __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].firstNames[i % __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].firstNames.length] + ' ' + __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].lastNames[i % __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].lastNames.length],
                address: __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].addresses[i % __WEBPACK_IMPORTED_MODULE_1__refData__["a" /* default */].addresses.length],
                country: countryData.country,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }
        this.rowData = rowData;
    };
    ScheduleComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Employee',
                children: [
                    {
                        headerName: "Name", field: "name",
                        width: 250, pinned: true, editable: true
                    },
                    {
                        headerName: "Country", field: "country", width: 250, pinned: true
                    },
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    { headerName: "Mobile", field: "mobile", width: 250, filter: 'text' },
                    { headerName: "Land-line", field: "landline", width: 250, filter: 'text' },
                    { headerName: "Address", field: "address", width: 600, filter: 'text' }
                ]
            }
        ];
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        this.CustomOption = {
            "pagetitle": "schedule",
            "subtitle": "https://www.ag-grid.com/example.php",
            "multiple": false
        };
    };
    ScheduleComponent.prototype.createRandomPhoneNumber = function () {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ScheduleComponent.prototype, "CustomOption", void 0);
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(1231),
            styles: [__webpack_require__(1217)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());


/***/ },
/* 1202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.id = '';
        this.name = '';
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.option = Object.assign({
            multiple: false
        }, this.option);
        console.log(this.option);
    };
    SearchBarComponent.prototype.onSearch = function () {
        this.search.emit({
            event: event,
            id: this.id,
            name: this.name
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SearchBarComponent.prototype, "option", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SearchBarComponent.prototype, "search", void 0);
    SearchBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(1232),
            styles: [__webpack_require__(1218)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBarComponent);
    return SearchBarComponent;
    var _a;
}());


/***/ },
/* 1203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_menu_service__ = __webpack_require__(1204);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = (function () {
    function SideMenuComponent(SideMenuService) {
        this.SideMenuService = SideMenuService;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.getSideMenu();
    };
    SideMenuComponent.prototype.getSideMenu = function () {
        var _this = this;
        this.SideMenuService.getSidemenu()
            .subscribe(function (menus) { return _this.menus = menus; }, function (error) { return _this.errorMessage = error; });
    };
    SideMenuComponent.prototype.toggleActive = function (childmenu) {
        for (var i in this.menus) {
            for (var j in this.menus[i].childmenu) {
                this.menus[i].childmenu[j].activeStatus = false;
            }
        }
    };
    SideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(1233),
            styles: [__webpack_require__(1219)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__side_menu_service__["a" /* SideMenuService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__side_menu_service__["a" /* SideMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__side_menu_service__["a" /* SideMenuService */]) === 'function' && _a) || Object])
    ], SideMenuComponent);
    return SideMenuComponent;
    var _a;
}());


/***/ },
/* 1204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideMenuService = (function () {
    function SideMenuService(http) {
        this.http = http;
        this.sidemenuUrl = 'app/menus';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SideMenuService.prototype.getSidemenu = function () {
        return this.http.get(this.sidemenuUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SideMenuService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SideMenuService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SideMenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Http */]) === 'function' && _a) || Object])
    ], SideMenuService);
    return SideMenuService;
    var _a;
}());


/***/ },
/* 1205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VkrmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VkrmsComponent = (function () {
    function VkrmsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    VkrmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.name = params['name'];
            _this.tel = params['tel'];
        });
    };
    VkrmsComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    VkrmsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vkrms',
            template: __webpack_require__(1234),
            styles: [__webpack_require__(1220)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], VkrmsComponent);
    return VkrmsComponent;
    var _a, _b;
}());


/***/ },
/* 1206 */
/***/ function(module, exports) {

/*
 Highcharts JS v5.0.4 (2016-11-22)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(M,a){"object"===typeof module&&module.exports?module.exports=M.document?a(M):a:M.Highcharts=a(M)})("undefined"!==typeof window?window:this,function(M){M=function(){var a=window,E=a.document,A=a.navigator&&a.navigator.userAgent||"",F=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,I=/(edge|msie|trident)/i.test(A)&&!window.opera,p=!F,d=/Firefox/.test(A),g=d&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.4",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:g,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:I,isWebKit:/AppleWebKit/.test(A),isFirefox:d,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,vml:p,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var E=[],A=a.charts,F=a.doc,I=a.win;a.error=function(a,d){a="Highcharts error #"+
a+": www.highcharts.com/errors/"+a;if(d)throw Error(a);I.console&&console.log(a)};a.Fx=function(a,d,g){this.options=d;this.elem=a;this.prop=g};a.Fx.prototype={dSetter:function(){var a=this.paths[0],d=this.paths[1],g=[],t=this.now,l=a.length,r;if(1===t)g=this.toD;else if(l===d.length&&1>t)for(;l--;)r=parseFloat(a[l]),g[l]=isNaN(r)?a[l]:t*parseFloat(d[l]-r)+r;else g=d;this.elem.animProp="d";this.elem.attr("d",g);this.elem.animProp=null},update:function(){var a=this.elem,d=this.prop,g=this.now,t=this.options.step;
if(this[d+"Setter"])this[d+"Setter"]();else a.attr?a.element&&(a.animProp=d,a.attr(d,g),a.animProp=null):a.style[d]=g+this.unit;t&&t.call(a,g,this)},run:function(a,d,g){var p=this,l=function(a){return l.stopped?!1:p.step(a)},r;this.startTime=+new Date;this.start=a;this.end=d;this.unit=g;this.now=this.start;this.pos=0;l.elem=this.elem;l.prop=this.prop;l()&&1===E.push(l)&&(l.timerId=setInterval(function(){for(r=0;r<E.length;r++)E[r]()||E.splice(r--,1);E.length||clearInterval(l.timerId)},13))},step:function(a){var d=
+new Date,g,p=this.options;g=this.elem;var l=p.complete,r=p.duration,f=p.curAnim,b;if(g.attr&&!g.element)g=!1;else if(a||d>=r+this.startTime){this.now=this.end;this.pos=1;this.update();a=f[this.prop]=!0;for(b in f)!0!==f[b]&&(a=!1);a&&l&&l.call(g);g=!1}else this.pos=p.easing((d-this.startTime)/r),this.now=this.start+(this.end-this.start)*this.pos,this.update(),g=!0;return g},initPath:function(p,d,g){function t(a){var c,b;for(h=a.length;h--;)c="M"===a[h]||"L"===a[h],b=/[a-zA-Z]/.test(a[h+3]),c&&!b&&
a.splice(h+1,0,a[h+1],a[h+2],a[h+1],a[h+2])}function l(a,c){for(;a.length<k;){a[0]=c[k-a.length];var b=a.slice(0,u);[].splice.apply(a,[0,0].concat(b));C&&(b=a.slice(a.length-u),[].splice.apply(a,[a.length,0].concat(b)),h--)}a[0]="M"}function r(a,c){for(var b=(k-a.length)/u;0<b&&b--;)e=a.slice().splice(a.length/v-u,u*v),e[0]=c[k-u-b*u],w&&(e[u-6]=e[u-2],e[u-5]=e[u-1]),[].splice.apply(a,[a.length/v,0].concat(e)),C&&b--}d=d||"";var f,b=p.startX,n=p.endX,w=-1<d.indexOf("C"),u=w?7:3,k,e,h;d=d.split(" ");
g=g.slice();var C=p.isArea,v=C?2:1,c;w&&(t(d),t(g));if(b&&n){for(h=0;h<b.length;h++)if(b[h]===n[0]){f=h;break}else if(b[0]===n[n.length-b.length+h]){f=h;c=!0;break}void 0===f&&(d=[])}d.length&&a.isNumber(f)&&(k=g.length+f*v*u,c?(l(d,g),r(g,d)):(l(g,d),r(d,g)));return[d,g]}};a.extend=function(a,d){var g;a||(a={});for(g in d)a[g]=d[g];return a};a.merge=function(){var p,d=arguments,g,t={},l=function(d,f){var b,n;"object"!==typeof d&&(d={});for(n in f)f.hasOwnProperty(n)&&(b=f[n],a.isObject(b,!0)&&"renderTo"!==
n&&"number"!==typeof b.nodeType?d[n]=l(d[n]||{},b):d[n]=f[n]);return d};!0===d[0]&&(t=d[1],d=Array.prototype.slice.call(d,2));g=d.length;for(p=0;p<g;p++)t=l(t,d[p]);return t};a.pInt=function(a,d){return parseInt(a,d||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(p,d){return p&&"object"===typeof p&&(!d||!a.isArray(p))};a.isNumber=function(a){return"number"===
typeof a&&!isNaN(a)};a.erase=function(a,d){for(var g=a.length;g--;)if(a[g]===d){a.splice(g,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(p,d,g){var t,l;if(a.isString(d))a.defined(g)?p.setAttribute(d,g):p&&p.getAttribute&&(l=p.getAttribute(d));else if(a.defined(d)&&a.isObject(d))for(t in d)p.setAttribute(t,d[t]);return l};a.splat=function(p){return a.isArray(p)?p:[p]};a.syncTimeout=function(a,d,g){if(d)return setTimeout(a,d,g);a.call(0,g)};a.pick=function(){var a=arguments,
d,g,t=a.length;for(d=0;d<t;d++)if(g=a[d],void 0!==g&&null!==g)return g};a.css=function(p,d){a.isMS&&!a.svg&&d&&void 0!==d.opacity&&(d.filter="alpha(opacity\x3d"+100*d.opacity+")");a.extend(p.style,d)};a.createElement=function(p,d,g,t,l){p=F.createElement(p);var r=a.css;d&&a.extend(p,d);l&&r(p,{padding:0,border:"none",margin:0});g&&r(p,g);t&&t.appendChild(p);return p};a.extendClass=function(p,d){var g=function(){};g.prototype=new p;a.extend(g.prototype,d);return g};a.pad=function(a,d,g){return Array((d||
2)+1-String(a).length).join(g||0)+a};a.relativeLength=function(a,d){return/%$/.test(a)?d*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,d,g){var p=a[d];a[d]=function(){var a=Array.prototype.slice.call(arguments),d=arguments,f=this;f.proceed=function(){p.apply(f,arguments.length?arguments:d)};a.unshift(p);a=g.apply(this,a);f.proceed=null;return a}};a.getTZOffset=function(p){var d=a.Date;return 6E4*(d.hcGetTimezoneOffset&&d.hcGetTimezoneOffset(p)||d.hcTimezoneOffset||0)};a.dateFormat=function(p,
d,g){if(!a.defined(d)||isNaN(d))return a.defaultOptions.lang.invalidDate||"";p=a.pick(p,"%Y-%m-%d %H:%M:%S");var t=a.Date,l=new t(d-a.getTZOffset(d)),r,f=l[t.hcGetHours](),b=l[t.hcGetDay](),n=l[t.hcGetDate](),w=l[t.hcGetMonth](),u=l[t.hcGetFullYear](),k=a.defaultOptions.lang,e=k.weekdays,h=k.shortWeekdays,C=a.pad,t=a.extend({a:h?h[b]:e[b].substr(0,3),A:e[b],d:C(n),e:C(n,2," "),w:b,b:k.shortMonths[w],B:k.months[w],m:C(w+1),y:u.toString().substr(2,2),Y:u,H:C(f),k:f,I:C(f%12||12),l:f%12||12,M:C(l[t.hcGetMinutes]()),
p:12>f?"AM":"PM",P:12>f?"am":"pm",S:C(l.getSeconds()),L:C(Math.round(d%1E3),3)},a.dateFormats);for(r in t)for(;-1!==p.indexOf("%"+r);)p=p.replace("%"+r,"function"===typeof t[r]?t[r](d):t[r]);return g?p.substr(0,1).toUpperCase()+p.substr(1):p};a.formatSingle=function(p,d){var g=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(p)?(g=(g=p.match(g))?g[1]:-1,null!==d&&(d=a.numberFormat(d,g,t.decimalPoint,-1<p.indexOf(",")?t.thousandsSep:""))):d=a.dateFormat(p,d);return d};a.format=function(p,d){for(var g=
"{",t=!1,l,r,f,b,n=[],w;p;){g=p.indexOf(g);if(-1===g)break;l=p.slice(0,g);if(t){l=l.split(":");r=l.shift().split(".");b=r.length;w=d;for(f=0;f<b;f++)w=w[r[f]];l.length&&(w=a.formatSingle(l.join(":"),w));n.push(w)}else n.push(l);p=p.slice(g+1);g=(t=!t)?"}":"{"}n.push(p);return n.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(p,d,g,t,l){var r,f=p;g=a.pick(g,1);r=p/g;d||(d=l?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===
t&&(1===g?d=a.grep(d,function(a){return 0===a%1}):.1>=g&&(d=[1/g])));for(t=0;t<d.length&&!(f=d[t],l&&f*g>=p||!l&&r<=(d[t]+(d[t+1]||d[t]))/2);t++);return f*g};a.stableSort=function(a,d){var g=a.length,t,l;for(l=0;l<g;l++)a[l].safeI=l;a.sort(function(a,f){t=d(a,f);return 0===t?a.safeI-f.safeI:t});for(l=0;l<g;l++)delete a[l].safeI};a.arrayMin=function(a){for(var d=a.length,g=a[0];d--;)a[d]<g&&(g=a[d]);return g};a.arrayMax=function(a){for(var d=a.length,g=a[0];d--;)a[d]>g&&(g=a[d]);return g};a.destroyObjectProperties=
function(a,d){for(var g in a)a[g]&&a[g]!==d&&a[g].destroy&&a[g].destroy(),delete a[g]};a.discardElement=function(p){var d=a.garbageBin;d||(d=a.createElement("div"));p&&d.appendChild(p);d.innerHTML=""};a.correctFloat=function(a,d){return parseFloat(a.toPrecision(d||14))};a.setAnimation=function(p,d){d.renderer.globalAnimation=a.pick(p,d.options.chart.animation,!0)};a.animObject=function(p){return a.isObject(p)?a.merge(p):{duration:p?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(p,d,g,t){p=+p||0;d=+d;var l=a.defaultOptions.lang,r=(p.toString().split(".")[1]||"").length,f,b,n=Math.abs(p);-1===d?d=Math.min(r,20):a.isNumber(d)||(d=2);f=String(a.pInt(n.toFixed(d)));b=3<f.length?f.length%3:0;g=a.pick(g,l.decimalPoint);t=a.pick(t,l.thousandsSep);p=(0>p?"-":"")+(b?f.substr(0,b)+t:"");p+=f.substr(b).replace(/(\d{3})(?=\d)/g,"$1"+t);d&&(t=Math.abs(n-f+Math.pow(10,-Math.max(d,r)-1)),p+=g+t.toFixed(d).slice(2));
return p};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(p,d){return"width"===d?Math.min(p.offsetWidth,p.scrollWidth)-a.getStyle(p,"padding-left")-a.getStyle(p,"padding-right"):"height"===d?Math.min(p.offsetHeight,p.scrollHeight)-a.getStyle(p,"padding-top")-a.getStyle(p,"padding-bottom"):(p=I.getComputedStyle(p,void 0))&&a.pInt(p.getPropertyValue(d))};a.inArray=function(a,d){return d.indexOf?d.indexOf(a):[].indexOf.call(d,a)};a.grep=function(a,d){return[].filter.call(a,
d)};a.map=function(a,d){for(var g=[],t=0,l=a.length;t<l;t++)g[t]=d.call(a[t],a[t],t,a);return g};a.offset=function(a){var d=F.documentElement;a=a.getBoundingClientRect();return{top:a.top+(I.pageYOffset||d.scrollTop)-(d.clientTop||0),left:a.left+(I.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};a.stop=function(a,d){for(var g=E.length;g--;)E[g].elem!==a||d&&d!==E[g].prop||(E[g].stopped=!0)};a.each=function(a,d,g){return Array.prototype.forEach.call(a,d,g)};a.addEvent=function(p,d,g){function t(a){a.target=
a.srcElement||I;g.call(p,a)}var l=p.hcEvents=p.hcEvents||{};p.addEventListener?p.addEventListener(d,g,!1):p.attachEvent&&(p.hcEventsIE||(p.hcEventsIE={}),p.hcEventsIE[g.toString()]=t,p.attachEvent("on"+d,t));l[d]||(l[d]=[]);l[d].push(g);return function(){a.removeEvent(p,d,g)}};a.removeEvent=function(p,d,g){function t(a,b){p.removeEventListener?p.removeEventListener(a,b,!1):p.attachEvent&&(b=p.hcEventsIE[b.toString()],p.detachEvent("on"+a,b))}function l(){var a,b;if(p.nodeName)for(b in d?(a={},a[d]=
!0):a=f,a)if(f[b])for(a=f[b].length;a--;)t(b,f[b][a])}var r,f=p.hcEvents,b;f&&(d?(r=f[d]||[],g?(b=a.inArray(g,r),-1<b&&(r.splice(b,1),f[d]=r),t(d,g)):(l(),f[d]=[])):(l(),p.hcEvents={}))};a.fireEvent=function(p,d,g,t){var l;l=p.hcEvents;var r,f;g=g||{};if(F.createEvent&&(p.dispatchEvent||p.fireEvent))l=F.createEvent("Events"),l.initEvent(d,!0,!0),a.extend(l,g),p.dispatchEvent?p.dispatchEvent(l):p.fireEvent(d,l);else if(l)for(l=l[d]||[],r=l.length,g.target||a.extend(g,{preventDefault:function(){g.defaultPrevented=
!0},target:p,type:d}),d=0;d<r;d++)(f=l[d])&&!1===f.call(p,g)&&g.preventDefault();t&&!g.defaultPrevented&&t(g)};a.animate=function(p,d,g){var t,l="",r,f,b;a.isObject(g)||(t=arguments,g={duration:t[2],easing:t[3],complete:t[4]});a.isNumber(g.duration)||(g.duration=400);g.easing="function"===typeof g.easing?g.easing:Math[g.easing]||Math.easeInOutSine;g.curAnim=a.merge(d);for(b in d)a.stop(p,b),f=new a.Fx(p,g,b),r=null,"d"===b?(f.paths=f.initPath(p,p.d,d.d),f.toD=d.d,t=0,r=1):p.attr?t=p.attr(b):(t=parseFloat(a.getStyle(p,
b))||0,"opacity"!==b&&(l="px")),r||(r=d[b]),r.match&&r.match("px")&&(r=r.replace(/px/g,"")),f.run(t,r,l)};a.seriesType=function(p,d,g,t,l){var r=a.getOptions(),f=a.seriesTypes;r.plotOptions[p]=a.merge(r.plotOptions[d],g);f[p]=a.extendClass(f[d]||function(){},t);f[p].prototype.type=p;l&&(f[p].prototype.pointClass=a.extendClass(a.Point,l));return f[p]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),d=0;return function(){return"highcharts-"+a+"-"+d++}}();I.jQuery&&(I.jQuery.fn.highcharts=
function(){var p=[].slice.call(arguments);if(this[0])return p[0]?(new (a[a.isString(p[0])?p.shift():"Chart"])(this[0],p[0],p[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});F&&!F.defaultView&&(a.getStyle=function(p,d){var g={width:"clientWidth",height:"clientHeight"}[d];if(p.style[d])return a.pInt(p.style[d]);"opacity"===d&&(d="filter");if(g)return p.style.zoom=1,Math.max(p[g]-2*a.getStyle(p,"padding"),0);p=p.currentStyle[d.replace(/\-(\w)/g,function(a,l){return l.toUpperCase()})];"filter"===
d&&(p=p.replace(/alpha\(opacity=([0-9]+)\)/,function(a,l){return l/100}));return""===p?1:a.pInt(p)});Array.prototype.forEach||(a.each=function(a,d,g){for(var t=0,l=a.length;t<l;t++)if(!1===d.call(g,a[t],t,a))return t});Array.prototype.indexOf||(a.inArray=function(a,d){var g,t=0;if(d)for(g=d.length;t<g;t++)if(d[t]===a)return t;return-1});Array.prototype.filter||(a.grep=function(a,d){for(var g=[],t=0,l=a.length;t<l;t++)d(a[t],t)&&g.push(a[t]);return g})})(M);(function(a){var E=a.each,A=a.isNumber,F=
a.map,I=a.merge,p=a.pInt;a.Color=function(d){if(!(this instanceof a.Color))return new a.Color(d);this.init(d)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[p(a[1]),p(a[2]),p(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[p(a[1],16),p(a[2],16),p(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[p(a[1]),p(a[2]),p(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(d){var g,t,l,r;if((this.input=d=this.names[d]||d)&&d.stops)this.stops=F(d.stops,function(f){return new a.Color(f[1])});else for(l=this.parsers.length;l--&&!t;)r=this.parsers[l],(g=r.regex.exec(d))&&(t=r.parse(g));this.rgba=t||[]},get:function(a){var g=this.input,d=this.rgba,l;this.stops?(l=I(g),l.stops=[].concat(l.stops),E(this.stops,function(d,f){l.stops[f]=[l.stops[f][0],d.get(a)]})):l=d&&
A(d[0])?"rgb"===a||!a&&1===d[3]?"rgb("+d[0]+","+d[1]+","+d[2]+")":"a"===a?d[3]:"rgba("+d.join(",")+")":g;return l},brighten:function(a){var d,t=this.rgba;if(this.stops)E(this.stops,function(l){l.brighten(a)});else if(A(a)&&0!==a)for(d=0;3>d;d++)t[d]+=p(255*a),0>t[d]&&(t[d]=0),255<t[d]&&(t[d]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};a.color=function(d){return new a.Color(d)}})(M);(function(a){var E,A,F=a.addEvent,I=a.animate,p=a.attr,d=a.charts,g=a.color,t=a.css,l=a.createElement,
r=a.defined,f=a.deg2rad,b=a.destroyObjectProperties,n=a.doc,w=a.each,u=a.extend,k=a.erase,e=a.grep,h=a.hasTouch,C=a.isArray,v=a.isFirefox,c=a.isMS,q=a.isObject,x=a.isString,L=a.isWebKit,H=a.merge,J=a.noop,D=a.pick,G=a.pInt,K=a.removeEvent,N=a.stop,m=a.svg,y=a.SVG_NS,O=a.symbolSizes,P=a.win;E=a.SVGElement=function(){return this};E.prototype={opacity:1,SVG_NS:y,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textOutline".split(" "),init:function(a,
B){this.element="span"===B?l(B):n.createElementNS(this.SVG_NS,B);this.renderer=a},animate:function(a,B,c){(B=D(B,this.renderer.globalAnimation,!0))?(c&&(B.complete=c),I(this,a,B)):this.attr(a,null,c);return this},colorGradient:function(z,B,c){var m=this.renderer,b,e,y,q,k,Q,h,f,x,n,u,v=[],D;z.linearGradient?e="linearGradient":z.radialGradient&&(e="radialGradient");if(e){y=z[e];k=m.gradients;h=z.stops;n=c.radialReference;C(y)&&(z[e]=y={x1:y[0],y1:y[1],x2:y[2],y2:y[3],gradientUnits:"userSpaceOnUse"});
"radialGradient"===e&&n&&!r(y.gradientUnits)&&(q=y,y=H(y,m.getRadialAttr(n,q),{gradientUnits:"userSpaceOnUse"}));for(u in y)"id"!==u&&v.push(u,y[u]);for(u in h)v.push(h[u]);v=v.join(",");k[v]?n=k[v].attr("id"):(y.id=n=a.uniqueKey(),k[v]=Q=m.createElement(e).attr(y).add(m.defs),Q.radAttr=q,Q.stops=[],w(h,function(z){0===z[1].indexOf("rgba")?(b=a.color(z[1]),f=b.get("rgb"),x=b.get("a")):(f=z[1],x=1);z=m.createElement("stop").attr({offset:z[0],"stop-color":f,"stop-opacity":x}).add(Q);Q.stops.push(z)}));
D="url("+m.url+"#"+n+")";c.setAttribute(B,D);c.gradient=v;z.toString=function(){return D}}},applyTextOutline:function(a){var z=this.element,c,m,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(z.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;c=[].slice.call(z.getElementsByTagName("tspan"));a=a.split(" ");m=a[a.length-1];(b=a[0])&&"none"!==b&&(b=b.replace(/(^[\d\.]+)(.*?)$/g,function(a,z,B){return 2*z+B}),w(c,function(a){"highcharts-text-outline"===a.getAttribute("class")&&
k(c,z.removeChild(a))}),w(c,function(a,B){0===B&&(a.setAttribute("x",z.getAttribute("x")),B=z.getAttribute("y"),a.setAttribute("y",B||0),null===B&&z.setAttribute("y",0));a=a.cloneNode(1);p(a,{"class":"highcharts-text-outline",fill:m,stroke:m,"stroke-width":b,"stroke-linejoin":"round"});z.insertBefore(a,z.firstChild)}))},attr:function(a,B,c){var z,m=this.element,b,e=this,y;"string"===typeof a&&void 0!==B&&(z=a,a={},a[z]=B);if("string"===typeof a)e=(this[a+"Getter"]||this._defaultGetter).call(this,
a,m);else{for(z in a)B=a[z],y=!1,z!==this.animProp&&N(this,z),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(z)&&(b||(this.symbolAttr(a),b=!0),y=!0),!this.rotation||"x"!==z&&"y"!==z||(this.doTransform=!0),y||(y=this[z+"Setter"]||this._defaultSetter,y.call(this,B,z,m),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(z)&&this.updateShadows(z,B,y));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}c&&c();return e},updateShadows:function(a,
B,c){for(var z=this.shadows,m=z.length;m--;)c.call(z[m],"height"===a?Math.max(B-(z[m].cutHeight||0),0):"d"===a?this.d:B,a,z[m])},addClass:function(a,B){var z=this.attr("class")||"";-1===z.indexOf(a)&&(B||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==p(this.element,"class").indexOf(a)},removeClass:function(a){p(this.element,"class",(p(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var z=this;w("x y r start end width height innerR anchorX anchorY".split(" "),
function(B){z[B]=D(a[B],z[B])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,B){var z,c={},m;B=B||a.strokeWidth||0;m=Math.round(B)%2/2;a.x=Math.floor(a.x||this.x||0)+m;a.y=Math.floor(a.y||this.y||0)+m;a.width=Math.floor((a.width||this.width||0)-2*m);a.height=Math.floor((a.height||this.height||0)-2*m);r(a.strokeWidth)&&(a.strokeWidth=B);for(z in a)this[z]!==a[z]&&
(this[z]=c[z]=a[z]);return c},css:function(a){var z=this.styles,b={},e=this.element,y,q,k="";y=!z;a&&a.color&&(a.fill=a.color);if(z)for(q in a)a[q]!==z[q]&&(b[q]=a[q],y=!0);if(y){y=this.textWidth=a&&a.width&&"text"===e.nodeName.toLowerCase()&&G(a.width)||this.textWidth;z&&(a=u(z,b));this.styles=a;y&&!m&&this.renderer.forExport&&delete a.width;if(c&&!m)t(this.element,a);else{z=function(a,z){return"-"+z.toLowerCase()};for(q in a)k+=q.replace(/([A-Z])/g,z)+":"+a[q]+";";p(e,"style",k)}this.added&&(y&&
this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,B){var z=this,c=z.element;h&&"click"===a?(c.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();B.call(c,a)},c.onclick=function(a){(-1===P.navigator.userAgent.indexOf("Android")||1100<Date.now()-(z.touchEventFired||0))&&B.call(c,a)}):c["on"+a]=B;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];
this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,B){return this.attr({translateX:a,translateY:B})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,B=this.translateY||0,c=this.scaleX,m=this.scaleY,b=this.inverted,e=this.rotation,y=this.element;b&&(a+=this.attr("width"),B+=this.attr("height"));a=["translate("+a+","+B+")"];b?a.push("rotate(90) scale(-1,1)"):
e&&a.push("rotate("+e+" "+(y.getAttribute("x")||0)+" "+(y.getAttribute("y")||0)+")");(r(c)||r(m))&&a.push("scale("+D(c,1)+" "+D(m,1)+")");a.length&&y.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,B,c){var z,m,b,e,y={};m=this.renderer;b=m.alignedObjects;var q,h;if(a){if(this.alignOptions=a,this.alignByTranslate=B,!c||x(c))this.alignTo=z=c||"renderer",k(b,this),b.push(this),c=null}else a=this.alignOptions,B=this.alignByTranslate,
z=this.alignTo;c=D(c,m[z],m);z=a.align;m=a.verticalAlign;b=(c.x||0)+(a.x||0);e=(c.y||0)+(a.y||0);"right"===z?q=1:"center"===z&&(q=2);q&&(b+=(c.width-(a.width||0))/q);y[B?"translateX":"x"]=Math.round(b);"bottom"===m?h=1:"middle"===m&&(h=2);h&&(e+=(c.height-(a.height||0))/h);y[B?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](y);this.placed=!0;this.alignAttr=y;return this},getBBox:function(a,B){var z,m=this.renderer,b,e=this.element,y=this.styles,q,k=this.textStr,h,x=m.cache,n=m.cacheKeys,
v;B=D(B,this.rotation);b=B*f;q=y&&y.fontSize;void 0!==k&&(v=k.toString(),-1===v.indexOf("\x3c")&&(v=v.replace(/[0-9]/g,"0")),v+=["",B||0,q,e.style.width,e.style["text-overflow"]].join());v&&!a&&(z=x[v]);if(!z){if(e.namespaceURI===this.SVG_NS||m.forExport){try{(h=this.fakeTS&&function(a){w(e.querySelectorAll(".highcharts-text-outline"),function(z){z.style.display=a})})&&h("none"),z=e.getBBox?u({},e.getBBox()):{width:e.offsetWidth,height:e.offsetHeight},h&&h("")}catch(T){}if(!z||0>z.width)z={width:0,
height:0}}else z=this.htmlGetBBox();m.isSVG&&(a=z.width,m=z.height,c&&y&&"11px"===y.fontSize&&"16.9"===m.toPrecision(3)&&(z.height=m=14),B&&(z.width=Math.abs(m*Math.sin(b))+Math.abs(a*Math.cos(b)),z.height=Math.abs(m*Math.cos(b))+Math.abs(a*Math.sin(b))));if(v&&0<z.height){for(;250<n.length;)delete x[n.shift()];x[v]||n.push(v);x[v]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var z=
this;z.animate({opacity:0},{duration:a||150,complete:function(){z.attr({y:-9999})}})},add:function(a){var z=this.renderer,c=this.element,m;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&z.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)m=this.zIndexSetter();m||(a?a.element:z.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var z=a.parentNode;z&&z.removeChild(a)},destroy:function(){var a=this.element||{},c=this.renderer.isSVG&&
"SPAN"===a.nodeName&&this.parentGroup,m,b;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;N(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(b=0;b<this.stops.length;b++)this.stops[b]=this.stops[b].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)a=c.parentGroup,this.safeRemoveChild(c.div),delete c.div,c=a;this.alignTo&&k(this.renderer.alignedObjects,this);for(m in this)delete this[m];return null},
shadow:function(a,c,m){var z=[],B,b,e=this.element,y,q,k,h;if(!a)this.destroyShadows();else if(!this.shadows){q=D(a.width,3);k=(a.opacity||.15)/q;h=this.parentInverted?"(-1,-1)":"("+D(a.offsetX,1)+", "+D(a.offsetY,1)+")";for(B=1;B<=q;B++)b=e.cloneNode(0),y=2*q+1-2*B,p(b,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":k*B,"stroke-width":y,transform:"translate"+h,fill:"none"}),m&&(p(b,"height",Math.max(p(b,"height")-y,0)),b.cutHeight=y),c?c.element.appendChild(b):e.parentNode.insertBefore(b,
e),z.push(b);this.shadows=z}return this},destroyShadows:function(){w(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=D(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,c,m){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");m.setAttribute(c,
a);this[c]=a},dashstyleSetter:function(a){var c,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(c=a.length;c--;)a[c]=G(a[c])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",
{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,c,m){this[c]=a;m.setAttribute(c,a)},titleSetter:function(a){var c=this.element.getElementsByTagName("title")[0];c||(c=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(c));c.firstChild&&c.removeChild(c.firstChild);c.appendChild(n.createTextNode(String(D(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,
c,m){"string"===typeof a?m.setAttribute(c,a):a&&this.colorGradient(a,c,m)},visibilitySetter:function(a,c,m){"inherit"===a?m.removeAttribute(c):m.setAttribute(c,a)},zIndexSetter:function(a,c){var m=this.renderer,b=this.parentGroup,z=(b||m).element||m.box,B,e=this.element,y;B=this.added;var q;r(a)&&(e.zIndex=a,a=+a,this[c]===a&&(B=!1),this[c]=a);if(B){(a=this.zIndex)&&b&&(b.handleZ=!0);c=z.childNodes;for(q=0;q<c.length&&!y;q++)b=c[q],B=b.zIndex,b!==e&&(G(B)>a||!r(a)&&r(B)||0>a&&!r(B)&&z!==m.box)&&(z.insertBefore(e,
b),y=!0);y||z.appendChild(e)}return y},_defaultSetter:function(a,c,m){m.setAttribute(c,a)}};E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=function(a,c){this[c]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,c,m){this[c]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,
"stroke",m),m.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===c&&0===a&&this.hasStroke&&(m.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=function(){this.init.apply(this,arguments)};A.prototype={Element:E,SVG_NS:y,init:function(a,c,m,b,e,y){var z;b=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(b));z=b.element;a.appendChild(z);-1===a.innerHTML.indexOf("xmlns")&&p(z,"xmlns",this.SVG_NS);this.isSVG=!0;
this.box=z;this.boxWrapper=b;this.alignedObjects=[];this.url=(v||L)&&n.getElementsByTagName("base").length?P.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 5.0.4"));this.defs=this.createElement("defs").add();this.allowHTML=y;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(c,m,!1);var B;v&&a.getBoundingClientRect&&(c=function(){t(a,
{left:0,top:0});B=a.getBoundingClientRect();t(a,{left:Math.ceil(B.left)-B.left+"px",top:Math.ceil(B.top)-B.top+"px"})},c(),this.unSubPixelFix=F(P,"resize",c))},getStyle:function(a){return this.style=u({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();
b(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var c=new this.Element;c.init(this,a);return c},draw:J,getRadialAttr:function(a,c){return{cx:a[0]-a[2]/2+c.cx*a[2],cy:a[1]-a[2]/2+c.cy*a[2],r:c.r*a[2]}},buildText:function(a){for(var c=a.element,b=this,z=b.forExport,q=D(a.textStr,"").toString(),k=-1!==q.indexOf("\x3c"),h=c.childNodes,x,f,u,v,l=p(c,"x"),d=a.styles,C=a.textWidth,g=d&&
d.lineHeight,r=d&&d.textOutline,L=d&&"ellipsis"===d.textOverflow,H=h.length,K=C&&!a.added&&this.box,P=function(a){var m;m=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:d&&d.fontSize||b.style.fontSize||12;return g?G(g):b.fontMetrics(m,a.getAttribute("style")?a:c).h};H--;)c.removeChild(h[H]);k||r||L||C||-1!==q.indexOf(" ")?(x=/<.*class="([^"]+)".*>/,f=/<.*style="([^"]+)".*>/,u=/<.*href="(http[^"]+)".*>/,K&&K.appendChild(c),q=k?q.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[q],q=e(q,function(a){return""!==a}),w(q,function(e,B){var q,k=0;e=e.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");q=e.split("|||");w(q,function(e){if(""!==e||1===q.length){var h={},D=n.createElementNS(b.SVG_NS,"tspan"),G,g;x.test(e)&&(G=e.match(x)[1],p(D,"class",G));f.test(e)&&(g=e.match(f)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),p(D,"style",g));u.test(e)&&!z&&(p(D,"onclick",'location.href\x3d"'+e.match(u)[1]+'"'),t(D,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==e){D.appendChild(n.createTextNode(e));k?h.dx=0:B&&null!==l&&(h.x=l);p(D,h);c.appendChild(D);!k&&B&&(!m&&z&&t(D,{display:"block"}),p(D,"dy",P(D)));if(C){h=e.replace(/([^\^])-/g,"$1- ").split(" ");G="nowrap"===d.whiteSpace;for(var Q=1<q.length||B||1<h.length&&!G,r,H,w=[],K=P(D),S=a.rotation,
O=e,R=O.length;(Q||L)&&(h.length||w.length);)a.rotation=0,r=a.getBBox(!0),H=r.width,!m&&b.forExport&&(H=b.measureSpanWidth(D.firstChild.data,a.styles)),r=H>C,void 0===v&&(v=r),L&&v?(R/=2,""===O||!r&&.5>R?h=[]:(O=e.substring(0,O.length+(r?-1:1)*Math.ceil(R)),h=[O+(3<C?"\u2026":"")],D.removeChild(D.firstChild))):r&&1!==h.length?(D.removeChild(D.firstChild),w.unshift(h.pop())):(h=w,w=[],h.length&&!G&&(D=n.createElementNS(y,"tspan"),p(D,{dy:K,x:l}),g&&p(D,"style",g),c.appendChild(D)),H>C&&(C=H)),h.length&&
D.appendChild(n.createTextNode(h.join(" ").replace(/- /g,"-")));a.rotation=S}k++}}})}),v&&a.attr("title",a.textStr),K&&K.removeChild(c),r&&a.applyTextOutline&&a.applyTextOutline(r)):c.appendChild(n.createTextNode(q.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},getContrast:function(a){a=g(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,m,b,e,y,q,h,k,x){var B=this.label(a,m,b,x,null,null,null,null,"button"),z=0;B.attr(H({padding:8,r:2},y));var f,n,v,D;y=H({fill:"#f7f7f7",
stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},y);f=y.style;delete y.style;q=H(y,{fill:"#e6e6e6"},q);n=q.style;delete q.style;h=H(y,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},h);v=h.style;delete h.style;k=H(y,{style:{color:"#cccccc"}},k);D=k.style;delete k.style;F(B.element,c?"mouseover":"mouseenter",function(){3!==z&&B.setState(1)});F(B.element,c?"mouseout":"mouseleave",function(){3!==z&&B.setState(z)});B.setState=function(a){1!==a&&
(B.state=z=a);B.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);B.attr([y,q,h,k][a||0]).css([f,n,v,D][a||0])};B.attr(y).css(u({cursor:"default"},f));return B.on("click",function(a){3!==z&&e.call(B,a)})},crispLine:function(a,c){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-c%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+c%2/2);return a},path:function(a){var c={fill:"none"};C(a)?c.d=a:q(a)&&u(c,a);return this.createElement("path").attr(c)},
circle:function(a,c,m){a=q(a)?a:{x:a,y:c,r:m};c=this.createElement("circle");c.xSetter=c.ySetter=function(a,c,m){m.setAttribute("c"+c,a)};return c.attr(a)},arc:function(a,c,m,b,e,y){q(a)&&(c=a.y,m=a.r,b=a.innerR,e=a.start,y=a.end,a=a.x);a=this.symbol("arc",a||0,c||0,m||0,m||0,{innerR:b||0,start:e||0,end:y||0});a.r=m;return a},rect:function(a,c,m,b,e,y){e=q(a)?a.r:e;var B=this.createElement("rect");a=q(a)?a:void 0===a?{}:{x:a,y:c,width:Math.max(m,0),height:Math.max(b,0)};void 0!==y&&(a.strokeWidth=
y,a=B.crisp(a));a.fill="none";e&&(a.r=e);B.rSetter=function(a,c,m){p(m,{rx:a,ry:a})};return B.attr(a)},setSize:function(a,c,m){var b=this.alignedObjects,e=b.length;this.width=a;this.height=c;for(this.boxWrapper.animate({width:a,height:c},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:D(m,!0)?void 0:0});e--;)b[e].align()},g:function(a){var c=this.createElement("g");return a?c.attr({"class":"highcharts-"+a}):c},image:function(a,c,m,b,e){var y={preserveAspectRatio:"none"};
1<arguments.length&&u(y,{x:c,y:m,width:b,height:e});y=this.createElement("image").attr(y);y.element.setAttributeNS?y.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):y.element.setAttribute("hc-svg-href",a);return y},symbol:function(a,c,m,b,e,y){var q=this,B,z=this.symbols[a],h=r(c)&&z&&z(Math.round(c),Math.round(m),b,e,y),k=/^url\((.*?)\)$/,x,f;z?(B=this.path(h),B.attr("fill","none"),u(B,{symbolName:a,x:c,y:m,width:b,height:e}),y&&u(B,y)):k.test(a)&&(x=a.match(k)[1],B=this.image(x),
B.imgwidth=D(O[x]&&O[x].width,y&&y.width),B.imgheight=D(O[x]&&O[x].height,y&&y.height),f=function(){B.attr({width:B.width,height:B.height})},w(["width","height"],function(a){B[a+"Setter"]=function(a,c){var m={},b=this["img"+c],e="width"===c?"translateX":"translateY";this[c]=a;r(b)&&(this.element&&this.element.setAttribute(c,b),this.alignByTranslate||(m[e]=((this[c]||0)-b)/2,this.attr(m)))}}),r(c)&&B.attr({x:c,y:m}),B.isImg=!0,r(B.imgwidth)&&r(B.imgheight)?f():(B.attr({width:0,height:0}),l("img",{onload:function(){var a=
d[q.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));O[x]={width:this.width,height:this.height};B.imgwidth=this.width;B.imgheight=this.height;B.element&&f();this.parentNode&&this.parentNode.removeChild(this);q.imgCount--;if(!q.imgCount&&a&&a.onload)a.onload()},src:x}),this.imgCount++));return B},symbols:{circle:function(a,c,m,b){var e=.166*m;return["M",a+m/2,c,"C",a+m+e,c,a+m+e,c+b,a+m/2,c+b,"C",a-e,c+b,a-e,c,a+m/2,c,"Z"]},square:function(a,c,m,b){return["M",
a,c,"L",a+m,c,a+m,c+b,a,c+b,"Z"]},triangle:function(a,c,m,b){return["M",a+m/2,c,"L",a+m,c+b,a,c+b,"Z"]},"triangle-down":function(a,c,m,b){return["M",a,c,"L",a+m,c,a+m/2,c+b,"Z"]},diamond:function(a,c,m,b){return["M",a+m/2,c,"L",a+m,c+b/2,a+m/2,c+b,a,c+b/2,"Z"]},arc:function(a,c,m,b,e){var y=e.start;m=e.r||m||b;var q=e.end-.001;b=e.innerR;var B=e.open,h=Math.cos(y),k=Math.sin(y),z=Math.cos(q),q=Math.sin(q);e=e.end-y<Math.PI?0:1;return["M",a+m*h,c+m*k,"A",m,m,0,e,1,a+m*z,c+m*q,B?"M":"L",a+b*z,c+b*q,
"A",b,b,0,e,0,a+b*h,c+b*k,B?"":"Z"]},callout:function(a,c,m,b,e){var y=Math.min(e&&e.r||0,m,b),q=y+6,B=e&&e.anchorX;e=e&&e.anchorY;var h;h=["M",a+y,c,"L",a+m-y,c,"C",a+m,c,a+m,c,a+m,c+y,"L",a+m,c+b-y,"C",a+m,c+b,a+m,c+b,a+m-y,c+b,"L",a+y,c+b,"C",a,c+b,a,c+b,a,c+b-y,"L",a,c+y,"C",a,c,a,c,a+y,c];B&&B>m?e>c+q&&e<c+b-q?h.splice(13,3,"L",a+m,e-6,a+m+6,e,a+m,e+6,a+m,c+b-y):h.splice(13,3,"L",a+m,b/2,B,e,a+m,b/2,a+m,c+b-y):B&&0>B?e>c+q&&e<c+b-q?h.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,c+y):h.splice(33,3,"L",
a,b/2,B,e,a,b/2,a,c+y):e&&e>b&&B>a+q&&B<a+m-q?h.splice(23,3,"L",B+6,c+b,B,c+b+6,B-6,c+b,a+y,c+b):e&&0>e&&B>a+q&&B<a+m-q&&h.splice(3,3,"L",B-6,c,B,c-6,B+6,c,m-y,c);return h}},clipRect:function(c,m,b,e){var y=a.uniqueKey(),q=this.createElement("clipPath").attr({id:y}).add(this.defs);c=this.rect(c,m,b,e,0).add(q);c.id=y;c.clipPath=q;c.count=0;return c},text:function(a,c,b,e){var y=!m&&this.forExport,q={};if(e&&(this.allowHTML||!this.forExport))return this.html(a,c,b);q.x=Math.round(c||0);b&&(q.y=Math.round(b));
if(a||0===a)q.text=a;a=this.createElement("text").attr(q);y&&a.css({position:"absolute"});e||(a.xSetter=function(a,c,m){var b=m.getElementsByTagName("tspan"),e,y=m.getAttribute(c),q;for(q=0;q<b.length;q++)e=b[q],e.getAttribute(c)===y&&e.setAttribute(c,a);m.setAttribute(c,a)});return a},fontMetrics:function(a,c){a=a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?G(a):/em/.test(a)?parseFloat(a)*(c?this.fontMetrics(null,c.parentNode).f:16):12;c=24>a?a+3:Math.round(1.2*
a);return{h:c,b:Math.round(.8*c),f:a}},rotCorr:function(a,c,m){var b=a;c&&m&&(b=Math.max(b*Math.cos(c*f),4));return{x:-a/3*Math.sin(c*f),y:b}},label:function(a,c,m,b,e,y,q,h,k){var B=this,x=B.g("button"!==k&&"label"),f=x.text=B.text("",0,0,q).attr({zIndex:1}),n,v,D=0,z=3,G=0,l,d,C,g,L,P={},O,t,N=/^url\((.*?)\)$/.test(b),Q=N,J,p,S,R;k&&x.addClass("highcharts-"+k);Q=N;J=function(){return(O||0)%2/2};p=function(){var a=f.element.style,c={};v=(void 0===l||void 0===d||L)&&r(f.textStr)&&f.getBBox();x.width=
(l||v.width||0)+2*z+G;x.height=(d||v.height||0)+2*z;t=z+B.fontMetrics(a&&a.fontSize,f).b;Q&&(n||(x.box=n=B.symbols[b]||N?B.symbol(b):B.rect(),n.addClass(("button"===k?"":"highcharts-label-box")+(k?" highcharts-"+k+"-box":"")),n.add(x),a=J(),c.x=a,c.y=(h?-t:0)+a),c.width=Math.round(x.width),c.height=Math.round(x.height),n.attr(u(c,P)),P={})};S=function(){var a=G+z,c;c=h?0:t;r(l)&&v&&("center"===L||"right"===L)&&(a+={center:.5,right:1}[L]*(l-v.width));if(a!==f.x||c!==f.y)f.attr("x",a),void 0!==c&&f.attr("y",
c);f.x=a;f.y=c};R=function(a,c){n?n.attr(a,c):P[a]=c};x.onAdd=function(){f.add(x);x.attr({text:a||0===a?a:"",x:c,y:m});n&&r(e)&&x.attr({anchorX:e,anchorY:y})};x.widthSetter=function(a){l=a};x.heightSetter=function(a){d=a};x["text-alignSetter"]=function(a){L=a};x.paddingSetter=function(a){r(a)&&a!==z&&(z=x.padding=a,S())};x.paddingLeftSetter=function(a){r(a)&&a!==G&&(G=a,S())};x.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==D&&(D=a,v&&x.attr({x:C}))};x.textSetter=function(a){void 0!==
a&&f.textSetter(a);p();S()};x["stroke-widthSetter"]=function(a,c){a&&(Q=!0);O=this["stroke-width"]=a;R(c,a)};x.strokeSetter=x.fillSetter=x.rSetter=function(a,c){"fill"===c&&a&&(Q=!0);R(c,a)};x.anchorXSetter=function(a,c){e=a;R(c,Math.round(a)-J()-C)};x.anchorYSetter=function(a,c){y=a;R(c,a-g)};x.xSetter=function(a){x.x=a;D&&(a-=D*((l||v.width)+2*z));C=Math.round(a);x.attr("translateX",C)};x.ySetter=function(a){g=x.y=Math.round(a);x.attr("translateY",g)};var V=x.css;return u(x,{css:function(a){if(a){var c=
{};a=H(a);w(x.textProps,function(m){void 0!==a[m]&&(c[m]=a[m],delete a[m])});f.css(c)}return V.call(x,a)},getBBox:function(){return{width:v.width+2*z,height:v.height+2*z,x:v.x-z,y:v.y-z}},shadow:function(a){a&&(p(),n&&n.shadow(a));return x},destroy:function(){K(x.element,"mouseenter");K(x.element,"mouseleave");f&&(f=f.destroy());n&&(n=n.destroy());E.prototype.destroy.call(x);x=B=p=S=R=null}})}};a.Renderer=A})(M);(function(a){var E=a.attr,A=a.createElement,F=a.css,I=a.defined,p=a.each,d=a.extend,g=
a.isFirefox,t=a.isMS,l=a.isWebKit,r=a.pInt,f=a.SVGRenderer,b=a.win,n=a.wrap;d(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=d(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,
height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,k=this.translateX||0,e=this.translateY||0,h=this.x||0,f=this.y||0,n=this.textAlign||"left",c={left:0,center:.5,right:1}[n],q=this.styles;F(b,{marginLeft:k,marginTop:e});this.shadows&&p(this.shadows,function(a){F(a,{marginLeft:k+1,marginTop:e+1})});this.inverted&&p(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var x=this.rotation,d=r(this.textWidth),g=q&&q.whiteSpace,t=[x,
n,b.innerHTML,this.textWidth,this.textAlign].join();t!==this.cTT&&(q=a.fontMetrics(b.style.fontSize).b,I(x)&&this.setSpanRotation(x,c,q),F(b,{width:"",whiteSpace:g||"nowrap"}),b.offsetWidth>d&&/[ \-]/.test(b.textContent||b.innerText)&&F(b,{width:d+"px",display:"block",whiteSpace:g||"normal"}),this.getSpanCorrection(b.offsetWidth,q,c,x,n));F(b,{left:h+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});l&&(q=b.offsetHeight);this.cTT=t}}else this.alignOnAdd=!0},setSpanRotation:function(a,f,k){var e={},
h=t?"-ms-transform":l?"-webkit-transform":g?"MozTransform":b.opera?"-o-transform":"";e[h]=e.transform="rotate("+a+"deg)";e[h+(g?"Origin":"-origin")]=e.transformOrigin=100*f+"% "+k+"px";F(this.element,e)},getSpanCorrection:function(a,b,k){this.xCorr=-a*k;this.yCorr=-b}});d(f.prototype,{html:function(a,b,k){var e=this.createElement("span"),h=e.element,f=e.renderer,v=f.isSVG,c=function(a,c){p(["opacity","visibility"],function(b){n(a,b+"Setter",function(a,b,e,q){a.call(this,b,e,q);c[e]=b})})};e.textSetter=
function(a){a!==h.innerHTML&&delete this.bBox;h.innerHTML=this.textStr=a;e.htmlUpdateTransform()};v&&c(e,e.element.style);e.xSetter=e.ySetter=e.alignSetter=e.rotationSetter=function(a,c){"align"===c&&(c="textAlign");e[c]=a;e.htmlUpdateTransform()};e.attr({text:a,x:Math.round(b),y:Math.round(k)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});h.style.whiteSpace="nowrap";e.css=e.htmlCss;v&&(e.add=function(a){var b,q=f.box.parentNode,k=[];if(this.parentGroup=
a){if(b=a.div,!b){for(;a;)k.push(a),a=a.parentGroup;p(k.reverse(),function(a){var e,h=E(a.element,"class");h&&(h={className:h});b=a.div=a.div||A("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||q);e=b.style;d(a,{translateXSetter:function(c,b){e.left=c+"px";a[b]=c;a.doTransform=!0},translateYSetter:function(c,b){e.top=c+"px";a[b]=c;a.doTransform=!0}});c(a,e)})}}else b=q;b.appendChild(h);
e.added=!0;e.alignOnAdd&&e.htmlUpdateTransform();return e});return e}})})(M);(function(a){var E,A,F=a.createElement,I=a.css,p=a.defined,d=a.deg2rad,g=a.discardElement,t=a.doc,l=a.each,r=a.erase,f=a.extend;E=a.extendClass;var b=a.isArray,n=a.isNumber,w=a.isObject,u=a.merge;A=a.noop;var k=a.pick,e=a.pInt,h=a.SVGElement,C=a.SVGRenderer,v=a.win;a.svg||(A={docMode8:t&&8===t.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],e=["position: ","absolute",";"],q="div"===b;("shape"===
b||q)&&e.push("left:0;top:0;width:1px;height:1px;");e.push("visibility: ",q?"hidden":"visible");c.push(' style\x3d"',e.join(""),'"/\x3e');b&&(c=q||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=F(c));this.renderer=a},add:function(a){var c=this.renderer,b=this.element,e=c.box,h=a&&a.inverted,e=a?a.element||a:e;a&&(this.parentGroup=a);h&&c.invertChild(b,e);e.appendChild(b);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&
this.attr("class",this.className);return this},updateTransform:h.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*d),e=Math.sin(a*d);I(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-e,", M21\x3d",e,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,e,h,f){var c=h?Math.cos(h*d):1,q=h?Math.sin(h*d):0,x=k(this.elemHeight,this.element.offsetHeight),n;this.xCorr=0>c&&-a;
this.yCorr=0>q&&-x;n=0>c*q;this.xCorr+=q*b*(n?1-e:e);this.yCorr-=c*b*(h?n?e:1-e:1);f&&"left"!==f&&(this.xCorr-=a*e*(0>c?-1:1),h&&(this.yCorr-=x*e*(0>q?-1:1)),I(this.element,{textAlign:f}))},pathToVML:function(a){for(var c=a.length,b=[];c--;)n(a[c])?b[c]=Math.round(10*a[c])-5:"Z"===a[c]?b[c]="x":(b[c]=a[c],!a.isArc||"wa"!==a[c]&&"at"!==a[c]||(b[c+5]===b[c+7]&&(b[c+7]+=a[c+7]>a[c+5]?1:-1),b[c+6]===b[c+8]&&(b[c+8]+=a[c+8]>a[c+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var c=this,b;a?(b=a.members,
r(b,c),b.push(c),c.destroyClip=function(){r(b,c)},a=a.getCSS(c)):(c.destroyClip&&c.destroyClip(),a={clip:c.docMode8?"inherit":"rect(auto)"});return c.css(a)},css:h.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&g(a)},destroy:function(){this.destroyClip&&this.destroyClip();return h.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=v.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===
c)a[c-4]=a[c-2]=e(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,h){var c=[],q,f=this.element,n=this.renderer,x,v=f.style,l,m=f.path,y,d,u,z;m&&"string"!==typeof m.value&&(m="x");d=m;if(a){u=k(a.width,3);z=(a.opacity||.15)/u;for(q=1;3>=q;q++)y=2*u+1-2*q,h&&(d=this.cutOffPath(m.value,y+.5)),l=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',y,'" filled\x3d"false" path\x3d"',d,'" coordsize\x3d"10 10" style\x3d"',f.style.cssText,'" /\x3e'],x=F(n.prepVML(l),null,{left:e(v.left)+k(a.offsetX,1),
top:e(v.top)+k(a.offsetY,1)}),h&&(x.cutOff=y+1),l=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',z*q,'"/\x3e'],F(n.prepVML(l),null,null,x),b?b.element.appendChild(x):f.parentNode.insertBefore(x,f),c.push(x);this.shadows=c}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,e){(e.getElementsByTagName("stroke")[0]||F(this.renderer.prepVML(["\x3cstroke/\x3e"]),
null,null,e))[b]=a||"solid";this[b]=a},dSetter:function(a,b,e){var c=this.shadows;a=a||[];this.d=a.join&&a.join(" ");e.path=a=this.pathToVML(a);if(c)for(e=c.length;e--;)c[e].path=c[e].cutOff?this.cutOffPath(a,c[e].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,e){var c=e.nodeName;"SPAN"===c?e.style.color=a:"IMG"!==c&&(e.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,e,b,this)))},"fill-opacitySetter":function(a,b,e){F(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',
a,'"/\x3e']),null,null,e)},opacitySetter:A,rotationSetter:function(a,b,e){e=e.style;this[b]=e[b]=a;e.left=-Math.round(Math.sin(a*d)+1)+"px";e.top=Math.round(Math.cos(a*d))+"px"},strokeSetter:function(a,b,e){this.setAttr("strokecolor",this.renderer.color(a,e,b,this))},"stroke-widthSetter":function(a,b,e){e.stroked=!!a;this[b]=a;n(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,e){"inherit"===a&&(a="visible");this.shadows&&l(this.shadows,
function(c){c.style[b]=a});"DIV"===e.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(e.style[b]=a?"visible":"hidden"),b="top");e.style[b]=a},xSetter:function(a,b,e){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):e.style[b]=a},zIndexSetter:function(a,b,e){e.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=E(h,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,
isIE8:-1<v.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,e){var c,h;this.alignedObjects=[];c=this.createElement("div").css({position:"relative"});h=c.element;a.appendChild(c.element);this.isVML=!0;this.box=h;this.boxWrapper=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,e,!1);if(!t.namespaces.hcv){t.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{t.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(J){t.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,e,h){var c=this.createElement(),k=w(a);return f(c,{members:[],count:0,left:(k?a.x:a)+1,top:(k?a.y:b)+1,width:(k?a.width:e)-1,height:(k?a.height:h)-1,getCSS:function(a){var c=a.element,b=c.nodeName,e=a.inverted,m=this.top-("shape"===b?c.offsetTop:0),y=this.left,c=y+this.width,h=m+this.height,m={clip:"rect("+Math.round(e?
y:m)+"px,"+Math.round(e?h:c)+"px,"+Math.round(e?c:h)+"px,"+Math.round(e?m:y)+"px)"};!e&&a.docMode8&&"DIV"===b&&f(m,{width:c+"px",height:h+"px"});return m},updateClipping:function(){l(c.members,function(a){a.element&&a.css(c.getCSS(a))})}})},color:function(c,b,e,h){var k=this,q,f=/^rgba/,n,v,d="none";c&&c.linearGradient?v="gradient":c&&c.radialGradient&&(v="pattern");if(v){var m,y,x=c.linearGradient||c.radialGradient,u,z,B,C,g,r="";c=c.stops;var t,w=[],L=function(){n=['\x3cfill colors\x3d"'+w.join(",")+
'" opacity\x3d"',B,'" o:opacity2\x3d"',z,'" type\x3d"',v,'" ',r,'focus\x3d"100%" method\x3d"any" /\x3e'];F(k.prepVML(n),null,null,b)};u=c[0];t=c[c.length-1];0<u[0]&&c.unshift([0,u[1]]);1>t[0]&&c.push([1,t[1]]);l(c,function(c,b){f.test(c[1])?(q=a.color(c[1]),m=q.get("rgb"),y=q.get("a")):(m=c[1],y=1);w.push(100*c[0]+"% "+m);b?(B=y,C=m):(z=y,g=m)});if("fill"===e)if("gradient"===v)e=x.x1||x[0]||0,c=x.y1||x[1]||0,u=x.x2||x[2]||0,x=x.y2||x[3]||0,r='angle\x3d"'+(90-180*Math.atan((x-c)/(u-e))/Math.PI)+'"',
L();else{var d=x.r,p=2*d,A=2*d,E=x.cx,I=x.cy,U=b.radialReference,T,d=function(){U&&(T=h.getBBox(),E+=(U[0]-T.x)/T.width-.5,I+=(U[1]-T.y)/T.height-.5,p*=U[2]/T.width,A*=U[2]/T.height);r='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+p+","+A+'" origin\x3d"0.5,0.5" position\x3d"'+E+","+I+'" color2\x3d"'+g+'" ';L()};h.added?d():h.onAdd=d;d=C}else d=m}else f.test(c)&&"IMG"!==b.tagName?(q=a.color(c),h[e+"-opacitySetter"](q.get("a"),e,b),d=q.get("rgb")):(d=b.getElementsByTagName(e),
d.length&&(d[0].opacity=1,d[0].type="solid"),d=c);return d},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:C.prototype.html,path:function(a){var c={coordsize:"10 10"};b(a)?c.d=
a:w(a)&&f(c,a);return this.createElement("shape").attr(c)},circle:function(a,b,e){var c=this.symbol("circle");w(a)&&(e=a.r,b=a.y,a=a.x);c.isCircle=!0;c.r=e;return c.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,e,h,k){var c=this.createElement("img").attr({src:a});1<arguments.length&&c.attr({x:b,y:e,width:h,height:k});return c},createElement:function(a){return"rect"===a?this.symbol(a):C.prototype.createElement.call(this,
a)},invertChild:function(a,b){var c=this;b=b.style;var h="IMG"===a.tagName&&a.style;I(a,{flip:"x",left:e(b.width)-(h?e(h.top):1),top:e(b.height)-(h?e(h.left):1),rotation:-90});l(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,e,h,k){var c=k.start,f=k.end,q=k.r||e||h;e=k.innerR;h=Math.cos(c);var n=Math.sin(c),v=Math.cos(f),m=Math.sin(f);if(0===f-c)return["x"];c=["wa",a-q,b-q,a+q,b+q,a+q*h,b+q*n,a+q*v,b+q*m];k.open&&!e&&c.push("e","M",a,b);c.push("at",a-e,b-e,a+e,b+e,a+e*v,
b+e*m,a+e*h,b+e*n,"x","e");c.isArc=!0;return c},circle:function(a,b,e,h,k){k&&p(k.r)&&(e=h=2*k.r);k&&k.isCircle&&(a-=e/2,b-=h/2);return["wa",a,b,a+e,b+h,a+e,b+h/2,a+e,b+h/2,"e"]},rect:function(a,b,e,h,k){return C.prototype.symbols[p(k)&&k.r?"callout":"square"].call(0,a,b,e,h,k)}}},a.VMLRenderer=E=function(){this.init.apply(this,arguments)},E.prototype=u(C.prototype,A),a.Renderer=E);C.prototype.measureSpanWidth=function(a,b){var c=t.createElement("span");a=t.createTextNode(a);c.appendChild(a);I(c,
b);this.box.appendChild(c);b=c.offsetWidth;g(c);return b}})(M);(function(a){function E(){var t=a.defaultOptions.global,l,r=t.useUTC,f=r?"getUTC":"get",b=r?"setUTC":"set";a.Date=l=t.Date||g.Date;l.hcTimezoneOffset=r&&t.timezoneOffset;l.hcGetTimezoneOffset=r&&t.getTimezoneOffset;l.hcMakeTime=function(a,b,f,k,e,h){var n;r?(n=l.UTC.apply(0,arguments),n+=I(n)):n=(new l(a,b,d(f,1),d(k,0),d(e,0),d(h,0))).getTime();return n};F("Minutes Hours Day Date Month FullYear".split(" "),function(a){l["hcGet"+a]=f+
a});F("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){l["hcSet"+a]=b+a})}var A=a.color,F=a.each,I=a.getTZOffset,p=a.merge,d=a.pick,g=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.4/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",
backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"},widthAdjust:-44},subtitle:{text:"",align:"center",style:{color:"#666666"},widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",
fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:A("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,
style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(d){a.defaultOptions=p(!0,a.defaultOptions,d);E();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;E()})(M);(function(a){var E=
a.arrayMax,A=a.arrayMin,F=a.defined,I=a.destroyObjectProperties,p=a.each,d=a.erase,g=a.merge,t=a.pick;a.PlotLineOrBand=function(a,d){this.axis=a;d&&(this.options=d,this.id=d.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,d=a.axis,f=d.horiz,b=a.options,n=b.label,w=a.label,u=b.to,k=b.from,e=b.value,h=F(k)&&F(u),C=F(e),v=a.svgElem,c=!v,q=[],x,L=b.color,H=t(b.zIndex,0),p=b.events,q={"class":"highcharts-plot-"+(h?"band ":"line ")+(b.className||"")},D={},G=d.chart.renderer,K=h?"bands":"lines",
N=d.log2lin;d.isLog&&(k=N(k),u=N(u),e=N(e));C?(q={stroke:L,"stroke-width":b.width},b.dashStyle&&(q.dashstyle=b.dashStyle)):h&&(L&&(q.fill=L),b.borderWidth&&(q.stroke=b.borderColor,q["stroke-width"]=b.borderWidth));D.zIndex=H;K+="-"+H;(L=d[K])||(d[K]=L=G.g("plot-"+K).attr(D).add());c&&(a.svgElem=v=G.path().attr(q).add(L));if(C)q=d.getPlotLinePath(e,v.strokeWidth());else if(h)q=d.getPlotBandPath(k,u,b);else return;if(c&&q&&q.length){if(v.attr({d:q}),p)for(x in b=function(b){v.on(b,function(c){p[b].apply(a,
[c])})},p)b(x)}else v&&(q?(v.show(),v.animate({d:q})):(v.hide(),w&&(a.label=w=w.destroy())));n&&F(n.text)&&q&&q.length&&0<d.width&&0<d.height&&!q.flat?(n=g({align:f&&h&&"center",x:f?!h&&4:10,verticalAlign:!f&&h&&"middle",y:f?h?16:10:h?6:-4,rotation:f&&!h&&90},n),this.renderLabel(n,q,h,H)):w&&w.hide();return a},renderLabel:function(a,d,f,b){var n=this.label,l=this.axis.chart.renderer;n||(n={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(f?"band":"line")+"-label "+(a.className||
"")},n.zIndex=b,this.label=n=l.text(a.text,0,0,a.useHTML).attr(n).add(),n.css(a.style));b=[d[1],d[4],f?d[6]:d[1]];d=[d[2],d[5],f?d[7]:d[2]];f=A(b);l=A(d);n.align(a,!1,{x:f,y:l,width:E(b)-f,height:E(d)-l});n.show()},destroy:function(){d(this.axis.plotLinesAndBands,this);delete this.axis;I(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,d){d=this.getPlotLinePath(d,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&d?(a.flat=a.toString()===d.toString(),a.push(d[4],d[5],d[1],d[2],
"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(d,g){var f=(new a.PlotLineOrBand(this,d)).render(),b=this.userOptions;f&&(g&&(b[g]=b[g]||[],b[g].push(d)),this.plotLinesAndBands.push(f));return f},removePlotBandOrLine:function(a){for(var g=this.plotLinesAndBands,f=this.options,b=this.userOptions,n=g.length;n--;)g[n].id===a&&g[n].destroy();p([f.plotLines||[],
b.plotLines||[],f.plotBands||[],b.plotBands||[]],function(b){for(n=b.length;n--;)b[n].id===a&&d(b,b[n])})}}})(M);(function(a){var E=a.correctFloat,A=a.defined,F=a.destroyObjectProperties,I=a.isNumber,p=a.merge,d=a.pick,g=a.deg2rad;a.Tick=function(a,d,g,f){this.axis=a;this.pos=d;this.type=g||"";this.isNew=!0;g||f||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,g=a.options,r=a.chart,f=a.categories,b=a.names,n=this.pos,w=g.labels,u=a.tickPositions,k=n===u[0],e=n===u[u.length-
1],b=f?d(f[n],b[n],n):n,f=this.label,u=u.info,h;a.isDatetimeAxis&&u&&(h=g.dateTimeLabelFormats[u.higherRanks[n]||u.unitName]);this.isFirst=k;this.isLast=e;g=a.labelFormatter.call({axis:a,chart:r,isFirst:k,isLast:e,dateTimeLabelFormat:h,value:a.isLog?E(a.lin2log(b)):b});A(f)?f&&f.attr({text:g}):(this.labelLength=(this.label=f=A(g)&&w.enabled?r.renderer.text(g,0,0,w.useHTML).css(p(w.style)).add(a.labelGroup):null)&&f.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?
"height":"width"]:0},handleOverflow:function(a){var l=this.axis,r=a.x,f=l.chart.chartWidth,b=l.chart.spacing,n=d(l.labelLeft,Math.min(l.pos,b[3])),b=d(l.labelRight,Math.max(l.pos+l.len,f-b[1])),w=this.label,u=this.rotation,k={left:0,center:.5,right:1}[l.labelAlign],e=w.getBBox().width,h=l.getSlotWidth(),C=h,v=1,c,q={};if(u)0>u&&r-k*e<n?c=Math.round(r/Math.cos(u*g)-n):0<u&&r+k*e>b&&(c=Math.round((f-r)/Math.cos(u*g)));else if(f=r+(1-k)*e,r-k*e<n?C=a.x+C*(1-k)-n:f>b&&(C=b-a.x+C*k,v=-1),C=Math.min(h,
C),C<h&&"center"===l.labelAlign&&(a.x+=v*(h-C-k*(h-Math.min(e,C)))),e>C||l.autoRotation&&(w.styles||{}).width)c=C;c&&(q.width=c,(l.options.labels.style||{}).textOverflow||(q.textOverflow="ellipsis"),w.css(q))},getPosition:function(a,d,g,f){var b=this.axis,n=b.chart,l=f&&n.oldChartHeight||n.chartHeight;return{x:a?b.translate(d+g,null,null,f)+b.transB:b.left+b.offset+(b.opposite?(f&&n.oldChartWidth||n.chartWidth)-b.right-b.left:0),y:a?l-b.bottom+b.offset-(b.opposite?b.height:0):l-b.translate(d+g,null,
null,f)-b.transB}},getLabelPosition:function(a,d,r,f,b,n,w,u){var k=this.axis,e=k.transA,h=k.reversed,C=k.staggerLines,v=k.tickRotCorr||{x:0,y:0},c=b.y;A(c)||(c=0===k.side?r.rotation?-8:-r.getBBox().height:2===k.side?v.y+8:Math.cos(r.rotation*g)*(v.y-r.getBBox(!1,0).height/2));a=a+b.x+v.x-(n&&f?n*e*(h?-1:1):0);d=d+c-(n&&!f?n*e*(h?1:-1):0);C&&(r=w/(u||1)%C,k.opposite&&(r=C-r-1),d+=k.labelOffset/C*r);return{x:a,y:Math.round(d)}},getMarkPath:function(a,d,g,f,b,n){return n.crispLine(["M",a,d,"L",a+(b?
0:-g),d+(b?g:0)],f)},render:function(a,g,r){var f=this.axis,b=f.options,n=f.chart.renderer,l=f.horiz,u=this.type,k=this.label,e=this.pos,h=b.labels,C=this.gridLine,v=u?u+"Tick":"tick",c=f.tickSize(v),q=this.mark,x=!q,t=h.step,H={},p=!0,D=f.tickmarkOffset,G=this.getPosition(l,e,D,g),K=G.x,G=G.y,N=l&&K===f.pos+f.len||!l&&G===f.pos?-1:1,m=u?u+"Grid":"grid",y=b[m+"LineWidth"],O=b[m+"LineColor"],P=b[m+"LineDashStyle"],m=d(b[v+"Width"],!u&&f.isXAxis?1:0),v=b[v+"Color"];r=d(r,1);this.isActive=!0;C||(H.stroke=
O,H["stroke-width"]=y,P&&(H.dashstyle=P),u||(H.zIndex=1),g&&(H.opacity=0),this.gridLine=C=n.path().attr(H).addClass("highcharts-"+(u?u+"-":"")+"grid-line").add(f.gridGroup));if(!g&&C&&(e=f.getPlotLinePath(e+D,C.strokeWidth()*N,g,!0)))C[this.isNew?"attr":"animate"]({d:e,opacity:r});c&&(f.opposite&&(c[0]=-c[0]),x&&(this.mark=q=n.path().addClass("highcharts-"+(u?u+"-":"")+"tick").add(f.axisGroup),q.attr({stroke:v,"stroke-width":m})),q[x?"attr":"animate"]({d:this.getMarkPath(K,G,c[0],q.strokeWidth()*
N,l,n),opacity:r}));k&&I(K)&&(k.xy=G=this.getLabelPosition(K,G,k,l,h,D,a,t),this.isFirst&&!this.isLast&&!d(b.showFirstLabel,1)||this.isLast&&!this.isFirst&&!d(b.showLastLabel,1)?p=!1:!l||f.isRadial||h.step||h.rotation||g||0===r||this.handleOverflow(G),t&&a%t&&(p=!1),p&&I(G.y)?(G.opacity=r,k[this.isNew?"attr":"animate"](G)):k.attr("y",-9999),this.isNew=!1)},destroy:function(){F(this,this.axis)}}})(M);(function(a){var E=a.addEvent,A=a.animObject,F=a.arrayMax,I=a.arrayMin,p=a.AxisPlotLineOrBandExtension,
d=a.color,g=a.correctFloat,t=a.defaultOptions,l=a.defined,r=a.deg2rad,f=a.destroyObjectProperties,b=a.each,n=a.error,w=a.extend,u=a.fireEvent,k=a.format,e=a.getMagnitude,h=a.grep,C=a.inArray,v=a.isArray,c=a.isNumber,q=a.isString,x=a.merge,L=a.normalizeTickInterval,H=a.pick,J=a.PlotLineOrBand,D=a.removeEvent,G=a.splat,K=a.syncTimeout,N=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",
hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",
lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},
title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.isXAxis=c;this.coll=this.coll||(c?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var e=this.options,m=e.type;this.labelFormatter=e.labels.formatter||this.defaultLabelFormatter;
this.userOptions=b;this.minPixelPadding=0;this.reversed=e.reversed;this.visible=!1!==e.visible;this.zoomEnabled=!1!==e.zoomEnabled;this.hasNames="category"===m||!0===e.categories;this.categories=e.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===m;this.isDatetimeAxis="datetime"===m;this.isLinked=l(e.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=e.minRange||e.maxZoom;
this.range=e.range;this.offset=e.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=H(e.crosshair,G(a.options.tooltip.crosshairs)[c?0:1],!1);var y;b=this.options.events;-1===C(this,a.axes)&&(c?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&c&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(y in b)E(this,y,b[y]);
this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],x(t[this.coll],a))},defaultLabelFormatter:function(){var b=this.axis,c=this.value,e=b.categories,h=this.dateTimeLabelFormat,f=t.lang,B=f.numericSymbols,f=f.numericSymbolMagnitude||1E3,d=B&&B.length,q,n=b.options.labels.format,
b=b.isLog?c:b.tickInterval;if(n)q=k(n,this);else if(e)q=c;else if(h)q=a.dateFormat(h,c);else if(d&&1E3<=b)for(;d--&&void 0===q;)e=Math.pow(f,d+1),b>=e&&0===10*c%e&&null!==B[d]&&0!==c&&(q=a.numberFormat(c/e,-1)+B[d]);void 0===q&&(q=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,-1,void 0,""));return q},getSeriesExtremes:function(){var a=this,e=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();b(a.series,function(b){if(b.visible||
!e.options.chart.ignoreHiddenSeries){var m=b.options,y=m.threshold,k;a.hasVisibleSeries=!0;a.isLog&&0>=y&&(y=null);if(a.isXAxis)m=b.xData,m.length&&(b=I(m),c(b)||b instanceof Date||(m=h(m,function(a){return c(a)}),b=I(m)),a.dataMin=Math.min(H(a.dataMin,m[0]),b),a.dataMax=Math.max(H(a.dataMax,m[0]),F(m)));else if(b.getExtremes(),k=b.dataMax,b=b.dataMin,l(b)&&l(k)&&(a.dataMin=Math.min(H(a.dataMin,b),b),a.dataMax=Math.max(H(a.dataMax,k),k)),l(y)&&(a.threshold=y),!m.softThreshold||a.isLog)a.softThreshold=
!1}})},translate:function(a,b,e,h,k,B){var m=this.linkedParent||this,y=1,f=0,q=h?m.oldTransA:m.transA;h=h?m.oldMin:m.min;var d=m.minPixelPadding;k=(m.isOrdinal||m.isBroken||m.isLog&&k)&&m.lin2val;q||(q=m.transA);e&&(y*=-1,f=m.len);m.reversed&&(y*=-1,f-=y*(m.sector||m.len));b?(a=(a*y+f-d)/q+h,k&&(a=m.lin2val(a))):(k&&(a=m.val2lin(a)),a=y*(a-h)*q+f+y*d+(c(B)?q*B:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,e,h,k){var m=this.chart,y=this.left,f=this.top,q,d,n=e&&m.oldChartHeight||m.chartHeight,v=e&&m.oldChartWidth||m.chartWidth,g;q=this.transB;var u=function(a,b,c){if(a<b||a>c)h?a=Math.min(Math.max(b,a),c):g=!0;return a};k=H(k,this.translate(a,null,null,e));a=e=Math.round(k+q);q=d=Math.round(n-k-q);c(k)?this.horiz?(q=f,d=n-this.bottom,a=e=u(a,y,y+this.width)):(a=y,e=v-this.right,q=d=u(q,f,f+this.height)):g=!0;return g&&!h?null:m.renderer.crispLine(["M",
a,q,"L",e,d],b||1)},getLinearTickPositions:function(a,b,e){var m,y=g(Math.floor(b/a)*a),h=g(Math.ceil(e/a)*a),k=[];if(b===e&&c(b))return[b];for(b=y;b<=h;){k.push(b);b=g(b+a);if(b===m)break;m=b}return k},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,e=[],h,k=this.pointRangePadding||0;h=this.min-k;var k=this.max+k,f=k-h;if(f&&f/c<this.len/3)if(this.isLog)for(k=b.length,h=1;h<k;h++)e=e.concat(this.getLogTickPositions(c,b[h-1],b[h],!0));else if(this.isDatetimeAxis&&
"auto"===a.minorTickInterval)e=e.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),h,k,a.startOfWeek));else for(b=h+(b[0]-h)%c;b<=k&&b!==e[0];b+=c)e.push(b);0!==e.length&&this.trimTicks(e,a.startOnTick,a.endOnTick);return e},adjustForMinRange:function(){var a=this.options,c=this.min,e=this.max,h,k=this.dataMax-this.dataMin>=this.minRange,f,q,d,n,v,g;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(l(a.min)||l(a.max)?this.minRange=null:(b(this.series,function(a){n=a.xData;for(q=v=a.xIncrement?
1:n.length-1;0<q;q--)if(d=n[q]-n[q-1],void 0===f||d<f)f=d}),this.minRange=Math.min(5*f,this.dataMax-this.dataMin)));e-c<this.minRange&&(g=this.minRange,h=(g-e+c)/2,h=[c-h,H(a.min,c-h)],k&&(h[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),c=F(h),e=[c+g,H(a.max,c+g)],k&&(e[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),e=I(e),e-c<g&&(h[0]=e-g,h[1]=H(a.min,e-g),c=F(h)));this.min=c;this.max=e},getClosest:function(){var a;this.categories?a=1:b(this.series,function(b){var c=b.closestPointRange,
e=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&l(c)&&e&&(a=l(a)?Math.min(a,c):c)});return a},nameToX:function(a){var b=v(this.categories),c=b?this.categories:this.names,e=a.options.x,m;a.series.requireSorting=!1;l(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():C(a.name,c));-1===e?b||(m=c.length):m=e;this.names[m]=a.name;return m},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=void 0,b(this.series||[],function(c){c.xIncrement=
null;if(!c.points||c.isDirtyData)c.processData(),c.generatePoints();b(c.points,function(b,e){var m;b.options&&void 0===b.options.x&&(m=a.nameToX(b),m!==b.x&&(b.x=m,c.xData[e]=m))})}))},setAxisTranslation:function(a){var c=this,e=c.max-c.min,m=c.axisPointRange||0,h,k=0,f=0,d=c.linkedParent,n=!!c.categories,v=c.transA,g=c.isXAxis;if(g||n||m)d?(k=d.minPointOffset,f=d.pointRangePadding):(h=c.getClosest(),b(c.series,function(a){var b=n?1:g?H(a.options.pointRange,h,0):c.axisPointRange||0;a=a.options.pointPlacement;
m=Math.max(m,b);c.single||(k=Math.max(k,q(a)?0:b/2),f=Math.max(f,"on"===a?0:b))})),d=c.ordinalSlope&&h?c.ordinalSlope/h:1,c.minPointOffset=k*=d,c.pointRangePadding=f*=d,c.pointRange=Math.min(m,e),g&&(c.closestPointRange=h);a&&(c.oldTransA=v);c.translationSlope=c.transA=v=c.len/(e+f||1);c.transB=c.horiz?c.left:c.bottom;c.minPixelPadding=v*k},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var m=this,h=m.chart,k=m.options,f=m.isLog,q=m.log2lin,d=m.isDatetimeAxis,v=m.isXAxis,
D=m.isLinked,x=k.maxPadding,C=k.minPadding,G=k.tickInterval,r=k.tickPixelInterval,K=m.categories,w=m.threshold,t=m.softThreshold,p,N,J,A;d||K||D||this.getTickAmount();J=H(m.userMin,k.min);A=H(m.userMax,k.max);D?(m.linkedParent=h[m.coll][k.linkedTo],h=m.linkedParent.getExtremes(),m.min=H(h.min,h.dataMin),m.max=H(h.max,h.dataMax),k.type!==m.linkedParent.options.type&&n(11,1)):(!t&&l(w)&&(m.dataMin>=w?(p=w,C=0):m.dataMax<=w&&(N=w,x=0)),m.min=H(J,p,m.dataMin),m.max=H(A,N,m.dataMax));f&&(!a&&0>=Math.min(m.min,
H(m.dataMin,m.min))&&n(10,1),m.min=g(q(m.min),15),m.max=g(q(m.max),15));m.range&&l(m.max)&&(m.userMin=m.min=J=Math.max(m.min,m.minFromRange()),m.userMax=A=m.max,m.range=null);u(m,"foundExtremes");m.beforePadding&&m.beforePadding();m.adjustForMinRange();!(K||m.axisPointRange||m.usePercentage||D)&&l(m.min)&&l(m.max)&&(q=m.max-m.min)&&(!l(J)&&C&&(m.min-=q*C),!l(A)&&x&&(m.max+=q*x));c(k.floor)?m.min=Math.max(m.min,k.floor):c(k.softMin)&&(m.min=Math.min(m.min,k.softMin));c(k.ceiling)?m.max=Math.min(m.max,
k.ceiling):c(k.softMax)&&(m.max=Math.max(m.max,k.softMax));t&&l(m.dataMin)&&(w=w||0,!l(J)&&m.min<w&&m.dataMin>=w?m.min=w:!l(A)&&m.max>w&&m.dataMax<=w&&(m.max=w));m.tickInterval=m.min===m.max||void 0===m.min||void 0===m.max?1:D&&!G&&r===m.linkedParent.options.tickPixelInterval?G=m.linkedParent.tickInterval:H(G,this.tickAmount?(m.max-m.min)/Math.max(this.tickAmount-1,1):void 0,K?1:(m.max-m.min)*r/Math.max(m.len,r));v&&!a&&b(m.series,function(a){a.processData(m.min!==m.oldMin||m.max!==m.oldMax)});m.setAxisTranslation(!0);
m.beforeSetTickPositions&&m.beforeSetTickPositions();m.postProcessTickInterval&&(m.tickInterval=m.postProcessTickInterval(m.tickInterval));m.pointRange&&!G&&(m.tickInterval=Math.max(m.pointRange,m.tickInterval));a=H(k.minTickInterval,m.isDatetimeAxis&&m.closestPointRange);!G&&m.tickInterval<a&&(m.tickInterval=a);d||f||G||(m.tickInterval=L(m.tickInterval,null,e(m.tickInterval),H(k.allowDecimals,!(.5<m.tickInterval&&5>m.tickInterval&&1E3<m.max&&9999>m.max)),!!this.tickAmount));this.tickAmount||(m.tickInterval=
m.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,e=a.tickPositioner,h=a.startOnTick,k=a.endOnTick,f;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),
this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=b=e);this.isLinked||(this.trimTicks(b,h,k),this.min===this.max&&l(this.min)&&!this.tickAmount&&(f=!0,this.min-=.5,this.max+=.5),this.single=f,c||e||this.adjustTickAmount())},
trimTicks:function(a,b,c){var e=a[0],m=a[a.length-1],h=this.minPointOffset||0;if(b)this.min=e;else for(;this.min-h>a[0];)a.shift();if(c)this.max=m;else for(;this.max+h<a[a.length-1];)a.pop();0===a.length&&l(e)&&a.push((m+e)/2)},alignToOthers:function(){var a={},c,e=this.options;!1!==this.chart.options.chart.alignTicks&&!1!==e.alignTicks&&b(this.chart[this.coll],function(b){var e=b.options,e=[b.horiz?e.left:e.top,e.width,e.height,e.pane].join();b.series.length&&(a[e]?c=!0:a[e]=1)});return c},getTickAmount:function(){var a=
this.options,b=a.tickAmount,c=a.tickPixelInterval;!l(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,h=b&&b.length;if(h<c){for(;b.length<c;)b.push(g(b[b.length-1]+a));this.transA*=(h-1)/(c-1);this.max=b[b.length-1]}else h>c&&(this.tickInterval*=
2,this.setTickPositions());if(l(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;b(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&
this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,e,h,k){var m=this,f=m.chart;e=H(e,!0);b(m.series,function(a){delete a.kdTree});k=w(k,{min:a,max:c});u(m,"setExtremes",k,function(){m.userMin=a;m.userMax=c;m.eventArgs=k;e&&f.redraw(h)})},zoom:function(a,b){var c=this.dataMin,
e=this.dataMax,m=this.options,h=Math.min(c,H(m.min,c)),m=Math.max(e,H(m.max,e));if(a!==this.min||b!==this.max)this.allowZoomOutside||(l(c)&&a<=h&&(a=h),l(e)&&b>=m&&(b=m)),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,e=this.horiz,h=H(b.width,a.plotWidth-c+(b.offsetRight||0)),k=H(b.height,a.plotHeight),f=H(b.top,a.plotTop),b=H(b.left,a.plotLeft+c),c=/%$/;c.test(k)&&(k=Math.round(parseFloat(k)/
100*a.plotHeight));c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight+a.plotTop));this.left=b;this.top=f;this.width=h;this.height=k;this.bottom=a.chartHeight-k-f;this.right=a.chartWidth-h-b;this.len=Math.max(e?h:k,0);this.pos=e?b:f},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?g(b(this.min)):this.min,max:a?g(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,
e=b?c(this.min):this.min,b=b?c(this.max):this.max;null===a?a=e:e>a?a=e:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(H(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],e=H(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(e&&c)return"inside"===b[a+"Position"]&&(c=-c),[c,e]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,
this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,e=this.tickInterval,h=e,k=this.len/(((this.categories?1:0)+this.max-this.min)/e),f,q=a.rotation,d=this.labelMetrics(),n,v=Number.MAX_VALUE,g,u=function(a){a/=k||1;a=1<a?Math.ceil(a):1;return a*e};c?(g=!a.staggerLines&&!a.step&&(l(q)?[q]:k<H(a.autoRotationLimit,80)&&a.autoRotation))&&b(g,function(a){var b;if(a===q||a&&-90<=a&&90>=a)n=u(Math.abs(d.h/Math.sin(r*a))),b=n+Math.abs(a/360),b<v&&(v=b,f=a,h=n)}):
a.step||(h=u(d.h));this.autoRotation=g;this.labelRotation=H(f,q);return h},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),h=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/e||!b&&(h&&h-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,e=this.tickPositions,h=this.ticks,k=this.options.labels,f=this.horiz,d=this.getSlotWidth(),n=Math.max(1,
Math.round(d-2*(k.padding||5))),v={},g=this.labelMetrics(),u=k.style&&k.style.textOverflow,D,C=0,G,l;q(k.rotation)||(v.rotation=k.rotation||0);b(e,function(a){(a=h[a])&&a.labelLength>C&&(C=a.labelLength)});this.maxLabelLength=C;if(this.autoRotation)C>n&&C>g.h?v.rotation=this.labelRotation:this.labelRotation=0;else if(d&&(D={width:n+"px"},!u))for(D.textOverflow="clip",G=e.length;!f&&G--;)if(l=e[G],n=h[l].label)n.styles&&"ellipsis"===n.styles.textOverflow?n.css({textOverflow:"clip"}):h[l].labelLength>
d&&n.css({width:d+"px"}),n.getBBox().height>this.len/e.length-(g.h-g.f)&&(n.specCss={textOverflow:"ellipsis"});v.rotation&&(D={width:(C>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},u||(D.textOverflow="ellipsis"));if(this.labelAlign=k.align||this.autoLabelAlign(this.labelRotation))v.align=this.labelAlign;b(e,function(a){var b=(a=h[a])&&a.label;b&&(b.attr(v),D&&b.css(x(D,b.specCss)),delete b.specCss,a.rotation=v.rotation)});this.tickRotCorr=c.rotCorr(g.b,this.labelRotation||0,0!==this.side)},
hasData:function(){return this.hasVisibleSeries||l(this.min)&&l(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,c=a.chart,e=c.renderer,h=a.options,k=a.tickPositions,f=a.ticks,q=a.horiz,d=a.side,n=c.inverted?[1,0,3,2][d]:d,v,g,u=0,D,C=0,x=h.title,G=h.labels,r=0,K=a.opposite,w=c.axisOffset,c=c.clipOffset,t=[-1,1,1,-1][d],p,L=h.className,J=a.axisParent,A=this.tickSize("tick");v=a.hasData();a.showAxis=g=v||H(h.showEmpty,!0);a.staggerLines=a.horiz&&G.staggerLines;a.axisGroup||(a.gridGroup=
e.g("grid").attr({zIndex:h.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(L||"")).add(J),a.axisGroup=e.g("axis").attr({zIndex:h.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(L||"")).add(J),a.labelGroup=e.g("axis-labels").attr({zIndex:G.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(L||"")).add(J));if(v||a.isLinked)b(k,function(b){f[b]?f[b].addLabel():f[b]=new N(a,b)}),a.renderUnsquish(),!1===G.reserveSpace||0!==d&&2!==d&&{1:"left",3:"right"}[d]!==
a.labelAlign&&"center"!==a.labelAlign||b(k,function(a){r=Math.max(f[a].getLabelSize(),r)}),a.staggerLines&&(r*=a.staggerLines,a.labelOffset=r*(a.opposite?-1:1));else for(p in f)f[p].destroy(),delete f[p];x&&x.text&&!1!==x.enabled&&(a.axisTitle||((p=x.textAlign)||(p=(q?{low:"left",middle:"center",high:"right"}:{low:K?"right":"left",middle:"center",high:K?"left":"right"})[x.align]),a.axisTitle=e.text(x.text,0,0,x.useHTML).attr({zIndex:7,rotation:x.rotation||0,align:p}).addClass("highcharts-axis-title").css(x.style).add(a.axisGroup),
a.axisTitle.isNew=!0),g&&(u=a.axisTitle.getBBox()[q?"height":"width"],D=x.offset,C=l(D)?0:H(x.margin,q?5:10)),a.axisTitle[g?"show":"hide"](!0));a.renderLine();a.offset=t*H(h.offset,w[d]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};e=0===d?-a.labelMetrics().h:2===d?a.tickRotCorr.y:0;C=Math.abs(r)+C;r&&(C=C-e+t*(q?H(G.y,a.tickRotCorr.y+8*t):G.x));a.axisTitleMargin=H(D,C);w[d]=Math.max(w[d],a.axisTitleMargin+u+t*a.offset,C,v&&k.length&&A?A[0]:0);h=h.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);c[n]=
Math.max(c[n],h)},getLinePath:function(a){var b=this.chart,c=this.opposite,e=this.offset,m=this.horiz,h=this.left+(c?this.width:0)+e,e=b.chartHeight-this.bottom-(c?this.height:0)+e;c&&(a*=-1);return b.renderer.crispLine(["M",m?this.left:h,m?e:this.top,"L",m?b.chartWidth-this.right:h,m?e:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,
"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,e=this.len,h=this.options.title,k=a?b:c,f=this.opposite,d=this.offset,q=h.x||0,n=h.y||0,v=this.chart.renderer.fontMetrics(h.style&&h.style.fontSize,this.axisTitle).f,e={low:k+(a?0:e),middle:k+e/2,high:k+(a?e:0)}[h.align],b=(a?c+this.height:b)+(a?1:-1)*(f?-1:1)*this.axisTitleMargin+(2===this.side?v:0);return{x:a?e+q:b+(f?this.width:0)+d+q,y:a?b+n-(f?this.height:0)+d:e+n}},render:function(){var a=
this,e=a.chart,h=e.renderer,k=a.options,f=a.isLog,d=a.lin2log,q=a.isLinked,n=a.tickPositions,v=a.axisTitle,g=a.ticks,u=a.minorTicks,D=a.alternateBands,C=k.stackLabels,x=k.alternateGridColor,G=a.tickmarkOffset,l=a.axisLine,r=e.hasRendered&&c(a.oldMin),w=a.showAxis,t=A(h.globalAnimation),H,p;a.labelEdge.length=0;a.overlap=!1;b([g,u,D],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||q)a.minorTickInterval&&!a.categories&&b(a.getMinorTickPositions(),function(b){u[b]||(u[b]=new N(a,b,"minor"));
r&&u[b].isNew&&u[b].render(null,!0);u[b].render(null,!1,1)}),n.length&&(b(n,function(b,c){if(!q||b>=a.min&&b<=a.max)g[b]||(g[b]=new N(a,b)),r&&g[b].isNew&&g[b].render(c,!0,.1),g[b].render(c)}),G&&(0===a.min||a.single)&&(g[-1]||(g[-1]=new N(a,-1,null,!0)),g[-1].render(-1))),x&&b(n,function(b,c){p=void 0!==n[c+1]?n[c+1]+G:a.max-G;0===c%2&&b<a.max&&p<=a.max+(e.polar?-G:G)&&(D[b]||(D[b]=new J(a)),H=b+G,D[b].options={from:f?d(H):H,to:f?d(p):p,color:x},D[b].render(),D[b].isActive=!0)}),a._addedPlotLB||
(b((k.plotLines||[]).concat(k.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);b([g,u,D],function(a){var b,c,h=[],k=t.duration;for(b in a)a[b].isActive||(a[b].render(b,!1,0),a[b].isActive=!1,h.push(b));K(function(){for(c=h.length;c--;)a[h[c]]&&!a[h[c]].isActive&&(a[h[c]].destroy(),delete a[h[c]])},a!==D&&e.hasRendered&&k?k:0)});l&&(l[l.isPlaced?"animate":"attr"]({d:this.getLinePath(l.strokeWidth())}),l.isPlaced=!0,l[w?"show":"hide"](!0));v&&w&&(v[v.isNew?"attr":"animate"](a.getTitlePosition()),
v.isNew=!1);C&&C.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),b(this.plotLinesAndBands,function(a){a.render()}));b(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,e=c.stacks,h,k=c.plotLinesAndBands,m;a||D(c);for(h in e)f(e[h]),e[h]=null;b([c.ticks,c.minorTicks,c.alternateBands],function(a){f(a)});if(k)for(a=k.length;a--;)k[a].destroy();b("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){c[a]&&(c[a]=c[a].destroy())});for(m in c)c.hasOwnProperty(m)&&-1===C(m,c.keepProps)&&delete c[m]},drawCrosshair:function(a,b){var c,e=this.crosshair,h=H(e.snap,!0),k,m=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(l(b)||!h)?(h?l(b)&&(k=this.isXAxis?b.plotX:this.len-b.plotY):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),l(k)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:H(b.stackY,b.y)),null,null,null,k)||null),l(c)?(b=this.categories&&!this.isRadial,
m||(this.cross=m=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:H(e.zIndex,2)}).add(),m.attr({stroke:e.color||(b?d("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":H(e.width,1)}),e.dashStyle&&m.attr({dashstyle:e.dashStyle})),m.show().attr({d:c}),b&&!e.width&&m.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};
w(a.Axis.prototype,p)})(M);(function(a){var E=a.Axis,A=a.Date,F=a.dateFormat,I=a.defaultOptions,p=a.defined,d=a.each,g=a.extend,t=a.getMagnitude,l=a.getTZOffset,r=a.normalizeTickInterval,f=a.pick,b=a.timeUnits;E.prototype.getTimeTicks=function(a,r,u,k){var e=[],h={},n=I.global.useUTC,v,c=new A(r-l(r)),q=A.hcMakeTime,x=a.unitRange,w=a.count,H;if(p(r)){c[A.hcSetMilliseconds](x>=b.second?0:w*Math.floor(c.getMilliseconds()/w));if(x>=b.second)c[A.hcSetSeconds](x>=b.minute?0:w*Math.floor(c.getSeconds()/
w));if(x>=b.minute)c[A.hcSetMinutes](x>=b.hour?0:w*Math.floor(c[A.hcGetMinutes]()/w));if(x>=b.hour)c[A.hcSetHours](x>=b.day?0:w*Math.floor(c[A.hcGetHours]()/w));if(x>=b.day)c[A.hcSetDate](x>=b.month?1:w*Math.floor(c[A.hcGetDate]()/w));x>=b.month&&(c[A.hcSetMonth](x>=b.year?0:w*Math.floor(c[A.hcGetMonth]()/w)),v=c[A.hcGetFullYear]());if(x>=b.year)c[A.hcSetFullYear](v-v%w);if(x===b.week)c[A.hcSetDate](c[A.hcGetDate]()-c[A.hcGetDay]()+f(k,1));v=c[A.hcGetFullYear]();k=c[A.hcGetMonth]();var t=c[A.hcGetDate](),
D=c[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)H=(!n||!!A.hcGetTimezoneOffset)&&(u-r>4*b.month||l(r)!==l(u)),c=c.getTime(),c=new A(c+l(c));n=c.getTime();for(r=1;n<u;)e.push(n),n=x===b.year?q(v+r*w,0):x===b.month?q(v,k+r*w):!H||x!==b.day&&x!==b.week?H&&x===b.hour?q(v,k,t,D+r*w):n+x*w:q(v,k,t+r*w*(x===b.day?1:7)),r++;e.push(n);x<=b.hour&&d(e,function(a){"000000000"===F("%H%M%S%L",a)&&(h[a]="day")})}e.info=g(a,{higherRanks:h,totalRange:x*w});return e};E.prototype.normalizeTimeTickInterval=
function(a,f){var d=f||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];f=d[d.length-1];var k=b[f[0]],e=f[1],h;for(h=0;h<d.length&&!(f=d[h],k=b[f[0]],e=f[1],d[h+1]&&a<=(k*e[e.length-1]+b[d[h+1][0]])/2);h++);k===b.year&&a<5*k&&(e=[1,2,5]);a=r(a/k,e,"year"===f[0]?Math.max(t(a/k),1):1);return{unitRange:k,count:a,unitName:f[0]}}})(M);(function(a){var E=a.Axis,
A=a.getMagnitude,F=a.map,I=a.normalizeTickInterval,p=a.pick;E.prototype.getLogTickPositions=function(a,g,t,l){var d=this.options,f=this.len,b=this.lin2log,n=this.log2lin,w=[];l||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),w=this.getLinearTickPositions(a,g,t);else if(.08<=a)for(var f=Math.floor(g),u,k,e,h,C,d=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<t+1&&!C;f++)for(k=d.length,u=0;u<k&&!C;u++)e=n(b(f)*d[u]),e>g&&(!l||h<=t)&&void 0!==h&&w.push(h),h>t&&(C=!0),h=e;else g=b(g),t=
b(t),a=d[l?"minorTickInterval":"tickInterval"],a=p("auto"===a?null:a,this._minorAutoInterval,d.tickPixelInterval/(l?5:1)*(t-g)/((l?f/this.tickPositions.length:f)||1)),a=I(a,null,A(a)),w=F(this.getLinearTickPositions(a,g,t),n),l||(this._minorAutoInterval=a/5);l||(this.tickInterval=a);return w};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(M);(function(a){var E=a.dateFormat,A=a.each,F=a.extend,I=a.format,p=a.isNumber,d=a.map,g=
a.merge,t=a.pick,l=a.splat,r=a.syncTimeout,f=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,f){this.chart=a;this.options=f;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=f.split&&!a.inverted;this.shared=f.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(b){var f=b&&b.tt;f&&(!f.isActive||a?b.tt=f.destroy():f.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,f=this.options;this.label||(this.split?
this.label=a.g("tooltip"):(this.label=a.label("",0,0,f.shape||"callout",null,null,f.useHTML,null,"tooltip").attr({padding:f.padding,r:f.borderRadius}),this.label.attr({fill:f.backgroundColor,"stroke-width":f.borderWidth}).css(f.style).shadow(f.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,g(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),
this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,f,d,g){var b=this,e=b.now,h=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-e.x)||1<Math.abs(f-e.y)),n=b.followPointer||1<b.len;F(e,{x:h?(2*e.x+a)/3:a,y:h?(e.y+f)/2:f,anchorX:n?void 0:h?(2*e.anchorX+d)/3:d,anchorY:n?void 0:h?(e.anchorY+g)/2:g});b.getLabel().attr(e);h&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,f,d,g)},32))},hide:function(a){var b=
this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=r(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,f){var b,n=this.chart,k=n.inverted,e=n.plotTop,h=n.plotLeft,g=0,v=0,c,q;a=l(a);b=a[0].tooltipPos;this.followPointer&&f&&(void 0===f.chartX&&(f=n.pointer.normalize(f)),b=[f.chartX-n.plotLeft,f.chartY-e]);b||(A(a,function(a){c=a.series.yAxis;q=a.series.xAxis;g+=a.plotX+(!k&&q?q.left-h:0);v+=(a.plotLow?(a.plotLow+a.plotHigh)/
2:a.plotY)+(!k&&c?c.top-e:0)}),g/=a.length,v/=a.length,b=[k?n.plotWidth-v:g,this.shared&&!k&&1<a.length&&f?f.chartY-e:k?n.plotHeight-g:v]);return d(b,Math.round)},getPosition:function(a,f,d){var b=this.chart,k=this.distance,e={},h=d.h||0,n,v=["y",b.chartHeight,f,d.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],c=["x",b.chartWidth,a,d.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],q=!this.followPointer&&t(d.ttBelow,!b.inverted===!!d.negative),g=function(a,b,c,f,m,d){var n=c<f-k,v=f+k+c<b,g=
f-k-c;f+=k;if(q&&v)e[a]=f;else if(!q&&n)e[a]=g;else if(n)e[a]=Math.min(d-c,0>g-h?g:g-h);else if(v)e[a]=Math.max(m,f+h+c>b?f:f+h);else return!1},l=function(a,b,c,h){var f;h<k||h>b-k?f=!1:e[a]=h<c/2?1:h>b-c/2?b-c-2:h-c/2;return f},r=function(a){var b=v;v=c;c=b;n=a},p=function(){!1!==g.apply(0,v)?!1!==l.apply(0,c)||n||(r(!0),p()):n?e.x=e.y=0:(r(!0),p())};(b.inverted||1<this.len)&&r();p();return e},defaultFormatter:function(a){var b=this.points||l(this),f;f=[a.tooltipFooterHeaderFormatter(b[0])];f=f.concat(a.bodyFormatter(b));
f.push(a.tooltipFooterHeaderFormatter(b[0],!0));return f},refresh:function(a,f){var b=this.chart,d,k=this.options,e,h,n={},v=[];d=k.formatter||this.defaultFormatter;var n=b.hoverPoints,c=this.shared;clearTimeout(this.hideTimer);this.followPointer=l(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,f);f=h[0];e=h[1];!c||a.series&&a.series.noSharedTooltip?n=a.getLabelConfig():(b.hoverPoints=a,n&&A(n,function(a){a.setState()}),A(a,function(a){a.setState("hover");v.push(a.getLabelConfig())}),
n={x:a[0].category,y:a[0].y},n.points=v,this.len=v.length,a=a[0]);n=d.call(n,this);c=a.series;this.distance=t(c.tooltipOptions.distance,16);!1===n?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(n,b.hoverPoints):(d.attr({text:n&&n.join?n.join(""):n}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(a.colorIndex,c.colorIndex)),d.attr({stroke:k.borderColor||a.color||c.color||"#666666"}),this.updatePosition({plotX:f,plotY:e,
negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0})),this.isHidden=!1)},renderSplit:function(b,f){var d=this,n=[],k=this.chart,e=k.renderer,h=!0,g=this.options,v,c=this.getLabel();A(b.slice(0,b.length-1),function(a,b){b=f[b-1]||{isHeader:!0,plotX:f[0].plotX};var q=b.series||d,u=q.tt,x=b.series||{},D="highcharts-color-"+t(b.colorIndex,x.colorIndex,"none");u||(q.tt=u=e.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+D).attr({padding:g.padding,r:g.borderRadius,fill:g.backgroundColor,
stroke:b.color||x.color||"#333333","stroke-width":g.borderWidth}).add(c));u.isActive=!0;u.attr({text:a});u.css(g.style);a=u.getBBox();x=a.width+u.strokeWidth();b.isHeader?(v=a.height,x=Math.max(0,Math.min(b.plotX+k.plotLeft-x/2,k.chartWidth-x))):x=b.plotX+k.plotLeft-t(g.distance,16)-x;0>x&&(h=!1);a=(b.series&&b.series.yAxis&&b.series.yAxis.pos)+(b.plotY||0);a-=k.plotTop;n.push({target:b.isHeader?k.plotHeight+v:a,rank:b.isHeader?1:0,size:q.tt.getBBox().height+1,point:b,x:x,tt:u})});this.cleanSplit();
a.distribute(n,k.plotHeight+v);A(n,function(a){var b=a.point;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:h||b.isHeader?a.x:b.plotX+k.plotLeft+t(g.distance,16),y:a.pos+k.plotTop,anchorX:b.plotX+k.plotLeft,anchorY:b.isHeader?a.pos+k.plotTop-15:b.plotY+k.plotTop})})},updatePosition:function(a){var b=this.chart,f=this.getLabel(),f=(this.options.positioner||this.getPosition).call(this,f.width,f.height,a);this.move(Math.round(f.x),Math.round(f.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},
getXDateFormat:function(a,d,g){var b;d=d.dateTimeLabelFormats;var k=g&&g.closestPointRange,e,h={millisecond:15,second:12,minute:9,hour:6,day:3},n,v="millisecond";if(k){n=E("%m-%d %H:%M:%S.%L",a.x);for(e in f){if(k===f.week&&+E("%w",a.x)===g.options.startOfWeek&&"00:00:00.000"===n.substr(6)){e="week";break}if(f[e]>k){e=v;break}if(h[e]&&n.substr(h[e])!=="01-01 00:00:00.000".substr(h[e]))break;"week"!==e&&(v=e)}e&&(b=d[e])}else b=d.day;return b||d.year},tooltipFooterHeaderFormatter:function(a,f){var b=
f?"footer":"header";f=a.series;var d=f.tooltipOptions,k=d.xDateFormat,e=f.xAxis,h=e&&"datetime"===e.options.type&&p(a.key),b=d[b+"Format"];h&&!k&&(k=this.getXDateFormat(a,d,e));h&&k&&(b=b.replace("{point.key}","{point.key:"+k+"}"));return I(b,{point:a,series:f})},bodyFormatter:function(a){return d(a,function(a){var b=a.series.tooltipOptions;return(b.pointFormatter||a.point.tooltipFormatter).call(a.point,b.pointFormat)})}}})(M);(function(a){var E=a.addEvent,A=a.attr,F=a.charts,I=a.color,p=a.css,d=
a.defined,g=a.doc,t=a.each,l=a.extend,r=a.fireEvent,f=a.offset,b=a.pick,n=a.removeEvent,w=a.splat,u=a.Tooltip,k=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,h){this.options=h;this.chart=a;this.runChartClick=h.chart.events&&!!h.chart.events.click;this.pinchDown=[];this.lastValidTouch={};u&&h.tooltip.enabled&&(a.tooltip=new u(a,h.tooltip),this.followTouchMove=b(h.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var e=this.chart,f=e.options.chart,
k=f.zoomType||"",e=e.inverted;/touch/.test(a.type)&&(k=b(f.pinchType,k));this.zoomX=a=/x/.test(k);this.zoomY=k=/y/.test(k);this.zoomHor=a&&!e||k&&e;this.zoomVert=k&&!e||a&&e;this.hasZoom=a||k},normalize:function(a,b){var e,h;a=a||k.event;a.target||(a.target=a.srcElement);h=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=f(this.chart.container));void 0===h.pageX?(e=Math.max(a.x,a.clientX-b.left),b=a.y):(e=h.pageX-b.left,b=h.pageY-b.top);return l(a,{chartX:Math.round(e),
chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(e){b[e.isXAxis?"xAxis":"yAxis"].push({axis:e,value:e.toValue(a[e.horiz?"chartX":"chartY"])})});return b},runPointActions:function(e){var h=this.chart,f=h.series,k=h.tooltip,c=k?k.shared:!1,d=!0,n=h.hoverPoint,u=h.hoverSeries,l,r,D,G=[],K;if(!c&&!u)for(l=0;l<f.length;l++)if(f[l].directTouch||!f[l].options.stickyTracking)f=[];u&&(c?u.noSharedTooltip:u.directTouch)&&n?G=[n]:(c||!u||u.options.stickyTracking||
(f=[u]),t(f,function(a){r=a.noSharedTooltip&&c;D=!c&&a.directTouch;a.visible&&!r&&!D&&b(a.options.enableMouseTracking,!0)&&(K=a.searchPoint(e,!r&&1===a.kdDimensions))&&K.series&&G.push(K)}),G.sort(function(a,b){var e=a.distX-b.distX,h=a.dist-b.dist,f=b.series.group.zIndex-a.series.group.zIndex;return 0!==e&&c?e:0!==h?h:0!==f?f:a.series.index>b.series.index?-1:1}));if(c)for(l=G.length;l--;)(G[l].x!==G[0].x||G[l].series.noSharedTooltip)&&G.splice(l,1);if(G[0]&&(G[0]!==this.prevKDPoint||k&&k.isHidden)){if(c&&
!G[0].series.noSharedTooltip){for(l=0;l<G.length;l++)G[l].onMouseOver(e,G[l]!==(u&&u.directTouch&&n||G[0]));G.length&&k&&k.refresh(G.sort(function(a,b){return a.series.index-b.series.index}),e)}else if(k&&k.refresh(G[0],e),!u||!u.directTouch)G[0].onMouseOver(e);this.prevKDPoint=G[0];d=!1}d&&(f=u&&u.tooltipOptions.followPointer,k&&f&&!k.isHidden&&(f=k.getAnchor([{}],e),k.updatePosition({plotX:f[0],plotY:f[1]})));this.unDocMouseMove||(this.unDocMouseMove=E(g,"mousemove",function(b){if(F[a.hoverChartIndex])F[a.hoverChartIndex].pointer.onDocumentMouseMove(b)}));
t(c?G:[b(n,G[0])],function(a){t(h.axes,function(b){(!a||a.series&&a.series[b.coll]===b)&&b.drawCrosshair(e,a)})})},reset:function(a,b){var e=this.chart,h=e.hoverSeries,c=e.hoverPoint,f=e.hoverPoints,k=e.tooltip,d=k&&k.shared?f:c;a&&d&&t(w(d),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)k&&d&&(k.refresh(d),c&&(c.setState(c.state,!0),t(e.axes,function(a){a.crosshair&&a.drawCrosshair(null,c)})));else{if(c)c.onMouseOut();f&&t(f,function(a){a.setState()});if(h)h.onMouseOut();k&&k.hide(b);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(e.axes,function(a){a.hideCrosshair()});this.hoverX=this.prevKDPoint=e.hoverPoints=e.hoverPoint=null}},scaleGroups:function(a,b){var e=this.chart,h;t(e.series,function(c){h=a||c.getPlotBox();c.xAxis&&c.xAxis.zoomEnabled&&c.group&&(c.group.attr(h),c.markerGroup&&(c.markerGroup.attr(h),c.markerGroup.clip(b?e.clipRect:null)),c.dataLabelsGroup&&c.dataLabelsGroup.attr(h))});e.clipRect.attr(b||e.clipBox)},dragStart:function(a){var b=this.chart;
b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,e=b.options.chart,f=a.chartX,c=a.chartY,k=this.zoomHor,d=this.zoomVert,g=b.plotLeft,n=b.plotTop,u=b.plotWidth,D=b.plotHeight,l,r=this.selectionMarker,p=this.mouseDownX,m=this.mouseDownY,t=e.panKey&&a[e.panKey+"Key"];r&&r.touch||(f<g?f=g:f>g+u&&(f=g+u),c<n?c=n:c>n+D&&(c=n+D),this.hasDragged=Math.sqrt(Math.pow(p-f,2)+Math.pow(m-c,2)),10<this.hasDragged&&
(l=b.isInsidePlot(p-g,m-n),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!t&&!r&&(this.selectionMarker=r=b.renderer.rect(g,n,k?1:u,d?1:D,0).attr({fill:e.selectionMarkerFill||I("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),r&&k&&(f-=p,r.attr({width:Math.abs(f),x:(0<f?0:f)+p})),r&&d&&(f=c-m,r.attr({height:Math.abs(f),y:(0<f?0:f)+m})),l&&!r&&e.panning&&b.pan(a,e.panning)))},drop:function(a){var b=this,e=this.chart,f=this.hasPinched;if(this.selectionMarker){var c=
{originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,g=k.attr?k.attr("x"):k.x,n=k.attr?k.attr("y"):k.y,u=k.attr?k.attr("width"):k.width,w=k.attr?k.attr("height"):k.height,D;if(this.hasDragged||f)t(e.axes,function(e){if(e.zoomEnabled&&d(e.min)&&(f||b[{xAxis:"zoomX",yAxis:"zoomY"}[e.coll]])){var k=e.horiz,h="touchend"===a.type?e.minPixelPadding:0,m=e.toValue((k?g:n)+h),k=e.toValue((k?g+u:n+w)-h);c[e.coll].push({axis:e,min:Math.min(m,k),max:Math.max(m,k)});D=!0}}),D&&r(e,"selection",c,function(a){e.zoom(l(a,
f?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();f&&this.scaleGroups()}e&&(p(e.container,{cursor:e._cursor}),e.cancelClick=10<this.hasDragged,e.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){F[a.hoverChartIndex]&&F[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
e=this.chartPosition;a=this.normalize(a,e);!e||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var e=F[a.hoverChartIndex];e&&(b.relatedTarget||b.toElement)&&(e.pointer.reset(),e.pointer.chartPosition=null)},onContainerMouseMove:function(b){var e=this.chart;d(a.hoverChartIndex)&&F[a.hoverChartIndex]&&F[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=e.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===e.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!e.isInsidePlot(b.chartX-e.plotLeft,b.chartY-e.plotTop)||e.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var e;a;){if(e=A(a,"class")){if(-1!==e.indexOf(b))return!0;if(-1!==e.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,e=b.hoverPoint,f=b.plotLeft,c=b.plotTop;a=this.normalize(a);b.cancelClick||(e&&this.inClass(a.target,"highcharts-tracker")?(r(e.series,"click",l(a,{point:e})),b.hoverPoint&&e.firePointEvent("click",a)):(l(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-c)&&r(b,"click",a)))},setDOMEvents:function(){var b=this,f=b.chart.container;f.onmousedown=
function(a){b.onContainerMouseDown(a)};f.onmousemove=function(a){b.onContainerMouseMove(a)};f.onclick=function(a){b.onContainerClick(a)};E(f,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(g,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(f.ontouchstart=function(a){b.onContainerTouchStart(a)},f.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(g,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;n(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||
(n(g,"mouseup",this.onDocumentMouseUp),n(g,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(M);(function(a){var E=a.charts,A=a.each,F=a.extend,I=a.map,p=a.noop,d=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,d,l,r,f,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,d,l,r,f,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,d,l,r,f,b)},pinchTranslateDirection:function(a,d,l,r,f,b,n,p){var g=this.chart,k=a?"x":"y",e=a?"X":"Y",h="chart"+
e,t=a?"width":"height",v=g["plot"+(a?"Left":"Top")],c,q,x=p||1,w=g.inverted,H=g.bounds[a?"h":"v"],J=1===d.length,D=d[0][h],G=l[0][h],K=!J&&d[1][h],N=!J&&l[1][h],m;l=function(){!J&&20<Math.abs(D-K)&&(x=p||Math.abs(G-N)/Math.abs(D-K));q=(v-G)/x+D;c=g["plot"+(a?"Width":"Height")]/x};l();d=q;d<H.min?(d=H.min,m=!0):d+c>H.max&&(d=H.max-c,m=!0);m?(G-=.8*(G-n[k][0]),J||(N-=.8*(N-n[k][1])),l()):n[k]=[G,N];w||(b[k]=q-v,b[t]=c);b=w?1/x:x;f[t]=c;f[k]=d;r[w?a?"scaleY":"scaleX":"scale"+e]=x;r["translate"+e]=b*
v+(G-b*D)},pinch:function(a){var g=this,l=g.chart,r=g.pinchDown,f=a.touches,b=f.length,n=g.lastValidTouch,w=g.hasZoom,u=g.selectionMarker,k={},e=1===b&&(g.inClass(a.target,"highcharts-tracker")&&l.runTrackerClick||g.runChartClick),h={};1<b&&(g.initiated=!0);w&&g.initiated&&!e&&a.preventDefault();I(f,function(a){return g.normalize(a)});"touchstart"===a.type?(A(f,function(a,b){r[b]={chartX:a.chartX,chartY:a.chartY}}),n.x=[r[0].chartX,r[1]&&r[1].chartX],n.y=[r[0].chartY,r[1]&&r[1].chartY],A(l.axes,function(a){if(a.zoomEnabled){var b=
l.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(d(a.options.min,a.dataMin)),f=a.toPixels(d(a.options.max,a.dataMax)),k=Math.max(e,f);b.min=Math.min(a.pos,Math.min(e,f)-c);b.max=Math.max(a.pos+a.len,k+c)}}),g.res=!0):g.followTouchMove&&1===b?this.runPointActions(g.normalize(a)):r.length&&(u||(g.selectionMarker=u=F({destroy:p,touch:!0},l.plotBox)),g.pinchTranslate(r,f,k,u,h,n),g.hasPinched=w,g.scaleGroups(k,h),g.res&&(g.res=!1,this.reset(!1,0)))},touch:function(g,p){var l=this.chart,r,f;
if(l.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=l.index;1===g.touches.length?(g=this.normalize(g),(f=l.isInsidePlot(g.chartX-l.plotLeft,g.chartY-l.plotTop))&&!l.openMenu?(p&&this.runPointActions(g),"touchmove"===g.type&&(p=this.pinchDown,r=p[0]?4<=Math.sqrt(Math.pow(p[0].chartX-g.chartX,2)+Math.pow(p[0].chartY-g.chartY,2)):!1),d(r,!0)&&this.pinch(g)):p&&this.reset()):2===g.touches.length&&this.pinch(g)},onContainerTouchStart:function(a){this.zoomOption(a);
this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(d){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(d)}})})(M);(function(a){var E=a.addEvent,A=a.charts,F=a.css,I=a.doc,p=a.extend,d=a.noop,g=a.Pointer,t=a.removeEvent,l=a.win,r=a.wrap;if(l.PointerEvent||l.MSPointerEvent){var f={},b=!!l.PointerEvent,n=function(){var a,b=[];b.item=function(a){return this[a]};for(a in f)f.hasOwnProperty(a)&&b.push({pageX:f[a].pageX,pageY:f[a].pageY,target:f[a].target});
return b},w=function(b,f,e,h){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||(h(b),h=A[a.hoverChartIndex].pointer,h[f]({type:e,target:b.currentTarget,preventDefault:d,touches:n()}))};p(g.prototype,{onContainerPointerDown:function(a){w(a,"onContainerTouchStart","touchstart",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){w(a,"onContainerTouchMove","touchmove",function(a){f[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};f[a.pointerId].target||(f[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){w(a,"onDocumentTouchEnd","touchend",function(a){delete f[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,b?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,b?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(I,b?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});r(g.prototype,"init",function(a,b,e){a.call(this,b,e);this.hasZoom&&
F(b.container,{"-ms-touch-action":"none","touch-action":"none"})});r(g.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});r(g.prototype,"destroy",function(a){this.batchMSEvents(t);a.call(this)})}})(M);(function(a){var E,A=a.addEvent,F=a.css,I=a.discardElement,p=a.defined,d=a.each,g=a.extend,t=a.isFirefox,l=a.marginNames,r=a.merge,f=a.pick,b=a.setAnimation,n=a.stableSort,w=a.win,u=a.wrap;E=a.Legend=function(a,b){this.init(a,b)};E.prototype=
{init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),A(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=f(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=r(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=f(a.symbolWidth,16);this.pages=[]},update:function(a,b){var e=
this.chart;this.setOptions(r(!0,this.options,a));this.destroy();e.isDirtyLegend=e.isDirtyBox=!0;f(b,!0)&&e.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var e=this.options,f=a.legendItem,k=a.legendLine,c=a.legendSymbol,d=this.itemHiddenStyle.color,e=b?e.itemStyle.color:d,g=b?a.color||d:d,n=a.options&&a.options.marker,l={fill:g},u;f&&f.css({fill:e,color:e});k&&k.attr({stroke:g});if(c){if(n&&c.isMarker&&(l=a.pointAttribs(),!b))for(u in l)l[u]=
d;c.attr(l)}},positionItem:function(a){var b=this.options,f=b.symbolPadding,b=!b.rtl,k=a._legendItemPos,d=k[0],k=k[1],c=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?d:this.legendWidth-d-2*f-4,k);c&&(c.x=d,c.y=k)},destroyItem:function(a){var b=a.checkbox;d(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&I(a.checkbox)},destroy:function(){var a=this.group,b=this.box;b&&(this.box=b.destroy());d(this.getAllItems(),function(a){d(["legendItem",
"legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())})});a&&(this.group=a.destroy());this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,f,k=this.clipHeight||this.legendHeight,g=this.titleHeight;b&&(f=b.translateY,d(this.allItems,function(c){var e=c.checkbox,h;e&&(h=f+g+e.y+(a||0)+3,F(e,{left:b.translateX+c.checkboxOffset+e.x-20+"px",top:h+"px",display:h>f-6&&h<f+k-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,b=this.options.title,f=0;b.text&&
(this.title||(this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),f=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:f}));this.titleHeight=f},setText:function(b){var e=this.options;b.legendItem.attr({text:e.labelFormat?a.format(e.labelFormat,b):e.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,k=b.renderer,d=this.options,g="horizontal"===d.layout,c=this.symbolWidth,
n=d.symbolPadding,l=this.itemStyle,u=this.itemHiddenStyle,p=this.padding,t=g?f(d.itemDistance,20):0,D=!d.rtl,G=d.width,K=d.itemMarginBottom||0,w=this.itemMarginTop,m=this.initialItemX,y=a.legendItem,O=!a.series,P=!O&&a.series.drawLegendSymbol?a.series:a,z=P.options,z=this.createCheckboxForItem&&z&&z.showCheckbox,B=d.useHTML;y||(a.legendGroup=k.g("legend-item").addClass("highcharts-"+P.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?" "+a.options.className:"")+(O?" highcharts-series-"+
a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=y=k.text("",D?c+n:-n,this.baseline||0,B).css(r(a.visible?l:u)).attr({align:D?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(l=l.fontSize,this.fontMetrics=k.fontMetrics(l,y),this.baseline=this.fontMetrics.f+3+w,y.attr("y",this.baseline)),P.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,y,B),z&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);this.setText(a);k=y.getBBox();c=a.checkboxOffset=
d.itemWidth||a.legendItemWidth||c+n+k.width+t+(z?20:0);this.itemHeight=n=Math.round(a.legendItemHeight||k.height);g&&this.itemX-m+c>(G||b.chartWidth-2*p-m-d.x)&&(this.itemX=m,this.itemY+=w+this.lastLineHeight+K,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,c);this.lastItemY=w+this.itemY+K;this.lastLineHeight=Math.max(n,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];g?this.itemX+=c:(this.itemY+=w+n+K,this.lastLineHeight=n);this.offsetWidth=G||Math.max((g?this.itemX-
m-t:c)+p,this.offsetWidth)},getAllItems:function(){var a=[];d(this.chart.series,function(b){var e=b&&b.options;b&&f(e.showInLegend,p(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===e.legendType?b.data:b)))});return a},adjustMargins:function(a,b){var e=this.chart,k=this.options,g=k.align.charAt(0)+k.verticalAlign.charAt(0)+k.layout.charAt(0);k.floating||d([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(c,d){c.test(g)&&!p(a[d])&&(e[l[d]]=Math.max(e[l[d]],e.legend[(d+
1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][d]*k[d%2?"x":"y"]+f(k.margin,12)+b[d]))})},render:function(){var a=this,b=a.chart,f=b.renderer,l=a.group,v,c,q,u,r=a.box,p=a.options,w=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;l||(a.group=l=f.g("legend").attr({zIndex:7}).add(),a.contentGroup=f.g().attr({zIndex:1}).add(l),a.scrollGroup=f.g().add(a.contentGroup));a.renderTitle();v=a.getAllItems();n(v,function(a,b){return(a.options&&a.options.legendIndex||0)-
(b.options&&b.options.legendIndex||0)});p.reversed&&v.reverse();a.allItems=v;a.display=c=!!v.length;a.lastLineHeight=0;d(v,function(b){a.renderItem(b)});q=(p.width||a.offsetWidth)+w;u=a.lastItemY+a.lastLineHeight+a.titleHeight;u=a.handleOverflow(u);u+=w;r||(a.box=r=f.rect().addClass("highcharts-legend-box").attr({r:p.borderRadius}).add(l),r.isNew=!0);r.attr({stroke:p.borderColor,"stroke-width":p.borderWidth||0,fill:p.backgroundColor||"none"}).shadow(p.shadow);0<q&&0<u&&(r[r.isNew?"attr":"animate"](r.crisp({x:0,
y:0,width:q,height:u},r.strokeWidth())),r.isNew=!1);r[c?"show":"hide"]();a.legendWidth=q;a.legendHeight=u;d(v,function(b){a.positionItem(b)});c&&l.align(g({width:q,height:u},p),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,h=this.chart,k=h.renderer,g=this.options,c=g.y,h=h.spacingBox.height+("top"===g.verticalAlign?-c:c)-this.padding,c=g.maxHeight,n,l=this.clipRect,u=g.navigation,r=f(u.animation,!0),p=u.arrowSize||12,D=this.nav,G=this.pages,K=this.padding,
w,m=this.allItems,y=function(a){a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+K+"px,9999px,"+(K+a)+"px,0)":"auto")};"horizontal"!==g.layout||"middle"===g.verticalAlign||g.floating||(h/=2);c&&(h=Math.min(h,c));G.length=0;a>h&&!1!==u.enabled?(this.clipHeight=n=Math.max(h-20-this.titleHeight-K,0),this.currentPage=f(this.currentPage,1),this.fullHeight=a,d(m,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);
var e=G.length;if(!e||c-G[e-1]>n&&(w||c)!==G[e-1])G.push(w||c),e++;b===m.length-1&&c+a-G[e-1]>n&&G.push(c);c!==w&&(w=c)}),l||(l=b.clipRect=k.clipRect(0,K,9999,0),b.contentGroup.clip(l)),y(n),D||(this.nav=D=k.g().attr({zIndex:1}).add(this.group),this.up=k.symbol("triangle",0,0,p,p).on("click",function(){b.scroll(-1,r)}).add(D),this.pager=k.text("",15,10).addClass("highcharts-legend-navigation").css(u.style).add(D),this.down=k.symbol("triangle-down",0,0,p,p).on("click",function(){b.scroll(1,r)}).add(D)),
b.scroll(0),a=h):D&&(y(),D.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,e){var f=this.pages,d=f.length;a=this.currentPage+a;var k=this.clipHeight,c=this.options.navigation,g=this.pager,n=this.padding;a>d&&(a=d);0<a&&(void 0!==e&&b(e,this.chart),this.nav.attr({translateX:n,translateY:k+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+
d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?c.inactiveColor:c.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?c.inactiveColor:c.activeColor}).css({cursor:a===d?"default":"pointer"}),e=-f[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:e}),this.currentPage=a,this.positionCheckboxes(e))}};a.LegendSymbolMixin={drawRectangle:function(a,b){var e=
a.options,d=e.symbolHeight||a.fontMetrics.f,e=e.squareSymbol;b.legendSymbol=this.chart.renderer.rect(e?(a.symbolWidth-d)/2:0,a.baseline-d+1,e?d:a.symbolWidth,d,f(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,f=b.marker,d=a.symbolWidth,k=this.chart.renderer,c=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var g;g={"stroke-width":b.lineWidth||0};b.dashStyle&&(g.dashstyle=b.dashStyle);this.legendLine=
k.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(g).add(c);f&&!1!==f.enabled&&(b=0===this.symbol.indexOf("url")?0:f.radius,this.legendSymbol=f=k.symbol(this.symbol,d/2-b,a-b,2*b,2*b,f).addClass("highcharts-point").add(c),f.isMarker=!0)}};(/Trident\/7\.0/.test(w.navigator.userAgent)||t)&&u(E.prototype,"positionItem",function(a,b){var e=this,f=function(){b._legendItemPos&&a.call(e,b)};f();setTimeout(f)})})(M);(function(a){var E=a.addEvent,A=a.animate,F=a.animObject,I=a.attr,p=a.doc,d=a.Axis,
g=a.createElement,t=a.defaultOptions,l=a.discardElement,r=a.charts,f=a.css,b=a.defined,n=a.each,w=a.error,u=a.extend,k=a.fireEvent,e=a.getStyle,h=a.grep,C=a.isNumber,v=a.isObject,c=a.isString,q=a.Legend,x=a.marginNames,L=a.merge,H=a.Pointer,J=a.pick,D=a.pInt,G=a.removeEvent,K=a.seriesTypes,N=a.splat,m=a.svg,y=a.syncTimeout,O=a.win,P=a.Renderer,z=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new z(a,b,c)};z.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(c(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var e,f=b.series;b.series=null;e=L(t,b);e.series=b.series=f;this.userOptions=b;this.respRules=[];b=e.chart;f=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var d;this.index=r.length;r.push(this);a.chartCount++;if(f)for(d in f)E(this,d,f[d]);this.xAxis=[];this.yAxis=[];this.pointCount=
this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(a){var b=this.options.chart;(b=K[a.type||b.type||b.defaultSeriesType])||w(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var e=c?b:a;a=c?a:b;return 0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,e=this.series,f=this.pointer,d=this.legend,m=this.isDirtyLegend,h,g,q=this.hasCartesianSeries,l=this.isDirtyBox,D=e.length,v=D,B=this.renderer,r=B.isHidden(),G=[];a.setAnimation(b,
this);r&&this.cloneRenderTo();for(this.layOutTitles();v--;)if(b=e[v],b.options.stacking&&(h=!0,b.isDirty)){g=!0;break}if(g)for(v=D;v--;)b=e[v],b.options.stacking&&(b.isDirty=!0);n(e,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),m=!0);a.isDirtyData&&k(a,"updatedData")});m&&d.options.enabled&&(d.render(),this.isDirtyLegend=!1);h&&this.getStacks();q&&n(c,function(a){a.updateNames();a.setScale()});this.getMargins();q&&(n(c,function(a){a.isDirty&&(l=!0)}),n(c,
function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,G.push(function(){k(a,"afterSetExtremes",u(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(l||h)&&a.redraw()}));l&&this.drawChartBox();n(e,function(a){(l||a.isDirty)&&a.visible&&a.redraw()});f&&f.reset(!0);B.draw();k(this,"redraw");r&&this.cloneRenderTo(!0);n(G,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,e,f;for(e=0;e<b.length;e++)if(b[e].options.id===a)return b[e];for(e=0;e<c.length;e++)if(c[e].options.id===
a)return c[e];for(e=0;e<c.length;e++)for(f=c[e].points||[],b=0;b<f.length;b++)if(f[b].id===a)return f[b];return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=N(b.xAxis||{}),b=b.yAxis=N(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new d(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(h(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return h(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var e=this,f=e.options,d;d=f.title=L(f.title,a);f=f.subtitle=L(f.subtitle,b);n([["title",a,d],["subtitle",b,f]],function(a,b){var c=a[0],f=e[c],d=a[1];a=a[2];f&&d&&(e[c]=f=f.destroy());a&&a.text&&!f&&(e[c]=e.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),e[c].update=function(a){e.setTitle(!b&&a,b&&a)},e[c].css(a.style))});e.layOutTitles(c)},layOutTitles:function(a){var b=0,c,e=this.renderer,
f=this.spacingBox;n(["title","subtitle"],function(a){var c=this[a],d=this.options[a],m;c&&(m=d.style.fontSize,m=e.fontMetrics(m,c).b,c.css({width:(d.width||f.width+d.widthAdjust)+"px"}).align(u({y:b+m+("title"===a?-3:2)},d),!1,"spacingBox"),d.floating||d.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&J(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,
c=a.width,a=a.height,f=this.renderToClone||this.renderTo;b(c)||(this.containerWidth=e(f,"width"));b(a)||(this.containerHeight=e(f,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,J(a,19<this.containerHeight?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);l(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),
this.renderToClone=b=this.renderTo.cloneNode(0),f(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),p.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,e=this.options,f=e.chart,d,m;b=this.renderTo;var h=a.uniqueKey(),k;b||(this.renderTo=b=f.renderTo);c(b)&&(this.renderTo=b=p.getElementById(b));b||w(13,!0);d=D(I(b,"data-highcharts-chart"));
C(d)&&r[d]&&r[d].hasRendered&&r[d].destroy();I(b,"data-highcharts-chart",this.index);b.innerHTML="";f.skipClone||b.offsetWidth||this.cloneRenderTo();this.getChartSize();d=this.chartWidth;m=this.chartHeight;k=u({position:"relative",overflow:"hidden",width:d+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},f.style);this.container=b=g("div",{id:h},k,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||P)(b,
d,m,null,f.forExport,e.exporting&&e.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index},getMargins:function(a){var c=this.spacing,e=this.margin,f=this.titleOffset;this.resetMargins();f&&!b(e[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+c[0]));this.legend.display&&this.legend.adjustMargins(e,c);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);
a||this.getAxisMargins()},getAxisMargins:function(){var a=this,c=a.axisOffset=[0,0,0,0],e=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&a.getOffset()});n(x,function(f,d){b(e[d])||(a[f]+=c[d])});a.setChartSize()},reflow:function(a){var c=this,f=c.options.chart,d=c.renderTo,m=b(f.width),h=f.width||e(d,"width"),f=f.height||e(d,"height"),d=a?a.target:O;if(!m&&!c.isPrinting&&h&&f&&(d===O||d===p)){if(h!==c.containerWidth||f!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=
y(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=h;c.containerHeight=f}},initReflow:function(){var a=this,b;b=E(O,"resize",function(b){a.reflow(b)});E(a,"destroy",b)},setSize:function(b,c,e){var d=this,m=d.renderer;d.isResizing+=1;a.setAnimation(e,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=m.globalAnimation;(b?A:f)(d.container,{width:d.chartWidth+"px",
height:d.chartHeight+"px"},b);d.setChartSize(!0);m.setSize(d.chartWidth,d.chartHeight,e);n(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.setResponsive&&d.setResponsive(!1);d.redraw(e);d.oldChartHeight=null;k(d,"resize");y(function(){d&&k(d,"endResize",null,function(){--d.isResizing})},F(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,e=this.chartWidth,f=this.chartHeight,d=this.options.chart,m=this.spacing,
h=this.clipOffset,k,g,q,l;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=g=Math.round(this.plotTop);this.plotWidth=q=Math.max(0,Math.round(e-k-this.marginRight));this.plotHeight=l=Math.max(0,Math.round(f-g-this.marginBottom));this.plotSizeX=b?l:q;this.plotSizeY=b?q:l;this.plotBorderWidth=d.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:m[3],y:m[0],width:e-m[3]-m[1],height:f-m[0]-m[2]};this.plotBox=c.plotBox={x:k,y:g,width:q,height:l};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,
h[3])/2);c=Math.ceil(Math.max(e,h[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(e,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(e,h[2])/2-c))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var e=b[c],f=v(e)?e:[e,e,e,e];n(["Top","Right","Bottom","Left"],function(e,d){a[c][d]=J(b[c+e],f[d])})});n(x,function(b,c){a[b]=J(a.margin[c],a.spacing[c])});a.axisOffset=
[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,e=this.chartHeight,f=this.chartBackground,d=this.plotBackground,m=this.plotBorder,h,k=this.plotBGImage,g=a.backgroundColor,n=a.plotBackgroundColor,q=a.plotBackgroundImage,l,D=this.plotLeft,v=this.plotTop,u=this.plotWidth,r=this.plotHeight,G=this.plotBox,p=this.clipRect,x=this.clipBox,y="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),y="attr");h=
a.borderWidth||0;l=h+(a.shadow?8:0);g={fill:g||"none"};if(h||f["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=h;f.attr(g).shadow(a.shadow);f[y]({x:l/2,y:l/2,width:c-l-h%2,height:e-l-h%2,r:a.borderRadius});y="animate";d||(y="attr",this.plotBackground=d=b.rect().addClass("highcharts-plot-background").add());d[y](G);d.attr({fill:n||"none"}).shadow(a.plotShadow);q&&(k?k.animate(G):this.plotBGImage=b.image(q,D,v,u,r).add());p?p.animate({width:x.width,height:x.height}):this.clipRect=b.clipRect(x);
y="animate";m||(y="attr",this.plotBorder=m=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());m.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});m[y](m.crisp({x:D,y:v,width:u,height:r},-m.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,e=a.options.series,f,d;n(["inverted","angular","polar"],function(m){c=K[b.type||b.defaultSeriesType];d=b[m]||c&&c.prototype[m];for(f=e&&e.length;!d&&f--;)(c=K[e[f].type])&&
c.prototype[m]&&(d=!0);a[m]=d})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var e=b.options.linkedTo;c(e)&&(e=":previous"===e?a.series[b.index-1]:a.get(e))&&e.linkedParent!==b&&(e.linkedSeries.push(b),b.linkedParent=e,b.visible=J(b.options.visible,e.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&n(b.items,function(c){var e=
u(b.style,c.style),f=D(e.left)+a.plotLeft,d=D(e.top)+a.plotTop+12;delete e.left;delete e.top;a.renderer.text(c.html,f,d).attr({zIndex:2}).css(e).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,e,f,d;this.setTitle();this.legend=new q(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;e=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<c/this.plotWidth;d=1.05<e/this.plotHeight;if(f||d)n(a,function(a){(a.horiz&&
f||!a.horiz&&d)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=L(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",
function(){a.href&&(O.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,e=b.series,f=b.container,d,m=f&&f.parentNode;k(b,"destroy");r[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");G(b);for(d=c.length;d--;)c[d]=c[d].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(d=
e.length;d--;)e[d]=e[d].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",G(f),m&&l(f));for(d in b)delete b[d]},isReadyToRender:function(){var a=this;return m||O!=O.top||"complete"===p.readyState?!0:(p.attachEvent("onreadystatechange",function(){p.detachEvent("onreadystatechange",a.firstRender);
"complete"===p.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();k(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();k(a,"beforeRender");H&&(a.pointer=new H(a,b));a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&
a.apply(this,[this])},this);k(this,"load");!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(M);(function(a){var E,A=a.each,F=a.extend,I=a.erase,p=a.fireEvent,d=a.format,g=a.isArray,t=a.isNumber,l=a.pick,r=a.removeEvent;E=a.Point=function(){};E.prototype={init:function(a,b,d){this.series=a;this.color=a.color;this.applyOptions(b,d);a.options.colorByPoint?(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter],b=b.length,d=a.colorCounter,a.colorCounter++,
a.colorCounter===b&&(a.colorCounter=0)):d=a.colorIndex;this.colorIndex=l(this.colorIndex,d);a.chart.pointCount++;return this},applyOptions:function(a,b){var f=this.series,d=f.options.pointValKey||f.pointValKey;a=E.prototype.optionsToObject.call(this,a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;d&&(this.y=this[d]);this.isNull=l(this.isValid&&!this.isValid(),null===this.x||!t(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===b&&f.xAxis&&
f.xAxis.hasNames&&(this.x=f.xAxis.nameToX(this));void 0===this.x&&f&&(this.x=void 0===b?f.autoIncrement(this):b);return this},optionsToObject:function(a){var b={},f=this.series,d=f.options.keys,l=d||f.pointArrayMap||["y"],k=l.length,e=0,h=0;if(t(a)||null===a)b[l[0]]=a;else if(g(a))for(!d&&a.length>k&&(f=typeof a[0],"string"===f?b.name=a[0]:"number"===f&&(b.x=a[0]),e++);h<k;)d&&void 0===a[e]||(b[l[h]]=a[e]),e++,h++;else"object"===typeof a&&(b=a,a.dataLabels&&(f._hasPointLabels=!0),a.marker&&(f._hasPointMarkers=
!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")},getZone:function(){var a=this.series,b=a.zones,a=a.zoneAxis||"y",d=0,g;for(g=b[d];this[a]>=g.value;)g=b[++d];g&&g.color&&!this.options.color&&(this.color=g.color);return g},destroy:function(){var a=
this.series.chart,b=a.hoverPoints,d;a.pointCount--;b&&(this.setState(),I(b,this),b.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)r(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(d in this)this[d]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,d=6;d--;)b=a[d],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,
color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,f=b.tooltipOptions,g=l(f.valueDecimals,""),u=f.valuePrefix||"",k=f.valueSuffix||"";A(b.pointArrayMap||["y"],function(b){b="{point."+b;if(u||k)a=a.replace(b+"}",u+b+"}"+k);a=a.replace(b+"}",b+":,."+g+"f}")});return d(a,{point:this,series:this.series})},firePointEvent:function(a,b,d){var f=this,g=this.series.options;
(g.point.events[a]||f.options&&f.options.events&&f.options.events[a])&&this.importEvents();"click"===a&&g.allowPointSelect&&(d=function(a){f.select&&f.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});p(this,a,b,d)},visible:!0}})(M);(function(a){var E=a.addEvent,A=a.animObject,F=a.arrayMax,I=a.arrayMin,p=a.correctFloat,d=a.Date,g=a.defaultOptions,t=a.defaultPlotOptions,l=a.defined,r=a.each,f=a.erase,b=a.error,n=a.extend,w=a.fireEvent,u=a.grep,k=a.isArray,e=a.isNumber,h=a.isString,C=a.merge,v=a.pick,
c=a.removeEvent,q=a.splat,x=a.stableSort,L=a.SVGElement,H=a.syncTimeout,J=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,
-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,e,f,
d=a.series,h,k=function(a,b){return v(a.options.index,a._i)-v(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();n(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});f=b.events;for(e in f)E(c,e,f[e]);if(f&&f.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();r(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);
d.length&&(h=d[d.length-1]);c._i=v(h&&h._i,-1)+1;d.push(c);x(d,k);this.yAxis&&x(this.yAxis.series,k);r(d,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,c=a.options,e=a.chart,f;r(a.axisTypes||[],function(d){r(e[d],function(b){f=b.options;if(c[d]===f.index||void 0!==c[d]&&c[d]===f.id||void 0===c[d]&&0===f.index)b.series.push(a),a[d]=b,b.isDirty=!0});a[d]||a.optionalAxis===d||b(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,f=arguments,d=e(b)?function(e){var f=
"y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(f,2))};r(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,b=v(b,a.pointStart,0);this.pointInterval=c=v(this.pointInterval,a.pointInterval,1);e&&(a=new d(b),"day"===e?a=+a[d.hcSetDate](a[d.hcGetDate]()+c):"month"===e?a=+a[d.hcSetMonth](a[d.hcGetMonth]()+c):"year"===e&&(a=+a[d.hcSetFullYear](a[d.hcGetFullYear]()+
c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},e=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=C(f,c.series,a);this.tooltipOptions=C(g.tooltip,g.plotOptions[this.type].tooltip,b.tooltip,e.series&&e.series.tooltip,e[this.type]&&e[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+
"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&l(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var e,f=this.userOptions,d=a+"Index",h=a+"Counter",k=c?c.length:v(this.chart.options.chart[a+"Count"],this.chart[a+"Count"]);b||(e=v(f[d],f["_"+d]),l(e)||(f["_"+d]=e=this.chart[h]%k,this.chart[h]+=1),c&&(b=c[e]));void 0!==e&&(this[d]=e);this[a]=b},getColor:function(){this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(a,c,f,d){var m=this,g=m.points,n=g&&g.length||0,q,l=m.options,u=m.chart,D=null,p=m.xAxis,x=l.turboThreshold,G=this.xData,t=this.yData,w=(q=m.pointArrayMap)&&q.length;a=a||[];q=a.length;c=v(c,!0);if(!1!==d&&q&&n===q&&!m.cropped&&
!m.hasGroupedData&&m.visible)r(a,function(a,b){g[b].update&&a!==l.data[b]&&g[b].update(a,!1,null,!1)});else{m.xIncrement=null;m.colorCounter=0;r(this.parallelArrays,function(a){m[a+"Data"].length=0});if(x&&q>x){for(f=0;null===D&&f<q;)D=a[f],f++;if(e(D))for(f=0;f<q;f++)G[f]=this.autoIncrement(),t[f]=a[f];else if(k(D))if(w)for(f=0;f<q;f++)D=a[f],G[f]=D[0],t[f]=D.slice(1,w+1);else for(f=0;f<q;f++)D=a[f],G[f]=D[0],t[f]=D[1];else b(12)}else for(f=0;f<q;f++)void 0!==a[f]&&(D={series:m},m.pointClass.prototype.applyOptions.apply(D,
[a[f]]),m.updateParallelArrays(D,f));h(t[0])&&b(14,!0);m.data=[];m.options.data=m.userOptions.data=a;for(f=n;f--;)g[f]&&g[f].destroy&&g[f].destroy();p&&(p.minRange=p.userMinRange);m.isDirty=u.isDirtyBox=!0;m.isDirtyData=!!g;f=!1}"point"===l.legendType&&(this.processData(),this.generatePoints());c&&u.redraw(f)},processData:function(a){var c=this.xData,e=this.yData,f=c.length,d;d=0;var h,k,g=this.xAxis,n,q=this.options;n=q.cropThreshold;var l=this.getExtremesFromAll||q.getExtremesFromAll,v=this.isCartesian,
q=g&&g.val2lin,u=g&&g.isLog,r,D;if(v&&!this.isDirty&&!g.isDirty&&!this.yAxis.isDirty&&!a)return!1;g&&(a=g.getExtremes(),r=a.min,D=a.max);if(v&&this.sorted&&!l&&(!n||f>n||this.forceCrop))if(c[f-1]<r||c[0]>D)c=[],e=[];else if(c[0]<r||c[f-1]>D)d=this.cropData(this.xData,this.yData,r,D),c=d.xData,e=d.yData,d=d.start,h=!0;for(n=c.length||1;--n;)f=u?q(c[n])-q(c[n-1]):c[n]-c[n-1],0<f&&(void 0===k||f<k)?k=f:0>f&&this.requireSorting&&b(15);this.cropped=h;this.cropStart=d;this.processedXData=c;this.processedYData=
e;this.closestPointRange=k},cropData:function(a,b,c,e){var f=a.length,d=0,h=f,k=v(this.cropShoulder,1),g;for(g=0;g<f;g++)if(a[g]>=c){d=Math.max(0,g-k);break}for(c=g;c<f;c++)if(a[c]>e){h=c+k;break}return{xData:a.slice(d,h),yData:b.slice(d,h),start:d,end:h}},generatePoints:function(){var a=this.options.data,b=this.data,c,e=this.processedXData,f=this.processedYData,d=this.pointClass,h=e.length,g=this.cropStart||0,k,n=this.hasGroupedData,l,v=[],u;b||n||(b=[],b.length=a.length,b=this.data=b);for(u=0;u<
h;u++)k=g+u,n?(l=(new d).init(this,[e[u]].concat(q(f[u]))),l.dataGroup=this.groupMap[u]):(l=b[k])||void 0===a[k]||(b[k]=l=(new d).init(this,a[k],e[u])),l.index=k,v[u]=l;if(b&&(h!==(c=b.length)||n))for(u=0;u<c;u++)u!==g||n||(u+=h),b[u]&&(b[u].destroyElements(),b[u].plotX=void 0);this.data=b;this.points=v},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,f,d=[],h=0;f=this.xAxis.getExtremes();var g=f.min,n=f.max,q,l,u,v;a=a||this.stackedYData||this.processedYData||[];f=a.length;for(v=0;v<
f;v++)if(l=c[v],u=a[v],q=(e(u,!0)||k(u))&&(!b.isLog||u.length||0<u),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[v+1]||l)>=g&&(c[v-1]||l)<=n,q&&l)if(q=u.length)for(;q--;)null!==u[q]&&(d[h++]=u[q]);else d[h++]=u;this.dataMin=I(d);this.dataMax=F(d)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,f=c.categories,d=this.yAxis,h=this.points,k=h.length,g=!!this.modifyValue,n=a.pointPlacement,
q="between"===n||e(n),u=a.threshold,r=a.startFromThreshold?u:0,x,t,w,H,L=Number.MAX_VALUE;"between"===n&&(n=.5);e(n)&&(n*=v(a.pointRange||c.pointRange));for(a=0;a<k;a++){var C=h[a],J=C.x,A=C.y;t=C.low;var E=b&&d.stacks[(this.negStacks&&A<(r?0:u)?"-":"")+this.stackKey],F;d.isLog&&null!==A&&0>=A&&(C.isNull=!0);C.plotX=x=p(Math.min(Math.max(-1E5,c.translate(J,0,0,0,1,n,"flags"===this.type)),1E5));b&&this.visible&&!C.isNull&&E&&E[J]&&(H=this.getStackIndicator(H,J,this.index),F=E[J],A=F.points[H.key],
t=A[0],A=A[1],t===r&&H.key===E[J].base&&(t=v(u,d.min)),d.isLog&&0>=t&&(t=null),C.total=C.stackTotal=F.total,C.percentage=F.total&&C.y/F.total*100,C.stackY=A,F.setOffset(this.pointXOffset||0,this.barW||0));C.yBottom=l(t)?d.translate(t,0,1,0,1):null;g&&(A=this.modifyValue(A,C));C.plotY=t="number"===typeof A&&Infinity!==A?Math.min(Math.max(-1E5,d.translate(A,0,1,0,1)),1E5):void 0;C.isInside=void 0!==t&&0<=t&&t<=d.len&&0<=x&&x<=c.len;C.clientX=q?p(c.translate(J,0,0,0,1,n)):x;C.negative=C.y<(u||0);C.category=
f&&void 0!==f[C.x]?f[C.x]:C.x;C.isNull||(void 0!==w&&(L=Math.min(L,Math.abs(x-w))),w=x)}this.closestPointRangePx=L},getValidPoints:function(a,b){var c=this.chart;return u(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,f=b.inverted,d=this.clipBox,h=d||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),g=b[k],n=b[k+"m"];g||(a&&
(h.width=0,b[k+"m"]=n=e.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[k]=g=e.clipRect(h),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&(this.group.clip(a||d?g:b.clipRect),this.markerGroup.clip(n),this.sharedClipKey=k);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&k&&b[k]&&(d||(b[k]=b[k].destroy()),b[k+"m"]&&(b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,
c=A(this.options.animation),e;a?this.setClip(c):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();w(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,f,d,h,k=this.options.marker,g,n,q,l,u=this.markerGroup,r=v(k.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>2*k.radius);if(!1!==k.enabled||this._hasPointMarkers)for(f=a.length;f--;)d=
a[f],c=d.plotY,h=d.graphic,g=d.marker||{},n=!!d.marker,q=r&&void 0===g.enabled||g.enabled,l=d.isInside,q&&e(c)&&null!==d.y?(c=v(g.symbol,this.symbol),d.hasImage=0===c.indexOf("url"),q=this.markerAttribs(d,d.selected&&"select"),h?h[l?"show":"hide"](!0).animate(q):l&&(0<q.width||d.hasImage)&&(d.graphic=h=b.renderer.symbol(c,q.x,q.y,q.width,q.height,n?g:k).add(u)),h&&h.attr(this.pointAttribs(d,d.selected&&"select")),h&&h.addClass(d.getClassName(),!0)):h&&(d.graphic=h.destroy())},markerAttribs:function(a,
b){var c=this.options.marker,e=a&&a.options,f=e&&e.marker||{},e=v(f.radius,c.radius);b&&(c=c.states[b],b=f.states&&f.states[b],e=v(b&&b.radius,c&&c.radius,e+(c&&c.radiusPlus||0)));a.hasImage&&(e=0);a={x:Math.floor(a.plotX)-e,y:a.plotY-e};e&&(a.width=a.height=2*e);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,f=e&&e.marker||{},d=this.color,h=e&&e.color,g=a&&a.color,e=v(f.lineWidth,c.lineWidth),k;a&&this.zones.length&&(a=a.getZone())&&a.color&&(k=a.color);d=h||k||g||
d;k=f.fillColor||c.fillColor||d;d=f.lineColor||c.lineColor||d;b&&(c=c.states[b],b=f.states&&f.states[b]||{},e=v(b.lineWidth,c.lineWidth,e+v(b.lineWidthPlus,c.lineWidthPlus,0)),k=b.fillColor||c.fillColor||k,d=b.lineColor||c.lineColor||d);return{stroke:d,"stroke-width":e,fill:k}},destroy:function(){var a=this,b=a.chart,e=/AppleWebKit\/533/.test(J.navigator.userAgent),d,h=a.data||[],k,g,n;w(a,"destroy");c(a);r(a.axisTypes||[],function(b){(n=a[b])&&n.series&&(f(n.series,a),n.isDirty=n.forceRedraw=!0)});
a.legendItem&&a.chart.legend.destroyItem(a);for(d=h.length;d--;)(k=h[d])&&k.destroy&&k.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof L&&!a[g].survive&&(d=e&&"group"===g?"hide":"destroy",a[g][d]());b.hoverSeries===a&&(b.hoverSeries=null);f(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var e=this,f=e.options,d=f.step,h,k=[],g=[],n;a=a||e.points;(h=a.reversed)&&a.reverse();(d={right:1,center:2}[d]||d&&3)&&h&&(d=4-d);!f.connectNulls||b||c||(a=this.getValidPoints(a));
r(a,function(h,m){var q=h.plotX,u=h.plotY,v=a[m-1];(h.leftCliff||v&&v.rightCliff)&&!c&&(n=!0);h.isNull&&!l(b)&&0<m?n=!f.connectNulls:h.isNull&&!b?n=!0:(0===m||n?m=["M",h.plotX,h.plotY]:e.getPointSpline?m=e.getPointSpline(a,h,m):d?(m=1===d?["L",v.plotX,u]:2===d?["L",(v.plotX+q)/2,v.plotY,"L",(v.plotX+q)/2,u]:["L",q,v.plotY],m.push("L",q,u)):m=["L",q,u],g.push(h.x),d&&g.push(h.x),k.push.apply(k,m),n=!1)});k.xMap=g;return e.graphPath=k},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||
this.getGraphPath).call(this),e=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];r(this.zones,function(c,f){e.push(["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});r(e,function(e,f){var d=e[0],h=a[d];h?(h.endX=c.xMap,h.animate({d:c})):c.length&&(a[d]=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group),h={stroke:e[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},e[3]?
h.dashstyle=e[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[d].attr(h).shadow(2>f&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,f,d,h=this.clips||[],k,g=this.graph,n=this.area,q=Math.max(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],u,p,x=b.inverted,t,w,H,C,L=!1;e.length&&(g||n)&&l&&void 0!==l.min&&(p=l.reversed,t=l.horiz,g&&g.hide(),n&&n.hide(),u=l.getExtremes(),r(e,
function(e,m){f=p?t?b.plotWidth:0:t?0:l.toPixels(u.min);f=Math.min(Math.max(v(d,f),0),q);d=Math.min(Math.max(Math.round(l.toPixels(v(e.value,u.max),!0)),0),q);L&&(f=d=l.toPixels(u.max));w=Math.abs(f-d);H=Math.min(f,d);C=Math.max(f,d);l.isXAxis?(k={x:x?C:H,y:0,width:w,height:q},t||(k.x=b.plotHeight-k.x)):(k={x:0,y:x?C:H,width:q,height:w},t&&(k.y=b.plotWidth-k.y));x&&c.isVML&&(k=l.isXAxis?{x:0,y:p?H:C,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,height:b.chartHeight});
h[m]?h[m].animate(k):(h[m]=c.clipRect(k),g&&a["zone-graph-"+m].clip(h[m]),n&&a["zone-area-"+m].clip(h[m]));L=e.value>u.max}),this.clips=h)},invertGroups:function(a){function b(){var b={width:c.yAxis.len,height:c.xAxis.len};r(["group","markerGroup"],function(e){c[e]&&c[e].attr(b).invert(a)})}var c=this,e;c.xAxis&&(e=E(c.chart,"resize",b),E(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,e,f){var d=this[a],h=!d;h&&(this[a]=d=this.chart.renderer.g(b).attr({zIndex:e||.1}).add(f),d.addClass("highcharts-series-"+
this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));d.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return d},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,e=a.options,f=!!a.animate&&b.renderer.isSVG&&A(e.animation).duration,d=a.visible?"inherit":
"hidden",h=e.zIndex,k=a.hasRendered,g=b.seriesGroup,n=b.inverted;c=a.plotGroup("group","series",d,h,g);a.markerGroup=a.plotGroup("markerGroup","markers",d,h,g);f&&a.animate(!0);c.inverted=a.isCartesian?n:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(n);!1===e.clip||a.sharedClipKey||k||c.clip(b.clipRect);f&&a.animate();k||(a.animationTimeout=H(function(){a.afterAnimate()},
f));a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:v(e&&e.left,a.plotLeft),translateY:v(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?
c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},buildKDTree:function(){function a(c,e,f){var d,h;if(h=c&&c.length)return d=b.kdAxisArray[e%f],c.sort(function(a,b){return a[d]-b[d]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;H(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,g){var n=b.point,m=
e.kdAxisArray[k%g],q,u,v=n;u=l(a[f])&&l(n[f])?Math.pow(a[f]-n[f],2):null;q=l(a[d])&&l(n[d])?Math.pow(a[d]-n[d],2):null;q=(u||0)+(q||0);n.dist=l(q)?Math.sqrt(q):Number.MAX_VALUE;n.distX=l(u)?Math.sqrt(u):Number.MAX_VALUE;m=a[m]-n[m];q=0>m?"left":"right";u=0>m?"right":"left";b[q]&&(q=c(a,b[q],k+1,g),v=q[h]<v[h]?q:n);b[u]&&Math.sqrt(m*m)<v[h]&&(a=c(a,b[u],k+1,g),v=a[h]<v[h]?a:v);return v}var e=this,f=this.kdAxisArray[0],d=this.kdAxisArray[1],h=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,
this.kdTree,this.kdDimensions,this.kdDimensions)}})})(M);(function(a){function E(a,f,b,d,g){var n=a.chart.inverted;this.axis=a;this.isNegative=b;this.options=f;this.x=d;this.total=null;this.points={};this.stack=g;this.rightCliff=this.leftCliff=0;this.alignOptions={align:f.align||(n?b?"left":"right":"center"),verticalAlign:f.verticalAlign||(n?"middle":b?"bottom":"top"),y:l(f.y,n?4:b?14:-6),x:l(f.x,n?b?-6:6:0)};this.textAlign=f.textAlign||(n?b?"right":"left":"center")}var A=a.Axis,F=a.Chart,I=a.correctFloat,
p=a.defined,d=a.destroyObjectProperties,g=a.each,t=a.format,l=a.pick;a=a.Series;E.prototype={destroy:function(){d(this,this.axis)},render:function(a){var f=this.options,b=f.format,b=b?t(b,this):f.formatter.call(this);this.label?this.label.attr({text:b,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(b,null,null,f.useHTML).css(f.style).attr({align:this.textAlign,rotation:f.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,f){var b=this.axis,d=b.chart,g=d.inverted,l=b.reversed,
l=this.isNegative&&!l||!this.isNegative&&l,k=b.translate(b.usePercentage?100:this.total,0,0,0,1),b=b.translate(0),b=Math.abs(k-b);a=d.xAxis[0].translate(this.x)+a;var e=d.plotHeight,g={x:g?l?k:k-b:a,y:g?e-a-f:l?e-k-b:e-k,width:g?b:f,height:g?f:b};if(f=this.label)f.align(this.alignOptions,null,g),g=f.alignAttr,f[!1===this.options.crop||d.isInsidePlot(g.x,g.y)?"show":"hide"](!0)}};F.prototype.getStacks=function(){var a=this;g(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});
g(a.series,function(f){!f.options.stacking||!0!==f.visible&&!1!==a.options.chart.ignoreHiddenSeries||(f.stackKey=f.type+l(f.options.stack,""))})};A.prototype.buildStacks=function(){var a=this.series,f,b=l(this.options.reversedStacks,!0),d=a.length,g;if(!this.isXAxis){this.usePercentage=!1;for(g=d;g--;)a[b?g:d-g-1].setStackedPoints();for(g=d;g--;)f=a[b?g:d-g-1],f.setStackCliffs&&f.setStackCliffs();if(this.usePercentage)for(g=0;g<d;g++)a[g].setPercentStacks()}};A.prototype.renderStackTotals=function(){var a=
this.chart,f=a.renderer,b=this.stacks,d,g,l=this.stackTotalGroup;l||(this.stackTotalGroup=l=f.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());l.translate(a.plotLeft,a.plotTop);for(d in b)for(g in a=b[d],a)a[g].render(l)};A.prototype.resetStacks=function(){var a=this.stacks,f,b;if(!this.isXAxis)for(f in a)for(b in a[f])a[f][b].touched<this.stacksTouched?(a[f][b].destroy(),delete a[f][b]):(a[f][b].total=null,a[f][b].cum=0)};A.prototype.cleanStacks=function(){var a,f,b;if(!this.isXAxis)for(f in this.oldStacks&&
(a=this.stacks=this.oldStacks),a)for(b in a[f])a[f][b].cum=a[f][b].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,f=this.processedYData,b=[],d=f.length,g=this.options,u=g.threshold,k=g.startFromThreshold?u:0,e=g.stack,g=g.stacking,h=this.stackKey,t="-"+h,v=this.negStacks,c=this.yAxis,q=c.stacks,x=c.oldStacks,L,H,J,D,G,A,F;c.stacksTouched+=1;for(G=0;G<d;G++)A=a[G],F=f[G],L=this.getStackIndicator(L,
A,this.index),D=L.key,J=(H=v&&F<(k?0:u))?t:h,q[J]||(q[J]={}),q[J][A]||(x[J]&&x[J][A]?(q[J][A]=x[J][A],q[J][A].total=null):q[J][A]=new E(c,c.options.stackLabels,H,A,e)),J=q[J][A],null!==F&&(J.points[D]=J.points[this.index]=[l(J.cum,k)],p(J.cum)||(J.base=D),J.touched=c.stacksTouched,0<L.index&&!1===this.singleStacks&&(J.points[D][0]=J.points[this.index+","+A+",0"][0])),"percent"===g?(H=H?h:t,v&&q[H]&&q[H][A]?(H=q[H][A],J.total=H.total=Math.max(H.total,J.total)+Math.abs(F)||0):J.total=I(J.total+(Math.abs(F)||
0))):J.total=I(J.total+(F||0)),J.cum=l(J.cum,k)+(F||0),null!==F&&(J.points[D].push(J.cum),b[G]=J.cum);"percent"===g&&(c.usePercentage=!0);this.stackedYData=b;c.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,f=a.stackKey,b=a.yAxis.stacks,d=a.processedXData,l;g([f,"-"+f],function(f){for(var g=d.length,e,h;g--;)if(e=d[g],l=a.getStackIndicator(l,e,a.index,f),e=(h=b[f]&&b[f][e])&&h.points[l.key])h=h.total?100/h.total:0,e[0]=I(e[0]*h),e[1]=I(e[1]*h),a.stackedYData[g]=e[1]})};a.prototype.getStackIndicator=
function(a,f,b,d){!p(a)||a.x!==f||d&&a.key!==d?a={x:f,index:0,key:d}:a.index++;a.key=[b,f,a.index].join();return a}})(M);(function(a){var E=a.addEvent,A=a.animate,F=a.Axis,I=a.createElement,p=a.css,d=a.defined,g=a.each,t=a.erase,l=a.extend,r=a.fireEvent,f=a.inArray,b=a.isNumber,n=a.isObject,w=a.merge,u=a.pick,k=a.Point,e=a.Series,h=a.seriesTypes,C=a.setAnimation,v=a.splat;l(a.Chart.prototype,{addSeries:function(a,b,e){var c,f=this;a&&(b=u(b,!0),r(f,"addSeries",{options:a},function(){c=f.initSeries(a);
f.isDirtyLegend=!0;f.linkSeries();b&&f.redraw(e)}));return c},addAxis:function(a,b,e,f){var c=b?"xAxis":"yAxis",d=this.options;a=w(a,{index:this[c].length,isX:b});new F(this,a);d[c]=v(d[c]||{});d[c].push(a);u(e,!0)&&this.redraw(f)},showLoading:function(a){var b=this,c=b.options,e=b.loadingDiv,f=c.loading,d=function(){e&&p(e,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=I("div",{className:"highcharts-loading highcharts-loading-hidden"},
null,b.container),b.loadingSpan=I("span",{className:"highcharts-loading-inner"},null,e),E(b,"redraw",d));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;p(e,l(f.style,{zIndex:10}));p(b.loadingSpan,f.labelStyle);b.loadingShown||(p(e,{opacity:0,display:""}),A(e,{opacity:f.style.opacity||.5},{duration:f.showDuration||0}));b.loadingShown=!0;d()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},
{duration:a.loading.hideDuration||100,complete:function(){p(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),
update:function(a,e){var c,h={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},k=a.chart,n,q;if(k){w(!0,this.options.chart,k);"className"in k&&this.setClassName(k.className);if("inverted"in k||"polar"in k)this.propFromSeries(),n=!0;for(c in k)k.hasOwnProperty(c)&&(-1!==f("chart."+c,this.propsRequireUpdateSeries)&&(q=!0),-1!==f(c,this.propsRequireDirtyBox)&&(this.isDirtyBox=!0));"style"in k&&this.renderer.setStyle(k.style)}for(c in a){if(this[c]&&"function"===typeof this[c].update)this[c].update(a[c],
!1);else if("function"===typeof this[h[c]])this[h[c]](a[c]);"chart"!==c&&-1!==f(c,this.propsRequireUpdateSeries)&&(q=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&w(!0,this.options.plotOptions,a.plotOptions);g(["xAxis","yAxis","series"],function(b){a[b]&&g(v(a[b]),function(a){var c=d(a.id)&&this.get(a.id)||this[b][0];c&&c.coll===b&&c.update(a,!1)},this)},this);n&&g(this.axes,function(a){a.update({},!1)});q&&g(this.series,function(a){a.update({},!1)});a.loading&&w(!0,this.options.loading,
a.loading);c=k&&k.width;k=k&&k.height;b(c)&&c!==this.chartWidth||b(k)&&k!==this.chartHeight?this.setSize(c,k):u(e,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});l(k.prototype,{update:function(a,b,e,f){function c(){d.applyOptions(a);null===d.y&&g&&(d.graphic=g.destroy());n(a,!0)&&(g&&g.element&&a&&a.marker&&a.marker.symbol&&(d.graphic=g.destroy()),a&&a.dataLabels&&d.dataLabel&&(d.dataLabel=d.dataLabel.destroy()));k=d.index;h.updateParallelArrays(d,k);m.data[k]=n(m.data[k],!0)?
d.options:a;h.isDirty=h.isDirtyData=!0;!h.fixedBox&&h.hasCartesianSeries&&(q.isDirtyBox=!0);"point"===m.legendType&&(q.isDirtyLegend=!0);b&&q.redraw(e)}var d=this,h=d.series,g=d.graphic,k,q=h.chart,m=h.options;b=u(b,!0);!1===f?c():d.firePointEvent("update",{options:a},c)},remove:function(a,b){this.series.removePoint(f(this,this.series.data),a,b)}});l(e.prototype,{addPoint:function(a,b,e,f){var c=this.options,d=this.data,h=this.chart,g=this.xAxis&&this.xAxis.names,k=c.data,n,m,q=this.xData,l,v;b=u(b,
!0);n={series:this};this.pointClass.prototype.applyOptions.apply(n,[a]);v=n.x;l=q.length;if(this.requireSorting&&v<q[l-1])for(m=!0;l&&q[l-1]>v;)l--;this.updateParallelArrays(n,"splice",l,0,0);this.updateParallelArrays(n,l);g&&n.name&&(g[v]=n.name);k.splice(l,0,a);m&&(this.data.splice(l,0,null),this.processData());"point"===c.legendType&&this.generatePoints();e&&(d[0]&&d[0].remove?d[0].remove(!1):(d.shift(),this.updateParallelArrays(n,"shift"),k.shift()));this.isDirtyData=this.isDirty=!0;b&&h.redraw(f)},
removePoint:function(a,b,e){var c=this,f=c.data,d=f[a],h=c.points,g=c.chart,k=function(){h&&h.length===f.length&&h.splice(a,1);f.splice(a,1);c.options.data.splice(a,1);c.updateParallelArrays(d||{series:c},"splice",a,1);d&&d.destroy();c.isDirty=!0;c.isDirtyData=!0;b&&g.redraw()};C(e,g);b=u(b,!0);d?d.firePointEvent("remove",null,k):k()},remove:function(a,b,e){function c(){f.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();u(a,!0)&&d.redraw(b)}var f=this,d=f.chart;!1!==e?r(f,"remove",null,c):
c()},update:function(a,b){var c=this,e=this.chart,f=this.userOptions,d=this.type,k=a.type||f.type||e.options.chart.type,n=h[d].prototype,q=["group","markerGroup","dataLabelsGroup"],v;if(k&&k!==d||void 0!==a.zIndex)q.length=0;g(q,function(a){q[a]=c[a];delete c[a]});a=w(f,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1,null,!1);for(v in n)this[v]=void 0;l(this,h[k||d].prototype);g(q,function(a){c[a]=q[a]});this.init(e,a);e.linkSeries();u(b,!0)&&e.redraw(!1)}});
l(F.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this.init(c,l(a,{events:void 0}));c.isDirtyBox=!0;u(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,e=this.series,f=e.length;f--;)e[f]&&e[f].remove(!1);t(b.axes,this);t(b[c],this);b.options[c].splice(this.options.index,1);g(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;u(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},
b)},setCategories:function(a,b){this.update({categories:a},b)}})})(M);(function(a){var E=a.color,A=a.each,F=a.map,I=a.pick,p=a.Series,d=a.seriesType;d("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],d=[],l=this.xAxis,p=this.yAxis,f=p.stacks[this.stackKey],b={},n=this.points,w=this.index,u=p.series,k=u.length,e,h=I(p.options.reversedStacks,!0)?1:-1,C,v;if(this.options.stacking){for(C=0;C<n.length;C++)b[n[C].x]=n[C];for(v in f)null!==f[v].total&&d.push(v);
d.sort(function(a,b){return a-b});e=F(u,function(){return this.visible});A(d,function(c,g){var n=0,q,v;if(b[c]&&!b[c].isNull)a.push(b[c]),A([-1,1],function(a){var n=1===a?"rightNull":"leftNull",l=0,u=f[d[g+a]];if(u)for(C=w;0<=C&&C<k;)q=u.points[C],q||(C===w?b[c][n]=!0:e[C]&&(v=f[c].points[C])&&(l-=v[1]-v[0])),C+=h;b[c][1===a?"rightCliff":"leftCliff"]=l});else{for(C=w;0<=C&&C<k;){if(q=f[c].points[C]){n=q[1];break}C+=h}n=p.toPixels(n,!0);a.push({isNull:!0,plotX:l.toPixels(c,!0),plotY:n,yBottom:n})}})}return a},
getGraphPath:function(a){var d=p.prototype.getGraphPath,g=this.options,r=g.stacking,f=this.yAxis,b,n,w=[],u=[],k=this.index,e,h=f.stacks[this.stackKey],C=g.threshold,v=f.getThreshold(g.threshold),c,g=g.connectNulls||"percent"===r,q=function(b,c,d){var g=a[b];b=r&&h[g.x].points[k];var n=g[d+"Null"]||0;d=g[d+"Cliff"]||0;var l,q,g=!0;d||n?(l=(n?b[0]:b[1])+d,q=b[0]+d,g=!!n):!r&&a[c]&&a[c].isNull&&(l=q=C);void 0!==l&&(u.push({plotX:e,plotY:null===l?v:f.getThreshold(l),isNull:g}),w.push({plotX:e,plotY:null===
q?v:f.getThreshold(q),doCurve:!1}))};a=a||this.points;r&&(a=this.getStackPoints());for(b=0;b<a.length;b++)if(n=a[b].isNull,e=I(a[b].rectPlotX,a[b].plotX),c=I(a[b].yBottom,v),!n||g)g||q(b,b-1,"left"),n&&!r&&g||(u.push(a[b]),w.push({x:b,plotX:e,plotY:c})),g||q(b,b+1,"right");b=d.call(this,u,!0,!0);w.reversed=!0;n=d.call(this,w,!0,!0);n.length&&(n[0]="L");n=b.concat(n);d=d.call(this,u,!1,g);n.xMap=b.xMap;this.areaPath=n;return d},drawGraph:function(){this.areaPath=[];p.prototype.drawGraph.apply(this);
var a=this,d=this.areaPath,l=this.options,r=[["area","highcharts-area",this.color,l.fillColor]];A(this.zones,function(d,b){r.push(["zone-area-"+b,"highcharts-area highcharts-zone-area-"+b+" "+d.className,d.color||a.color,d.fillColor||l.fillColor])});A(r,function(f){var b=f[0],g=a[b];g?(g.endX=d.xMap,g.animate({d:d})):(g=a[b]=a.chart.renderer.path(d).addClass(f[1]).attr({fill:I(f[3],E(f[2]).setOpacity(I(l.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=d.xMap;g.shiftUnit=l.step?
2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,F,I){var p=F.plotX,d=F.plotY,g=a[I-1];I=a[I+1];var t,l,r,f;if(g&&!g.isNull&&!1!==g.doCurve&&I&&!I.isNull&&!1!==I.doCurve){a=g.plotY;r=I.plotX;I=I.plotY;var b=0;t=(1.5*p+g.plotX)/2.5;l=(1.5*d+a)/2.5;r=(1.5*p+r)/2.5;f=(1.5*d+I)/2.5;r!==t&&(b=(f-l)*(r-p)/(r-t)+d-f);l+=b;f+=b;l>a&&l>d?(l=Math.max(a,d),f=2*d-l):l<a&&l<d&&(l=Math.min(a,d),f=2*d-l);f>I&&
f>d?(f=Math.max(I,d),l=2*d-f):f<I&&f<d&&(f=Math.min(I,d),l=2*d-f);F.rightContX=r;F.rightContY=f}F=["C",E(g.rightContX,g.plotX),E(g.rightContY,g.plotY),E(t,p),E(l,d),p,d];g.rightContX=g.rightContY=null;return F}})})(M);(function(a){var E=a.seriesTypes.area.prototype,A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,setStackCliffs:E.setStackCliffs,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);
(function(a){var E=a.animObject,A=a.color,F=a.each,I=a.extend,p=a.isNumber,d=a.merge,g=a.pick,t=a.Series,l=a.seriesType,r=a.svg;l("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,
borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){t.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&F(b.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,b=a.options,d=a.xAxis,l=a.yAxis,u=d.reversed,k,e={},h=0;!1===b.grouping?h=1:F(a.chart.series,function(b){var c=b.options,d=b.yAxis,f;b.type===a.type&&b.visible&&l.len===d.len&&l.pos===d.pos&&(c.stacking?(k=
b.stackKey,void 0===e[k]&&(e[k]=h++),f=e[k]):!1!==c.grouping&&(f=h++),b.columnIndex=f)});var p=Math.min(Math.abs(d.transA)*(d.ordinalSlope||b.pointRange||d.closestPointRange||d.tickInterval||1),d.len),v=p*b.groupPadding,c=(p-2*v)/h,b=Math.min(b.maxPointWidth||d.len,g(b.pointWidth,c*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(c-b)/2+(v+((a.columnIndex||0)+(u?1:0))*c-p/2)*(u?-1:1)};return a.columnMetrics},crispCol:function(a,b,d,g){var f=this.chart,k=this.borderWidth,e=-(k%2?.5:0),k=k%2?
.5:1;f.inverted&&f.renderer.isVML&&(k+=1);d=Math.round(a+d)+e;a=Math.round(a)+e;g=Math.round(b+g)+k;e=.5>=Math.abs(b)&&.5<g;b=Math.round(b)+k;g-=b;e&&g&&(--b,g+=1);return{x:a,y:b,width:d-a,height:g}},translate:function(){var a=this,b=a.chart,d=a.options,l=a.dense=2>a.closestPointRange*a.xAxis.transA,l=a.borderWidth=g(d.borderWidth,l?0:1),u=a.yAxis,k=a.translatedThreshold=u.getThreshold(d.threshold),e=g(d.minPointLength,5),h=a.getColumnMetrics(),p=h.width,v=a.barW=Math.max(p,1+2*l),c=a.pointXOffset=
h.offset;b.inverted&&(k-=.5);d.pointPadding&&(v=Math.ceil(v));t.prototype.translate.apply(a);F(a.points,function(d){var f=g(d.yBottom,k),h=999+Math.abs(f),h=Math.min(Math.max(-h,d.plotY),u.len+h),n=d.plotX+c,l=v,q=Math.min(h,f),r,t=Math.max(h,f)-q;Math.abs(t)<e&&e&&(t=e,r=!u.reversed&&!d.negative||u.reversed&&d.negative,q=Math.abs(q-k)>e?f-e:k-(r?e:0));d.barX=n;d.pointWidth=p;d.tooltipPos=b.inverted?[u.len+u.pos-b.plotLeft-h,a.xAxis.len-n-l/2,t]:[n+l/2,h+u.pos-b.plotTop,t];d.shapeType="rect";d.shapeArgs=
a.crispCol.apply(a,d.isNull?[d.plotX,u.len/2,0,0]:[n,q,l,t])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,b){var d=this.options,f=this.pointAttrToOptions||{},g=f.stroke||"borderColor",k=f["stroke-width"]||"borderWidth",e=a&&a.color||this.color,h=a[g]||d[g]||this.color||e,f=d.dashStyle,l;a&&this.zones.length&&(e=(e=a.getZone())&&e.color||a.options.color||
this.color);b&&(b=d.states[b],l=b.brightness,e=b.color||void 0!==l&&A(e).brighten(b.brightness).get()||e,h=b[g]||h,f=b.dashStyle||f);a={fill:e,stroke:h,"stroke-width":a[k]||d[k]||this[k]||0};d.borderRadius&&(a.r=d.borderRadius);f&&(a.dashstyle=f);return a},drawPoints:function(){var a=this,b=this.chart,g=a.options,l=b.renderer,u=g.animationLimit||250,k;F(a.points,function(e){var f=e.graphic;if(p(e.plotY)&&null!==e.y){k=e.shapeArgs;if(f)f[b.pointCount<u?"animate":"attr"](d(k));else e.graphic=f=l[e.shapeType](k).attr({"class":e.getClassName()}).add(e.group||
a.group);f.attr(a.pointAttribs(e,e.selected&&"select")).shadow(g.shadow,null,g.stacking&&!g.borderRadius)}else f&&(e.graphic=f.destroy())})},animate:function(a){var b=this,d=this.yAxis,f=b.options,g=this.chart.inverted,k={};r&&(a?(k.scaleY=.001,a=Math.min(d.pos+d.len,Math.max(d.pos,d.toPixels(f.threshold))),g?k.translateX=a-d.len:k.translateY=a,b.group.attr(k)):(k[g?"translateX":"translateY"]=d.pos,b.group.animate(k,I(E(b.options.animation),{step:function(a,d){b.group.attr({scaleY:Math.max(.001,d.pos)})}})),
b.animate=null))},remove:function(){var a=this,b=a.chart;b.hasRendered&&F(b.series,function(b){b.type===a.type&&(b.isDirty=!0)});t.prototype.remove.apply(a,arguments)}})})(M);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(M);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(M);(function(a){var E=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,I=this.chart,p=2*(a.slicedOffset||0),d=I.plotWidth-2*p,I=I.plotHeight-
2*p,g=a.center,g=[E(g[0],"50%"),E(g[1],"50%"),a.size||"100%",a.innerSize||0],t=Math.min(d,I),l,r;for(l=0;4>l;++l)r=g[l],a=2>l||2===l&&/%$/.test(r),g[l]=A(r,[d,I,t,g[2]][l])+(a?p:0);g[3]>g[2]&&(g[3]=g[2]);return g}}})(M);(function(a){var E=a.addEvent,A=a.defined,F=a.each,I=a.extend,p=a.inArray,d=a.noop,g=a.pick,t=a.Point,l=a.Series,r=a.seriesType,f=a.setAnimation;r("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?
void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,d=b.points,f=b.startAngleRad;a||(F(d,function(a){var e=
a.graphic,d=a.shapeArgs;e&&(e.attr({r:a.startR||b.center[3]/2,start:f,end:f}),e.animate({r:d.r,start:d.start,end:d.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,d=0,f=this.points,g=f.length,k,e=this.options.ignoreHiddenPoint;for(a=0;a<g;a++)k=f[a],0>k.y&&(k.y=null),d+=e&&!k.visible?0:k.y;this.total=d;for(a=0;a<g;a++)k=f[a],k.percentage=0<d&&(k.visible||!e)?k.y/d*100:0,k.total=d},generatePoints:function(){l.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();
var b=0,d=this.options,f=d.slicedOffset,k=f+(d.borderWidth||0),e,h,l,v=d.startAngle||0,c=this.startAngleRad=Math.PI/180*(v-90),v=(this.endAngleRad=Math.PI/180*(g(d.endAngle,v+360)-90))-c,q=this.points,p=d.dataLabels.distance,d=d.ignoreHiddenPoint,r,t=q.length,A;a||(this.center=a=this.getCenter());this.getX=function(b,c){l=Math.asin(Math.min((b-a[1])/(a[2]/2+p),1));return a[0]+(c?-1:1)*Math.cos(l)*(a[2]/2+p)};for(r=0;r<t;r++){A=q[r];e=c+b*v;if(!d||A.visible)b+=A.percentage/100;h=c+b*v;A.shapeType=
"arc";A.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*e)/1E3,end:Math.round(1E3*h)/1E3};l=(h+e)/2;l>1.5*Math.PI?l-=2*Math.PI:l<-Math.PI/2&&(l+=2*Math.PI);A.slicedTranslation={translateX:Math.round(Math.cos(l)*f),translateY:Math.round(Math.sin(l)*f)};e=Math.cos(l)*a[2]/2;h=Math.sin(l)*a[2]/2;A.tooltipPos=[a[0]+.7*e,a[1]+.7*h];A.half=l<-Math.PI/2||l>Math.PI/2?1:0;A.angle=l;k=Math.min(k,p/5);A.labelPos=[a[0]+e+Math.cos(l)*p,a[1]+h+Math.sin(l)*p,a[0]+e+Math.cos(l)*k,a[1]+h+Math.sin(l)*
k,a[0]+e,a[1]+h,0>p?"center":A.half?"right":"left",l]}},drawGraph:null,drawPoints:function(){var a=this,d=a.chart.renderer,f,g,k,e,h=a.options.shadow;h&&!a.shadowGroup&&(a.shadowGroup=d.g("shadow").add(a.group));F(a.points,function(b){if(null!==b.y){g=b.graphic;e=b.shapeArgs;f=b.sliced?b.slicedTranslation:{};var l=b.shadowGroup;h&&!l&&(l=b.shadowGroup=d.g("shadow").add(a.shadowGroup));l&&l.attr(f);k=a.pointAttribs(b,b.selected&&"select");g?g.setRadialReference(a.center).attr(k).animate(I(e,f)):(b.graphic=
g=d[b.shapeType](e).addClass(b.getClassName()).setRadialReference(a.center).attr(f).add(a.group),b.visible||g.attr({visibility:"hidden"}),g.attr(k).attr({"stroke-linejoin":"round"}).shadow(h,l))}})},searchPoint:d,sortByAngle:function(a,d){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*d})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:d},{init:function(){t.prototype.init.apply(this,arguments);var a=this,d;a.name=g(a.name,"Slice");
d=function(b){a.slice("select"===b.type)};E(a,"select",d);E(a,"unselect",d);return a},setVisible:function(a,d){var b=this,f=b.series,k=f.chart,e=f.options.ignoreHiddenPoint;d=g(d,e);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,f.options.data[p(b,f.data)]=b.options,F(["graphic","dataLabel","connector","shadowGroup"],function(e){if(b[e])b[e][a?"show":"hide"](!0)}),b.legendItem&&k.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),e&&(f.isDirty=!0),d&&k.redraw())},
slice:function(a,d,l){var b=this.series;f(l,b.chart);g(d,!0);this.sliced=this.options.sliced=a=A(a)?a:!this.sliced;b.options.data[p(this,b.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}})})(M);(function(a){var E=
a.addEvent,A=a.arrayMax,F=a.defined,I=a.each,p=a.extend,d=a.format,g=a.map,t=a.merge,l=a.noop,r=a.pick,f=a.relativeLength,b=a.Series,n=a.seriesTypes,w=a.stableSort;a.distribute=function(a,b){function e(a,b){return a.target-b.target}var d,f=!0,k=a,c=[],l;l=0;for(d=a.length;d--;)l+=a[d].size;if(l>b){w(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=d=0;l<=b;)l+=a[d].size,d++;c=a.splice(d-1,a.length)}w(a,e);for(a=g(a,function(a){return{size:a.size,targets:[a.target]}});f;){for(d=a.length;d--;)f=
a[d],l=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,l-f.size/2),b-f.size);d=a.length;for(f=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].pos+a[d-1].size>b&&(a[d-1].pos=b-a[d-1].size),a.splice(d,1),f=!0)}d=0;I(a,function(a){var b=0;I(a.targets,function(){k[d].pos=a.pos+b;b+=k[d].size;d++})});k.push.apply(k,c);w(k,e)};b.prototype.drawDataLabels=function(){var a=this,b=a.options,
e=b.dataLabels,f=a.points,g,l,c=a.hasRendered||0,n,x,w=r(e.defer,!0),H=a.chart.renderer;if(e.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(e),x=a.plotGroup("dataLabelsGroup","data-labels",w&&!c?"hidden":"visible",e.zIndex||6),w&&(x.attr({opacity:+c}),c||E(a,"afterAnimate",function(){a.visible&&x.show(!0);x[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),l=e,I(f,function(c){var f,h=c.dataLabel,k,q,m=c.connector,v=!0,u,w={};g=c.dlOptions||c.options&&c.options.dataLabels;
f=r(g&&g.enabled,l.enabled)&&null!==c.y;if(h&&!f)c.dataLabel=h.destroy();else if(f){e=t(l,g);u=e.style;f=e.rotation;k=c.getLabelConfig();n=e.format?d(e.format,k):e.formatter.call(k,e);u.color=r(e.color,u.color,a.color,"#000000");if(h)F(n)?(h.attr({text:n}),v=!1):(c.dataLabel=h=h.destroy(),m&&(c.connector=m.destroy()));else if(F(n)){h={fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.borderWidth,r:e.borderRadius||0,rotation:f,padding:e.padding,zIndex:1};"contrast"===u.color&&(w.color=e.inside||
0>e.distance||b.stacking?H.getContrast(c.color||a.color):"#000000");b.cursor&&(w.cursor=b.cursor);for(q in h)void 0===h[q]&&delete h[q];h=c.dataLabel=H[f?"text":"label"](n,0,-9999,e.shape,null,null,e.useHTML,null,"data-label").attr(h);h.addClass("highcharts-data-label-color-"+c.colorIndex+" "+(e.className||""));h.css(p(u,w));h.add(x);h.shadow(e.shadow)}h&&a.alignDataLabel(c,h,e,null,v)}})};b.prototype.alignDataLabel=function(a,b,e,d,f){var g=this.chart,c=g.inverted,h=r(a.plotX,-9999),k=r(a.plotY,
-9999),l=b.getBBox(),n,u=e.rotation,t=e.align,w=this.visible&&(a.series.forceDL||g.isInsidePlot(h,Math.round(k),c)||d&&g.isInsidePlot(h,c?d.x+1:d.y+d.height-1,c)),A="justify"===r(e.overflow,"justify");w&&(n=e.style.fontSize,n=g.renderer.fontMetrics(n,b).b,d=p({x:c?g.plotWidth-k:h,y:Math.round(c?g.plotHeight-h:k),width:0,height:0},d),p(e,{width:l.width,height:l.height}),u?(A=!1,c=g.renderer.rotCorr(n,u),c={x:d.x+e.x+d.width/2+c.x,y:d.y+e.y+{top:0,middle:.5,bottom:1}[e.verticalAlign]*d.height},b[f?
"attr":"animate"](c).attr({align:t}),h=(u+720)%360,h=180<h&&360>h,"left"===t?c.y-=h?l.height:0:"center"===t?(c.x-=l.width/2,c.y-=l.height/2):"right"===t&&(c.x-=l.width,c.y-=h?0:l.height)):(b.align(e,null,d),c=b.alignAttr),A?this.justifyDataLabel(b,e,c,l,d,f):r(e.crop,!0)&&(w=g.isInsidePlot(c.x,c.y)&&g.isInsidePlot(c.x+l.width,c.y+l.height)),e.shape&&!u&&b.attr({anchorX:a.plotX,anchorY:a.plotY}));w||(b.attr({y:-9999}),b.placed=!1)};b.prototype.justifyDataLabel=function(a,b,e,d,f,g){var c=this.chart,
h=b.align,k=b.verticalAlign,l,n,v=a.box?0:a.padding||0;l=e.x+v;0>l&&("right"===h?b.align="left":b.x=-l,n=!0);l=e.x+d.width-v;l>c.plotWidth&&("left"===h?b.align="right":b.x=c.plotWidth-l,n=!0);l=e.y+v;0>l&&("bottom"===k?b.verticalAlign="top":b.y=-l,n=!0);l=e.y+d.height-v;l>c.plotHeight&&("top"===k?b.verticalAlign="bottom":b.y=c.plotHeight-l,n=!0);n&&(a.placed=!g,a.align(b,null,f))};n.pie&&(n.pie.prototype.drawDataLabels=function(){var d=this,f=d.data,e,h=d.chart,l=d.options.dataLabels,n=r(l.connectorPadding,
10),c=r(l.connectorWidth,1),q=h.plotWidth,p=h.plotHeight,t,w=l.distance,E=d.center,D=E[2]/2,G=E[1],F=0<w,N,m,y,O,M=[[],[]],z,B,Q,R,S=[0,0,0,0];d.visible&&(l.enabled||d._hasPointLabels)&&(b.prototype.drawDataLabels.apply(d),I(f,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),I(M,function(b,c){var f,k,v=b.length,r,u,t;if(v)for(d.sortByAngle(b,c-.5),0<w&&(f=Math.max(0,G-D-w),k=Math.min(G+D+w,h.plotHeight),r=g(b,function(a){if(a.dataLabel)return t=a.dataLabel.getBBox().height||
21,{target:a.labelPos[1]-f+t/2,size:t,rank:a.y}}),a.distribute(r,k+t-f)),R=0;R<v;R++)e=b[R],y=e.labelPos,N=e.dataLabel,Q=!1===e.visible?"hidden":"inherit",u=y[1],r?void 0===r[R].pos?Q="hidden":(O=r[R].size,B=f+r[R].pos):B=u,z=l.justify?E[0]+(c?-1:1)*(D+w):d.getX(B<f+2||B>k-2?u:B,c),N._attr={visibility:Q,align:y[6]},N._pos={x:z+l.x+({left:n,right:-n}[y[6]]||0),y:B+l.y-10},y.x=z,y.y=B,null===d.options.size&&(m=N.width,z-m<n?S[3]=Math.max(Math.round(m-z+n),S[3]):z+m>q-n&&(S[1]=Math.max(Math.round(z+
m-q+n),S[1])),0>B-O/2?S[0]=Math.max(Math.round(-B+O/2),S[0]):B+O/2>p&&(S[2]=Math.max(Math.round(B+O/2-p),S[2])))}),0===A(S)||this.verifyDataLabelOverflow(S))&&(this.placeDataLabels(),F&&c&&I(this.points,function(a){var b;t=a.connector;if((N=a.dataLabel)&&N._pos&&a.visible){Q=N._attr.visibility;if(b=!t)a.connector=t=h.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(d.dataLabelsGroup),t.attr({"stroke-width":c,stroke:l.connectorColor||a.color||"#666666"});
t[b?"attr":"animate"]({d:d.connectorPath(a.labelPos)});t.attr("visibility",Q)}else t&&(a.connector=t.destroy())}))},n.pie.prototype.connectorPath=function(a){var b=a.x,d=a.y;return r(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),d,"C",b,d,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),d,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){I(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.attr(b._attr),
b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))})},n.pie.prototype.alignDataLabel=l,n.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,d=this.options,g=d.center,l=d.minSize||80,n,c;null!==g[0]?n=Math.max(b[2]-Math.max(a[1],a[3]),l):(n=Math.max(b[2]-a[1]-a[3],l),b[0]+=(a[3]-a[1])/2);null!==g[1]?n=Math.max(Math.min(n,b[2]-Math.max(a[0],a[2])),l):(n=Math.max(Math.min(n,b[2]-a[0]-a[2]),l),b[1]+=(a[0]-a[2])/2);n<b[2]?(b[2]=n,b[3]=Math.min(f(d.innerSize||0,n),n),this.translate(b),
this.drawDataLabels&&this.drawDataLabels()):c=!0;return c});n.column&&(n.column.prototype.alignDataLabel=function(a,d,e,f,g){var h=this.chart.inverted,c=a.series,k=a.dlBox||a.shapeArgs,l=r(a.below,a.plotY>r(this.translatedThreshold,c.yAxis.len)),n=r(e.inside,!!this.options.stacking);k&&(f=t(k),0>f.y&&(f.height+=f.y,f.y=0),k=f.y+f.height-c.yAxis.len,0<k&&(f.height-=k),h&&(f={x:c.yAxis.len-f.y-f.height,y:c.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(h?(f.x+=l?0:f.width,f.width=0):(f.y+=
l?f.height:0,f.height=0)));e.align=r(e.align,!h||n?"center":l?"right":"left");e.verticalAlign=r(e.verticalAlign,h||n?"middle":l?"top":"bottom");b.prototype.alignDataLabel.call(this,a,d,e,f,g)})})(M);(function(a){var E=a.Chart,A=a.each,F=a.pick,I=a.addEvent;E.prototype.callbacks.push(function(a){function d(){var d=[];A(a.series,function(a){var g=a.options.dataLabels,p=a.dataLabelCollections||["dataLabel"];(g.enabled||a._hasPointLabels)&&!g.allowOverlap&&a.visible&&A(p,function(f){A(a.points,function(a){a[f]&&
(a[f].labelrank=F(a.labelrank,a.shapeArgs&&a.shapeArgs.height),d.push(a[f]))})})});a.hideOverlappingLabels(d)}d();I(a,"redraw",d)});E.prototype.hideOverlappingLabels=function(a){var d=a.length,g,p,l,r,f,b,n,w,u,k=function(a,b,d,f,c,g,k,l){return!(c>a+d||c+k<a||g>b+f||g+l<b)};for(p=0;p<d;p++)if(g=a[p])g.oldOpacity=g.opacity,g.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(p=0;p<d;p++)for(l=a[p],g=p+1;g<d;++g)if(r=a[g],l&&r&&l.placed&&r.placed&&0!==l.newOpacity&&0!==
r.newOpacity&&(f=l.alignAttr,b=r.alignAttr,n=l.parentGroup,w=r.parentGroup,u=2*(l.box?0:l.padding),f=k(f.x+n.translateX,f.y+n.translateY,l.width-u,l.height-u,b.x+w.translateX,b.y+w.translateY,r.width-u,r.height-u)))(l.labelrank<r.labelrank?l:r).newOpacity=0;A(a,function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&a.placed&&(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(M);(function(a){var E=a.addEvent,A=a.Chart,F=a.createElement,
I=a.css,p=a.defaultOptions,d=a.defaultPlotOptions,g=a.each,t=a.extend,l=a.fireEvent,r=a.hasTouch,f=a.inArray,b=a.isObject,n=a.Legend,w=a.merge,u=a.pick,k=a.Point,e=a.Series,h=a.seriesTypes,C=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,d=b.pointer,e=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(void 0!==d&&d!==b.hoverPoint)d.onMouseOver(a)};g(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.element.point=a)});a._hasTracking||
(g(a.trackerGroups,function(b){if(a[b]){a[b].addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(r)a[b].on("touchstart",e);a.options.cursor&&a[b].css(I).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,d=b.trackByArea,e=[].concat(d?a.areaPath:a.graphPath),f=e.length,h=a.chart,k=h.pointer,l=h.renderer,n=h.options.tooltip.snap,p=a.tracker,t,m=function(){if(h.hoverSeries!==a)a.onMouseOver()},u=
"rgba(192,192,192,"+(C?.0001:.002)+")";if(f&&!d)for(t=f+1;t--;)"M"===e[t]&&e.splice(t+1,0,e[t+1]-n,e[t+2],"L"),(t&&"M"===e[t]||t===f)&&e.splice(t,0,"L",e[t-2]+n,e[t-1]);p?p.attr({d:e}):a.graph&&(a.tracker=l.path(e).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:u,fill:d?u:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*n),zIndex:2}).add(a.group),g([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){k.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(r)a.on("touchstart",m)}))}};h.column&&(h.column.prototype.drawTracker=a.drawTrackerPoint);h.pie&&(h.pie.prototype.drawTracker=a.drawTrackerPoint);h.scatter&&(h.scatter.prototype.drawTracker=a.drawTrackerPoint);t(n.prototype,{setItemEvents:function(a,b,d){var c=this,e=c.chart,f="highcharts-legend-"+(a.series?"point":"series")+"-active";(d?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.seriesGroup.addClass(f);b.css(c.options.itemHoverStyle)}).on("mouseout",
function(){b.css(a.visible?c.itemStyle:c.itemHiddenStyle);e.seriesGroup.removeClass(f);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):l(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=F("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){l(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});p.legend.itemStyle.cursor="pointer";t(A.prototype,{showResetZoom:function(){var a=this,b=p.lang,d=a.options.chart.resetZoomButton,e=d.theme,f=e.states,g="chart"===d.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},e,f&&f.hover).attr({align:d.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,g)},zoomOut:function(){var a=this;
l(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var c,d=this.pointer,e=!1,f;!a||a.resetSelection?g(this.axes,function(a){c=a.zoom()}):g(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;d[b.isXAxis?"zoomX":"zoomY"]&&(c=b.zoom(a.min,a.max),b.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&b(f)&&(this.resetZoomButton=f.destroy());c&&this.redraw(u(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&g(d,function(a){a.setState()});g("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,h=b.toValue(g+b.len-f,!0)-h,g=g>f;b.series.length&&(g||l>Math.min(k.dataMin,k.min))&&(!g||h<Math.max(k.dataMax,k.max))&&(b.setExtremes(l,h,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);I(c.container,{cursor:"move"})}});t(k.prototype,{select:function(a,b){var c=
this,d=c.series,e=d.chart;a=u(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[f(c,d.data)]=c.options;c.setState(a&&"select");b||g(e.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[f(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(this.series){if(!b){if(f&&f!==this)f.onMouseOut();
if(d.hoverSeries!==c)c.onMouseOver();d.hoverPoint=this}!e||e.shared&&!c.noSharedTooltip?e||this.setState("hover"):(this.setState("hover"),e.refresh(this,a));this.firePointEvent("mouseOver")}},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");b&&-1!==f(this,b)||(this.setState(),a.hoverPoint=null)},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,this.options).events,b;this.events=a;for(b in a)E(this,b,a[b]);this.hasImportedEvents=
!0}},setState:function(a,b){var c=Math.floor(this.plotX),e=this.plotY,f=this.series,g=f.options.states[a]||{},h=d[f.type].marker&&f.options.marker,k=h&&!1===h.enabled,l=h&&h.states&&h.states[a]||{},n=!1===l.enabled,p=f.stateMarkerGraphic,m=this.marker||{},r=f.chart,v=f.halo,w,z=h&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(n||k&&!1===l.enabled)||a&&m.states&&m.states[a]&&!1===m.states[a].enabled)){z&&(w=f.markerAttribs(this,a));if(this.graphic)this.state&&
this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),w&&this.graphic.animate(w,u(r.options.chart.animation,l.animation,h.animation)),p&&p.hide();else{if(a&&l){h=m.symbol||f.symbol;p&&p.currentSymbol!==h&&(p=p.destroy());if(p)p[b?"animate":"attr"]({x:w.x,y:w.y});else h&&(f.stateMarkerGraphic=p=r.renderer.symbol(h,w.x,w.y,w.width,w.height).add(f.markerGroup),p.currentSymbol=h);p&&p.attr(f.pointAttribs(this,
a))}p&&(p[a&&r.isInsidePlot(c,e,r.inverted)?"show":"hide"](),p.element.point=this)}(c=g.halo)&&c.size?(v||(f.halo=v=r.renderer.path().add(z?f.markerGroup:f.group)),v[b?"animate":"attr"]({d:this.haloPath(c.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+u(this.colorIndex,f.colorIndex)}),v.attr(t({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):v&&v.animate({d:this.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});t(e.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&l(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,d=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&l(this,"mouseOut");!d||a.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();this.setState()},setState:function(a){var b=this,d=
b.options,e=b.graph,f=d.states,h=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(g([b.group,b.markerGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(h=f[a].lineWidth||h+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(f={"stroke-width":h},e.attr(f);b["zone-graph-"+d];)b["zone-graph-"+d].attr(f),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,
k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";g(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&g(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});g(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();l(c,f)},show:function(){this.setVisible(!0)},
hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);l(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(M);(function(a){var E=a.Chart,A=a.each,F=a.inArray,I=a.isObject,p=a.pick,d=a.splat;E.prototype.setResponsive=function(a){var d=this.options.responsive;d&&d.rules&&A(d.rules,function(d){this.matchResponsiveRule(d,a)},this)};E.prototype.matchResponsiveRule=function(d,t){var g=this.respRules,r=d.condition,
f;f=r.callback||function(){return this.chartWidth<=p(r.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=p(r.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=p(r.minWidth,0)&&this.chartHeight>=p(r.minHeight,0)};void 0===d._id&&(d._id=a.uniqueKey());f=f.call(this);!g[d._id]&&f?d.chartOptions&&(g[d._id]=this.currentOptions(d.chartOptions),this.update(d.chartOptions,t)):g[d._id]&&!f&&(this.update(g[d._id],t),delete g[d._id])};E.prototype.currentOptions=function(a){function g(a,f,b){var l,p;for(l in a)if(-1<
F(l,["series","xAxis","yAxis"]))for(a[l]=d(a[l]),b[l]=[],p=0;p<a[l].length;p++)b[l][p]={},g(a[l][p],f[l][p],b[l][p]);else I(a[l])?(b[l]={},g(a[l],f[l]||{},b[l])):b[l]=f[l]||null}var l={};g(a,this.options,l);return l}})(M);return M});


/***/ },
/* 1207 */,
/* 1208 */,
/* 1209 */,
/* 1210 */,
/* 1211 */,
/* 1212 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 1213 */
/***/ function(module, exports) {

module.exports = ".table-hero {\n  width: 100%;\n  height: 350px;\n}\n"

/***/ },
/* 1214 */
/***/ function(module, exports) {

module.exports = ".new-person-container {\n  padding: 1rem;\n}\n.new-person-container .col-form-label {\n  padding-left: 40px;\n}\n.new-person-container hr {\n  border-top: 1px solid #d3d3d3;\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n"

/***/ },
/* 1215 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 1216 */
/***/ function(module, exports) {

module.exports = ".jw-bg-primary {\n  background-color: #0275d8;\n  color: #fff;\n}\n.jw-bg-primary a {\n  color: #fff;\n}\n.jw-bg-primary li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-primary li a.active {\n  color: #fff;\n}\n.jw-bg-primary .dropdown-menu {\n  background: #0275d8;\n}\n.jw-bg-primary .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #0275d8;\n}\n.jw-bg-success {\n  background-color: #5cb85c;\n  color: #fff;\n}\n.jw-bg-success a {\n  color: #fff;\n}\n.jw-bg-success li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-success li a.active {\n  color: #fff;\n}\n.jw-bg-success .dropdown-menu {\n  background: #5cb85c;\n}\n.jw-bg-success .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5cb85c;\n}\n.jw-bg-info {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.jw-bg-info a {\n  color: #fff;\n}\n.jw-bg-info li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-info li a.active {\n  color: #fff;\n}\n.jw-bg-info .dropdown-menu {\n  background: #5bc0de;\n}\n.jw-bg-info .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5bc0de;\n}\n.jw-bg-warning {\n  background-color: #f0ad4e;\n  color: #fff;\n}\n.jw-bg-warning a {\n  color: #fff;\n}\n.jw-bg-warning li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-warning li a.active {\n  color: #fff;\n}\n.jw-bg-warning .dropdown-menu {\n  background: #f0ad4e;\n}\n.jw-bg-warning .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n}\n.jw-bg-danger {\n  background-color: #d9534f;\n  color: #fff;\n}\n.jw-bg-danger a {\n  color: #fff;\n}\n.jw-bg-danger li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-danger li a.active {\n  color: #fff;\n}\n.jw-bg-danger .dropdown-menu {\n  background: #d9534f;\n}\n.jw-bg-danger .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #d9534f;\n}\n.jw-bg-inverse {\n  background-color: #373a3c;\n  color: #fff;\n}\n.jw-bg-inverse a {\n  color: #fff;\n}\n.jw-bg-inverse li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-inverse li a.active {\n  color: #fff;\n}\n.jw-bg-inverse .dropdown-menu {\n  background: #373a3c;\n}\n.jw-bg-inverse .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #373a3c;\n}\n.font-gradient-primary {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0275d8), to(#5cb85c));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\nchart {\n  display: block;\n  width: 100%;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n"

/***/ },
/* 1217 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 1218 */
/***/ function(module, exports) {

module.exports = ".jw-bg-primary {\n  background-color: #0275d8;\n  color: #fff;\n}\n.jw-bg-primary a {\n  color: #fff;\n}\n.jw-bg-primary li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-primary li a.active {\n  color: #fff;\n}\n.jw-bg-primary .dropdown-menu {\n  background: #0275d8;\n}\n.jw-bg-primary .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #0275d8;\n}\n.jw-bg-success {\n  background-color: #5cb85c;\n  color: #fff;\n}\n.jw-bg-success a {\n  color: #fff;\n}\n.jw-bg-success li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-success li a.active {\n  color: #fff;\n}\n.jw-bg-success .dropdown-menu {\n  background: #5cb85c;\n}\n.jw-bg-success .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5cb85c;\n}\n.jw-bg-info {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.jw-bg-info a {\n  color: #fff;\n}\n.jw-bg-info li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-info li a.active {\n  color: #fff;\n}\n.jw-bg-info .dropdown-menu {\n  background: #5bc0de;\n}\n.jw-bg-info .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5bc0de;\n}\n.jw-bg-warning {\n  background-color: #f0ad4e;\n  color: #fff;\n}\n.jw-bg-warning a {\n  color: #fff;\n}\n.jw-bg-warning li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-warning li a.active {\n  color: #fff;\n}\n.jw-bg-warning .dropdown-menu {\n  background: #f0ad4e;\n}\n.jw-bg-warning .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n}\n.jw-bg-danger {\n  background-color: #d9534f;\n  color: #fff;\n}\n.jw-bg-danger a {\n  color: #fff;\n}\n.jw-bg-danger li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-danger li a.active {\n  color: #fff;\n}\n.jw-bg-danger .dropdown-menu {\n  background: #d9534f;\n}\n.jw-bg-danger .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #d9534f;\n}\n.jw-bg-inverse {\n  background-color: #373a3c;\n  color: #fff;\n}\n.jw-bg-inverse a {\n  color: #fff;\n}\n.jw-bg-inverse li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-inverse li a.active {\n  color: #fff;\n}\n.jw-bg-inverse .dropdown-menu {\n  background: #373a3c;\n}\n.jw-bg-inverse .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #373a3c;\n}\n.font-gradient-primary {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0275d8), to(#5cb85c));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.vk-pagetitle {\n  padding: 0 10px;\n  margin-bottom: 10px;\n  border-left: 5px solid #8fc81f;\n  text-transform: capitalize;\n}\n.vk-subtitle {\n  text-transform: none;\n  font-size: 0.8rem;\n}\n"

/***/ },
/* 1219 */
/***/ function(module, exports) {

module.exports = ".jw-bg-primary {\n  background-color: #0275d8;\n  color: #fff;\n}\n.jw-bg-primary a {\n  color: #fff;\n}\n.jw-bg-primary li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-primary li a.active {\n  color: #fff;\n}\n.jw-bg-primary .dropdown-menu {\n  background: #0275d8;\n}\n.jw-bg-primary .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #0275d8;\n}\n.jw-bg-success {\n  background-color: #5cb85c;\n  color: #fff;\n}\n.jw-bg-success a {\n  color: #fff;\n}\n.jw-bg-success li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-success li a.active {\n  color: #fff;\n}\n.jw-bg-success .dropdown-menu {\n  background: #5cb85c;\n}\n.jw-bg-success .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5cb85c;\n}\n.jw-bg-info {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.jw-bg-info a {\n  color: #fff;\n}\n.jw-bg-info li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-info li a.active {\n  color: #fff;\n}\n.jw-bg-info .dropdown-menu {\n  background: #5bc0de;\n}\n.jw-bg-info .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5bc0de;\n}\n.jw-bg-warning {\n  background-color: #f0ad4e;\n  color: #fff;\n}\n.jw-bg-warning a {\n  color: #fff;\n}\n.jw-bg-warning li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-warning li a.active {\n  color: #fff;\n}\n.jw-bg-warning .dropdown-menu {\n  background: #f0ad4e;\n}\n.jw-bg-warning .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n}\n.jw-bg-danger {\n  background-color: #d9534f;\n  color: #fff;\n}\n.jw-bg-danger a {\n  color: #fff;\n}\n.jw-bg-danger li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-danger li a.active {\n  color: #fff;\n}\n.jw-bg-danger .dropdown-menu {\n  background: #d9534f;\n}\n.jw-bg-danger .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #d9534f;\n}\n.jw-bg-inverse {\n  background-color: #373a3c;\n  color: #fff;\n}\n.jw-bg-inverse a {\n  color: #fff;\n}\n.jw-bg-inverse li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-inverse li a.active {\n  color: #fff;\n}\n.jw-bg-inverse .dropdown-menu {\n  background: #373a3c;\n}\n.jw-bg-inverse .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #373a3c;\n}\n.font-gradient-primary {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0275d8), to(#5cb85c));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.card {\n  margin-bottom: 0;\n  background: #454955;\n  border-top: none;\n}\n.card .card-header {\n  background: #454955;\n}\n.card a {\n  color: #999;\n  font-size: 14px;\n}\n.card a:hover,\n.card a:link {\n  text-decoration: none;\n  font-size: 14px;\n}\n.card .card-block {\n  padding: 0;\n}\n.card .card-block ul {\n  padding: 0;\n  margin: 0;\n}\n.card .card-block ul li {\n  list-style: none;\n  padding: 0.75rem;\n  border-bottom: 1px solid rgba(0,0,0,0.125);\n  padding-left: 40px;\n}\n.card .card-block ul li:hover,\n.card .card-block ul li:active,\n.card .card-block ul li.active {\n  background: #5c6171;\n}\n.card .card-block ul li:hover a,\n.card .card-block ul li:active a,\n.card .card-block ul li.active a {\n  color: #fff;\n}\n.card .card-block ul li:hover i,\n.card .card-block ul li:active i,\n.card .card-block ul li.active i {\n  color: #8fc81f;\n}\n"

/***/ },
/* 1220 */
/***/ function(module, exports) {

module.exports = ".jw-bg-primary {\n  background-color: #0275d8;\n  color: #fff;\n}\n.jw-bg-primary a {\n  color: #fff;\n}\n.jw-bg-primary li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-primary li a.active {\n  color: #fff;\n}\n.jw-bg-primary .dropdown-menu {\n  background: #0275d8;\n}\n.jw-bg-primary .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #0275d8;\n}\n.jw-bg-success {\n  background-color: #5cb85c;\n  color: #fff;\n}\n.jw-bg-success a {\n  color: #fff;\n}\n.jw-bg-success li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-success li a.active {\n  color: #fff;\n}\n.jw-bg-success .dropdown-menu {\n  background: #5cb85c;\n}\n.jw-bg-success .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5cb85c;\n}\n.jw-bg-info {\n  background-color: #5bc0de;\n  color: #fff;\n}\n.jw-bg-info a {\n  color: #fff;\n}\n.jw-bg-info li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-info li a.active {\n  color: #fff;\n}\n.jw-bg-info .dropdown-menu {\n  background: #5bc0de;\n}\n.jw-bg-info .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #5bc0de;\n}\n.jw-bg-warning {\n  background-color: #f0ad4e;\n  color: #fff;\n}\n.jw-bg-warning a {\n  color: #fff;\n}\n.jw-bg-warning li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-warning li a.active {\n  color: #fff;\n}\n.jw-bg-warning .dropdown-menu {\n  background: #f0ad4e;\n}\n.jw-bg-warning .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n}\n.jw-bg-danger {\n  background-color: #d9534f;\n  color: #fff;\n}\n.jw-bg-danger a {\n  color: #fff;\n}\n.jw-bg-danger li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-danger li a.active {\n  color: #fff;\n}\n.jw-bg-danger .dropdown-menu {\n  background: #d9534f;\n}\n.jw-bg-danger .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #d9534f;\n}\n.jw-bg-inverse {\n  background-color: #373a3c;\n  color: #fff;\n}\n.jw-bg-inverse a {\n  color: #fff;\n}\n.jw-bg-inverse li a {\n  color: rgba(255,255,255,0.8);\n}\n.jw-bg-inverse li a.active {\n  color: #fff;\n}\n.jw-bg-inverse .dropdown-menu {\n  background: #373a3c;\n}\n.jw-bg-inverse .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #373a3c;\n}\n.font-gradient-primary {\n  background: -webkit-gradient(linear, left top, left bottom, from(#0275d8), to(#5cb85c));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.vk-navbar {\n  border-top: 5px solid #8fc81f;\n  border-bottom: 1px solid #ccc;\n}\n.vk-navbar .nav-link {\n  color: #666;\n}\n.vk-navbar-logout {\n  margin-top: 10px;\n}\n.vk-no-padding,\n.vk-main {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.vk-main {\n  padding-top: 81px;\n}\n.vk-menu {\n  background: #454955 url(\"../assets/image/bird.png\") no-repeat left bottom;\n  position: fixed;\n  top: 81px;\n  bottom: 0;\n  width: 250px;\n}\n.vk-body {\n  background: #f8f8f8;\n  margin-left: 250px;\n  padding: 15px;\n}\n.vk-body .vk-body-content {\n  border: 1px solid #ccc;\n  background: #fff;\n  padding: 15px;\n}\n"

/***/ },
/* 1221 */,
/* 1222 */,
/* 1223 */,
/* 1224 */,
/* 1225 */,
/* 1226 */
/***/ function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ },
/* 1227 */
/***/ function(module, exports) {

module.exports = "<span defaultOverlayTarget></span>\r\n<app-search-bar [option]=\"CustomOption\" (search)=\"search($event)\"></app-search-bar>\r\n<p>\r\n  <button type=\"button\" class=\"btn btn-warning\" (click) = \"openCustom()\">新增人员</button>\r\n</p>\r\n<ag-grid-ng2 #agGrid class=\"ag-bootstrap table-bordered table-hero\" [gridOptions]=\"gridOptions\"\r\n  [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" enableColResize groupHeaders suppressRowClickSelection debug rowHeight=\"35\"\r\n  headerHeight=\"35\" rowSelection=\"multiple\">\r\n</ag-grid-ng2>\r\n"

/***/ },
/* 1228 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid new-person-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h1>新增人员</h1>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  <div class=\"row modal-body\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"\" class=\"col-xs-2 col-form-label\">Id</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"number\" class=\"form-control\" id=\"\" placeholder=\"Enter Id\" [(ngModel)]=\"id\" name=\"id\">\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your id with anyone else.</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"\" class=\"col-xs-2 col-form-label\">Name</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"\" class=\"col-xs-2 col-form-label\">Age</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Age\" [(ngModel)]=\"age\" name=\"age\">\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"float-xs-right\">\r\n        <button type=\"type\" class=\"btn btn-primary\" (click)=\"ok()\">ok</button>\r\n        <button type=\"type\" class=\"btn btn-info\" (click)=\"close()\">close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 1229 */
/***/ function(module, exports) {

module.exports = "<app-search-bar [option] = \"CustomOption\"></app-search-bar>\r\n\r\n"

/***/ },
/* 1230 */
/***/ function(module, exports) {

module.exports = "<chart [options]=\"optionsOne\" (selection)=\"onChartSelection($event)\"></chart>\r\n<chart [options]=\"optionsTwo\"></chart>\r\n<chart [options]=\"optionsThree\" (load)=\"saveInstance($event.context)\"></chart>\r\n<chart [options]=\"optionsFour\"></chart>"

/***/ },
/* 1231 */
/***/ function(module, exports) {

module.exports = "<app-search-bar [option] = \"CustomOption\" (search) = \"search()\"></app-search-bar>\r\n<ag-grid-ng2 #agGrid style=\"width: 100%; height: 350px;\" class=\"ag-bootstrap table-bordered\"\r\n\r\n                     [gridOptions]=\"gridOptions\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     [rowData]=\"rowData\"\r\n\r\n                     enableColResize\r\n                     groupHeaders\r\n                     suppressRowClickSelection\r\n\r\n                     rowHeight=\"30\"\r\n                     rowSelection=\"multiple\"\r\n                     >\r\n        </ag-grid-ng2>"

/***/ },
/* 1232 */
/***/ function(module, exports) {

module.exports = "<div class=\"vk-pagetitle\">\r\n  {{option.pagetitle}}\r\n  <span class=\"vk-subtitle\" *ngIf=\"option.subtitle\">Example:<a href=\"https://www.ag-grid.com/example.php\" >{{option.subtitle}}</a></span>\r\n</div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-xs-3\">\r\n      <label for=\"exampleInputEmail1\" class=\"sr-only\">Id</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter id\" [(ngModel)] = \"id\">\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n      <label for=\"exampleInputPassword1\" class=\"sr-only\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Name\" [(ngModel)] = \"name\">\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n      <label for=\"exampleSelect1\" class=\"sr-only\">Example select</label>\r\n      <select class=\"form-control\" id=\"exampleSelect1\">\r\n      <option>1</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n      <option>5</option>\r\n    </select>\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n      <button type=\"submit\" class=\"btn btn-info\" (click) = \"onSearch()\">查询</button>\r\n    </div>\r\n  </div>\r\n"

/***/ },
/* 1233 */
/***/ function(module, exports) {

module.exports = "<div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n  <div class=\"card\" *ngFor=\"let menu of menus;let idx = index;\">\r\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n      <h5 class=\"mb-0\">\r\n        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{idx}}\" aria-expanded=\"true\" aria-controls=\"\">\r\n          <i class=\"fa fa-fw {{menu.icon}}\"></i> {{menu.name}}\r\n        </a>\r\n      </h5>\r\n    </div>\r\n    <div id=\"collapse{{idx}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n      <div class=\"card-block\">\r\n        <ul>\r\n          <li *ngFor=\"let childmenu of menu.childmenu;let idx = index;\" \r\n              (click) = \"toggleActive(childmenu);childmenu.activeStatus = !childmenu.activeStatus\" \r\n              [class.active] = \"childmenu.activeStatus\"\r\n              routerLink=\"{{childmenu.link}}\">\r\n            <i class=\"fa {{childmenu.icon}} fa-fw\"></i>\r\n            <a>{{childmenu.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 1234 */
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded vk-navbar navbar-fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"assets/image/logo.png\" alt=\"\">\r\n  </a>\r\n  <ul class=\"nav navbar-nav float-xs-right vk-navbar-logout\">\r\n    <li class=\"nav-item\">\r\n      <span class=\"nav-link\" href=\"#\"><i class=\"fa fa-user fa-1x\" aria-hidden=\"true\"> </i> {{name}} <span class=\"sr-only\">(current)</span></span>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <span class=\"nav-link\" href=\"#\"><i class=\"fa fa-mobile fa-1x\" aria-hidden=\"true\"> </i> {{tel}}</span>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-sign-out fa-1x\" aria-hidden=\"true\" (click) = \"logout()\"> </i> 退出</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<div class=\"container-fluid vk-main\">\r\n  <div class=\"vk-menu\">\r\n    <app-side-menu></app-side-menu>\r\n  </div>\r\n  <div class=\"vk-body\">\r\n    <div class=\"vk-body-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }
]));
//# sourceMappingURL=0.map