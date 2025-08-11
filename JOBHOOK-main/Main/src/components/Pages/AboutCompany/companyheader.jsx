import React from 'react'
import { Star, MapPin, Building, Users, MessageCircle, Calendar, ChevronLeft, ChevronRight, MoreHorizontal, Clock, Heart } from "lucide-react";

const companyheader = () => {
  return (
    <>
     <div className="px-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-xl font-bold uppercase mb-1">LABORUM</h1>
            <p className="text-sm text-gray-500">Business Development Company</p>
          </div>
          <div className="flex gap-2">
            <button className="border border-teal-500 text-teal-500 px-3 py-1 rounded-md text-sm">
              <span className="flex items-center">
                <MessageCircle size={14} className="mr-1" />
                Share
              </span>
            </button>
            <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm">
              <span className="flex items-center">
                <Heart size={14} className="mr-1" />
                Follow
              </span>
            </button>
          </div>
        </div>
        </div>
    </>
  )
}

export default companyheader
