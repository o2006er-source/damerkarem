import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const whatsappNumber = '9647816699222'; // رقم واتساب الشركة
  const message = 'مرحباً، أريد الاستفسار عن خدماتكم';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 group animate-bounce-slow"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        تواصل معنا عبر واتساب
      </span>
      
      {/* Badge للإشعارات (اختياري) */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        1
      </span>
    </a>
  );
};

export default WhatsAppWidget;
