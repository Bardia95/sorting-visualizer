(ns sorting-visualizer.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

;; Constants
;; =========
(def animation-speed-ms 1)
(def n-vector-bars 210)
(def primary-color "turquoise")
(def secondary-color "red")

(defn new-vector []
  (vec (repeatedly n-vector-bars #(+ 5 (rand-int 725)))))

;; State
;; =====
(def vect (r/atom (new-vector)))

;; Helpers
;; =======
(defn reset-vector []
  (let [new-vect (new-vector)]
    (reset! vect new-vect)))

;; Sorting Algorithms
;; ==================
(defn merge [l r]
  (loop [v []
         i    0
         j    0]
    (if (and (< i (count l))
             (< j (count r)))
      (if (< (l i) (r j))
        (recur (conj v (l i))
               (inc i)
               j)
        (recur (conj v (r j))
               i
               (inc j)))
      (if (< i (count l))
        (recur (conj v (l i))
               (inc i)
               j)
        (if (< j (count r))
          (recur (conj v (r j))
                 i
                 (inc j))
          v)))))

(defn merge-sort [v]
  (if (< (count v) 2)
    v
    (let [mid   (quot (count v) 2)
          split (split-at mid v)
          left  (vec (merge-sort (first split)))
          right (vec (merge-sort (peek split)))]
      (merge left right))))

;; Components
;; ==========
(defn vector-bars [v]
  [:div.vector-container (for [i (range (count v))]
                           ^{:key i}[:div.vector-bar
                                     {:style {:background-color "blue"
                                              :height (str (* (v i)) "px")}}])])

(defn app []
  [:div
   [vector-bars @vect]
   [:input {:type "button" :value "New vector"
            :on-click #(reset-vector)}]
   [:input {:type "button" :value "Merge sort"
            :on-click #(swap! vect merge-sort)}]])


;; Start
;; =====
(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))
