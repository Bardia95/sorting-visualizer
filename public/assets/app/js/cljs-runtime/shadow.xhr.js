goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33959 = arguments.length;
var i__4790__auto___33960 = (0);
while(true){
if((i__4790__auto___33960 < len__4789__auto___33959)){
args__4795__auto__.push((arguments[i__4790__auto___33960]));

var G__33961 = (i__4790__auto___33960 + (1));
i__4790__auto___33960 = G__33961;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
}));

(shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq33870){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33870));
}));

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__33873_33966 = cljs.core.seq(options);
var chunk__33874_33967 = null;
var count__33875_33968 = (0);
var i__33876_33969 = (0);
while(true){
if((i__33876_33969 < count__33875_33968)){
var vec__33883_33974 = chunk__33874_33967.cljs$core$IIndexed$_nth$arity$2(null,i__33876_33969);
var k_33975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33883_33974,(0),null);
var v_33976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33883_33974,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_33975)] = cljs.core.clj__GT_js(v_33976));


var G__33984 = seq__33873_33966;
var G__33985 = chunk__33874_33967;
var G__33986 = count__33875_33968;
var G__33987 = (i__33876_33969 + (1));
seq__33873_33966 = G__33984;
chunk__33874_33967 = G__33985;
count__33875_33968 = G__33986;
i__33876_33969 = G__33987;
continue;
} else {
var temp__5735__auto___33988 = cljs.core.seq(seq__33873_33966);
if(temp__5735__auto___33988){
var seq__33873_33989__$1 = temp__5735__auto___33988;
if(cljs.core.chunked_seq_QMARK_(seq__33873_33989__$1)){
var c__4609__auto___33990 = cljs.core.chunk_first(seq__33873_33989__$1);
var G__33991 = cljs.core.chunk_rest(seq__33873_33989__$1);
var G__33992 = c__4609__auto___33990;
var G__33993 = cljs.core.count(c__4609__auto___33990);
var G__33994 = (0);
seq__33873_33966 = G__33991;
chunk__33874_33967 = G__33992;
count__33875_33968 = G__33993;
i__33876_33969 = G__33994;
continue;
} else {
var vec__33886_33995 = cljs.core.first(seq__33873_33989__$1);
var k_33996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886_33995,(0),null);
var v_33997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886_33995,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_33996)] = cljs.core.clj__GT_js(v_33997));


var G__34002 = cljs.core.next(seq__33873_33989__$1);
var G__34003 = null;
var G__34004 = (0);
var G__34005 = (0);
seq__33873_33966 = G__34002;
chunk__33874_33967 = G__34003;
count__33875_33968 = G__34004;
i__33876_33969 = G__34005;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__33893 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__33893) : transform_fn.call(null,G__33893));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
return goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params));
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__33895 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__33901 = arguments.length;
switch (G__33901) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__33904){
var map__33906 = p__33904;
var map__33906__$1 = (((((!((map__33906 == null))))?(((((map__33906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33906):map__33906);
var options = map__33906__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33906__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33906__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33906__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__33908 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_(((body_QMARK_)?upload:false))){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return (function (e){
callback(e);

return cljs.core.async.close_BANG_(result_chan);
});
})());

var error_handler_34039 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_34039);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var G__33913 = req.responseText;
var G__33914 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__33913,G__33914) : transform.call(null,G__33913,G__33914));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return error_handler_34039(e);
} else {
callback(e);

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

(req.responseType = "text");

(req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false)));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
}));

(shadow.xhr.chan.cljs$lang$maxFixedArity = 4);

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__33921 = arguments.length;
switch (G__33921) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__33924 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924,(1),null);
var req = goog.labs.net.xhr.send(cljs.core.name(method),(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method))?data:false))?shadow.xhr.make_url(url,data):url),((body_QMARK_)?body:null),shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options)));
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
}));

(shadow.xhr.request.cljs$lang$maxFixedArity = 4);

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34045 = arguments.length;
var i__4790__auto___34047 = (0);
while(true){
if((i__4790__auto___34047 < len__4789__auto___34045)){
args__4795__auto__.push((arguments[i__4790__auto___34047]));

var G__34048 = (i__4790__auto___34047 + (1));
i__4790__auto___34047 = G__34048;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__33940_34049 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__33942_34050 = null;
var count__33943_34051 = (0);
var i__33944_34052 = (0);
while(true){
if((i__33944_34052 < count__33943_34051)){
var vec__33952_34053 = chunk__33942_34050.cljs$core$IIndexed$_nth$arity$2(null,i__33944_34052);
var ev_id_34054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33952_34053,(0),null);
var ev_handler_34055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33952_34053,(1),null);
var target_34056 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_34054))?(xhr["upload"]):xhr);
target_34056.addEventListener(cljs.core.name(ev_id_34054),ev_handler_34055);


var G__34057 = seq__33940_34049;
var G__34058 = chunk__33942_34050;
var G__34059 = count__33943_34051;
var G__34060 = (i__33944_34052 + (1));
seq__33940_34049 = G__34057;
chunk__33942_34050 = G__34058;
count__33943_34051 = G__34059;
i__33944_34052 = G__34060;
continue;
} else {
var temp__5735__auto___34061 = cljs.core.seq(seq__33940_34049);
if(temp__5735__auto___34061){
var seq__33940_34062__$1 = temp__5735__auto___34061;
if(cljs.core.chunked_seq_QMARK_(seq__33940_34062__$1)){
var c__4609__auto___34063 = cljs.core.chunk_first(seq__33940_34062__$1);
var G__34065 = cljs.core.chunk_rest(seq__33940_34062__$1);
var G__34066 = c__4609__auto___34063;
var G__34067 = cljs.core.count(c__4609__auto___34063);
var G__34068 = (0);
seq__33940_34049 = G__34065;
chunk__33942_34050 = G__34066;
count__33943_34051 = G__34067;
i__33944_34052 = G__34068;
continue;
} else {
var vec__33955_34069 = cljs.core.first(seq__33940_34062__$1);
var ev_id_34070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955_34069,(0),null);
var ev_handler_34071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955_34069,(1),null);
var target_34072 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_34070))?(xhr["upload"]):xhr);
target_34072.addEventListener(cljs.core.name(ev_id_34070),ev_handler_34071);


var G__34073 = cljs.core.next(seq__33940_34062__$1);
var G__34074 = null;
var G__34075 = (0);
var G__34076 = (0);
seq__33940_34049 = G__34073;
chunk__33942_34050 = G__34074;
count__33943_34051 = G__34075;
i__33944_34052 = G__34076;
continue;
}
} else {
}
}
break;
}

var G__33958 = xhr;
G__33958.open("PUT",url);

G__33958.send(file);

return G__33958;
}));

(shadow.xhr.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.xhr.upload.cljs$lang$applyTo = (function (seq33930){
var G__33931 = cljs.core.first(seq33930);
var seq33930__$1 = cljs.core.next(seq33930);
var G__33932 = cljs.core.first(seq33930__$1);
var seq33930__$2 = cljs.core.next(seq33930__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33931,G__33932,seq33930__$2);
}));


//# sourceMappingURL=shadow.xhr.js.map
