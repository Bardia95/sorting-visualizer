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
sorting_visualizer.core.reset_vector = (function sorting_visualizer$core$reset_vector(){
var new_vect = sorting_visualizer.core.new_vector();
return cljs.core.reset_BANG_(sorting_visualizer.core.vect,new_vect);
});
sorting_visualizer.core.merge = (function sorting_visualizer$core$merge(l,r){
var v = cljs.core.PersistentVector.EMPTY;
var i = (0);
var j = (0);
while(true){
if((((i < cljs.core.count(l))) && ((j < cljs.core.count(r))))){
if(((l.cljs$core$IFn$_invoke$arity$1 ? l.cljs$core$IFn$_invoke$arity$1(i) : l.call(null,i)) < (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(j) : r.call(null,j)))){
var G__33818 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(l.cljs$core$IFn$_invoke$arity$1 ? l.cljs$core$IFn$_invoke$arity$1(i) : l.call(null,i)));
var G__33819 = (i + (1));
var G__33820 = j;
v = G__33818;
i = G__33819;
j = G__33820;
continue;
} else {
var G__33821 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(j) : r.call(null,j)));
var G__33822 = i;
var G__33823 = (j + (1));
v = G__33821;
i = G__33822;
j = G__33823;
continue;
}
} else {
if((i < cljs.core.count(l))){
var G__33824 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(l.cljs$core$IFn$_invoke$arity$1 ? l.cljs$core$IFn$_invoke$arity$1(i) : l.call(null,i)));
var G__33825 = (i + (1));
var G__33826 = j;
v = G__33824;
i = G__33825;
j = G__33826;
continue;
} else {
if((j < cljs.core.count(r))){
var G__33827 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(j) : r.call(null,j)));
var G__33828 = i;
var G__33829 = (j + (1));
v = G__33827;
i = G__33828;
j = G__33829;
continue;
} else {
return v;
}
}
}
break;
}
});
sorting_visualizer.core.merge_sort = (function sorting_visualizer$core$merge_sort(v){
if((cljs.core.count(v) < (2))){
return v;
} else {
var mid = cljs.core.quot(cljs.core.count(v),(2));
var split = cljs.core.split_at(mid,v);
var left = cljs.core.vec((function (){var G__33812 = cljs.core.first(split);
return (sorting_visualizer.core.merge_sort.cljs$core$IFn$_invoke$arity$1 ? sorting_visualizer.core.merge_sort.cljs$core$IFn$_invoke$arity$1(G__33812) : sorting_visualizer.core.merge_sort.call(null,G__33812));
})());
var right = cljs.core.vec((function (){var G__33813 = cljs.core.peek(split);
return (sorting_visualizer.core.merge_sort.cljs$core$IFn$_invoke$arity$1 ? sorting_visualizer.core.merge_sort.cljs$core$IFn$_invoke$arity$1(G__33813) : sorting_visualizer.core.merge_sort.call(null,G__33813));
})());
return sorting_visualizer.core.merge(left,right);
}
});
sorting_visualizer.core.vector_bars = (function sorting_visualizer$core$vector_bars(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-container","div.vector-container",1932661542),(function (){var iter__4582__auto__ = (function sorting_visualizer$core$vector_bars_$_iter__33814(s__33815){
return (new cljs.core.LazySeq(null,(function (){
var s__33815__$1 = s__33815;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33815__$1);
if(temp__5735__auto__){
var s__33815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33815__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33815__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33817 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33816 = (0);
while(true){
if((i__33816 < size__4581__auto__)){
var i = cljs.core._nth(c__4580__auto__,i__33816);
cljs.core.chunk_append(b__33817,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-bar","div.vector-bar",-1835421344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i))),"px"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33830 = (i__33816 + (1));
i__33816 = G__33830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33817),sorting_visualizer$core$vector_bars_$_iter__33814(cljs.core.chunk_rest(s__33815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33817),null);
}
} else {
var i = cljs.core.first(s__33815__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vector-bar","div.vector-bar",-1835421344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i))),"px"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),sorting_visualizer$core$vector_bars_$_iter__33814(cljs.core.rest(s__33815__$2)));
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
sorting_visualizer.core.app = (function sorting_visualizer$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sorting_visualizer.core.vector_bars,cljs.core.deref(sorting_visualizer.core.vect)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"New vector",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sorting_visualizer.core.reset_vector();
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Merge sort",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sorting_visualizer.core.vect,sorting_visualizer.core.merge_sort);
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
