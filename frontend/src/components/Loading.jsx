import React from 'react';

const Loading = ({ fullScreen = false, message = 'جاري التحميل...' }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#1a2f52] flex flex-col items-center justify-center z-50">
        <div className="relative">
          {/* Spinner الدائري */}
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#FFB366]"></div>
          
          {/* Logo في المنتصف */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#FFB366] text-4xl font-bold">B</div>
          </div>
        </div>
        
        {/* رسالة التحميل */}
        <p className="text-white text-xl mt-8 animate-pulse">{message}</p>
        
        {/* نقاط متحركة */}
        <div className="flex gap-2 mt-4">
          <div className="w-3 h-3 bg-[#FFB366] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-[#FFB366] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-[#FFB366] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  // Loading بسيط (inline)
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FFB366]"></div>
      <p className="text-white text-lg mt-4 animate-pulse">{message}</p>
    </div>
  );
};

export default Loading;
