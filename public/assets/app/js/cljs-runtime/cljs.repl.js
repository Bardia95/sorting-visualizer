goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35794){
var map__35795 = p__35794;
var map__35795__$1 = (((((!((map__35795 == null))))?(((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35795):map__35795);
var m = map__35795__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35797_36014 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35798_36015 = null;
var count__35799_36016 = (0);
var i__35800_36017 = (0);
while(true){
if((i__35800_36017 < count__35799_36016)){
var f_36018 = chunk__35798_36015.cljs$core$IIndexed$_nth$arity$2(null,i__35800_36017);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36018], 0));


var G__36019 = seq__35797_36014;
var G__36020 = chunk__35798_36015;
var G__36021 = count__35799_36016;
var G__36022 = (i__35800_36017 + (1));
seq__35797_36014 = G__36019;
chunk__35798_36015 = G__36020;
count__35799_36016 = G__36021;
i__35800_36017 = G__36022;
continue;
} else {
var temp__5735__auto___36023 = cljs.core.seq(seq__35797_36014);
if(temp__5735__auto___36023){
var seq__35797_36024__$1 = temp__5735__auto___36023;
if(cljs.core.chunked_seq_QMARK_(seq__35797_36024__$1)){
var c__4609__auto___36025 = cljs.core.chunk_first(seq__35797_36024__$1);
var G__36026 = cljs.core.chunk_rest(seq__35797_36024__$1);
var G__36027 = c__4609__auto___36025;
var G__36028 = cljs.core.count(c__4609__auto___36025);
var G__36029 = (0);
seq__35797_36014 = G__36026;
chunk__35798_36015 = G__36027;
count__35799_36016 = G__36028;
i__35800_36017 = G__36029;
continue;
} else {
var f_36030 = cljs.core.first(seq__35797_36024__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36030], 0));


var G__36031 = cljs.core.next(seq__35797_36024__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35797_36014 = G__36031;
chunk__35798_36015 = G__36032;
count__35799_36016 = G__36033;
i__35800_36017 = G__36034;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36035 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36035], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36035)))?cljs.core.second(arglists_36035):arglists_36035)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35803_36040 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35804_36041 = null;
var count__35805_36042 = (0);
var i__35806_36043 = (0);
while(true){
if((i__35806_36043 < count__35805_36042)){
var vec__35834_36044 = chunk__35804_36041.cljs$core$IIndexed$_nth$arity$2(null,i__35806_36043);
var name_36045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834_36044,(0),null);
var map__35837_36046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35834_36044,(1),null);
var map__35837_36047__$1 = (((((!((map__35837_36046 == null))))?(((((map__35837_36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35837_36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35837_36046):map__35837_36046);
var doc_36048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35837_36047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35837_36047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36049], 0));

if(cljs.core.truth_(doc_36048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36048], 0));
} else {
}


var G__36050 = seq__35803_36040;
var G__36051 = chunk__35804_36041;
var G__36052 = count__35805_36042;
var G__36053 = (i__35806_36043 + (1));
seq__35803_36040 = G__36050;
chunk__35804_36041 = G__36051;
count__35805_36042 = G__36052;
i__35806_36043 = G__36053;
continue;
} else {
var temp__5735__auto___36054 = cljs.core.seq(seq__35803_36040);
if(temp__5735__auto___36054){
var seq__35803_36058__$1 = temp__5735__auto___36054;
if(cljs.core.chunked_seq_QMARK_(seq__35803_36058__$1)){
var c__4609__auto___36059 = cljs.core.chunk_first(seq__35803_36058__$1);
var G__36060 = cljs.core.chunk_rest(seq__35803_36058__$1);
var G__36061 = c__4609__auto___36059;
var G__36062 = cljs.core.count(c__4609__auto___36059);
var G__36063 = (0);
seq__35803_36040 = G__36060;
chunk__35804_36041 = G__36061;
count__35805_36042 = G__36062;
i__35806_36043 = G__36063;
continue;
} else {
var vec__35839_36064 = cljs.core.first(seq__35803_36058__$1);
var name_36065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839_36064,(0),null);
var map__35842_36066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839_36064,(1),null);
var map__35842_36067__$1 = (((((!((map__35842_36066 == null))))?(((((map__35842_36066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35842_36066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35842_36066):map__35842_36066);
var doc_36068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36067__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842_36067__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36065], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36069], 0));

if(cljs.core.truth_(doc_36068)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36068], 0));
} else {
}


var G__36070 = cljs.core.next(seq__35803_36058__$1);
var G__36071 = null;
var G__36072 = (0);
var G__36073 = (0);
seq__35803_36040 = G__36070;
chunk__35804_36041 = G__36071;
count__35805_36042 = G__36072;
i__35806_36043 = G__36073;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35851 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35852 = null;
var count__35853 = (0);
var i__35854 = (0);
while(true){
if((i__35854 < count__35853)){
var role = chunk__35852.cljs$core$IIndexed$_nth$arity$2(null,i__35854);
var temp__5735__auto___36074__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36074__$1)){
var spec_36075 = temp__5735__auto___36074__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36075)], 0));
} else {
}


