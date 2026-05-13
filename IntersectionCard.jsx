import React from 'react';
import { MapPin } from 'lucide-react';

const IntersectionCard = ({ name, status, waitTime, throughput }) => (
  <div className="bg-white rounded-lg p-4 border-2 border-gray-100 hover:border-indigo-300 transition-all cursor-pointer">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-indigo-600" />
        <span className="font-semibold text-gray-800">{name}</span>
      </div>
      <div className={`w-3 h-3 rounded-full animate-pulse ${
        status === 'optimal' ? 'bg-green-500' :
        status === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
      }`} />
    </div>
    <div className="grid grid-cols-2 gap-3 text-sm">
      <div>
        <div className="text-gray-500 text-xs">Avg Wait</div>
        <div className="font-semibold text-gray-700">{waitTime}s</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs">Throughput</div>
        <div className="font-semibold text-gray-700">{throughput}/min</div>
      </div>
    </div>
  </div>
);

export default IntersectionCard;
