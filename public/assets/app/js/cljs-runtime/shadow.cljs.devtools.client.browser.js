goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34684 = arguments.length;
var i__4790__auto___34685 = (0);
while(true){
if((i__4790__auto___34685 < len__4789__auto___34684)){
args__4795__auto__.push((arguments[i__4790__auto___34685]));

var G__34686 = (i__4790__auto___34685 + (1));
i__4790__auto___34685 = G__34686;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34522){
var G__34523 = cljs.core.first(seq34522);
var seq34522__$1 = cljs.core.next(seq34522);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34523,seq34522__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34524 = cljs.core.seq(sources);
var chunk__34525 = null;
var count__34526 = (0);
var i__34527 = (0);
while(true){
if((i__34527 < count__34526)){
var map__34534 = chunk__34525.cljs$core$IIndexed$_nth$arity$2(null,i__34527);
var map__34534__$1 = (((((!((map__34534 == null))))?(((((map__34534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34534):map__34534);
var src = map__34534__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34536){var e_34687 = e34536;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34687);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34687.message)].join('')));
}

var G__34688 = seq__34524;
var G__34689 = chunk__34525;
var G__34690 = count__34526;
var G__34691 = (i__34527 + (1));
seq__34524 = G__34688;
chunk__34525 = G__34689;
count__34526 = G__34690;
i__34527 = G__34691;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34524);
if(temp__5735__auto__){
var seq__34524__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34524__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34524__$1);
var G__34692 = cljs.core.chunk_rest(seq__34524__$1);
var G__34693 = c__4609__auto__;
var G__34694 = cljs.core.count(c__4609__auto__);
var G__34695 = (0);
seq__34524 = G__34692;
chunk__34525 = G__34693;
count__34526 = G__34694;
i__34527 = G__34695;
continue;
} else {
var map__34537 = cljs.core.first(seq__34524__$1);
var map__34537__$1 = (((((!((map__34537 == null))))?(((((map__34537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34537):map__34537);
var src = map__34537__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34537__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34537__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34539){var e_34698 = e34539;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34698);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34698.message)].join('')));
}

var G__34699 = cljs.core.next(seq__34524__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34524 = G__34699;
chunk__34525 = G__34700;
count__34526 = G__34701;
i__34527 = G__34702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34540 = cljs.core.seq(js_requires);
var chunk__34541 = null;
var count__34542 = (0);
var i__34543 = (0);
while(true){
if((i__34543 < count__34542)){
var js_ns = chunk__34541.cljs$core$IIndexed$_nth$arity$2(null,i__34543);
var require_str_34703 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34703);


var G__34704 = seq__34540;
var G__34705 = chunk__34541;
var G__34706 = count__34542;
var G__34707 = (i__34543 + (1));
seq__34540 = G__34704;
chunk__34541 = G__34705;
count__34542 = G__34706;
i__34543 = G__34707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34540);
if(temp__5735__auto__){
var seq__34540__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34540__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34540__$1);
var G__34708 = cljs.core.chunk_rest(seq__34540__$1);
var G__34709 = c__4609__auto__;
var G__34710 = cljs.core.count(c__4609__auto__);
var G__34711 = (0);
seq__34540 = G__34708;
chunk__34541 = G__34709;
count__34542 = G__34710;
i__34543 = G__34711;
continue;
} else {
var js_ns = cljs.core.first(seq__34540__$1);
var require_str_34712 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34712);


var G__34713 = cljs.core.next(seq__34540__$1);
var G__34714 = null;
var G__34715 = (0);
var G__34716 = (0);
seq__34540 = G__34713;
chunk__34541 = G__34714;
count__34542 = G__34715;
i__34543 = G__34716;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34544 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34544) : callback.call(null,G__34544));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34546){
var map__34547 = p__34546;
var map__34547__$1 = (((((!((map__34547 == null))))?(((((map__34547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34547):map__34547);
var msg = map__34547__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34547__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34547__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34549(s__34550){
return (new cljs.core.LazySeq(null,(function (){
var s__34550__$1 = s__34550;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34550__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34555 = cljs.core.first(xs__6292__auto__);
var map__34555__$1 = (((((!((map__34555 == null))))?(((((map__34555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34555):map__34555);
var src = map__34555__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34555__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34550__$1,map__34555,map__34555__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34547,map__34547__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34549_$_iter__34551(s__34552){
return (new cljs.core.LazySeq(null,((function (s__34550__$1,map__34555,map__34555__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34547,map__34547__$1,msg,info,reload_info){
return (function (){
var s__34552__$1 = s__34552;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34552__$1);
if(temp__5735__auto____$1){
var s__34552__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34552__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34552__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34554 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34553 = (0);
while(true){
if((i__34553 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34553);
cljs.core.chunk_append(b__34554,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34718 = (i__34553 + (1));
i__34553 = G__34718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34554),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34549_$_iter__34551(cljs.core.chunk_rest(s__34552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34554),null);
}
} else {
var warning = cljs.core.first(s__34552__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34549_$_iter__34551(cljs.core.rest(s__34552__$2)));
}
} else {
return null;
}
break;
}
});})(s__34550__$1,map__34555,map__34555__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34547,map__34547__$1,msg,info,reload_info))
,null,null));
});})(s__34550__$1,map__34555,map__34555__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34547,map__34547__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34549(cljs.core.rest(s__34550__$1)));
} else {
var G__34723 = cljs.core.rest(s__34550__$1);
s__34550__$1 = G__34723;
continue;
}
} else {
var G__34724 = cljs.core.rest(s__34550__$1);
s__34550__$1 = G__34724;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34557_34725 = cljs.core.seq(warnings);
var chunk__34558_34726 = null;
var count__34559_34727 = (0);
var i__34560_34728 = (0);
while(true){
if((i__34560_34728 < count__34559_34727)){
var map__34565_34729 = chunk__34558_34726.cljs$core$IIndexed$_nth$arity$2(null,i__34560_34728);
var map__34565_34730__$1 = (((((!((map__34565_34729 == null))))?(((((map__34565_34729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34565_34729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34565_34729):map__34565_34729);
var w_34731 = map__34565_34730__$1;
var msg_34732__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565_34730__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565_34730__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565_34730__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565_34730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34735)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34733),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34734),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34732__$1)].join(''));


var G__34736 = seq__34557_34725;
var G__34737 = chunk__34558_34726;
var G__34738 = count__34559_34727;
var G__34739 = (i__34560_34728 + (1));
seq__34557_34725 = G__34736;
chunk__34558_34726 = G__34737;
count__34559_34727 = G__34738;
i__34560_34728 = G__34739;
continue;
} else {
var temp__5735__auto___34740 = cljs.core.seq(seq__34557_34725);
if(temp__5735__auto___34740){
var seq__34557_34741__$1 = temp__5735__auto___34740;
if(cljs.core.chunked_seq_QMARK_(seq__34557_34741__$1)){
var c__4609__auto___34742 = cljs.core.chunk_first(seq__34557_34741__$1);
var G__34743 = cljs.core.chunk_rest(seq__34557_34741__$1);
var G__34744 = c__4609__auto___34742;
var G__34745 = cljs.core.count(c__4609__auto___34742);
var G__34746 = (0);
seq__34557_34725 = G__34743;
chunk__34558_34726 = G__34744;
count__34559_34727 = G__34745;
i__34560_34728 = G__34746;
continue;
} else {
var map__34567_34748 = cljs.core.first(seq__34557_34741__$1);
var map__34567_34749__$1 = (((((!((map__34567_34748 == null))))?(((((map__34567_34748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34567_34748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34567_34748):map__34567_34748);
var w_34750 = map__34567_34749__$1;
var msg_34751__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34567_34749__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34567_34749__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34567_34749__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34567_34749__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34754)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34752),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34753),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34751__$1)].join(''));


var G__34755 = cljs.core.next(seq__34557_34741__$1);
var G__34756 = null;
var G__34757 = (0);
var G__34758 = (0);
seq__34557_34725 = G__34755;
chunk__34558_34726 = G__34756;
count__34559_34727 = G__34757;
i__34560_34728 = G__34758;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34545_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34545_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34569){
var map__34570 = p__34569;
var map__34570__$1 = (((((!((map__34570 == null))))?(((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34570):map__34570);
var msg = map__34570__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34570__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34573 = cljs.core.seq(updates);
var chunk__34575 = null;
var count__34576 = (0);
var i__34577 = (0);
while(true){
if((i__34577 < count__34576)){
var path = chunk__34575.cljs$core$IIndexed$_nth$arity$2(null,i__34577);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34620_34760 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34623_34761 = null;
var count__34624_34762 = (0);
var i__34625_34763 = (0);
while(true){
if((i__34625_34763 < count__34624_34762)){
var node_34764 = chunk__34623_34761.cljs$core$IIndexed$_nth$arity$2(null,i__34625_34763);
var path_match_34765 = shadow.cljs.devtools.client.browser.match_paths(node_34764.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34765)){
var new_link_34767 = (function (){var G__34633 = node_34764.cloneNode(true);
G__34633.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34765),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34633;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34765], 0));

goog.dom.insertSiblingAfter(new_link_34767,node_34764);

goog.dom.removeNode(node_34764);


var G__34768 = seq__34620_34760;
var G__34769 = chunk__34623_34761;
var G__34770 = count__34624_34762;
var G__34771 = (i__34625_34763 + (1));
seq__34620_34760 = G__34768;
chunk__34623_34761 = G__34769;
count__34624_34762 = G__34770;
i__34625_34763 = G__34771;
continue;
} else {
var G__34772 = seq__34620_34760;
var G__34773 = chunk__34623_34761;
var G__34774 = count__34624_34762;
var G__34775 = (i__34625_34763 + (1));
seq__34620_34760 = G__34772;
chunk__34623_34761 = G__34773;
count__34624_34762 = G__34774;
i__34625_34763 = G__34775;
continue;
}
} else {
var temp__5735__auto___34776 = cljs.core.seq(seq__34620_34760);
if(temp__5735__auto___34776){
var seq__34620_34777__$1 = temp__5735__auto___34776;
if(cljs.core.chunked_seq_QMARK_(seq__34620_34777__$1)){
var c__4609__auto___34778 = cljs.core.chunk_first(seq__34620_34777__$1);
var G__34779 = cljs.core.chunk_rest(seq__34620_34777__$1);
var G__34780 = c__4609__auto___34778;
var G__34781 = cljs.core.count(c__4609__auto___34778);
var G__34782 = (0);
seq__34620_34760 = G__34779;
chunk__34623_34761 = G__34780;
count__34624_34762 = G__34781;
i__34625_34763 = G__34782;
continue;
} else {
var node_34783 = cljs.core.first(seq__34620_34777__$1);
var path_match_34784 = shadow.cljs.devtools.client.browser.match_paths(node_34783.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34784)){
var new_link_34785 = (function (){var G__34635 = node_34783.cloneNode(true);
G__34635.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34784),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34635;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34784], 0));

goog.dom.insertSiblingAfter(new_link_34785,node_34783);

goog.dom.removeNode(node_34783);


var G__34786 = cljs.core.next(seq__34620_34777__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34620_34760 = G__34786;
chunk__34623_34761 = G__34787;
count__34624_34762 = G__34788;
i__34625_34763 = G__34789;
continue;
} else {
var G__34790 = cljs.core.next(seq__34620_34777__$1);
var G__34791 = null;
var G__34792 = (0);
var G__34793 = (0);
seq__34620_34760 = G__34790;
chunk__34623_34761 = G__34791;
count__34624_34762 = G__34792;
i__34625_34763 = G__34793;
continue;
}
}
} else {
}
}
break;
}


var G__34795 = seq__34573;
var G__34796 = chunk__34575;
var G__34797 = count__34576;
var G__34798 = (i__34577 + (1));
seq__34573 = G__34795;
chunk__34575 = G__34796;
count__34576 = G__34797;
i__34577 = G__34798;
continue;
} else {
var G__34799 = seq__34573;
var G__34800 = chunk__34575;
var G__34801 = count__34576;
var G__34802 = (i__34577 + (1));
seq__34573 = G__34799;
chunk__34575 = G__34800;
count__34576 = G__34801;
i__34577 = G__34802;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34573);
if(temp__5735__auto__){
var seq__34573__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34573__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34573__$1);
var G__34803 = cljs.core.chunk_rest(seq__34573__$1);
var G__34804 = c__4609__auto__;
var G__34805 = cljs.core.count(c__4609__auto__);
var G__34806 = (0);
seq__34573 = G__34803;
chunk__34575 = G__34804;
count__34576 = G__34805;
i__34577 = G__34806;
continue;
} else {
var path = cljs.core.first(seq__34573__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34636_34807 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34639_34808 = null;
var count__34640_34809 = (0);
var i__34641_34810 = (0);
while(true){
if((i__34641_34810 < count__34640_34809)){
var node_34811 = chunk__34639_34808.cljs$core$IIndexed$_nth$arity$2(null,i__34641_34810);
var path_match_34812 = shadow.cljs.devtools.client.browser.match_paths(node_34811.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34812)){
var new_link_34813 = (function (){var G__34647 = node_34811.cloneNode(true);
G__34647.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34812),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34647;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34812], 0));

goog.dom.insertSiblingAfter(new_link_34813,node_34811);

goog.dom.removeNode(node_34811);


var G__34814 = seq__34636_34807;
var G__34815 = chunk__34639_34808;
var G__34816 = count__34640_34809;
var G__34817 = (i__34641_34810 + (1));
seq__34636_34807 = G__34814;
chunk__34639_34808 = G__34815;
count__34640_34809 = G__34816;
i__34641_34810 = G__34817;
continue;
} else {
var G__34818 = seq__34636_34807;
var G__34819 = chunk__34639_34808;
var G__34820 = count__34640_34809;
var G__34821 = (i__34641_34810 + (1));
seq__34636_34807 = G__34818;
chunk__34639_34808 = G__34819;
count__34640_34809 = G__34820;
i__34641_34810 = G__34821;
continue;
}
} else {
var temp__5735__auto___34823__$1 = cljs.core.seq(seq__34636_34807);
if(temp__5735__auto___34823__$1){
var seq__34636_34824__$1 = temp__5735__auto___34823__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34636_34824__$1)){
var c__4609__auto___34825 = cljs.core.chunk_first(seq__34636_34824__$1);
var G__34826 = cljs.core.chunk_rest(seq__34636_34824__$1);
var G__34827 = c__4609__auto___34825;
var G__34828 = cljs.core.count(c__4609__auto___34825);
var G__34829 = (0);
seq__34636_34807 = G__34826;
chunk__34639_34808 = G__34827;
count__34640_34809 = G__34828;
i__34641_34810 = G__34829;
continue;
} else {
var node_34830 = cljs.core.first(seq__34636_34824__$1);
var path_match_34831 = shadow.cljs.devtools.client.browser.match_paths(node_34830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34831)){
var new_link_34832 = (function (){var G__34649 = node_34830.cloneNode(true);
G__34649.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34831),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34649;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34831], 0));

goog.dom.insertSiblingAfter(new_link_34832,node_34830);

goog.dom.removeNode(node_34830);


var G__34833 = cljs.core.next(seq__34636_34824__$1);
var G__34834 = null;
var G__34835 = (0);
var G__34836 = (0);
seq__34636_34807 = G__34833;
chunk__34639_34808 = G__34834;
count__34640_34809 = G__34835;
i__34641_34810 = G__34836;
continue;
} else {
var G__34837 = cljs.core.next(seq__34636_34824__$1);
var G__34838 = null;
var G__34839 = (0);
var G__34840 = (0);
seq__34636_34807 = G__34837;
chunk__34639_34808 = G__34838;
count__34640_34809 = G__34839;
i__34641_34810 = G__34840;
continue;
}
}
} else {
}
}
break;
}


var G__34841 = cljs.core.next(seq__34573__$1);
var G__34842 = null;
var G__34843 = (0);
var G__34844 = (0);
seq__34573 = G__34841;
chunk__34575 = G__34842;
count__34576 = G__34843;
i__34577 = G__34844;
continue;
} else {
var G__34845 = cljs.core.next(seq__34573__$1);
var G__34846 = null;
var G__34847 = (0);
var G__34848 = (0);
seq__34573 = G__34845;
chunk__34575 = G__34846;
count__34576 = G__34847;
i__34577 = G__34848;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34653){
var map__34654 = p__34653;
var map__34654__$1 = (((((!((map__34654 == null))))?(((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34654):map__34654);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34654__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34656,done){
var map__34657 = p__34656;
var map__34657__$1 = (((((!((map__34657 == null))))?(((((map__34657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34657):map__34657);
var msg = map__34657__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34657__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34660){
var map__34661 = p__34660;
var map__34661__$1 = (((((!((map__34661 == null))))?(((((map__34661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34661):map__34661);
var src = map__34661__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34661__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34663){var e = e34663;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34665,done){
var map__34666 = p__34665;
var map__34666__$1 = (((((!((map__34666 == null))))?(((((map__34666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34666):map__34666);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34666__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34668){
var map__34669 = p__34668;
var map__34669__$1 = (((((!((map__34669 == null))))?(((((map__34669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34669):map__34669);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34669__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34672,done){
var map__34673 = p__34672;
var map__34673__$1 = (((((!((map__34673 == null))))?(((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34673):map__34673);
var msg = map__34673__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34676_34850 = type;
var G__34676_34851__$1 = (((G__34676_34850 instanceof cljs.core.Keyword))?G__34676_34850.fqn:null);
switch (G__34676_34851__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34678 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34678.cljs$core$IFn$_invoke$arity$1 ? fexpr__34678.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34678.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34680){var e = e34680;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34856 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34856)){
var s_34857 = temp__5735__auto___34856;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34857.onclose = (function (e){
return null;
}));

s_34857.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
