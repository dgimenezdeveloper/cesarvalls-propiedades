import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export const QuickContact: React.FC = () => {
  return (
    <>
      {/* Floating WhatsApp / Contact Button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-4">
        <a
          href="https://wa.me/541155125144"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-[#25D366] border-2 border-[#25D366] px-4 py-3 rounded-full shadow-lg hover:bg-[#25D366] hover:text-white hover:scale-105 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><path d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.73c-.13.48.01.99.37 1.34.36.36.87.5 1.34.37l6.73-1.84c1.94 1.14 4.15 1.74 6.41 1.74 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.2c-2.09 0-4.14-.56-5.92-1.62-.23-.13-.5-.17-.75-.1l-5.13 1.4 1.4-5.13c.07-.25.03-.52-.1-.75-1.06-1.78-1.62-3.83-1.62-5.92 0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11zm6.13-7.47c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.54-.17-.77.17-.23.34-.89 1.1-1.09 1.33-.2.23-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.7-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.54-.28-.68-.57-.59-.77-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.67 1.22 3.28 1.39 3.51.17.23 2.41 3.68 5.85 5.02.82.32 1.46.51 1.96.65.82.26 1.57.22 2.16.13.66-.1 2.01-.82 2.3-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z"/></svg>
          <span className="font-medium">WhatsApp</span>
        </a>

        <a
          href="tel:+541155125144"
          className="flex items-center gap-3 bg-black text-[#f7931e] px-4 py-3 rounded-full shadow-lg hover:bg-[#f7931e] hover:text-black hover:scale-105 transition-all border border-black"
        >
          <PhoneCall size={22} />
          <span className="font-medium">Llamar</span>
        </a>
      </div>
    </>
  );
};
