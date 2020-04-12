(ns sorting-visualizer.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [sorting-visualizer.algorithms :refer [get-merge-sort-animations]]))

;; Constants
;; =========
(def animation-speed-ms 1000)
(def n-vector-bars 210)
(def primary-color "turquoise")
(def secondary-color "red")

(defn new-vector []
  (vec (repeatedly n-vector-bars #(+ 5 (rand-int 725)))))

;; State
;; =====
(def vect (r/atom (new-vector)))

;; State changers
;; =======
(defn reset-vector! []
  (let [new-vect (new-vector)]
    (reset! vect new-vect)))

(defn change-bg-color! [el color]
  (set! (.-backgroundColor (.-style el)) color))

(defn change-height! [el n]
  (set! (.-height (.-style el)) (str n "px")))

;; Animations
;; =========
(defn merge-sort! [v]
  (loop [animations (get-merge-sort-animations v)
         i 0]
    (if (< i (count animations))
      (let [bars (array-seq (.getElementsByClassName js/document "vector-bar"))
            color (if (= (mod i 3) 0) secondary-color primary-color)]
        (if (not= 2 (mod i 3))
          (let [[bar-one-idx bar-two-idx] (animations i)
                bar-one (bars bar-one-idx)
                bar-two (bars bar-two-idx)]
            (js/setTimeout
             #(do (change-bg-color! bar-one color)
                  (change-bg-color! bar-two color))
             (* i animation-speed-ms))
            (recur animations (inc i)))
          (let [[bar-one-idx new-height] (animations i)
                [bar-one] (bars bar-one-idx)]
            (js/setTimeout
             #(do (change-bg-color! bar-one color)
                  (change-height! bar-one new-height))
             (* i animation-speed-ms))
            (recur animations (inc i)))))
      (do (js/console.log "Finished sorting")
          (println "Finished sorting")))))

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
            :on-click #(reset-vector!)}]
   [:input {:type "button" :value "Merge sort"
            :on-click #(merge-sort! @vect)}]])


;; Start
;; =====
(defn ^:dev/after-load start []
(rdom/render [app] (js/document.getElementById "app")))

(defn init []
(js/console.log "init")
(start))