var G__36076 = seq__35851;
var G__36077 = chunk__35852;
var G__36078 = count__35853;
var G__36079 = (i__35854 + (1));
seq__35851 = G__36076;
chunk__35852 = G__36077;
count__35853 = G__36078;
i__35854 = G__36079;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35851);
if(temp__5735__auto____$1){
var seq__35851__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35851__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35851__$1);
var G__36080 = cljs.core.chunk_rest(seq__35851__$1);
var G__36081 = c__4609__auto__;
var G__36082 = cljs.core.count(c__4609__auto__);
var G__36083 = (0);
seq__35851 = G__36080;
chunk__35852 = G__36081;
count__35853 = G__36082;
i__35854 = G__36083;
continue;
} else {
var role = cljs.core.first(seq__35851__$1);
var temp__5735__auto___36086__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36086__$2)){
var spec_36089 = temp__5735__auto___36086__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36089)], 0));
} else {
}


var G__36090 = cljs.core.next(seq__35851__$1);
var G__36091 = null;
var G__36092 = (0);
var G__36093 = (0);
seq__35851 = G__36090;
chunk__35852 = G__36091;
count__35853 = G__36092;
i__35854 = G__36093;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36095 = cljs.core.ex_cause(t);
via = G__36094;
t = G__36095;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35926 = datafied_throwable;
var map__35926__$1 = (((((!((map__35926 == null))))?(((((map__35926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35926):map__35926);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35926__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35927 = cljs.core.last(via);
var map__35927__$1 = (((((!((map__35927 == null))))?(((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35927):map__35927);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35928 = data;
var map__35928__$1 = (((((!((map__35928 == null))))?(((((map__35928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35928):map__35928);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35929 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35929__$1 = (((((!((map__35929 == null))))?(((((map__35929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35929):map__35929);
var top_data = map__35929__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35942 = phase;
var G__35942__$1 = (((G__35942 instanceof cljs.core.Keyword))?G__35942.fqn:null);
switch (G__35942__$1) {
case "read-source":
var map__35943 = data;
var map__35943__$1 = (((((!((map__35943 == null))))?(((((map__35943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35943):map__35943);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35945 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35945__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35945,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35945);
var G__35945__$2 = (cljs.core.truth_((function (){var fexpr__35946 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35946.cljs$core$IFn$_invoke$arity$1 ? fexpr__35946.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35946.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35945__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35945__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35945__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35945__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35947 = top_data;
var G__35947__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35947);
var G__35947__$2 = (cljs.core.truth_((function (){var fexpr__35948 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35948.cljs$core$IFn$_invoke$arity$1 ? fexpr__35948.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35948.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35947__$1);
var G__35947__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35947__$2);
var G__35947__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35947__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35947__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35950 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(3),null);
var G__35953 = top_data;
var G__35953__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35953);
var G__35953__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35953__$1);
var G__35953__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35953__$2);
var G__35953__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35953__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35953__$4;
}

break;
case "execution":
var vec__35955 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35925_SHARP_){
var or__4185__auto__ = (p1__35925_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35959.cljs$core$IFn$_invoke$arity$1 ? fexpr__35959.cljs$core$IFn$_invoke$arity$1(p1__35925_SHARP_) : fexpr__35959.call(null,p1__35925_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35960__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35960);
var G__35960__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35960__$1);
var G__35960__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35960__$2);
var G__35960__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35960__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35960__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35942__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35964){
var map__35965 = p__35964;
var map__35965__$1 = (((((!((map__35965 == null))))?(((((map__35965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35965):map__35965);
var triage_data = map__35965__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35965__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35969 = phase;
var G__35969__$1 = (((G__35969 instanceof cljs.core.Keyword))?G__35969.fqn:null);
switch (G__35969__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35970 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35972 = loc;
var G__35973 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35974_36108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35975_36109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35976_36110 = true;
var _STAR_print_fn_STAR__temp_val__35977_36111 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35976_36110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35977_36111);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35962_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35962_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35975_36109);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35974_36108);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35970,G__35971,G__35972,G__35973) : format.call(null,G__35970,G__35971,G__35972,G__35973));

break;
case "macroexpansion":
var G__35978 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35979 = cause_type;
var G__35980 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35981 = loc;
var G__35982 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35978,G__35979,G__35980,G__35981,G__35982) : format.call(null,G__35978,G__35979,G__35980,G__35981,G__35982));

break;
case "compile-syntax-check":
var G__35983 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35984 = cause_type;
var G__35985 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35986 = loc;
var G__35987 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35983,G__35984,G__35985,G__35986,G__35987) : format.call(null,G__35983,G__35984,G__35985,G__35986,G__35987));

break;
case "compilation":
var G__35988 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35989 = cause_type;
var G__35990 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35991 = loc;
var G__35992 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35988,G__35989,G__35990,G__35991,G__35992) : format.call(null,G__35988,G__35989,G__35990,G__35991,G__35992));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35994 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35995 = symbol;
var G__35996 = loc;
var G__35997 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35998_36113 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35999_36114 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36000_36115 = true;
var _STAR_print_fn_STAR__temp_val__36001_36116 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36000_36115);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36001_36116);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35963_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35963_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35999_36114);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35998_36113);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35994,G__35995,G__35996,G__35997) : format.call(null,G__35994,G__35995,G__35996,G__35997));
} else {
var G__36002 = "Execution error%s at %s(%s).\n%s\n";
var G__36003 = cause_type;
var G__36004 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36005 = loc;
var G__36006 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36002,G__36003,G__36004,G__36005,G__36006) : format.call(null,G__36002,G__36003,G__36004,G__36005,G__36006));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35969__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
