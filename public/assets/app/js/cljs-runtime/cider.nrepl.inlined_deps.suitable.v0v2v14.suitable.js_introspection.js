goog.provide('cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__32765 = Object.getPrototypeOf(obj__$1);
var G__32766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__32765;
protos = G__32766;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$property_names_and_types(var_args){
var G__32751 = arguments.length;
switch (G__32751) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4582__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__32752(s__32753){
return (new cljs.core.LazySeq(null,(function (){
var s__32753__$1 = s__32753;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32753__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__32758 = cljs.core.first(xs__6292__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(0),null);
var map__32761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(1),null);
var map__32761__$1 = (((((!((map__32761 == null))))?(((((map__32761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32761):map__32761);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4578__auto__ = ((function (s__32753__$1,vec__32758,i,map__32761,map__32761__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__32752_$_iter__32754(s__32755){
return (new cljs.core.LazySeq(null,((function (s__32753__$1,vec__32758,i,map__32761,map__32761__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__32755__$1 = s__32755;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32755__$1);
if(temp__5735__auto____$1){
var s__32755__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32755__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32755__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32757 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32756 = (0);
while(true){
if((i__32756 < size__4581__auto__)){
var key = cljs.core._nth(c__4580__auto__,i__32756);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__32757,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e32763){if((e32763 instanceof Error)){
var e = e32763;
return "var";
} else {
throw e32763;

}
}})()], null);
})());

var G__32768 = (i__32756 + (1));
i__32756 = G__32768;
continue;
} else {
var G__32769 = (i__32756 + (1));
i__32756 = G__32769;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32757),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__32752_$_iter__32754(cljs.core.chunk_rest(s__32755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32757),null);
}
} else {
var key = cljs.core.first(s__32755__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e32764){if((e32764 instanceof Error)){
var e = e32764;
return "var";
} else {
throw e32764;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__32752_$_iter__32754(cljs.core.rest(s__32755__$2)));
} else {
var G__32770 = cljs.core.rest(s__32755__$2);
s__32755__$1 = G__32770;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__32753__$1,vec__32758,i,map__32761,map__32761__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__32753__$1,vec__32758,i,map__32761,map__32761__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.js_keys(props)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__32752(cljs.core.rest(s__32753__$1)));
} else {
var G__32771 = cljs.core.rest(s__32753__$1);
s__32753__$1 = G__32771;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.js.map
