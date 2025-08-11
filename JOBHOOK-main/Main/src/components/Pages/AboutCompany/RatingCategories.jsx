import React from 'react'

const RatingCategories = () => {
  return (
        <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Compensation</span>
                  <span>4.9</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Work/life balance</span>
                  <span>4.7</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Culture</span>
                  <span>4.6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
  )
}

export default RatingCategories
