(ns sorting-visualizer.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))


(def animation-speed-ms 1)

(def n-vector-bars 210)

(def primary-color "turquoise")

(def secondary-color "red")

(defn new-vector []
  (vec (repeatedly n-vector-bars #(+ 5 (rand-int 725)))))

(def vect (r/atom (new-vector)))

(defn vector-bars [v]
  [:div.vector-container (for [i (range (count v))]
                           ^{:key i}[:div.vector-bar
                                     {:style {:background-color "blue"
                                              :height (str (* (v i)) "px")}}])])


;; MUTATIVE
(defn reset-vector []
  (let [new-vect (new-vector)]
    (reset! vect new-vect)))

(defn app []
  [:div
   [vector-bars @vect]
   [:input {:type "button" :value "New vector"
            :on-click #(reset-vector)}]])

(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))
