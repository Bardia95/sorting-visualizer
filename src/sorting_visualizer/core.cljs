(ns sorting-visualizer.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

;; Constants
;; =========
(def animation-speed-ms 10)
(def n-vector-bars 50)
(def sorted-color "green")
(def unsorted-color "red")
(def normal-color "blue")

(defn height [v i] (str (* (v i)) "px"))

(defn new-vector []
  (vec (repeatedly n-vector-bars #(+ 5 (rand-int 500)))))

;; State
;; =====
(def v (r/atom (new-vector)))

;; State changers
;; ==============
(defn reset-vector! []
  (let [nv (new-vector)]
    (reset! v nv)))

(defn change-bg-color! [el color]
  (set! (.-backgroundColor (.-style el)) color))

(defn change-height! [el n]
  (set! (.-height (.-style el)) (str n "px")))


;; Helpers
;; =======
(defn get-vector-bar [i]
  (first (array-seq (js/document.getElementsByClassName "vector-bar") i)))


;; Sorting algorithms
;; =========
(defn do-merge [l r]
  (loop [v []
         i  0
         j  0]
    (if (and (< i (count l)) (< j (count r)))
      (if (< (l i) (r j))
        (recur (conj v (l i)) (inc i) j)
        (recur (conj v (r j)) i (inc j)))
      (if (< i (count l))
        (recur (conj v (l i)) (inc i) j)
        (if (< j (count r))
          (recur (conj v (r j)) i (inc j))
          v)))))

(defn merge-sort [v]
  (if (< (count v) 2)
    v
    (let [mid   (quot (count v) 2)
          split (split-at mid v)
          left  (vec (merge-sort (first split)))
          right (vec (merge-sort (peek split)))]
      (do-merge left right))))


(defn bubble [ys x]
  (if-let [y (peek ys)]
    (if (> y x)
      (conj (pop ys) x y)
      (conj ys x))
    [x]))

(defn bubble-sort [xs]
  (let [ys (reduce bubble [] xs)]
    (if (= xs ys)
      xs
      (recur ys))))


(defn excl [v x]
  (let [[a b] (split-with #(not= % x) v)]
    (concat a (rest b))))

(defn selection-sort [v]
  (loop [a []
         b v]
    (if (empty? b)
      a
      (let [m (apply min b)]
        (recur (conj a m) (excl b m))))))




;; Components
;; ==========
(defn vector-bars [v]
  [:div.vector-container (for [i (range (count v))]
                           ^{:key i}[:div.vector-bar
                                     {:style {:background-color normal-color
                                              :height (height v i)}}])])

(defn app []
  [:div
   [vector-bars @v]
   [:input {:type "button" :value "New vector"
            :on-click #(reset-vector!)}]
   [:input {:type "button" :value "Merge sort"
            :on-click #(swap! v merge-sort)}]
   [:input {:type "button" :value "Bubble sort"
            :on-click #(swap! v bubble-sort)}]
   [:input {:type "button" :value "Selection sort"
            :on-click #(swap! v selection-sort)}]])


;; Start
;; =====
(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))
