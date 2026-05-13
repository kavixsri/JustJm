import React from 'react';

const PredictionCard = ({ time, prediction, confidence }) => (
  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-semibold text-gray-700">{time}</span>
      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-semibold">
        {confidence}% confident
      </span>
    </div>
    <div className="flex items-center gap-2">
      <div className={`text-2xl font-bold ${
        prediction === 'Heavy' ? 'text-red-600' :
        prediction === 'Moderate' ? 'text-yellow-600' : 'text-green-600'
      }`}>
        {prediction}
      </div>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            prediction === 'Heavy' ? 'bg-red-500' :
            prediction === 'Moderate' ? 'bg-yellow-500' : 'bg-green-500'
          }`}
          style={{ width: `${prediction === 'Heavy' ? 85 : prediction === 'Moderate' ? 60 : 35}%` }}
        />
      </div>
    </div>
  </div>
);

export default PredictionCard;
