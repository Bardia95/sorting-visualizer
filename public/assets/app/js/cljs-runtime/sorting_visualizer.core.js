goog.provide('sorting_visualizer.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
sorting_visualizer.core.animation_speed_ms = (1);
sorting_visualizer.core.n_vector_bars = (210);
sorting_visualizer.core.primary_color = "turquoise";
sorting_visualizer.core.secondary_color = "red";
sorting_visualizer.core.new_vector = (function sorting_visualizer$core$new_vector(){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(sorting_visualizer.core.n_vector_bars,(function (){
return ((5) + cljs.core.rand_int((725)));
})));
});
sorting_visualizer.core.vect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(sorting_visualizer.core.new_vector());
sorting_visualizer.core.vector_bars = (function sorting_visualizer$core$vector_bars(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-container","div.vector-container",1932661542),(function (){var iter__4582__auto__ = (function sorting_visualizer$core$vector_bars_$_iter__33807(s__33808){
return (new cljs.core.LazySeq(null,(function (){
var s__33808__$1 = s__33808;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33808__$1);
if(temp__5735__auto__){
var s__33808__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33808__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33808__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33810 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33809 = (0);
while(true){
if((i__33809 < size__4581__auto__)){
var i = cljs.core._nth(c__4580__auto__,i__33809);
cljs.core.chunk_append(b__33810,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-bar","div.vector-bar",-1835421344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i))),"px"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33811 = (i__33809 + (1));
i__33809 = G__33811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33810),sorting_visualizer$core$vector_bars_$_iter__33807(cljs.core.chunk_rest(s__33808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33810),null);
}
} else {
var i = cljs.core.first(s__33808__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-bar","div.vector-bar",-1835421344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i))),"px"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),sorting_visualizer$core$vector_bars_$_iter__33807(cljs.core.rest(s__33808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})()], null);
});
sorting_visualizer.core.reset_vector = (function sorting_visualizer$core$reset_vector(){
var new_vect = sorting_visualizer.core.new_vector();
return cljs.core.reset_BANG_(sorting_visualizer.core.vect,new_vect);
});
sorting_visualizer.core.app = (function sorting_visualizer$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sorting_visualizer.core.vector_bars,cljs.core.deref(sorting_visualizer.core.vect)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"New vector",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sorting_visualizer.core.reset_vector();
})], null)], null)], null);
});
sorting_visualizer.core.start = (function sorting_visualizer$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sorting_visualizer.core.app], null),document.getElementById("app"));
});
sorting_visualizer.core.init = (function sorting_visualizer$core$init(){
console.log("init");

return sorting_visualizer.core.start();
});

//# sourceMappingURL=sorting_visualizer.core.js.map
