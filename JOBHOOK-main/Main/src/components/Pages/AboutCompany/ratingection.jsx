import React from 'react'
import { Star } from "lucide-react";
const ratingection = () => {
  return (
    <div className="w-56">
            <h2 className="text-lg font-semibold mb-3">Overall Rating</h2>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold mr-2">4.8/5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} 
                  />
                ))}
              </div>
            </div>
</div>
  )
}

export default ratingection
