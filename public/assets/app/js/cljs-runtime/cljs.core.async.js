goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30299 = arguments.length;
switch (G__30299) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30305 = (function (f,blockable,meta30306){
this.f = f;
this.blockable = blockable;
this.meta30306 = meta30306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30307,meta30306__$1){
var self__ = this;
var _30307__$1 = this;
return (new cljs.core.async.t_cljs$core$async30305(self__.f,self__.blockable,meta30306__$1));
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30307){
var self__ = this;
var _30307__$1 = this;
return self__.meta30306;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30306","meta30306",263513132,null)], null);
}));

(cljs.core.async.t_cljs$core$async30305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30305");

(cljs.core.async.t_cljs$core$async30305.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30305.
 */
cljs.core.async.__GT_t_cljs$core$async30305 = (function cljs$core$async$__GT_t_cljs$core$async30305(f__$1,blockable__$1,meta30306){
return (new cljs.core.async.t_cljs$core$async30305(f__$1,blockable__$1,meta30306));
});

}

return (new cljs.core.async.t_cljs$core$async30305(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30317 = arguments.length;
switch (G__30317) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30321 = arguments.length;
switch (G__30321) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30323 = arguments.length;
switch (G__30323) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32576 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32576) : fn1.call(null,val_32576));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32576) : fn1.call(null,val_32576));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30353 = arguments.length;
switch (G__30353) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32583 = n;
var x_32584 = (0);
while(true){
if((x_32584 < n__4666__auto___32583)){
(a[x_32584] = x_32584);

var G__32585 = (x_32584 + (1));
x_32584 = G__32585;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30368 = (function (flag,meta30369){
this.flag = flag;
this.meta30369 = meta30369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30370,meta30369__$1){
var self__ = this;
var _30370__$1 = this;
return (new cljs.core.async.t_cljs$core$async30368(self__.flag,meta30369__$1));
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30370){
var self__ = this;
var _30370__$1 = this;
return self__.meta30369;
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30369","meta30369",228398107,null)], null);
}));

(cljs.core.async.t_cljs$core$async30368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30368");

(cljs.core.async.t_cljs$core$async30368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30368.
 */
cljs.core.async.__GT_t_cljs$core$async30368 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30368(flag__$1,meta30369){
return (new cljs.core.async.t_cljs$core$async30368(flag__$1,meta30369));
});

}

return (new cljs.core.async.t_cljs$core$async30368(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30378 = (function (flag,cb,meta30379){
this.flag = flag;
this.cb = cb;
this.meta30379 = meta30379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30380,meta30379__$1){
var self__ = this;
var _30380__$1 = this;
return (new cljs.core.async.t_cljs$core$async30378(self__.flag,self__.cb,meta30379__$1));
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30380){
var self__ = this;
var _30380__$1 = this;
return self__.meta30379;
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30379","meta30379",1681423354,null)], null);
}));

(cljs.core.async.t_cljs$core$async30378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30378");

(cljs.core.async.t_cljs$core$async30378.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30378.
 */
cljs.core.async.__GT_t_cljs$core$async30378 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30378(flag__$1,cb__$1,meta30379){
return (new cljs.core.async.t_cljs$core$async30378(flag__$1,cb__$1,meta30379));
});

}

return (new cljs.core.async.t_cljs$core$async30378(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30392_SHARP_){
var G__30394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30392_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30394) : fret.call(null,G__30394));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30393_SHARP_){
var G__30395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30393_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30395) : fret.call(null,G__30395));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32594 = (i + (1));
i = G__32594;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32595 = arguments.length;
var i__4790__auto___32596 = (0);
while(true){
if((i__4790__auto___32596 < len__4789__auto___32595)){
args__4795__auto__.push((arguments[i__4790__auto___32596]));

var G__32598 = (i__4790__auto___32596 + (1));
i__4790__auto___32596 = G__32598;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30406){
var map__30407 = p__30406;
var map__30407__$1 = (((((!((map__30407 == null))))?(((((map__30407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30407):map__30407);
var opts = map__30407__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30404){
var G__30405 = cljs.core.first(seq30404);
var seq30404__$1 = cljs.core.next(seq30404);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30405,seq30404__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30417 = arguments.length;
switch (G__30417) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30214__auto___32604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30451){
var state_val_30452 = (state_30451[(1)]);
if((state_val_30452 === (7))){
var inst_30447 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30456_32605 = state_30451__$1;
(statearr_30456_32605[(2)] = inst_30447);

(statearr_30456_32605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (1))){
var state_30451__$1 = state_30451;
var statearr_30457_32606 = state_30451__$1;
(statearr_30457_32606[(2)] = null);

(statearr_30457_32606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (4))){
var inst_30430 = (state_30451[(7)]);
var inst_30430__$1 = (state_30451[(2)]);
var inst_30431 = (inst_30430__$1 == null);
var state_30451__$1 = (function (){var statearr_30458 = state_30451;
(statearr_30458[(7)] = inst_30430__$1);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30431)){
var statearr_30459_32607 = state_30451__$1;
(statearr_30459_32607[(1)] = (5));

} else {
var statearr_30460_32609 = state_30451__$1;
(statearr_30460_32609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (13))){
var state_30451__$1 = state_30451;
var statearr_30461_32621 = state_30451__$1;
(statearr_30461_32621[(2)] = null);

(statearr_30461_32621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (6))){
var inst_30430 = (state_30451[(7)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30451__$1,(11),to,inst_30430);
} else {
if((state_val_30452 === (3))){
var inst_30449 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30451__$1,inst_30449);
} else {
if((state_val_30452 === (12))){
var state_30451__$1 = state_30451;
var statearr_30462_32625 = state_30451__$1;
(statearr_30462_32625[(2)] = null);

(statearr_30462_32625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (2))){
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30451__$1,(4),from);
} else {
if((state_val_30452 === (11))){
var inst_30440 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
if(cljs.core.truth_(inst_30440)){
var statearr_30466_32626 = state_30451__$1;
(statearr_30466_32626[(1)] = (12));

} else {
var statearr_30467_32627 = state_30451__$1;
(statearr_30467_32627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (9))){
var state_30451__$1 = state_30451;
var statearr_30468_32631 = state_30451__$1;
(statearr_30468_32631[(2)] = null);

(statearr_30468_32631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (5))){
var state_30451__$1 = state_30451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30469_32632 = state_30451__$1;
(statearr_30469_32632[(1)] = (8));

} else {
var statearr_30470_32633 = state_30451__$1;
(statearr_30470_32633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (14))){
var inst_30445 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30471_32634 = state_30451__$1;
(statearr_30471_32634[(2)] = inst_30445);

(statearr_30471_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (10))){
var inst_30437 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30472_32639 = state_30451__$1;
(statearr_30472_32639[(2)] = inst_30437);

(statearr_30472_32639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (8))){
var inst_30434 = cljs.core.async.close_BANG_(to);
var state_30451__$1 = state_30451;
var statearr_30473_32652 = state_30451__$1;
(statearr_30473_32652[(2)] = inst_30434);

(statearr_30473_32652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_30474 = [null,null,null,null,null,null,null,null];
(statearr_30474[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_30474[(1)] = (1));

return statearr_30474;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_30451){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30451);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30475){if((e30475 instanceof Object)){
var ex__29895__auto__ = e30475;
var statearr_30476_32654 = state_30451;
(statearr_30476_32654[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_30451;
state_30451 = G__32655;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_30451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_30451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30480 = f__30215__auto__();
(statearr_30480[(6)] = c__30214__auto___32604);

return statearr_30480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30483){
var vec__30484 = p__30483;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30484,(1),null);
var job = vec__30484;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30214__auto___32656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (1))){
var state_30491__$1 = state_30491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30491__$1,(2),res,v);
} else {
if((state_val_30492 === (2))){
var inst_30488 = (state_30491[(2)]);
var inst_30489 = cljs.core.async.close_BANG_(res);
var state_30491__$1 = (function (){var statearr_30494 = state_30491;
(statearr_30494[(7)] = inst_30488);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30491__$1,inst_30489);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_30499 = [null,null,null,null,null,null,null,null];
(statearr_30499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__);

(statearr_30499[(1)] = (1));

return statearr_30499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1 = (function (state_30491){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30491);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30500){if((e30500 instanceof Object)){
var ex__29895__auto__ = e30500;
var statearr_30505_32657 = state_30491;
(statearr_30505_32657[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_30491;
state_30491 = G__32658;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30506 = f__30215__auto__();
(statearr_30506[(6)] = c__30214__auto___32656);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30507){
var vec__30508 = p__30507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30508,(1),null);
var job = vec__30508;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32659 = n;
var __32660 = (0);
while(true){
if((__32660 < n__4666__auto___32659)){
var G__30515_32661 = type;
var G__30515_32662__$1 = (((G__30515_32661 instanceof cljs.core.Keyword))?G__30515_32661.fqn:null);
switch (G__30515_32662__$1) {
case "compute":
var c__30214__auto___32665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32660,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = ((function (__32660,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (1))){
var state_30528__$1 = state_30528;
var statearr_30530_32668 = state_30528__$1;
(statearr_30530_32668[(2)] = null);

(statearr_30530_32668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30528__$1,(4),jobs);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (4))){
var inst_30518 = (state_30528[(2)]);
var inst_30519 = process(inst_30518);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30519)){
var statearr_30531_32673 = state_30528__$1;
(statearr_30531_32673[(1)] = (5));

} else {
var statearr_30532_32674 = state_30528__$1;
(statearr_30532_32674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var state_30528__$1 = state_30528;
var statearr_30533_32675 = state_30528__$1;
(statearr_30533_32675[(2)] = null);

(statearr_30533_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var state_30528__$1 = state_30528;
var statearr_30534_32676 = state_30528__$1;
(statearr_30534_32676[(2)] = null);

(statearr_30534_32676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30535_32677 = state_30528__$1;
(statearr_30535_32677[(2)] = inst_30524);

(statearr_30535_32677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32660,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
;
return ((function (__32660,switch__29891__auto__,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_30541 = [null,null,null,null,null,null,null];
(statearr_30541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__);

(statearr_30541[(1)] = (1));

return statearr_30541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1 = (function (state_30528){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30528);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30544){if((e30544 instanceof Object)){
var ex__29895__auto__ = e30544;
var statearr_30545_32680 = state_30528;
(statearr_30545_32680[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32681 = state_30528;
state_30528 = G__32681;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__;
})()
;})(__32660,switch__29891__auto__,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
})();
var state__30216__auto__ = (function (){var statearr_30549 = f__30215__auto__();
(statearr_30549[(6)] = c__30214__auto___32665);

return statearr_30549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
});})(__32660,c__30214__auto___32665,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
);


break;
case "async":
var c__30214__auto___32682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32660,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = ((function (__32660,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function (state_30566){
var state_val_30568 = (state_30566[(1)]);
if((state_val_30568 === (1))){
var state_30566__$1 = state_30566;
var statearr_30571_32683 = state_30566__$1;
(statearr_30571_32683[(2)] = null);

(statearr_30571_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (2))){
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30566__$1,(4),jobs);
} else {
if((state_val_30568 === (3))){
var inst_30564 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30566__$1,inst_30564);
} else {
if((state_val_30568 === (4))){
var inst_30554 = (state_30566[(2)]);
var inst_30556 = async(inst_30554);
var state_30566__$1 = state_30566;
if(cljs.core.truth_(inst_30556)){
var statearr_30573_32688 = state_30566__$1;
(statearr_30573_32688[(1)] = (5));

} else {
var statearr_30574_32689 = state_30566__$1;
(statearr_30574_32689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var state_30566__$1 = state_30566;
var statearr_30575_32690 = state_30566__$1;
(statearr_30575_32690[(2)] = null);

(statearr_30575_32690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var state_30566__$1 = state_30566;
var statearr_30576_32708 = state_30566__$1;
(statearr_30576_32708[(2)] = null);

(statearr_30576_32708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (7))){
var inst_30562 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
var statearr_30577_32709 = state_30566__$1;
(statearr_30577_32709[(2)] = inst_30562);

(statearr_30577_32709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32660,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
;
return ((function (__32660,switch__29891__auto__,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_30578 = [null,null,null,null,null,null,null];
(statearr_30578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__);

(statearr_30578[(1)] = (1));

return statearr_30578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1 = (function (state_30566){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30566);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30579){if((e30579 instanceof Object)){
var ex__29895__auto__ = e30579;
var statearr_30584_32716 = state_30566;
(statearr_30584_32716[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32717 = state_30566;
state_30566 = G__32717;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = function(state_30566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1.call(this,state_30566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__;
})()
;})(__32660,switch__29891__auto__,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
})();
var state__30216__auto__ = (function (){var statearr_30591 = f__30215__auto__();
(statearr_30591[(6)] = c__30214__auto___32682);

return statearr_30591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
});})(__32660,c__30214__auto___32682,G__30515_32661,G__30515_32662__$1,n__4666__auto___32659,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30515_32662__$1)].join('')));

}

var G__32718 = (__32660 + (1));
__32660 = G__32718;
continue;
} else {
}
break;
}

var c__30214__auto___32719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30624){
var state_val_30629 = (state_30624[(1)]);
if((state_val_30629 === (7))){
var inst_30620 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30637_32720 = state_30624__$1;
(statearr_30637_32720[(2)] = inst_30620);

(statearr_30637_32720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (1))){
var state_30624__$1 = state_30624;
var statearr_30638_32721 = state_30624__$1;
(statearr_30638_32721[(2)] = null);

(statearr_30638_32721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (4))){
var inst_30600 = (state_30624[(7)]);
var inst_30600__$1 = (state_30624[(2)]);
var inst_30601 = (inst_30600__$1 == null);
var state_30624__$1 = (function (){var statearr_30639 = state_30624;
(statearr_30639[(7)] = inst_30600__$1);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30601)){
var statearr_30640_32722 = state_30624__$1;
(statearr_30640_32722[(1)] = (5));

} else {
var statearr_30641_32729 = state_30624__$1;
(statearr_30641_32729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (6))){
var inst_30605 = (state_30624[(8)]);
var inst_30600 = (state_30624[(7)]);
var inst_30605__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30608 = [inst_30600,inst_30605__$1];
var inst_30609 = (new cljs.core.PersistentVector(null,2,(5),inst_30607,inst_30608,null));
var state_30624__$1 = (function (){var statearr_30642 = state_30624;
(statearr_30642[(8)] = inst_30605__$1);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30624__$1,(8),jobs,inst_30609);
} else {
if((state_val_30629 === (3))){
var inst_30622 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30624__$1,inst_30622);
} else {
if((state_val_30629 === (2))){
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30624__$1,(4),from);
} else {
if((state_val_30629 === (9))){
var inst_30613 = (state_30624[(2)]);
var state_30624__$1 = (function (){var statearr_30644 = state_30624;
(statearr_30644[(9)] = inst_30613);

return statearr_30644;
})();
var statearr_30645_32730 = state_30624__$1;
(statearr_30645_32730[(2)] = null);

(statearr_30645_32730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (5))){
var inst_30603 = cljs.core.async.close_BANG_(jobs);
var state_30624__$1 = state_30624;
var statearr_30646_32731 = state_30624__$1;
(statearr_30646_32731[(2)] = inst_30603);

(statearr_30646_32731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30629 === (8))){
var inst_30605 = (state_30624[(8)]);
var inst_30611 = (state_30624[(2)]);
var state_30624__$1 = (function (){var statearr_30648 = state_30624;
(statearr_30648[(10)] = inst_30611);

return statearr_30648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30624__$1,(9),results,inst_30605);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_30650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__);

(statearr_30650[(1)] = (1));

return statearr_30650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1 = (function (state_30624){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30624);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30651){if((e30651 instanceof Object)){
var ex__29895__auto__ = e30651;
var statearr_30652_32732 = state_30624;
(statearr_30652_32732[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32733 = state_30624;
state_30624 = G__32733;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = function(state_30624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1.call(this,state_30624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30653 = f__30215__auto__();
(statearr_30653[(6)] = c__30214__auto___32719);

return statearr_30653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


var c__30214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30696_32740 = state_30692__$1;
(statearr_30696_32740[(2)] = inst_30688);

(statearr_30696_32740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (20))){
var state_30692__$1 = state_30692;
var statearr_30697_32741 = state_30692__$1;
(statearr_30697_32741[(2)] = null);

(statearr_30697_32741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30700_32742 = state_30692__$1;
(statearr_30700_32742[(2)] = null);

(statearr_30700_32742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30657 = (state_30692[(7)]);
var inst_30657__$1 = (state_30692[(2)]);
var inst_30658 = (inst_30657__$1 == null);
var state_30692__$1 = (function (){var statearr_30702 = state_30692;
(statearr_30702[(7)] = inst_30657__$1);

return statearr_30702;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30716_32743 = state_30692__$1;
(statearr_30716_32743[(1)] = (5));

} else {
var statearr_30717_32744 = state_30692__$1;
(statearr_30717_32744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (15))){
var inst_30670 = (state_30692[(8)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30692__$1,(18),to,inst_30670);
} else {
if((state_val_30693 === (21))){
var inst_30683 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30720_32745 = state_30692__$1;
(statearr_30720_32745[(2)] = inst_30683);

(statearr_30720_32745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var inst_30685 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30722 = state_30692;
(statearr_30722[(9)] = inst_30685);

return statearr_30722;
})();
var statearr_30723_32746 = state_30692__$1;
(statearr_30723_32746[(2)] = null);

(statearr_30723_32746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30657 = (state_30692[(7)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30692__$1,(11),inst_30657);
} else {
if((state_val_30693 === (17))){
var inst_30678 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30678)){
var statearr_30724_32747 = state_30692__$1;
(statearr_30724_32747[(1)] = (19));

} else {
var statearr_30725_32748 = state_30692__$1;
(statearr_30725_32748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (12))){
var inst_30667 = (state_30692[(10)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30692__$1,(14),inst_30667);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30692__$1,(4),results);
} else {
if((state_val_30693 === (19))){
var state_30692__$1 = state_30692;
var statearr_30734_32754 = state_30692__$1;
(statearr_30734_32754[(2)] = null);

(statearr_30734_32754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (11))){
var inst_30667 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30740 = state_30692;
(statearr_30740[(10)] = inst_30667);

return statearr_30740;
})();
var statearr_30741_32755 = state_30692__$1;
(statearr_30741_32755[(2)] = null);

(statearr_30741_32755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var state_30692__$1 = state_30692;
var statearr_30748_32756 = state_30692__$1;
(statearr_30748_32756[(2)] = null);

(statearr_30748_32756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var state_30692__$1 = state_30692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30749_32757 = state_30692__$1;
(statearr_30749_32757[(1)] = (8));

} else {
var statearr_30750_32758 = state_30692__$1;
(statearr_30750_32758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30670 = (state_30692[(8)]);
var inst_30670__$1 = (state_30692[(2)]);
var inst_30671 = (inst_30670__$1 == null);
var inst_30672 = cljs.core.not(inst_30671);
var state_30692__$1 = (function (){var statearr_30751 = state_30692;
(statearr_30751[(8)] = inst_30670__$1);

return statearr_30751;
})();
if(inst_30672){
var statearr_30752_32759 = state_30692__$1;
(statearr_30752_32759[(1)] = (15));

} else {
var statearr_30753_32760 = state_30692__$1;
(statearr_30753_32760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (16))){
var state_30692__$1 = state_30692;
var statearr_30756_32762 = state_30692__$1;
(statearr_30756_32762[(2)] = false);

(statearr_30756_32762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30664 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30759_32764 = state_30692__$1;
(statearr_30759_32764[(2)] = inst_30664);

(statearr_30759_32764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (18))){
var inst_30675 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30760_32765 = state_30692__$1;
(statearr_30760_32765[(2)] = inst_30675);

(statearr_30760_32765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30661 = cljs.core.async.close_BANG_(to);
var state_30692__$1 = state_30692;
var statearr_30761_32766 = state_30692__$1;
(statearr_30761_32766[(2)] = inst_30661);

(statearr_30761_32766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_30766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__);

(statearr_30766[(1)] = (1));

return statearr_30766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1 = (function (state_30692){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30692);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30770){if((e30770 instanceof Object)){
var ex__29895__auto__ = e30770;
var statearr_30771_32768 = state_30692;
(statearr_30771_32768[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32770 = state_30692;
state_30692 = G__32770;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30775 = f__30215__auto__();
(statearr_30775[(6)] = c__30214__auto__);

return statearr_30775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));

return c__30214__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30778 = arguments.length;
switch (G__30778) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30788 = arguments.length;
switch (G__30788) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30792 = arguments.length;
switch (G__30792) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30214__auto___32776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30819){
var state_val_30820 = (state_30819[(1)]);
if((state_val_30820 === (7))){
var inst_30815 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
var statearr_30821_32777 = state_30819__$1;
(statearr_30821_32777[(2)] = inst_30815);

(statearr_30821_32777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (1))){
var state_30819__$1 = state_30819;
var statearr_30822_32778 = state_30819__$1;
(statearr_30822_32778[(2)] = null);

(statearr_30822_32778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (4))){
var inst_30796 = (state_30819[(7)]);
var inst_30796__$1 = (state_30819[(2)]);
var inst_30797 = (inst_30796__$1 == null);
var state_30819__$1 = (function (){var statearr_30825 = state_30819;
(statearr_30825[(7)] = inst_30796__$1);

return statearr_30825;
})();
if(cljs.core.truth_(inst_30797)){
var statearr_30827_32779 = state_30819__$1;
(statearr_30827_32779[(1)] = (5));

} else {
var statearr_30829_32780 = state_30819__$1;
(statearr_30829_32780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (13))){
var state_30819__$1 = state_30819;
var statearr_30830_32781 = state_30819__$1;
(statearr_30830_32781[(2)] = null);

(statearr_30830_32781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (6))){
var inst_30796 = (state_30819[(7)]);
var inst_30802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30796) : p.call(null,inst_30796));
var state_30819__$1 = state_30819;
if(cljs.core.truth_(inst_30802)){
var statearr_30831_32782 = state_30819__$1;
(statearr_30831_32782[(1)] = (9));

} else {
var statearr_30832_32783 = state_30819__$1;
(statearr_30832_32783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (3))){
var inst_30817 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30819__$1,inst_30817);
} else {
if((state_val_30820 === (12))){
var state_30819__$1 = state_30819;
var statearr_30833_32785 = state_30819__$1;
(statearr_30833_32785[(2)] = null);

(statearr_30833_32785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (2))){
var state_30819__$1 = state_30819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30819__$1,(4),ch);
} else {
if((state_val_30820 === (11))){
var inst_30796 = (state_30819[(7)]);
var inst_30806 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30819__$1,(8),inst_30806,inst_30796);
} else {
if((state_val_30820 === (9))){
var state_30819__$1 = state_30819;
var statearr_30834_32786 = state_30819__$1;
(statearr_30834_32786[(2)] = tc);

(statearr_30834_32786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (5))){
var inst_30799 = cljs.core.async.close_BANG_(tc);
var inst_30800 = cljs.core.async.close_BANG_(fc);
var state_30819__$1 = (function (){var statearr_30835 = state_30819;
(statearr_30835[(8)] = inst_30799);

return statearr_30835;
})();
var statearr_30836_32791 = state_30819__$1;
(statearr_30836_32791[(2)] = inst_30800);

(statearr_30836_32791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (14))){
var inst_30813 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
var statearr_30837_32792 = state_30819__$1;
(statearr_30837_32792[(2)] = inst_30813);

(statearr_30837_32792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (10))){
var state_30819__$1 = state_30819;
var statearr_30838_32793 = state_30819__$1;
(statearr_30838_32793[(2)] = fc);

(statearr_30838_32793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30820 === (8))){
var inst_30808 = (state_30819[(2)]);
var state_30819__$1 = state_30819;
if(cljs.core.truth_(inst_30808)){
var statearr_30839_32794 = state_30819__$1;
(statearr_30839_32794[(1)] = (12));

} else {
var statearr_30840_32795 = state_30819__$1;
(statearr_30840_32795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_30841 = [null,null,null,null,null,null,null,null,null];
(statearr_30841[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_30841[(1)] = (1));

return statearr_30841;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_30819){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30819);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30842){if((e30842 instanceof Object)){
var ex__29895__auto__ = e30842;
var statearr_30843_32796 = state_30819;
(statearr_30843_32796[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32804 = state_30819;
state_30819 = G__32804;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_30819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_30819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30844 = f__30215__auto__();
(statearr_30844[(6)] = c__30214__auto___32776);

return statearr_30844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30871){
var state_val_30872 = (state_30871[(1)]);
if((state_val_30872 === (7))){
var inst_30867 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30878_32805 = state_30871__$1;
(statearr_30878_32805[(2)] = inst_30867);

(statearr_30878_32805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (1))){
var inst_30851 = init;
var state_30871__$1 = (function (){var statearr_30879 = state_30871;
(statearr_30879[(7)] = inst_30851);

return statearr_30879;
})();
var statearr_30880_32806 = state_30871__$1;
(statearr_30880_32806[(2)] = null);

(statearr_30880_32806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (4))){
var inst_30854 = (state_30871[(8)]);
var inst_30854__$1 = (state_30871[(2)]);
var inst_30855 = (inst_30854__$1 == null);
var state_30871__$1 = (function (){var statearr_30881 = state_30871;
(statearr_30881[(8)] = inst_30854__$1);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30855)){
var statearr_30882_32807 = state_30871__$1;
(statearr_30882_32807[(1)] = (5));

} else {
var statearr_30883_32808 = state_30871__$1;
(statearr_30883_32808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (6))){
var inst_30858 = (state_30871[(9)]);
var inst_30851 = (state_30871[(7)]);
var inst_30854 = (state_30871[(8)]);
var inst_30858__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30851,inst_30854) : f.call(null,inst_30851,inst_30854));
var inst_30859 = cljs.core.reduced_QMARK_(inst_30858__$1);
var state_30871__$1 = (function (){var statearr_30887 = state_30871;
(statearr_30887[(9)] = inst_30858__$1);

return statearr_30887;
})();
if(inst_30859){
var statearr_30888_32812 = state_30871__$1;
(statearr_30888_32812[(1)] = (8));

} else {
var statearr_30889_32816 = state_30871__$1;
(statearr_30889_32816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (3))){
var inst_30869 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30871__$1,inst_30869);
} else {
if((state_val_30872 === (2))){
var state_30871__$1 = state_30871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30871__$1,(4),ch);
} else {
if((state_val_30872 === (9))){
var inst_30858 = (state_30871[(9)]);
var inst_30851 = inst_30858;
var state_30871__$1 = (function (){var statearr_30891 = state_30871;
(statearr_30891[(7)] = inst_30851);

return statearr_30891;
})();
var statearr_30892_32824 = state_30871__$1;
(statearr_30892_32824[(2)] = null);

(statearr_30892_32824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (5))){
var inst_30851 = (state_30871[(7)]);
var state_30871__$1 = state_30871;
var statearr_30893_32825 = state_30871__$1;
(statearr_30893_32825[(2)] = inst_30851);

(statearr_30893_32825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (10))){
var inst_30865 = (state_30871[(2)]);
var state_30871__$1 = state_30871;
var statearr_30894_32826 = state_30871__$1;
(statearr_30894_32826[(2)] = inst_30865);

(statearr_30894_32826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30872 === (8))){
var inst_30858 = (state_30871[(9)]);
var inst_30861 = cljs.core.deref(inst_30858);
var state_30871__$1 = state_30871;
var statearr_30895_32827 = state_30871__$1;
(statearr_30895_32827[(2)] = inst_30861);

(statearr_30895_32827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29892__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29892__auto____0 = (function (){
var statearr_30896 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30896[(0)] = cljs$core$async$reduce_$_state_machine__29892__auto__);

(statearr_30896[(1)] = (1));

return statearr_30896;
});
var cljs$core$async$reduce_$_state_machine__29892__auto____1 = (function (state_30871){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30871);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30899){if((e30899 instanceof Object)){
var ex__29895__auto__ = e30899;
var statearr_30900_32828 = state_30871;
(statearr_30900_32828[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32829 = state_30871;
state_30871 = G__32829;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29892__auto__ = function(state_30871){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29892__auto____1.call(this,state_30871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29892__auto____0;
cljs$core$async$reduce_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29892__auto____1;
return cljs$core$async$reduce_$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30901 = f__30215__auto__();
(statearr_30901[(6)] = c__30214__auto__);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));

return c__30214__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30907){
var state_val_30908 = (state_30907[(1)]);
if((state_val_30908 === (1))){
var inst_30902 = cljs.core.async.reduce(f__$1,init,ch);
var state_30907__$1 = state_30907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30907__$1,(2),inst_30902);
} else {
if((state_val_30908 === (2))){
var inst_30904 = (state_30907[(2)]);
var inst_30905 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30904) : f__$1.call(null,inst_30904));
var state_30907__$1 = state_30907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30907__$1,inst_30905);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29892__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29892__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null];
(statearr_30909[(0)] = cljs$core$async$transduce_$_state_machine__29892__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var cljs$core$async$transduce_$_state_machine__29892__auto____1 = (function (state_30907){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30907);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__29895__auto__ = e30910;
var statearr_30911_32832 = state_30907;
(statearr_30911_32832[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32833 = state_30907;
state_30907 = G__32833;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29892__auto__ = function(state_30907){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29892__auto____1.call(this,state_30907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29892__auto____0;
cljs$core$async$transduce_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29892__auto____1;
return cljs$core$async$transduce_$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30912 = f__30215__auto__();
(statearr_30912[(6)] = c__30214__auto__);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));

return c__30214__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30915 = arguments.length;
switch (G__30915) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_30942){
var state_val_30943 = (state_30942[(1)]);
if((state_val_30943 === (7))){
var inst_30924 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30944_32835 = state_30942__$1;
(statearr_30944_32835[(2)] = inst_30924);

(statearr_30944_32835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (1))){
var inst_30917 = cljs.core.seq(coll);
var inst_30918 = inst_30917;
var state_30942__$1 = (function (){var statearr_30945 = state_30942;
(statearr_30945[(7)] = inst_30918);

return statearr_30945;
})();
var statearr_30947_32836 = state_30942__$1;
(statearr_30947_32836[(2)] = null);

(statearr_30947_32836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (4))){
var inst_30918 = (state_30942[(7)]);
var inst_30922 = cljs.core.first(inst_30918);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30942__$1,(7),ch,inst_30922);
} else {
if((state_val_30943 === (13))){
var inst_30936 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30949_32837 = state_30942__$1;
(statearr_30949_32837[(2)] = inst_30936);

(statearr_30949_32837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (6))){
var inst_30927 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30927)){
var statearr_30950_32838 = state_30942__$1;
(statearr_30950_32838[(1)] = (8));

} else {
var statearr_30951_32839 = state_30942__$1;
(statearr_30951_32839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (3))){
var inst_30940 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30942__$1,inst_30940);
} else {
if((state_val_30943 === (12))){
var state_30942__$1 = state_30942;
var statearr_30952_32840 = state_30942__$1;
(statearr_30952_32840[(2)] = null);

(statearr_30952_32840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (2))){
var inst_30918 = (state_30942[(7)]);
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30918)){
var statearr_30953_32845 = state_30942__$1;
(statearr_30953_32845[(1)] = (4));

} else {
var statearr_30954_32846 = state_30942__$1;
(statearr_30954_32846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (11))){
var inst_30933 = cljs.core.async.close_BANG_(ch);
var state_30942__$1 = state_30942;
var statearr_30955_32847 = state_30942__$1;
(statearr_30955_32847[(2)] = inst_30933);

(statearr_30955_32847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (9))){
var state_30942__$1 = state_30942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30956_32848 = state_30942__$1;
(statearr_30956_32848[(1)] = (11));

} else {
var statearr_30957_32849 = state_30942__$1;
(statearr_30957_32849[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (5))){
var inst_30918 = (state_30942[(7)]);
var state_30942__$1 = state_30942;
var statearr_30959_32850 = state_30942__$1;
(statearr_30959_32850[(2)] = inst_30918);

(statearr_30959_32850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (10))){
var inst_30938 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30961_32851 = state_30942__$1;
(statearr_30961_32851[(2)] = inst_30938);

(statearr_30961_32851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (8))){
var inst_30918 = (state_30942[(7)]);
var inst_30929 = cljs.core.next(inst_30918);
var inst_30918__$1 = inst_30929;
var state_30942__$1 = (function (){var statearr_30962 = state_30942;
(statearr_30962[(7)] = inst_30918__$1);

return statearr_30962;
})();
var statearr_30963_32852 = state_30942__$1;
(statearr_30963_32852[(2)] = null);

(statearr_30963_32852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_30964 = [null,null,null,null,null,null,null,null];
(statearr_30964[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_30964[(1)] = (1));

return statearr_30964;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_30942){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_30942);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e30965){if((e30965 instanceof Object)){
var ex__29895__auto__ = e30965;
var statearr_30966_32853 = state_30942;
(statearr_30966_32853[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32854 = state_30942;
state_30942 = G__32854;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_30942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_30942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_30967 = f__30215__auto__();
(statearr_30967[(6)] = c__30214__auto__);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));

return c__30214__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30980 = (function (ch,cs,meta30981){
this.ch = ch;
this.cs = cs;
this.meta30981 = meta30981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30982,meta30981__$1){
var self__ = this;
var _30982__$1 = this;
return (new cljs.core.async.t_cljs$core$async30980(self__.ch,self__.cs,meta30981__$1));
}));

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30982){
var self__ = this;
var _30982__$1 = this;
return self__.meta30981;
}));

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30980.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30981","meta30981",960674210,null)], null);
}));

(cljs.core.async.t_cljs$core$async30980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30980");

(cljs.core.async.t_cljs$core$async30980.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30980.
 */
cljs.core.async.__GT_t_cljs$core$async30980 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30980(ch__$1,cs__$1,meta30981){
return (new cljs.core.async.t_cljs$core$async30980(ch__$1,cs__$1,meta30981));
});

}

return (new cljs.core.async.t_cljs$core$async30980(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30214__auto___32865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31148){
var state_val_31151 = (state_31148[(1)]);
if((state_val_31151 === (7))){
var inst_31142 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31152_32866 = state_31148__$1;
(statearr_31152_32866[(2)] = inst_31142);

(statearr_31152_32866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (20))){
var inst_31038 = (state_31148[(7)]);
var inst_31052 = cljs.core.first(inst_31038);
var inst_31053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31052,(0),null);
var inst_31054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31052,(1),null);
var state_31148__$1 = (function (){var statearr_31153 = state_31148;
(statearr_31153[(8)] = inst_31053);

return statearr_31153;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31154_32867 = state_31148__$1;
(statearr_31154_32867[(1)] = (22));

} else {
var statearr_31155_32868 = state_31148__$1;
(statearr_31155_32868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (27))){
var inst_31092 = (state_31148[(9)]);
var inst_31087 = (state_31148[(10)]);
var inst_31005 = (state_31148[(11)]);
var inst_31085 = (state_31148[(12)]);
var inst_31092__$1 = cljs.core._nth(inst_31085,inst_31087);
var inst_31093 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31092__$1,inst_31005,done);
var state_31148__$1 = (function (){var statearr_31156 = state_31148;
(statearr_31156[(9)] = inst_31092__$1);

return statearr_31156;
})();
if(cljs.core.truth_(inst_31093)){
var statearr_31157_32869 = state_31148__$1;
(statearr_31157_32869[(1)] = (30));

} else {
var statearr_31158_32870 = state_31148__$1;
(statearr_31158_32870[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (1))){
var state_31148__$1 = state_31148;
var statearr_31159_32871 = state_31148__$1;
(statearr_31159_32871[(2)] = null);

(statearr_31159_32871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (24))){
var inst_31038 = (state_31148[(7)]);
var inst_31061 = (state_31148[(2)]);
var inst_31062 = cljs.core.next(inst_31038);
var inst_31016 = inst_31062;
var inst_31017 = null;
var inst_31018 = (0);
var inst_31019 = (0);
var state_31148__$1 = (function (){var statearr_31165 = state_31148;
(statearr_31165[(13)] = inst_31017);

(statearr_31165[(14)] = inst_31018);

(statearr_31165[(15)] = inst_31061);

(statearr_31165[(16)] = inst_31016);

(statearr_31165[(17)] = inst_31019);

return statearr_31165;
})();
var statearr_31166_32875 = state_31148__$1;
(statearr_31166_32875[(2)] = null);

(statearr_31166_32875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (39))){
var state_31148__$1 = state_31148;
var statearr_31175_32876 = state_31148__$1;
(statearr_31175_32876[(2)] = null);

(statearr_31175_32876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (4))){
var inst_31005 = (state_31148[(11)]);
var inst_31005__$1 = (state_31148[(2)]);
var inst_31006 = (inst_31005__$1 == null);
var state_31148__$1 = (function (){var statearr_31176 = state_31148;
(statearr_31176[(11)] = inst_31005__$1);

return statearr_31176;
})();
if(cljs.core.truth_(inst_31006)){
var statearr_31177_32877 = state_31148__$1;
(statearr_31177_32877[(1)] = (5));

} else {
var statearr_31178_32878 = state_31148__$1;
(statearr_31178_32878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (15))){
var inst_31017 = (state_31148[(13)]);
var inst_31018 = (state_31148[(14)]);
var inst_31016 = (state_31148[(16)]);
var inst_31019 = (state_31148[(17)]);
var inst_31034 = (state_31148[(2)]);
var inst_31035 = (inst_31019 + (1));
var tmp31170 = inst_31017;
var tmp31171 = inst_31018;
var tmp31172 = inst_31016;
var inst_31016__$1 = tmp31172;
var inst_31017__$1 = tmp31170;
var inst_31018__$1 = tmp31171;
var inst_31019__$1 = inst_31035;
var state_31148__$1 = (function (){var statearr_31179 = state_31148;
(statearr_31179[(13)] = inst_31017__$1);

(statearr_31179[(14)] = inst_31018__$1);

(statearr_31179[(18)] = inst_31034);

(statearr_31179[(16)] = inst_31016__$1);

(statearr_31179[(17)] = inst_31019__$1);

return statearr_31179;
})();
var statearr_31180_32879 = state_31148__$1;
(statearr_31180_32879[(2)] = null);

(statearr_31180_32879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (21))){
var inst_31065 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31189_32880 = state_31148__$1;
(statearr_31189_32880[(2)] = inst_31065);

(statearr_31189_32880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (31))){
var inst_31092 = (state_31148[(9)]);
var inst_31096 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31092);
var state_31148__$1 = state_31148;
var statearr_31190_32881 = state_31148__$1;
(statearr_31190_32881[(2)] = inst_31096);

(statearr_31190_32881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (32))){
var inst_31086 = (state_31148[(19)]);
var inst_31084 = (state_31148[(20)]);
var inst_31087 = (state_31148[(10)]);
var inst_31085 = (state_31148[(12)]);
var inst_31098 = (state_31148[(2)]);
var inst_31099 = (inst_31087 + (1));
var tmp31183 = inst_31086;
var tmp31184 = inst_31084;
var tmp31185 = inst_31085;
var inst_31084__$1 = tmp31184;
var inst_31085__$1 = tmp31185;
var inst_31086__$1 = tmp31183;
var inst_31087__$1 = inst_31099;
var state_31148__$1 = (function (){var statearr_31209 = state_31148;
(statearr_31209[(19)] = inst_31086__$1);

(statearr_31209[(20)] = inst_31084__$1);

(statearr_31209[(10)] = inst_31087__$1);

(statearr_31209[(21)] = inst_31098);

(statearr_31209[(12)] = inst_31085__$1);

return statearr_31209;
})();
var statearr_31214_32883 = state_31148__$1;
(statearr_31214_32883[(2)] = null);

(statearr_31214_32883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (40))){
var inst_31115 = (state_31148[(22)]);
var inst_31119 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31115);
var state_31148__$1 = state_31148;
var statearr_31215_32884 = state_31148__$1;
(statearr_31215_32884[(2)] = inst_31119);

(statearr_31215_32884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (33))){
var inst_31102 = (state_31148[(23)]);
var inst_31104 = cljs.core.chunked_seq_QMARK_(inst_31102);
var state_31148__$1 = state_31148;
if(inst_31104){
var statearr_31223_32885 = state_31148__$1;
(statearr_31223_32885[(1)] = (36));

} else {
var statearr_31224_32886 = state_31148__$1;
(statearr_31224_32886[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (13))){
var inst_31028 = (state_31148[(24)]);
var inst_31031 = cljs.core.async.close_BANG_(inst_31028);
var state_31148__$1 = state_31148;
var statearr_31225_32887 = state_31148__$1;
(statearr_31225_32887[(2)] = inst_31031);

(statearr_31225_32887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (22))){
var inst_31053 = (state_31148[(8)]);
var inst_31058 = cljs.core.async.close_BANG_(inst_31053);
var state_31148__$1 = state_31148;
var statearr_31226_32892 = state_31148__$1;
(statearr_31226_32892[(2)] = inst_31058);

(statearr_31226_32892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (36))){
var inst_31102 = (state_31148[(23)]);
var inst_31106 = cljs.core.chunk_first(inst_31102);
var inst_31107 = cljs.core.chunk_rest(inst_31102);
var inst_31108 = cljs.core.count(inst_31106);
var inst_31084 = inst_31107;
var inst_31085 = inst_31106;
var inst_31086 = inst_31108;
var inst_31087 = (0);
var state_31148__$1 = (function (){var statearr_31227 = state_31148;
(statearr_31227[(19)] = inst_31086);

(statearr_31227[(20)] = inst_31084);

(statearr_31227[(10)] = inst_31087);

(statearr_31227[(12)] = inst_31085);

return statearr_31227;
})();
var statearr_31228_32894 = state_31148__$1;
(statearr_31228_32894[(2)] = null);

(statearr_31228_32894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (41))){
var inst_31102 = (state_31148[(23)]);
var inst_31121 = (state_31148[(2)]);
var inst_31122 = cljs.core.next(inst_31102);
var inst_31084 = inst_31122;
var inst_31085 = null;
var inst_31086 = (0);
var inst_31087 = (0);
var state_31148__$1 = (function (){var statearr_31229 = state_31148;
(statearr_31229[(19)] = inst_31086);

(statearr_31229[(20)] = inst_31084);

(statearr_31229[(10)] = inst_31087);

(statearr_31229[(25)] = inst_31121);

(statearr_31229[(12)] = inst_31085);

return statearr_31229;
})();
var statearr_31230_32895 = state_31148__$1;
(statearr_31230_32895[(2)] = null);

(statearr_31230_32895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (43))){
var state_31148__$1 = state_31148;
var statearr_31233_32896 = state_31148__$1;
(statearr_31233_32896[(2)] = null);

(statearr_31233_32896[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (29))){
var inst_31130 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31235_32897 = state_31148__$1;
(statearr_31235_32897[(2)] = inst_31130);

(statearr_31235_32897[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (44))){
var inst_31139 = (state_31148[(2)]);
var state_31148__$1 = (function (){var statearr_31236 = state_31148;
(statearr_31236[(26)] = inst_31139);

return statearr_31236;
})();
var statearr_31237_32898 = state_31148__$1;
(statearr_31237_32898[(2)] = null);

(statearr_31237_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (6))){
var inst_31076 = (state_31148[(27)]);
var inst_31075 = cljs.core.deref(cs);
var inst_31076__$1 = cljs.core.keys(inst_31075);
var inst_31077 = cljs.core.count(inst_31076__$1);
var inst_31078 = cljs.core.reset_BANG_(dctr,inst_31077);
var inst_31083 = cljs.core.seq(inst_31076__$1);
var inst_31084 = inst_31083;
var inst_31085 = null;
var inst_31086 = (0);
var inst_31087 = (0);
var state_31148__$1 = (function (){var statearr_31238 = state_31148;
(statearr_31238[(28)] = inst_31078);

(statearr_31238[(19)] = inst_31086);

(statearr_31238[(20)] = inst_31084);

(statearr_31238[(27)] = inst_31076__$1);

(statearr_31238[(10)] = inst_31087);

(statearr_31238[(12)] = inst_31085);

return statearr_31238;
})();
var statearr_31239_32900 = state_31148__$1;
(statearr_31239_32900[(2)] = null);

(statearr_31239_32900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (28))){
var inst_31102 = (state_31148[(23)]);
var inst_31084 = (state_31148[(20)]);
var inst_31102__$1 = cljs.core.seq(inst_31084);
var state_31148__$1 = (function (){var statearr_31240 = state_31148;
(statearr_31240[(23)] = inst_31102__$1);

return statearr_31240;
})();
if(inst_31102__$1){
var statearr_31241_32901 = state_31148__$1;
(statearr_31241_32901[(1)] = (33));

} else {
var statearr_31242_32902 = state_31148__$1;
(statearr_31242_32902[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (25))){
var inst_31086 = (state_31148[(19)]);
var inst_31087 = (state_31148[(10)]);
var inst_31089 = (inst_31087 < inst_31086);
var inst_31090 = inst_31089;
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31090)){
var statearr_31243_32907 = state_31148__$1;
(statearr_31243_32907[(1)] = (27));

} else {
var statearr_31244_32908 = state_31148__$1;
(statearr_31244_32908[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (34))){
var state_31148__$1 = state_31148;
var statearr_31245_32909 = state_31148__$1;
(statearr_31245_32909[(2)] = null);

(statearr_31245_32909[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (17))){
var state_31148__$1 = state_31148;
var statearr_31246_32910 = state_31148__$1;
(statearr_31246_32910[(2)] = null);

(statearr_31246_32910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (3))){
var inst_31144 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31148__$1,inst_31144);
} else {
if((state_val_31151 === (12))){
var inst_31071 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31247_32911 = state_31148__$1;
(statearr_31247_32911[(2)] = inst_31071);

(statearr_31247_32911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (2))){
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31148__$1,(4),ch);
} else {
if((state_val_31151 === (23))){
var state_31148__$1 = state_31148;
var statearr_31248_32912 = state_31148__$1;
(statearr_31248_32912[(2)] = null);

(statearr_31248_32912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (35))){
var inst_31128 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31257_32913 = state_31148__$1;
(statearr_31257_32913[(2)] = inst_31128);

(statearr_31257_32913[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (19))){
var inst_31038 = (state_31148[(7)]);
var inst_31043 = cljs.core.chunk_first(inst_31038);
var inst_31044 = cljs.core.chunk_rest(inst_31038);
var inst_31045 = cljs.core.count(inst_31043);
var inst_31016 = inst_31044;
var inst_31017 = inst_31043;
var inst_31018 = inst_31045;
var inst_31019 = (0);
var state_31148__$1 = (function (){var statearr_31262 = state_31148;
(statearr_31262[(13)] = inst_31017);

(statearr_31262[(14)] = inst_31018);

(statearr_31262[(16)] = inst_31016);

(statearr_31262[(17)] = inst_31019);

return statearr_31262;
})();
var statearr_31263_32914 = state_31148__$1;
(statearr_31263_32914[(2)] = null);

(statearr_31263_32914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (11))){
var inst_31038 = (state_31148[(7)]);
var inst_31016 = (state_31148[(16)]);
var inst_31038__$1 = cljs.core.seq(inst_31016);
var state_31148__$1 = (function (){var statearr_31264 = state_31148;
(statearr_31264[(7)] = inst_31038__$1);

return statearr_31264;
})();
if(inst_31038__$1){
var statearr_31265_32918 = state_31148__$1;
(statearr_31265_32918[(1)] = (16));

} else {
var statearr_31267_32919 = state_31148__$1;
(statearr_31267_32919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (9))){
var inst_31073 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31268_32920 = state_31148__$1;
(statearr_31268_32920[(2)] = inst_31073);

(statearr_31268_32920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (5))){
var inst_31013 = cljs.core.deref(cs);
var inst_31014 = cljs.core.seq(inst_31013);
var inst_31016 = inst_31014;
var inst_31017 = null;
var inst_31018 = (0);
var inst_31019 = (0);
var state_31148__$1 = (function (){var statearr_31269 = state_31148;
(statearr_31269[(13)] = inst_31017);

(statearr_31269[(14)] = inst_31018);

(statearr_31269[(16)] = inst_31016);

(statearr_31269[(17)] = inst_31019);

return statearr_31269;
})();
var statearr_31272_32921 = state_31148__$1;
(statearr_31272_32921[(2)] = null);

(statearr_31272_32921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (14))){
var state_31148__$1 = state_31148;
var statearr_31274_32922 = state_31148__$1;
(statearr_31274_32922[(2)] = null);

(statearr_31274_32922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (45))){
var inst_31136 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31275_32923 = state_31148__$1;
(statearr_31275_32923[(2)] = inst_31136);

(statearr_31275_32923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (26))){
var inst_31076 = (state_31148[(27)]);
var inst_31132 = (state_31148[(2)]);
var inst_31133 = cljs.core.seq(inst_31076);
var state_31148__$1 = (function (){var statearr_31276 = state_31148;
(statearr_31276[(29)] = inst_31132);

return statearr_31276;
})();
if(inst_31133){
var statearr_31277_32924 = state_31148__$1;
(statearr_31277_32924[(1)] = (42));

} else {
var statearr_31278_32925 = state_31148__$1;
(statearr_31278_32925[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (16))){
var inst_31038 = (state_31148[(7)]);
var inst_31041 = cljs.core.chunked_seq_QMARK_(inst_31038);
var state_31148__$1 = state_31148;
if(inst_31041){
var statearr_31279_32926 = state_31148__$1;
(statearr_31279_32926[(1)] = (19));

} else {
var statearr_31280_32927 = state_31148__$1;
(statearr_31280_32927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (38))){
var inst_31125 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31281_32928 = state_31148__$1;
(statearr_31281_32928[(2)] = inst_31125);

(statearr_31281_32928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (30))){
var state_31148__$1 = state_31148;
var statearr_31282_32929 = state_31148__$1;
(statearr_31282_32929[(2)] = null);

(statearr_31282_32929[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (10))){
var inst_31017 = (state_31148[(13)]);
var inst_31019 = (state_31148[(17)]);
var inst_31027 = cljs.core._nth(inst_31017,inst_31019);
var inst_31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31027,(0),null);
var inst_31029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31027,(1),null);
var state_31148__$1 = (function (){var statearr_31283 = state_31148;
(statearr_31283[(24)] = inst_31028);

return statearr_31283;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31284_32931 = state_31148__$1;
(statearr_31284_32931[(1)] = (13));

} else {
var statearr_31285_32932 = state_31148__$1;
(statearr_31285_32932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (18))){
var inst_31069 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31286_32933 = state_31148__$1;
(statearr_31286_32933[(2)] = inst_31069);

(statearr_31286_32933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (42))){
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31148__$1,(45),dchan);
} else {
if((state_val_31151 === (37))){
var inst_31115 = (state_31148[(22)]);
var inst_31102 = (state_31148[(23)]);
var inst_31005 = (state_31148[(11)]);
var inst_31115__$1 = cljs.core.first(inst_31102);
var inst_31116 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31115__$1,inst_31005,done);
var state_31148__$1 = (function (){var statearr_31290 = state_31148;
(statearr_31290[(22)] = inst_31115__$1);

return statearr_31290;
})();
if(cljs.core.truth_(inst_31116)){
var statearr_31292_32934 = state_31148__$1;
(statearr_31292_32934[(1)] = (39));

} else {
var statearr_31293_32935 = state_31148__$1;
(statearr_31293_32935[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (8))){
var inst_31018 = (state_31148[(14)]);
var inst_31019 = (state_31148[(17)]);
var inst_31021 = (inst_31019 < inst_31018);
var inst_31022 = inst_31021;
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31022)){
var statearr_31294_32936 = state_31148__$1;
(statearr_31294_32936[(1)] = (10));

} else {
var statearr_31295_32937 = state_31148__$1;
(statearr_31295_32937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29892__auto__ = null;
var cljs$core$async$mult_$_state_machine__29892__auto____0 = (function (){
var statearr_31299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31299[(0)] = cljs$core$async$mult_$_state_machine__29892__auto__);

(statearr_31299[(1)] = (1));

return statearr_31299;
});
var cljs$core$async$mult_$_state_machine__29892__auto____1 = (function (state_31148){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31148);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e31300){if((e31300 instanceof Object)){
var ex__29895__auto__ = e31300;
var statearr_31302_32938 = state_31148;
(statearr_31302_32938[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_31148;
state_31148 = G__32939;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29892__auto__ = function(state_31148){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29892__auto____1.call(this,state_31148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29892__auto____0;
cljs$core$async$mult_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29892__auto____1;
return cljs$core$async$mult_$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_31307 = f__30215__auto__();
(statearr_31307[(6)] = c__30214__auto___32865);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31311 = arguments.length;
switch (G__31311) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32951 = arguments.length;
var i__4790__auto___32952 = (0);
while(true){
if((i__4790__auto___32952 < len__4789__auto___32951)){
args__4795__auto__.push((arguments[i__4790__auto___32952]));

var G__32953 = (i__4790__auto___32952 + (1));
i__4790__auto___32952 = G__32953;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31365){
var map__31366 = p__31365;
var map__31366__$1 = (((((!((map__31366 == null))))?(((((map__31366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31366):map__31366);
var opts = map__31366__$1;
var statearr_31368_32954 = state;
(statearr_31368_32954[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31374_32955 = state;
(statearr_31374_32955[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31375_32956 = state;
(statearr_31375_32956[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31361){
var G__31362 = cljs.core.first(seq31361);
var seq31361__$1 = cljs.core.next(seq31361);
var G__31363 = cljs.core.first(seq31361__$1);
var seq31361__$2 = cljs.core.next(seq31361__$1);
var G__31364 = cljs.core.first(seq31361__$2);
var seq31361__$3 = cljs.core.next(seq31361__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31362,G__31363,G__31364,seq31361__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31377 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31378){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31378 = meta31378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31379,meta31378__$1){
var self__ = this;
var _31379__$1 = this;
return (new cljs.core.async.t_cljs$core$async31377(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31378__$1));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31379){
var self__ = this;
var _31379__$1 = this;
return self__.meta31378;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31378","meta31378",-978349952,null)], null);
}));

(cljs.core.async.t_cljs$core$async31377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31377");

(cljs.core.async.t_cljs$core$async31377.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31377.
 */
cljs.core.async.__GT_t_cljs$core$async31377 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31377(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31378){
return (new cljs.core.async.t_cljs$core$async31377(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31378));
});

}

return (new cljs.core.async.t_cljs$core$async31377(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30214__auto___32967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31484){
var state_val_31485 = (state_31484[(1)]);
if((state_val_31485 === (7))){
var inst_31399 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31495_32971 = state_31484__$1;
(statearr_31495_32971[(2)] = inst_31399);

(statearr_31495_32971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (20))){
var inst_31411 = (state_31484[(7)]);
var state_31484__$1 = state_31484;
var statearr_31498_32975 = state_31484__$1;
(statearr_31498_32975[(2)] = inst_31411);

(statearr_31498_32975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (27))){
var state_31484__$1 = state_31484;
var statearr_31499_32979 = state_31484__$1;
(statearr_31499_32979[(2)] = null);

(statearr_31499_32979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (1))){
var inst_31386 = (state_31484[(8)]);
var inst_31386__$1 = calc_state();
var inst_31388 = (inst_31386__$1 == null);
var inst_31389 = cljs.core.not(inst_31388);
var state_31484__$1 = (function (){var statearr_31500 = state_31484;
(statearr_31500[(8)] = inst_31386__$1);

return statearr_31500;
})();
if(inst_31389){
var statearr_31501_32980 = state_31484__$1;
(statearr_31501_32980[(1)] = (2));

} else {
var statearr_31502_32981 = state_31484__$1;
(statearr_31502_32981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (24))){
var inst_31435 = (state_31484[(9)]);
var inst_31444 = (state_31484[(10)]);
var inst_31458 = (state_31484[(11)]);
var inst_31458__$1 = (inst_31435.cljs$core$IFn$_invoke$arity$1 ? inst_31435.cljs$core$IFn$_invoke$arity$1(inst_31444) : inst_31435.call(null,inst_31444));
var state_31484__$1 = (function (){var statearr_31503 = state_31484;
(statearr_31503[(11)] = inst_31458__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31458__$1)){
var statearr_31504_32982 = state_31484__$1;
(statearr_31504_32982[(1)] = (29));

} else {
var statearr_31508_32983 = state_31484__$1;
(statearr_31508_32983[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (4))){
var inst_31402 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31402)){
var statearr_31509_32984 = state_31484__$1;
(statearr_31509_32984[(1)] = (8));

} else {
var statearr_31510_32985 = state_31484__$1;
(statearr_31510_32985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (15))){
var inst_31429 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31429)){
var statearr_31511_32986 = state_31484__$1;
(statearr_31511_32986[(1)] = (19));

} else {
var statearr_31512_32987 = state_31484__$1;
(statearr_31512_32987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (21))){
var inst_31434 = (state_31484[(12)]);
var inst_31434__$1 = (state_31484[(2)]);
var inst_31435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31434__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31434__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31434__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31484__$1 = (function (){var statearr_31514 = state_31484;
(statearr_31514[(9)] = inst_31435);

(statearr_31514[(12)] = inst_31434__$1);

(statearr_31514[(13)] = inst_31436);

return statearr_31514;
})();
return cljs.core.async.ioc_alts_BANG_(state_31484__$1,(22),inst_31437);
} else {
if((state_val_31485 === (31))){
var inst_31466 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31466)){
var statearr_31516_32988 = state_31484__$1;
(statearr_31516_32988[(1)] = (32));

} else {
var statearr_31517_32989 = state_31484__$1;
(statearr_31517_32989[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (32))){
var inst_31443 = (state_31484[(14)]);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31484__$1,(35),out,inst_31443);
} else {
if((state_val_31485 === (33))){
var inst_31434 = (state_31484[(12)]);
var inst_31411 = inst_31434;
var state_31484__$1 = (function (){var statearr_31519 = state_31484;
(statearr_31519[(7)] = inst_31411);

return statearr_31519;
})();
var statearr_31520_32991 = state_31484__$1;
(statearr_31520_32991[(2)] = null);

(statearr_31520_32991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (13))){
var inst_31411 = (state_31484[(7)]);
var inst_31418 = inst_31411.cljs$lang$protocol_mask$partition0$;
var inst_31419 = (inst_31418 & (64));
var inst_31420 = inst_31411.cljs$core$ISeq$;
var inst_31421 = (cljs.core.PROTOCOL_SENTINEL === inst_31420);
var inst_31422 = ((inst_31419) || (inst_31421));
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31422)){
var statearr_31521_33001 = state_31484__$1;
(statearr_31521_33001[(1)] = (16));

} else {
var statearr_31522_33002 = state_31484__$1;
(statearr_31522_33002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (22))){
var inst_31444 = (state_31484[(10)]);
var inst_31443 = (state_31484[(14)]);
var inst_31442 = (state_31484[(2)]);
var inst_31443__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31442,(0),null);
var inst_31444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31442,(1),null);
var inst_31445 = (inst_31443__$1 == null);
var inst_31446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31444__$1,change);
var inst_31447 = ((inst_31445) || (inst_31446));
var state_31484__$1 = (function (){var statearr_31527 = state_31484;
(statearr_31527[(10)] = inst_31444__$1);

(statearr_31527[(14)] = inst_31443__$1);

return statearr_31527;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31529_33009 = state_31484__$1;
(statearr_31529_33009[(1)] = (23));

} else {
var statearr_31530_33010 = state_31484__$1;
(statearr_31530_33010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (36))){
var inst_31434 = (state_31484[(12)]);
var inst_31411 = inst_31434;
var state_31484__$1 = (function (){var statearr_31531 = state_31484;
(statearr_31531[(7)] = inst_31411);

return statearr_31531;
})();
var statearr_31532_33011 = state_31484__$1;
(statearr_31532_33011[(2)] = null);

(statearr_31532_33011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (29))){
var inst_31458 = (state_31484[(11)]);
var state_31484__$1 = state_31484;
var statearr_31534_33012 = state_31484__$1;
(statearr_31534_33012[(2)] = inst_31458);

(statearr_31534_33012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (6))){
var state_31484__$1 = state_31484;
var statearr_31535_33013 = state_31484__$1;
(statearr_31535_33013[(2)] = false);

(statearr_31535_33013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (28))){
var inst_31454 = (state_31484[(2)]);
var inst_31455 = calc_state();
var inst_31411 = inst_31455;
var state_31484__$1 = (function (){var statearr_31536 = state_31484;
(statearr_31536[(15)] = inst_31454);

(statearr_31536[(7)] = inst_31411);

return statearr_31536;
})();
var statearr_31537_33014 = state_31484__$1;
(statearr_31537_33014[(2)] = null);

(statearr_31537_33014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (25))){
var inst_31480 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31538_33015 = state_31484__$1;
(statearr_31538_33015[(2)] = inst_31480);

(statearr_31538_33015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (34))){
var inst_31478 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31543_33016 = state_31484__$1;
(statearr_31543_33016[(2)] = inst_31478);

(statearr_31543_33016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (17))){
var state_31484__$1 = state_31484;
var statearr_31544_33017 = state_31484__$1;
(statearr_31544_33017[(2)] = false);

(statearr_31544_33017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (3))){
var state_31484__$1 = state_31484;
var statearr_31545_33018 = state_31484__$1;
(statearr_31545_33018[(2)] = false);

(statearr_31545_33018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (12))){
var inst_31482 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31484__$1,inst_31482);
} else {
if((state_val_31485 === (2))){
var inst_31386 = (state_31484[(8)]);
var inst_31391 = inst_31386.cljs$lang$protocol_mask$partition0$;
var inst_31392 = (inst_31391 & (64));
var inst_31393 = inst_31386.cljs$core$ISeq$;
var inst_31394 = (cljs.core.PROTOCOL_SENTINEL === inst_31393);
var inst_31395 = ((inst_31392) || (inst_31394));
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31395)){
var statearr_31546_33019 = state_31484__$1;
(statearr_31546_33019[(1)] = (5));

} else {
var statearr_31547_33020 = state_31484__$1;
(statearr_31547_33020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (23))){
var inst_31443 = (state_31484[(14)]);
var inst_31449 = (inst_31443 == null);
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31449)){
var statearr_31548_33027 = state_31484__$1;
(statearr_31548_33027[(1)] = (26));

} else {
var statearr_31549_33028 = state_31484__$1;
(statearr_31549_33028[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (35))){
var inst_31469 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
if(cljs.core.truth_(inst_31469)){
var statearr_31550_33029 = state_31484__$1;
(statearr_31550_33029[(1)] = (36));

} else {
var statearr_31552_33030 = state_31484__$1;
(statearr_31552_33030[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (19))){
var inst_31411 = (state_31484[(7)]);
var inst_31431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31411);
var state_31484__$1 = state_31484;
var statearr_31553_33031 = state_31484__$1;
(statearr_31553_33031[(2)] = inst_31431);

(statearr_31553_33031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (11))){
var inst_31411 = (state_31484[(7)]);
var inst_31415 = (inst_31411 == null);
var inst_31416 = cljs.core.not(inst_31415);
var state_31484__$1 = state_31484;
if(inst_31416){
var statearr_31554_33038 = state_31484__$1;
(statearr_31554_33038[(1)] = (13));

} else {
var statearr_31555_33039 = state_31484__$1;
(statearr_31555_33039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (9))){
var inst_31386 = (state_31484[(8)]);
var state_31484__$1 = state_31484;
var statearr_31557_33040 = state_31484__$1;
(statearr_31557_33040[(2)] = inst_31386);

(statearr_31557_33040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (5))){
var state_31484__$1 = state_31484;
var statearr_31558_33041 = state_31484__$1;
(statearr_31558_33041[(2)] = true);

(statearr_31558_33041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (14))){
var state_31484__$1 = state_31484;
var statearr_31560_33042 = state_31484__$1;
(statearr_31560_33042[(2)] = false);

(statearr_31560_33042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (26))){
var inst_31444 = (state_31484[(10)]);
var inst_31451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31444);
var state_31484__$1 = state_31484;
var statearr_31561_33043 = state_31484__$1;
(statearr_31561_33043[(2)] = inst_31451);

(statearr_31561_33043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (16))){
var state_31484__$1 = state_31484;
var statearr_31565_33044 = state_31484__$1;
(statearr_31565_33044[(2)] = true);

(statearr_31565_33044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (38))){
var inst_31474 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31566_33045 = state_31484__$1;
(statearr_31566_33045[(2)] = inst_31474);

(statearr_31566_33045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (30))){
var inst_31435 = (state_31484[(9)]);
var inst_31444 = (state_31484[(10)]);
var inst_31436 = (state_31484[(13)]);
var inst_31461 = cljs.core.empty_QMARK_(inst_31435);
var inst_31462 = (inst_31436.cljs$core$IFn$_invoke$arity$1 ? inst_31436.cljs$core$IFn$_invoke$arity$1(inst_31444) : inst_31436.call(null,inst_31444));
var inst_31463 = cljs.core.not(inst_31462);
var inst_31464 = ((inst_31461) && (inst_31463));
var state_31484__$1 = state_31484;
var statearr_31567_33046 = state_31484__$1;
(statearr_31567_33046[(2)] = inst_31464);

(statearr_31567_33046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (10))){
var inst_31386 = (state_31484[(8)]);
var inst_31407 = (state_31484[(2)]);
var inst_31408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31407,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31407,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31407,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31411 = inst_31386;
var state_31484__$1 = (function (){var statearr_31568 = state_31484;
(statearr_31568[(16)] = inst_31409);

(statearr_31568[(17)] = inst_31408);

(statearr_31568[(18)] = inst_31410);

(statearr_31568[(7)] = inst_31411);

return statearr_31568;
})();
var statearr_31569_33053 = state_31484__$1;
(statearr_31569_33053[(2)] = null);

(statearr_31569_33053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (18))){
var inst_31426 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31570_33054 = state_31484__$1;
(statearr_31570_33054[(2)] = inst_31426);

(statearr_31570_33054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (37))){
var state_31484__$1 = state_31484;
var statearr_31571_33055 = state_31484__$1;
(statearr_31571_33055[(2)] = null);

(statearr_31571_33055[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31485 === (8))){
var inst_31386 = (state_31484[(8)]);
var inst_31404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31386);
var state_31484__$1 = state_31484;
var statearr_31572_33056 = state_31484__$1;
(statearr_31572_33056[(2)] = inst_31404);

(statearr_31572_33056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29892__auto__ = null;
var cljs$core$async$mix_$_state_machine__29892__auto____0 = (function (){
var statearr_31577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31577[(0)] = cljs$core$async$mix_$_state_machine__29892__auto__);

(statearr_31577[(1)] = (1));

return statearr_31577;
});
var cljs$core$async$mix_$_state_machine__29892__auto____1 = (function (state_31484){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31484);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e31578){if((e31578 instanceof Object)){
var ex__29895__auto__ = e31578;
var statearr_31579_33057 = state_31484;
(statearr_31579_33057[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33058 = state_31484;
state_31484 = G__33058;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29892__auto__ = function(state_31484){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29892__auto____1.call(this,state_31484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29892__auto____0;
cljs$core$async$mix_$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29892__auto____1;
return cljs$core$async$mix_$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_31580 = f__30215__auto__();
(statearr_31580[(6)] = c__30214__auto___32967);

return statearr_31580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31641 = arguments.length;
switch (G__31641) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31648 = arguments.length;
switch (G__31648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31646_SHARP_){
if(cljs.core.truth_((p1__31646_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31646_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31646_SHARP_.call(null,topic)))){
return p1__31646_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31646_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31649 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31650){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31650 = meta31650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31651,meta31650__$1){
var self__ = this;
var _31651__$1 = this;
return (new cljs.core.async.t_cljs$core$async31649(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31650__$1));
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31651){
var self__ = this;
var _31651__$1 = this;
return self__.meta31650;
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31650","meta31650",-13404269,null)], null);
}));

(cljs.core.async.t_cljs$core$async31649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31649");

(cljs.core.async.t_cljs$core$async31649.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31649.
 */
cljs.core.async.__GT_t_cljs$core$async31649 = (function cljs$core$async$__GT_t_cljs$core$async31649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31650){
return (new cljs.core.async.t_cljs$core$async31649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31650));
});

}

return (new cljs.core.async.t_cljs$core$async31649(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30214__auto___33071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31735){
var state_val_31736 = (state_31735[(1)]);
if((state_val_31736 === (7))){
var inst_31731 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31739_33072 = state_31735__$1;
(statearr_31739_33072[(2)] = inst_31731);

(statearr_31739_33072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (20))){
var state_31735__$1 = state_31735;
var statearr_31741_33073 = state_31735__$1;
(statearr_31741_33073[(2)] = null);

(statearr_31741_33073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (1))){
var state_31735__$1 = state_31735;
var statearr_31746_33074 = state_31735__$1;
(statearr_31746_33074[(2)] = null);

(statearr_31746_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (24))){
var inst_31714 = (state_31735[(7)]);
var inst_31723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31714);
var state_31735__$1 = state_31735;
var statearr_31747_33075 = state_31735__$1;
(statearr_31747_33075[(2)] = inst_31723);

(statearr_31747_33075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (4))){
var inst_31665 = (state_31735[(8)]);
var inst_31665__$1 = (state_31735[(2)]);
var inst_31667 = (inst_31665__$1 == null);
var state_31735__$1 = (function (){var statearr_31751 = state_31735;
(statearr_31751[(8)] = inst_31665__$1);

return statearr_31751;
})();
if(cljs.core.truth_(inst_31667)){
var statearr_31752_33081 = state_31735__$1;
(statearr_31752_33081[(1)] = (5));

} else {
var statearr_31754_33082 = state_31735__$1;
(statearr_31754_33082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (15))){
var inst_31708 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31758_33083 = state_31735__$1;
(statearr_31758_33083[(2)] = inst_31708);

(statearr_31758_33083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (21))){
var inst_31728 = (state_31735[(2)]);
var state_31735__$1 = (function (){var statearr_31759 = state_31735;
(statearr_31759[(9)] = inst_31728);

return statearr_31759;
})();
var statearr_31760_33084 = state_31735__$1;
(statearr_31760_33084[(2)] = null);

(statearr_31760_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (13))){
var inst_31690 = (state_31735[(10)]);
var inst_31692 = cljs.core.chunked_seq_QMARK_(inst_31690);
var state_31735__$1 = state_31735;
if(inst_31692){
var statearr_31761_33085 = state_31735__$1;
(statearr_31761_33085[(1)] = (16));

} else {
var statearr_31762_33086 = state_31735__$1;
(statearr_31762_33086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (22))){
var inst_31720 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31720)){
var statearr_31763_33087 = state_31735__$1;
(statearr_31763_33087[(1)] = (23));

} else {
var statearr_31765_33088 = state_31735__$1;
(statearr_31765_33088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (6))){
var inst_31714 = (state_31735[(7)]);
var inst_31665 = (state_31735[(8)]);
var inst_31716 = (state_31735[(11)]);
var inst_31714__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31665) : topic_fn.call(null,inst_31665));
var inst_31715 = cljs.core.deref(mults);
var inst_31716__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31715,inst_31714__$1);
var state_31735__$1 = (function (){var statearr_31767 = state_31735;
(statearr_31767[(7)] = inst_31714__$1);

(statearr_31767[(11)] = inst_31716__$1);

return statearr_31767;
})();
if(cljs.core.truth_(inst_31716__$1)){
var statearr_31768_33089 = state_31735__$1;
(statearr_31768_33089[(1)] = (19));

} else {
var statearr_31769_33090 = state_31735__$1;
(statearr_31769_33090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (25))){
var inst_31725 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31771_33091 = state_31735__$1;
(statearr_31771_33091[(2)] = inst_31725);

(statearr_31771_33091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (17))){
var inst_31690 = (state_31735[(10)]);
var inst_31699 = cljs.core.first(inst_31690);
var inst_31700 = cljs.core.async.muxch_STAR_(inst_31699);
var inst_31701 = cljs.core.async.close_BANG_(inst_31700);
var inst_31702 = cljs.core.next(inst_31690);
var inst_31676 = inst_31702;
var inst_31677 = null;
var inst_31678 = (0);
var inst_31679 = (0);
var state_31735__$1 = (function (){var statearr_31772 = state_31735;
(statearr_31772[(12)] = inst_31679);

(statearr_31772[(13)] = inst_31678);

(statearr_31772[(14)] = inst_31677);

(statearr_31772[(15)] = inst_31676);

(statearr_31772[(16)] = inst_31701);

return statearr_31772;
})();
var statearr_31773_33092 = state_31735__$1;
(statearr_31773_33092[(2)] = null);

(statearr_31773_33092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (3))){
var inst_31733 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31735__$1,inst_31733);
} else {
if((state_val_31736 === (12))){
var inst_31710 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31774_33093 = state_31735__$1;
(statearr_31774_33093[(2)] = inst_31710);

(statearr_31774_33093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (2))){
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31735__$1,(4),ch);
} else {
if((state_val_31736 === (23))){
var state_31735__$1 = state_31735;
var statearr_31775_33094 = state_31735__$1;
(statearr_31775_33094[(2)] = null);

(statearr_31775_33094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (19))){
var inst_31665 = (state_31735[(8)]);
var inst_31716 = (state_31735[(11)]);
var inst_31718 = cljs.core.async.muxch_STAR_(inst_31716);
var state_31735__$1 = state_31735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31735__$1,(22),inst_31718,inst_31665);
} else {
if((state_val_31736 === (11))){
var inst_31690 = (state_31735[(10)]);
var inst_31676 = (state_31735[(15)]);
var inst_31690__$1 = cljs.core.seq(inst_31676);
var state_31735__$1 = (function (){var statearr_31777 = state_31735;
(statearr_31777[(10)] = inst_31690__$1);

return statearr_31777;
})();
if(inst_31690__$1){
var statearr_31778_33095 = state_31735__$1;
(statearr_31778_33095[(1)] = (13));

} else {
var statearr_31779_33096 = state_31735__$1;
(statearr_31779_33096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (9))){
var inst_31712 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31780_33097 = state_31735__$1;
(statearr_31780_33097[(2)] = inst_31712);

(statearr_31780_33097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (5))){
var inst_31673 = cljs.core.deref(mults);
var inst_31674 = cljs.core.vals(inst_31673);
var inst_31675 = cljs.core.seq(inst_31674);
var inst_31676 = inst_31675;
var inst_31677 = null;
var inst_31678 = (0);
var inst_31679 = (0);
var state_31735__$1 = (function (){var statearr_31781 = state_31735;
(statearr_31781[(12)] = inst_31679);

(statearr_31781[(13)] = inst_31678);

(statearr_31781[(14)] = inst_31677);

(statearr_31781[(15)] = inst_31676);

return statearr_31781;
})();
var statearr_31782_33098 = state_31735__$1;
(statearr_31782_33098[(2)] = null);

(statearr_31782_33098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (14))){
var state_31735__$1 = state_31735;
var statearr_31786_33099 = state_31735__$1;
(statearr_31786_33099[(2)] = null);

(statearr_31786_33099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (16))){
var inst_31690 = (state_31735[(10)]);
var inst_31694 = cljs.core.chunk_first(inst_31690);
var inst_31695 = cljs.core.chunk_rest(inst_31690);
var inst_31696 = cljs.core.count(inst_31694);
var inst_31676 = inst_31695;
var inst_31677 = inst_31694;
var inst_31678 = inst_31696;
var inst_31679 = (0);
var state_31735__$1 = (function (){var statearr_31787 = state_31735;
(statearr_31787[(12)] = inst_31679);

(statearr_31787[(13)] = inst_31678);

(statearr_31787[(14)] = inst_31677);

(statearr_31787[(15)] = inst_31676);

return statearr_31787;
})();
var statearr_31788_33100 = state_31735__$1;
(statearr_31788_33100[(2)] = null);

(statearr_31788_33100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (10))){
var inst_31679 = (state_31735[(12)]);
var inst_31678 = (state_31735[(13)]);
var inst_31677 = (state_31735[(14)]);
var inst_31676 = (state_31735[(15)]);
var inst_31684 = cljs.core._nth(inst_31677,inst_31679);
var inst_31685 = cljs.core.async.muxch_STAR_(inst_31684);
var inst_31686 = cljs.core.async.close_BANG_(inst_31685);
var inst_31687 = (inst_31679 + (1));
var tmp31783 = inst_31678;
var tmp31784 = inst_31677;
var tmp31785 = inst_31676;
var inst_31676__$1 = tmp31785;
var inst_31677__$1 = tmp31784;
var inst_31678__$1 = tmp31783;
var inst_31679__$1 = inst_31687;
var state_31735__$1 = (function (){var statearr_31789 = state_31735;
(statearr_31789[(12)] = inst_31679__$1);

(statearr_31789[(13)] = inst_31678__$1);

(statearr_31789[(14)] = inst_31677__$1);

(statearr_31789[(15)] = inst_31676__$1);

(statearr_31789[(17)] = inst_31686);

return statearr_31789;
})();
var statearr_31790_33103 = state_31735__$1;
(statearr_31790_33103[(2)] = null);

(statearr_31790_33103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (18))){
var inst_31705 = (state_31735[(2)]);
var state_31735__$1 = state_31735;
var statearr_31791_33105 = state_31735__$1;
(statearr_31791_33105[(2)] = inst_31705);

(statearr_31791_33105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31736 === (8))){
var inst_31679 = (state_31735[(12)]);
var inst_31678 = (state_31735[(13)]);
var inst_31681 = (inst_31679 < inst_31678);
var inst_31682 = inst_31681;
var state_31735__$1 = state_31735;
if(cljs.core.truth_(inst_31682)){
var statearr_31792_33106 = state_31735__$1;
(statearr_31792_33106[(1)] = (10));

} else {
var statearr_31793_33107 = state_31735__$1;
(statearr_31793_33107[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_31795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31795[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_31795[(1)] = (1));

return statearr_31795;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_31735){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31735);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e31797){if((e31797 instanceof Object)){
var ex__29895__auto__ = e31797;
var statearr_31798_33108 = state_31735;
(statearr_31798_33108[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33109 = state_31735;
state_31735 = G__33109;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_31735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_31735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_31799 = f__30215__auto__();
(statearr_31799[(6)] = c__30214__auto___33071);

return statearr_31799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31801 = arguments.length;
switch (G__31801) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31803 = arguments.length;
switch (G__31803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31805 = arguments.length;
switch (G__31805) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30214__auto___33116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31844){
var state_val_31845 = (state_31844[(1)]);
if((state_val_31845 === (7))){
var state_31844__$1 = state_31844;
var statearr_31847_33117 = state_31844__$1;
(statearr_31847_33117[(2)] = null);

(statearr_31847_33117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (1))){
var state_31844__$1 = state_31844;
var statearr_31848_33118 = state_31844__$1;
(statearr_31848_33118[(2)] = null);

(statearr_31848_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (4))){
var inst_31808 = (state_31844[(7)]);
var inst_31810 = (inst_31808 < cnt);
var state_31844__$1 = state_31844;
if(cljs.core.truth_(inst_31810)){
var statearr_31849_33119 = state_31844__$1;
(statearr_31849_33119[(1)] = (6));

} else {
var statearr_31850_33120 = state_31844__$1;
(statearr_31850_33120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (15))){
var inst_31840 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
var statearr_31851_33121 = state_31844__$1;
(statearr_31851_33121[(2)] = inst_31840);

(statearr_31851_33121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (13))){
var inst_31833 = cljs.core.async.close_BANG_(out);
var state_31844__$1 = state_31844;
var statearr_31853_33122 = state_31844__$1;
(statearr_31853_33122[(2)] = inst_31833);

(statearr_31853_33122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (6))){
var state_31844__$1 = state_31844;
var statearr_31854_33123 = state_31844__$1;
(statearr_31854_33123[(2)] = null);

(statearr_31854_33123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (3))){
var inst_31842 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31844__$1,inst_31842);
} else {
if((state_val_31845 === (12))){
var inst_31830 = (state_31844[(8)]);
var inst_31830__$1 = (state_31844[(2)]);
var inst_31831 = cljs.core.some(cljs.core.nil_QMARK_,inst_31830__$1);
var state_31844__$1 = (function (){var statearr_31855 = state_31844;
(statearr_31855[(8)] = inst_31830__$1);

return statearr_31855;
})();
if(cljs.core.truth_(inst_31831)){
var statearr_31856_33129 = state_31844__$1;
(statearr_31856_33129[(1)] = (13));

} else {
var statearr_31857_33130 = state_31844__$1;
(statearr_31857_33130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (2))){
var inst_31807 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31808 = (0);
var state_31844__$1 = (function (){var statearr_31858 = state_31844;
(statearr_31858[(9)] = inst_31807);

(statearr_31858[(7)] = inst_31808);

return statearr_31858;
})();
var statearr_31859_33136 = state_31844__$1;
(statearr_31859_33136[(2)] = null);

(statearr_31859_33136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (11))){
var inst_31808 = (state_31844[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31844,(10),Object,null,(9));
var inst_31817 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31808) : chs__$1.call(null,inst_31808));
var inst_31818 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31808) : done.call(null,inst_31808));
var inst_31819 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31817,inst_31818);
var state_31844__$1 = state_31844;
var statearr_31860_33142 = state_31844__$1;
(statearr_31860_33142[(2)] = inst_31819);


cljs.core.async.impl.ioc_helpers.process_exception(state_31844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (9))){
var inst_31808 = (state_31844[(7)]);
var inst_31821 = (state_31844[(2)]);
var inst_31822 = (inst_31808 + (1));
var inst_31808__$1 = inst_31822;
var state_31844__$1 = (function (){var statearr_31861 = state_31844;
(statearr_31861[(7)] = inst_31808__$1);

(statearr_31861[(10)] = inst_31821);

return statearr_31861;
})();
var statearr_31862_33143 = state_31844__$1;
(statearr_31862_33143[(2)] = null);

(statearr_31862_33143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (5))){
var inst_31828 = (state_31844[(2)]);
var state_31844__$1 = (function (){var statearr_31863 = state_31844;
(statearr_31863[(11)] = inst_31828);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31844__$1,(12),dchan);
} else {
if((state_val_31845 === (14))){
var inst_31830 = (state_31844[(8)]);
var inst_31835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31830);
var state_31844__$1 = state_31844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31844__$1,(16),out,inst_31835);
} else {
if((state_val_31845 === (16))){
var inst_31837 = (state_31844[(2)]);
var state_31844__$1 = (function (){var statearr_31864 = state_31844;
(statearr_31864[(12)] = inst_31837);

return statearr_31864;
})();
var statearr_31865_33144 = state_31844__$1;
(statearr_31865_33144[(2)] = null);

(statearr_31865_33144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (10))){
var inst_31812 = (state_31844[(2)]);
var inst_31813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31844__$1 = (function (){var statearr_31866 = state_31844;
(statearr_31866[(13)] = inst_31812);

return statearr_31866;
})();
var statearr_31867_33153 = state_31844__$1;
(statearr_31867_33153[(2)] = inst_31813);


cljs.core.async.impl.ioc_helpers.process_exception(state_31844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (8))){
var inst_31826 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
var statearr_31868_33154 = state_31844__$1;
(statearr_31868_33154[(2)] = inst_31826);

(statearr_31868_33154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_31869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31869[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_31869[(1)] = (1));

return statearr_31869;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_31844){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31844);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__29895__auto__ = e31870;
var statearr_31871_33159 = state_31844;
(statearr_31871_33159[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33174 = state_31844;
state_31844 = G__33174;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_31844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_31844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_31872 = f__30215__auto__();
(statearr_31872[(6)] = c__30214__auto___33116);

return statearr_31872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31875 = arguments.length;
switch (G__31875) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31907){
var state_val_31908 = (state_31907[(1)]);
if((state_val_31908 === (7))){
var inst_31886 = (state_31907[(7)]);
var inst_31887 = (state_31907[(8)]);
var inst_31886__$1 = (state_31907[(2)]);
var inst_31887__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31886__$1,(0),null);
var inst_31888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31886__$1,(1),null);
var inst_31889 = (inst_31887__$1 == null);
var state_31907__$1 = (function (){var statearr_31909 = state_31907;
(statearr_31909[(7)] = inst_31886__$1);

(statearr_31909[(9)] = inst_31888);

(statearr_31909[(8)] = inst_31887__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31889)){
var statearr_31910_33178 = state_31907__$1;
(statearr_31910_33178[(1)] = (8));

} else {
var statearr_31911_33179 = state_31907__$1;
(statearr_31911_33179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (1))){
var inst_31876 = cljs.core.vec(chs);
var inst_31877 = inst_31876;
var state_31907__$1 = (function (){var statearr_31912 = state_31907;
(statearr_31912[(10)] = inst_31877);

return statearr_31912;
})();
var statearr_31913_33180 = state_31907__$1;
(statearr_31913_33180[(2)] = null);

(statearr_31913_33180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (4))){
var inst_31877 = (state_31907[(10)]);
var state_31907__$1 = state_31907;
return cljs.core.async.ioc_alts_BANG_(state_31907__$1,(7),inst_31877);
} else {
if((state_val_31908 === (6))){
var inst_31903 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31914_33181 = state_31907__$1;
(statearr_31914_33181[(2)] = inst_31903);

(statearr_31914_33181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (3))){
var inst_31905 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31907__$1,inst_31905);
} else {
if((state_val_31908 === (2))){
var inst_31877 = (state_31907[(10)]);
var inst_31879 = cljs.core.count(inst_31877);
var inst_31880 = (inst_31879 > (0));
var state_31907__$1 = state_31907;
if(cljs.core.truth_(inst_31880)){
var statearr_31916_33183 = state_31907__$1;
(statearr_31916_33183[(1)] = (4));

} else {
var statearr_31917_33184 = state_31907__$1;
(statearr_31917_33184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (11))){
var inst_31877 = (state_31907[(10)]);
var inst_31896 = (state_31907[(2)]);
var tmp31915 = inst_31877;
var inst_31877__$1 = tmp31915;
var state_31907__$1 = (function (){var statearr_31918 = state_31907;
(statearr_31918[(10)] = inst_31877__$1);

(statearr_31918[(11)] = inst_31896);

return statearr_31918;
})();
var statearr_31919_33185 = state_31907__$1;
(statearr_31919_33185[(2)] = null);

(statearr_31919_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (9))){
var inst_31887 = (state_31907[(8)]);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31907__$1,(11),out,inst_31887);
} else {
if((state_val_31908 === (5))){
var inst_31901 = cljs.core.async.close_BANG_(out);
var state_31907__$1 = state_31907;
var statearr_31920_33186 = state_31907__$1;
(statearr_31920_33186[(2)] = inst_31901);

(statearr_31920_33186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (10))){
var inst_31899 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31921_33187 = state_31907__$1;
(statearr_31921_33187[(2)] = inst_31899);

(statearr_31921_33187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (8))){
var inst_31886 = (state_31907[(7)]);
var inst_31888 = (state_31907[(9)]);
var inst_31877 = (state_31907[(10)]);
var inst_31887 = (state_31907[(8)]);
var inst_31891 = (function (){var cs = inst_31877;
var vec__31882 = inst_31886;
var v = inst_31887;
var c = inst_31888;
return (function (p1__31873_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31873_SHARP_);
});
})();
var inst_31892 = cljs.core.filterv(inst_31891,inst_31877);
var inst_31877__$1 = inst_31892;
var state_31907__$1 = (function (){var statearr_31922 = state_31907;
(statearr_31922[(10)] = inst_31877__$1);

return statearr_31922;
})();
var statearr_31923_33192 = state_31907__$1;
(statearr_31923_33192[(2)] = null);

(statearr_31923_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_31926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31926[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_31926[(1)] = (1));

return statearr_31926;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_31907){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31907);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e31927){if((e31927 instanceof Object)){
var ex__29895__auto__ = e31927;
var statearr_31928_33193 = state_31907;
(statearr_31928_33193[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33194 = state_31907;
state_31907 = G__33194;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_31907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_31907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_31929 = f__30215__auto__();
(statearr_31929[(6)] = c__30214__auto___33176);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31931 = arguments.length;
switch (G__31931) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_31971){
var state_val_31972 = (state_31971[(1)]);
if((state_val_31972 === (7))){
var inst_31945 = (state_31971[(7)]);
var inst_31945__$1 = (state_31971[(2)]);
var inst_31946 = (inst_31945__$1 == null);
var inst_31947 = cljs.core.not(inst_31946);
var state_31971__$1 = (function (){var statearr_31974 = state_31971;
(statearr_31974[(7)] = inst_31945__$1);

return statearr_31974;
})();
if(inst_31947){
var statearr_31975_33201 = state_31971__$1;
(statearr_31975_33201[(1)] = (8));

} else {
var statearr_31976_33202 = state_31971__$1;
(statearr_31976_33202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (1))){
var inst_31938 = (0);
var state_31971__$1 = (function (){var statearr_31977 = state_31971;
(statearr_31977[(8)] = inst_31938);

return statearr_31977;
})();
var statearr_31978_33203 = state_31971__$1;
(statearr_31978_33203[(2)] = null);

(statearr_31978_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (4))){
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31971__$1,(7),ch);
} else {
if((state_val_31972 === (6))){
var inst_31958 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31979_33210 = state_31971__$1;
(statearr_31979_33210[(2)] = inst_31958);

(statearr_31979_33210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (3))){
var inst_31960 = (state_31971[(2)]);
var inst_31961 = cljs.core.async.close_BANG_(out);
var state_31971__$1 = (function (){var statearr_31980 = state_31971;
(statearr_31980[(9)] = inst_31960);

return statearr_31980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31971__$1,inst_31961);
} else {
if((state_val_31972 === (2))){
var inst_31938 = (state_31971[(8)]);
var inst_31940 = (inst_31938 < n);
var state_31971__$1 = state_31971;
if(cljs.core.truth_(inst_31940)){
var statearr_31983_33224 = state_31971__$1;
(statearr_31983_33224[(1)] = (4));

} else {
var statearr_31984_33227 = state_31971__$1;
(statearr_31984_33227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (11))){
var inst_31938 = (state_31971[(8)]);
var inst_31950 = (state_31971[(2)]);
var inst_31951 = (inst_31938 + (1));
var inst_31938__$1 = inst_31951;
var state_31971__$1 = (function (){var statearr_31985 = state_31971;
(statearr_31985[(10)] = inst_31950);

(statearr_31985[(8)] = inst_31938__$1);

return statearr_31985;
})();
var statearr_31986_33255 = state_31971__$1;
(statearr_31986_33255[(2)] = null);

(statearr_31986_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (9))){
var state_31971__$1 = state_31971;
var statearr_31987_33256 = state_31971__$1;
(statearr_31987_33256[(2)] = null);

(statearr_31987_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (5))){
var state_31971__$1 = state_31971;
var statearr_31988_33257 = state_31971__$1;
(statearr_31988_33257[(2)] = null);

(statearr_31988_33257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (10))){
var inst_31955 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31993_33258 = state_31971__$1;
(statearr_31993_33258[(2)] = inst_31955);

(statearr_31993_33258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (8))){
var inst_31945 = (state_31971[(7)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31971__$1,(11),out,inst_31945);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_32000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32000[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_32000[(1)] = (1));

return statearr_32000;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_31971){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_31971);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32001){if((e32001 instanceof Object)){
var ex__29895__auto__ = e32001;
var statearr_32002_33259 = state_31971;
(statearr_32002_33259[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33260 = state_31971;
state_31971 = G__33260;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_31971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_31971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32005 = f__30215__auto__();
(statearr_32005[(6)] = c__30214__auto___33200);

return statearr_32005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32017 = (function (f,ch,meta32018){
this.f = f;
this.ch = ch;
this.meta32018 = meta32018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32019,meta32018__$1){
var self__ = this;
var _32019__$1 = this;
return (new cljs.core.async.t_cljs$core$async32017(self__.f,self__.ch,meta32018__$1));
}));

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32019){
var self__ = this;
var _32019__$1 = this;
return self__.meta32018;
}));

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32020 = (function (f,ch,meta32018,_,fn1,meta32021){
this.f = f;
this.ch = ch;
this.meta32018 = meta32018;
this._ = _;
this.fn1 = fn1;
this.meta32021 = meta32021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32022,meta32021__$1){
var self__ = this;
var _32022__$1 = this;
return (new cljs.core.async.t_cljs$core$async32020(self__.f,self__.ch,self__.meta32018,self__._,self__.fn1,meta32021__$1));
}));

(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32022){
var self__ = this;
var _32022__$1 = this;
return self__.meta32021;
}));

(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32007_SHARP_){
var G__32042 = (((p1__32007_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32007_SHARP_) : self__.f.call(null,p1__32007_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32042) : f1.call(null,G__32042));
});
}));

(cljs.core.async.t_cljs$core$async32020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32018","meta32018",-1145438652,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32017","cljs.core.async/t_cljs$core$async32017",276754743,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32021","meta32021",1767613214,null)], null);
}));

(cljs.core.async.t_cljs$core$async32020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32020");

(cljs.core.async.t_cljs$core$async32020.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32020.
 */
cljs.core.async.__GT_t_cljs$core$async32020 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32020(f__$1,ch__$1,meta32018__$1,___$2,fn1__$1,meta32021){
return (new cljs.core.async.t_cljs$core$async32020(f__$1,ch__$1,meta32018__$1,___$2,fn1__$1,meta32021));
});

}

return (new cljs.core.async.t_cljs$core$async32020(self__.f,self__.ch,self__.meta32018,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32050 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32050) : self__.f.call(null,G__32050));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32018","meta32018",-1145438652,null)], null);
}));

(cljs.core.async.t_cljs$core$async32017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32017");

(cljs.core.async.t_cljs$core$async32017.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32017.
 */
cljs.core.async.__GT_t_cljs$core$async32017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32017(f__$1,ch__$1,meta32018){
return (new cljs.core.async.t_cljs$core$async32017(f__$1,ch__$1,meta32018));
});

}

return (new cljs.core.async.t_cljs$core$async32017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32059 = (function (f,ch,meta32060){
this.f = f;
this.ch = ch;
this.meta32060 = meta32060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32061,meta32060__$1){
var self__ = this;
var _32061__$1 = this;
return (new cljs.core.async.t_cljs$core$async32059(self__.f,self__.ch,meta32060__$1));
}));

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32061){
var self__ = this;
var _32061__$1 = this;
return self__.meta32060;
}));

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32060","meta32060",101647329,null)], null);
}));

(cljs.core.async.t_cljs$core$async32059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32059");

(cljs.core.async.t_cljs$core$async32059.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32059.
 */
cljs.core.async.__GT_t_cljs$core$async32059 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32059(f__$1,ch__$1,meta32060){
return (new cljs.core.async.t_cljs$core$async32059(f__$1,ch__$1,meta32060));
});

}

return (new cljs.core.async.t_cljs$core$async32059(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32072 = (function (p,ch,meta32073){
this.p = p;
this.ch = ch;
this.meta32073 = meta32073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32074,meta32073__$1){
var self__ = this;
var _32074__$1 = this;
return (new cljs.core.async.t_cljs$core$async32072(self__.p,self__.ch,meta32073__$1));
}));

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32074){
var self__ = this;
var _32074__$1 = this;
return self__.meta32073;
}));

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32073","meta32073",1614199158,null)], null);
}));

(cljs.core.async.t_cljs$core$async32072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32072");

(cljs.core.async.t_cljs$core$async32072.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32072.
 */
cljs.core.async.__GT_t_cljs$core$async32072 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32072(p__$1,ch__$1,meta32073){
return (new cljs.core.async.t_cljs$core$async32072(p__$1,ch__$1,meta32073));
});

}

return (new cljs.core.async.t_cljs$core$async32072(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32111 = arguments.length;
switch (G__32111) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_32141){
var state_val_32142 = (state_32141[(1)]);
if((state_val_32142 === (7))){
var inst_32135 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32148_33346 = state_32141__$1;
(statearr_32148_33346[(2)] = inst_32135);

(statearr_32148_33346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (1))){
var state_32141__$1 = state_32141;
var statearr_32150_33347 = state_32141__$1;
(statearr_32150_33347[(2)] = null);

(statearr_32150_33347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (4))){
var inst_32120 = (state_32141[(7)]);
var inst_32120__$1 = (state_32141[(2)]);
var inst_32121 = (inst_32120__$1 == null);
var state_32141__$1 = (function (){var statearr_32151 = state_32141;
(statearr_32151[(7)] = inst_32120__$1);

return statearr_32151;
})();
if(cljs.core.truth_(inst_32121)){
var statearr_32152_33348 = state_32141__$1;
(statearr_32152_33348[(1)] = (5));

} else {
var statearr_32153_33349 = state_32141__$1;
(statearr_32153_33349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (6))){
var inst_32120 = (state_32141[(7)]);
var inst_32126 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32120) : p.call(null,inst_32120));
var state_32141__$1 = state_32141;
if(cljs.core.truth_(inst_32126)){
var statearr_32158_33350 = state_32141__$1;
(statearr_32158_33350[(1)] = (8));

} else {
var statearr_32161_33351 = state_32141__$1;
(statearr_32161_33351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (3))){
var inst_32138 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32141__$1,inst_32138);
} else {
if((state_val_32142 === (2))){
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32141__$1,(4),ch);
} else {
if((state_val_32142 === (11))){
var inst_32129 = (state_32141[(2)]);
var state_32141__$1 = state_32141;
var statearr_32175_33375 = state_32141__$1;
(statearr_32175_33375[(2)] = inst_32129);

(statearr_32175_33375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (9))){
var state_32141__$1 = state_32141;
var statearr_32183_33380 = state_32141__$1;
(statearr_32183_33380[(2)] = null);

(statearr_32183_33380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (5))){
var inst_32124 = cljs.core.async.close_BANG_(out);
var state_32141__$1 = state_32141;
var statearr_32184_33381 = state_32141__$1;
(statearr_32184_33381[(2)] = inst_32124);

(statearr_32184_33381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (10))){
var inst_32132 = (state_32141[(2)]);
var state_32141__$1 = (function (){var statearr_32185 = state_32141;
(statearr_32185[(8)] = inst_32132);

return statearr_32185;
})();
var statearr_32186_33390 = state_32141__$1;
(statearr_32186_33390[(2)] = null);

(statearr_32186_33390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32142 === (8))){
var inst_32120 = (state_32141[(7)]);
var state_32141__$1 = state_32141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32141__$1,(11),out,inst_32120);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_32191 = [null,null,null,null,null,null,null,null,null];
(statearr_32191[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_32191[(1)] = (1));

return statearr_32191;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_32141){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_32141);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32193){if((e32193 instanceof Object)){
var ex__29895__auto__ = e32193;
var statearr_32196_33393 = state_32141;
(statearr_32196_33393[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33394 = state_32141;
state_32141 = G__33394;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_32141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_32141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32200 = f__30215__auto__();
(statearr_32200[(6)] = c__30214__auto___33345);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32205 = arguments.length;
switch (G__32205) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_32274){
var state_val_32275 = (state_32274[(1)]);
if((state_val_32275 === (7))){
var inst_32270 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32282_33396 = state_32274__$1;
(statearr_32282_33396[(2)] = inst_32270);

(statearr_32282_33396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (20))){
var inst_32239 = (state_32274[(7)]);
var inst_32251 = (state_32274[(2)]);
var inst_32252 = cljs.core.next(inst_32239);
var inst_32223 = inst_32252;
var inst_32224 = null;
var inst_32225 = (0);
var inst_32226 = (0);
var state_32274__$1 = (function (){var statearr_32283 = state_32274;
(statearr_32283[(8)] = inst_32224);

(statearr_32283[(9)] = inst_32226);

(statearr_32283[(10)] = inst_32223);

(statearr_32283[(11)] = inst_32251);

(statearr_32283[(12)] = inst_32225);

return statearr_32283;
})();
var statearr_32284_33397 = state_32274__$1;
(statearr_32284_33397[(2)] = null);

(statearr_32284_33397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (1))){
var state_32274__$1 = state_32274;
var statearr_32285_33398 = state_32274__$1;
(statearr_32285_33398[(2)] = null);

(statearr_32285_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (4))){
var inst_32212 = (state_32274[(13)]);
var inst_32212__$1 = (state_32274[(2)]);
var inst_32213 = (inst_32212__$1 == null);
var state_32274__$1 = (function (){var statearr_32286 = state_32274;
(statearr_32286[(13)] = inst_32212__$1);

return statearr_32286;
})();
if(cljs.core.truth_(inst_32213)){
var statearr_32289_33399 = state_32274__$1;
(statearr_32289_33399[(1)] = (5));

} else {
var statearr_32290_33400 = state_32274__$1;
(statearr_32290_33400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (15))){
var state_32274__$1 = state_32274;
var statearr_32294_33401 = state_32274__$1;
(statearr_32294_33401[(2)] = null);

(statearr_32294_33401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (21))){
var state_32274__$1 = state_32274;
var statearr_32299_33402 = state_32274__$1;
(statearr_32299_33402[(2)] = null);

(statearr_32299_33402[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (13))){
var inst_32224 = (state_32274[(8)]);
var inst_32226 = (state_32274[(9)]);
var inst_32223 = (state_32274[(10)]);
var inst_32225 = (state_32274[(12)]);
var inst_32235 = (state_32274[(2)]);
var inst_32236 = (inst_32226 + (1));
var tmp32291 = inst_32224;
var tmp32292 = inst_32223;
var tmp32293 = inst_32225;
var inst_32223__$1 = tmp32292;
var inst_32224__$1 = tmp32291;
var inst_32225__$1 = tmp32293;
var inst_32226__$1 = inst_32236;
var state_32274__$1 = (function (){var statearr_32303 = state_32274;
(statearr_32303[(8)] = inst_32224__$1);

(statearr_32303[(9)] = inst_32226__$1);

(statearr_32303[(10)] = inst_32223__$1);

(statearr_32303[(14)] = inst_32235);

(statearr_32303[(12)] = inst_32225__$1);

return statearr_32303;
})();
var statearr_32306_33404 = state_32274__$1;
(statearr_32306_33404[(2)] = null);

(statearr_32306_33404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (22))){
var state_32274__$1 = state_32274;
var statearr_32311_33405 = state_32274__$1;
(statearr_32311_33405[(2)] = null);

(statearr_32311_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (6))){
var inst_32212 = (state_32274[(13)]);
var inst_32221 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32212) : f.call(null,inst_32212));
var inst_32222 = cljs.core.seq(inst_32221);
var inst_32223 = inst_32222;
var inst_32224 = null;
var inst_32225 = (0);
var inst_32226 = (0);
var state_32274__$1 = (function (){var statearr_32312 = state_32274;
(statearr_32312[(8)] = inst_32224);

(statearr_32312[(9)] = inst_32226);

(statearr_32312[(10)] = inst_32223);

(statearr_32312[(12)] = inst_32225);

return statearr_32312;
})();
var statearr_32313_33406 = state_32274__$1;
(statearr_32313_33406[(2)] = null);

(statearr_32313_33406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (17))){
var inst_32239 = (state_32274[(7)]);
var inst_32243 = cljs.core.chunk_first(inst_32239);
var inst_32244 = cljs.core.chunk_rest(inst_32239);
var inst_32245 = cljs.core.count(inst_32243);
var inst_32223 = inst_32244;
var inst_32224 = inst_32243;
var inst_32225 = inst_32245;
var inst_32226 = (0);
var state_32274__$1 = (function (){var statearr_32324 = state_32274;
(statearr_32324[(8)] = inst_32224);

(statearr_32324[(9)] = inst_32226);

(statearr_32324[(10)] = inst_32223);

(statearr_32324[(12)] = inst_32225);

return statearr_32324;
})();
var statearr_32325_33407 = state_32274__$1;
(statearr_32325_33407[(2)] = null);

(statearr_32325_33407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (3))){
var inst_32272 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32274__$1,inst_32272);
} else {
if((state_val_32275 === (12))){
var inst_32260 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32328_33408 = state_32274__$1;
(statearr_32328_33408[(2)] = inst_32260);

(statearr_32328_33408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (2))){
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32274__$1,(4),in$);
} else {
if((state_val_32275 === (23))){
var inst_32268 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32329_33410 = state_32274__$1;
(statearr_32329_33410[(2)] = inst_32268);

(statearr_32329_33410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (19))){
var inst_32255 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32330_33411 = state_32274__$1;
(statearr_32330_33411[(2)] = inst_32255);

(statearr_32330_33411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (11))){
var inst_32223 = (state_32274[(10)]);
var inst_32239 = (state_32274[(7)]);
var inst_32239__$1 = cljs.core.seq(inst_32223);
var state_32274__$1 = (function (){var statearr_32334 = state_32274;
(statearr_32334[(7)] = inst_32239__$1);

return statearr_32334;
})();
if(inst_32239__$1){
var statearr_32335_33412 = state_32274__$1;
(statearr_32335_33412[(1)] = (14));

} else {
var statearr_32336_33413 = state_32274__$1;
(statearr_32336_33413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (9))){
var inst_32262 = (state_32274[(2)]);
var inst_32263 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32274__$1 = (function (){var statearr_32337 = state_32274;
(statearr_32337[(15)] = inst_32262);

return statearr_32337;
})();
if(cljs.core.truth_(inst_32263)){
var statearr_32338_33414 = state_32274__$1;
(statearr_32338_33414[(1)] = (21));

} else {
var statearr_32339_33415 = state_32274__$1;
(statearr_32339_33415[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (5))){
var inst_32215 = cljs.core.async.close_BANG_(out);
var state_32274__$1 = state_32274;
var statearr_32340_33416 = state_32274__$1;
(statearr_32340_33416[(2)] = inst_32215);

(statearr_32340_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (14))){
var inst_32239 = (state_32274[(7)]);
var inst_32241 = cljs.core.chunked_seq_QMARK_(inst_32239);
var state_32274__$1 = state_32274;
if(inst_32241){
var statearr_32341_33417 = state_32274__$1;
(statearr_32341_33417[(1)] = (17));

} else {
var statearr_32342_33418 = state_32274__$1;
(statearr_32342_33418[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (16))){
var inst_32258 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32343_33419 = state_32274__$1;
(statearr_32343_33419[(2)] = inst_32258);

(statearr_32343_33419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (10))){
var inst_32224 = (state_32274[(8)]);
var inst_32226 = (state_32274[(9)]);
var inst_32233 = cljs.core._nth(inst_32224,inst_32226);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32274__$1,(13),out,inst_32233);
} else {
if((state_val_32275 === (18))){
var inst_32239 = (state_32274[(7)]);
var inst_32249 = cljs.core.first(inst_32239);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32274__$1,(20),out,inst_32249);
} else {
if((state_val_32275 === (8))){
var inst_32226 = (state_32274[(9)]);
var inst_32225 = (state_32274[(12)]);
var inst_32228 = (inst_32226 < inst_32225);
var inst_32229 = inst_32228;
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32229)){
var statearr_32344_33420 = state_32274__$1;
(statearr_32344_33420[(1)] = (10));

} else {
var statearr_32345_33421 = state_32274__$1;
(statearr_32345_33421[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____0 = (function (){
var statearr_32346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32346[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__);

(statearr_32346[(1)] = (1));

return statearr_32346;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____1 = (function (state_32274){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_32274);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32347){if((e32347 instanceof Object)){
var ex__29895__auto__ = e32347;
var statearr_32348_33422 = state_32274;
(statearr_32348_33422[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33423 = state_32274;
state_32274 = G__33423;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__ = function(state_32274){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____1.call(this,state_32274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29892__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32349 = f__30215__auto__();
(statearr_32349[(6)] = c__30214__auto__);

return statearr_32349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));

return c__30214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32352 = arguments.length;
switch (G__32352) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32355 = arguments.length;
switch (G__32355) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_32393){
var state_val_32394 = (state_32393[(1)]);
if((state_val_32394 === (7))){
var inst_32388 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32395_33430 = state_32393__$1;
(statearr_32395_33430[(2)] = inst_32388);

(statearr_32395_33430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (1))){
var inst_32370 = null;
var state_32393__$1 = (function (){var statearr_32396 = state_32393;
(statearr_32396[(7)] = inst_32370);

return statearr_32396;
})();
var statearr_32397_33431 = state_32393__$1;
(statearr_32397_33431[(2)] = null);

(statearr_32397_33431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (4))){
var inst_32373 = (state_32393[(8)]);
var inst_32373__$1 = (state_32393[(2)]);
var inst_32374 = (inst_32373__$1 == null);
var inst_32375 = cljs.core.not(inst_32374);
var state_32393__$1 = (function (){var statearr_32398 = state_32393;
(statearr_32398[(8)] = inst_32373__$1);

return statearr_32398;
})();
if(inst_32375){
var statearr_32399_33433 = state_32393__$1;
(statearr_32399_33433[(1)] = (5));

} else {
var statearr_32400_33434 = state_32393__$1;
(statearr_32400_33434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (6))){
var state_32393__$1 = state_32393;
var statearr_32401_33435 = state_32393__$1;
(statearr_32401_33435[(2)] = null);

(statearr_32401_33435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (3))){
var inst_32390 = (state_32393[(2)]);
var inst_32391 = cljs.core.async.close_BANG_(out);
var state_32393__$1 = (function (){var statearr_32402 = state_32393;
(statearr_32402[(9)] = inst_32390);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32393__$1,inst_32391);
} else {
if((state_val_32394 === (2))){
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32393__$1,(4),ch);
} else {
if((state_val_32394 === (11))){
var inst_32373 = (state_32393[(8)]);
var inst_32382 = (state_32393[(2)]);
var inst_32370 = inst_32373;
var state_32393__$1 = (function (){var statearr_32403 = state_32393;
(statearr_32403[(7)] = inst_32370);

(statearr_32403[(10)] = inst_32382);

return statearr_32403;
})();
var statearr_32404_33436 = state_32393__$1;
(statearr_32404_33436[(2)] = null);

(statearr_32404_33436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (9))){
var inst_32373 = (state_32393[(8)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32393__$1,(11),out,inst_32373);
} else {
if((state_val_32394 === (5))){
var inst_32370 = (state_32393[(7)]);
var inst_32373 = (state_32393[(8)]);
var inst_32377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32373,inst_32370);
var state_32393__$1 = state_32393;
if(inst_32377){
var statearr_32406_33439 = state_32393__$1;
(statearr_32406_33439[(1)] = (8));

} else {
var statearr_32407_33440 = state_32393__$1;
(statearr_32407_33440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (10))){
var inst_32385 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32408_33441 = state_32393__$1;
(statearr_32408_33441[(2)] = inst_32385);

(statearr_32408_33441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (8))){
var inst_32370 = (state_32393[(7)]);
var tmp32405 = inst_32370;
var inst_32370__$1 = tmp32405;
var state_32393__$1 = (function (){var statearr_32409 = state_32393;
(statearr_32409[(7)] = inst_32370__$1);

return statearr_32409;
})();
var statearr_32410_33442 = state_32393__$1;
(statearr_32410_33442[(2)] = null);

(statearr_32410_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_32411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32411[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_32411[(1)] = (1));

return statearr_32411;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_32393){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_32393);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32412){if((e32412 instanceof Object)){
var ex__29895__auto__ = e32412;
var statearr_32413_33443 = state_32393;
(statearr_32413_33443[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_32393;
state_32393 = G__33444;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_32393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_32393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32414 = f__30215__auto__();
(statearr_32414[(6)] = c__30214__auto___33427);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_33472 = state_32454__$1;
(statearr_32456_33472[(2)] = inst_32450);

(statearr_32456_33472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var inst_32417 = (new Array(n));
var inst_32418 = inst_32417;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32457 = state_32454;
(statearr_32457[(7)] = inst_32418);

(statearr_32457[(8)] = inst_32419);

return statearr_32457;
})();
var statearr_32458_33473 = state_32454__$1;
(statearr_32458_33473[(2)] = null);

(statearr_32458_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32422 = (state_32454[(9)]);
var inst_32422__$1 = (state_32454[(2)]);
var inst_32423 = (inst_32422__$1 == null);
var inst_32424 = cljs.core.not(inst_32423);
var state_32454__$1 = (function (){var statearr_32459 = state_32454;
(statearr_32459[(9)] = inst_32422__$1);

return statearr_32459;
})();
if(inst_32424){
var statearr_32460_33474 = state_32454__$1;
(statearr_32460_33474[(1)] = (5));

} else {
var statearr_32461_33475 = state_32454__$1;
(statearr_32461_33475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (15))){
var inst_32444 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32462_33476 = state_32454__$1;
(statearr_32462_33476[(2)] = inst_32444);

(statearr_32462_33476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (13))){
var state_32454__$1 = state_32454;
var statearr_32463_33482 = state_32454__$1;
(statearr_32463_33482[(2)] = null);

(statearr_32463_33482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32419 = (state_32454[(8)]);
var inst_32440 = (inst_32419 > (0));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32440)){
var statearr_32464_33489 = state_32454__$1;
(statearr_32464_33489[(1)] = (12));

} else {
var statearr_32465_33490 = state_32454__$1;
(statearr_32465_33490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (12))){
var inst_32418 = (state_32454[(7)]);
var inst_32442 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(15),out,inst_32442);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32454__$1,(4),ch);
} else {
if((state_val_32455 === (11))){
var inst_32434 = (state_32454[(2)]);
var inst_32435 = (new Array(n));
var inst_32418 = inst_32435;
var inst_32419 = (0);
var state_32454__$1 = (function (){var statearr_32466 = state_32454;
(statearr_32466[(10)] = inst_32434);

(statearr_32466[(7)] = inst_32418);

(statearr_32466[(8)] = inst_32419);

return statearr_32466;
})();
var statearr_32467_33512 = state_32454__$1;
(statearr_32467_33512[(2)] = null);

(statearr_32467_33512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var inst_32418 = (state_32454[(7)]);
var inst_32432 = cljs.core.vec(inst_32418);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(11),out,inst_32432);
} else {
if((state_val_32455 === (5))){
var inst_32422 = (state_32454[(9)]);
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var inst_32419 = (state_32454[(8)]);
var inst_32426 = (inst_32418[inst_32419] = inst_32422);
var inst_32427__$1 = (inst_32419 + (1));
var inst_32428 = (inst_32427__$1 < n);
var state_32454__$1 = (function (){var statearr_32468 = state_32454;
(statearr_32468[(12)] = inst_32426);

(statearr_32468[(11)] = inst_32427__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32469_33533 = state_32454__$1;
(statearr_32469_33533[(1)] = (8));

} else {
var statearr_32470_33535 = state_32454__$1;
(statearr_32470_33535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (14))){
var inst_32447 = (state_32454[(2)]);
var inst_32448 = cljs.core.async.close_BANG_(out);
var state_32454__$1 = (function (){var statearr_32472 = state_32454;
(statearr_32472[(13)] = inst_32447);

return statearr_32472;
})();
var statearr_32473_33541 = state_32454__$1;
(statearr_32473_33541[(2)] = inst_32448);

(statearr_32473_33541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32438 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32474_33547 = state_32454__$1;
(statearr_32474_33547[(2)] = inst_32438);

(statearr_32474_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32418 = (state_32454[(7)]);
var inst_32427 = (state_32454[(11)]);
var tmp32471 = inst_32418;
var inst_32418__$1 = tmp32471;
var inst_32419 = inst_32427;
var state_32454__$1 = (function (){var statearr_32475 = state_32454;
(statearr_32475[(7)] = inst_32418__$1);

(statearr_32475[(8)] = inst_32419);

return statearr_32475;
})();
var statearr_32476_33559 = state_32454__$1;
(statearr_32476_33559[(2)] = null);

(statearr_32476_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_32477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32477[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_32477[(1)] = (1));

return statearr_32477;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_32454){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_32454);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32478){if((e32478 instanceof Object)){
var ex__29895__auto__ = e32478;
var statearr_32479_33577 = state_32454;
(statearr_32479_33577[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33578 = state_32454;
state_32454 = G__33578;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32480 = f__30215__auto__();
(statearr_32480[(6)] = c__30214__auto___33446);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32482 = arguments.length;
switch (G__32482) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30214__auto___33580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30215__auto__ = (function (){var switch__29891__auto__ = (function (state_32524){
var state_val_32525 = (state_32524[(1)]);
if((state_val_32525 === (7))){
var inst_32520 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32526_33583 = state_32524__$1;
(statearr_32526_33583[(2)] = inst_32520);

(statearr_32526_33583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (1))){
var inst_32483 = [];
var inst_32484 = inst_32483;
var inst_32485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32524__$1 = (function (){var statearr_32527 = state_32524;
(statearr_32527[(7)] = inst_32485);

(statearr_32527[(8)] = inst_32484);

return statearr_32527;
})();
var statearr_32528_33587 = state_32524__$1;
(statearr_32528_33587[(2)] = null);

(statearr_32528_33587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (4))){
var inst_32488 = (state_32524[(9)]);
var inst_32488__$1 = (state_32524[(2)]);
var inst_32489 = (inst_32488__$1 == null);
var inst_32490 = cljs.core.not(inst_32489);
var state_32524__$1 = (function (){var statearr_32529 = state_32524;
(statearr_32529[(9)] = inst_32488__$1);

return statearr_32529;
})();
if(inst_32490){
var statearr_32530_33589 = state_32524__$1;
(statearr_32530_33589[(1)] = (5));

} else {
var statearr_32531_33590 = state_32524__$1;
(statearr_32531_33590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (15))){
var inst_32514 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32532_33591 = state_32524__$1;
(statearr_32532_33591[(2)] = inst_32514);

(statearr_32532_33591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (13))){
var state_32524__$1 = state_32524;
var statearr_32533_33595 = state_32524__$1;
(statearr_32533_33595[(2)] = null);

(statearr_32533_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (6))){
var inst_32484 = (state_32524[(8)]);
var inst_32509 = inst_32484.length;
var inst_32510 = (inst_32509 > (0));
var state_32524__$1 = state_32524;
if(cljs.core.truth_(inst_32510)){
var statearr_32534_33597 = state_32524__$1;
(statearr_32534_33597[(1)] = (12));

} else {
var statearr_32535_33598 = state_32524__$1;
(statearr_32535_33598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (3))){
var inst_32522 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32524__$1,inst_32522);
} else {
if((state_val_32525 === (12))){
var inst_32484 = (state_32524[(8)]);
var inst_32512 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(15),out,inst_32512);
} else {
if((state_val_32525 === (2))){
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32524__$1,(4),ch);
} else {
if((state_val_32525 === (11))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32502 = (state_32524[(2)]);
var inst_32503 = [];
var inst_32504 = inst_32503.push(inst_32488);
var inst_32484 = inst_32503;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32536 = state_32524;
(statearr_32536[(7)] = inst_32485);

(statearr_32536[(11)] = inst_32504);

(statearr_32536[(12)] = inst_32502);

(statearr_32536[(8)] = inst_32484);

return statearr_32536;
})();
var statearr_32537_33625 = state_32524__$1;
(statearr_32537_33625[(2)] = null);

(statearr_32537_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (9))){
var inst_32484 = (state_32524[(8)]);
var inst_32500 = cljs.core.vec(inst_32484);
var state_32524__$1 = state_32524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32524__$1,(11),out,inst_32500);
} else {
if((state_val_32525 === (5))){
var inst_32485 = (state_32524[(7)]);
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32492__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32488) : f.call(null,inst_32488));
var inst_32493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32492__$1,inst_32485);
var inst_32494 = cljs.core.keyword_identical_QMARK_(inst_32485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32495 = ((inst_32493) || (inst_32494));
var state_32524__$1 = (function (){var statearr_32538 = state_32524;
(statearr_32538[(10)] = inst_32492__$1);

return statearr_32538;
})();
if(cljs.core.truth_(inst_32495)){
var statearr_32539_33647 = state_32524__$1;
(statearr_32539_33647[(1)] = (8));

} else {
var statearr_32540_33648 = state_32524__$1;
(statearr_32540_33648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (14))){
var inst_32517 = (state_32524[(2)]);
var inst_32518 = cljs.core.async.close_BANG_(out);
var state_32524__$1 = (function (){var statearr_32542 = state_32524;
(statearr_32542[(13)] = inst_32517);

return statearr_32542;
})();
var statearr_32543_33649 = state_32524__$1;
(statearr_32543_33649[(2)] = inst_32518);

(statearr_32543_33649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (10))){
var inst_32507 = (state_32524[(2)]);
var state_32524__$1 = state_32524;
var statearr_32544_33650 = state_32524__$1;
(statearr_32544_33650[(2)] = inst_32507);

(statearr_32544_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32525 === (8))){
var inst_32488 = (state_32524[(9)]);
var inst_32492 = (state_32524[(10)]);
var inst_32484 = (state_32524[(8)]);
var inst_32497 = inst_32484.push(inst_32488);
var tmp32541 = inst_32484;
var inst_32484__$1 = tmp32541;
var inst_32485 = inst_32492;
var state_32524__$1 = (function (){var statearr_32545 = state_32524;
(statearr_32545[(7)] = inst_32485);

(statearr_32545[(8)] = inst_32484__$1);

(statearr_32545[(14)] = inst_32497);

return statearr_32545;
})();
var statearr_32546_33658 = state_32524__$1;
(statearr_32546_33658[(2)] = null);

(statearr_32546_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29892__auto__ = null;
var cljs$core$async$state_machine__29892__auto____0 = (function (){
var statearr_32547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32547[(0)] = cljs$core$async$state_machine__29892__auto__);

(statearr_32547[(1)] = (1));

return statearr_32547;
});
var cljs$core$async$state_machine__29892__auto____1 = (function (state_32524){
while(true){
var ret_value__29893__auto__ = (function (){try{while(true){
var result__29894__auto__ = switch__29891__auto__(state_32524);
if(cljs.core.keyword_identical_QMARK_(result__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29894__auto__;
}
break;
}
}catch (e32548){if((e32548 instanceof Object)){
var ex__29895__auto__ = e32548;
var statearr_32549_33659 = state_32524;
(statearr_32549_33659[(5)] = ex__29895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33660 = state_32524;
state_32524 = G__33660;
continue;
} else {
return ret_value__29893__auto__;
}
break;
}
});
cljs$core$async$state_machine__29892__auto__ = function(state_32524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29892__auto____1.call(this,state_32524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29892__auto____0;
cljs$core$async$state_machine__29892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29892__auto____1;
return cljs$core$async$state_machine__29892__auto__;
})()
})();
var state__30216__auto__ = (function (){var statearr_32550 = f__30215__auto__();
(statearr_32550[(6)] = c__30214__auto___33580);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30216__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
