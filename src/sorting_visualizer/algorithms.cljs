(ns sorting-visualizer.algorithms)

(defn do-merge [v
                start-idx
                mid-idx
                end-idx
                v1
                animations]
  (loop [v v
         v1 v1
         animations animations
         k start-idx
         i start-idx
         j (inc mid-idx)]
    (if (and (<= i mid-idx)
             (<= j end-idx))
      (let [animations (conj animations [i j] [i j])]
        (if (<= (v1 i) (v1 j))
          (let [animations (conj animations [k (v1 i)])]
            (recur (assoc v (inc k) (v1 (inc i)))
                   v1
                   animations
                   (inc k)
                   (inc i)
                   j))
          (let [animations (conj animations [k (v1 j)])]
            (recur (assoc v (inc k) (v1 (inc j)))
                   v1
                   animations
                   (inc k)
                   i
                   (inc j)))))
      (if (<= i mid-idx)
        (recur (assoc v (inc k) (v1 (inc i)))
               v1
               (conj animations [i i] [i i] [k (v1 i)])
               (inc k)
               (inc i)
               j)
        (if (<= j end-idx)
          (recur (assoc v (inc k) (v1 (inc j)))
                 v1
                 (conj animations [j j] [j j] [k (v1 j)])
                 (inc k)
                 i
                 (inc j))
          animations)))))

(defn merge-sort-helper [v i e v1 animations]
  (if (= i e)
    animations
    (let [m (quot (+ i e) 2)
          left (merge-sort-helper v1 i m v animations)
          right (merge-sort-helper v1 (inc m) e v animations)]
      (do-merge v i m e v1 animations))))

(defn get-merge-sort-animations [v]
  (merge-sort-helper v 0 (dec (count v)) (vec v) []))
