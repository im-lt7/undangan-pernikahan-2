import React from "react";
import { weddingConstants } from "../constants";

interface IntroOverlayProps {
  onOpen: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onOpen }) => {
  // Use custom wedding background image (place the file in public/)
  const bg = "/background-wed.jpeg";

  return (
    <div className="fixed inset-0 z-50">
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-3xl w-full p-6 sm:p-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-md mb-3">
            {weddingConstants.couple.groom.name.split(" ")[0]} &amp; {weddingConstants.couple.bride.name.split(" ")[0]}
          </h2>

          <p className="text-base sm:text-lg text-white/90 mb-4">
            {weddingConstants.messages.invitation}
          </p>

          <div className="text-sm text-white/80 mb-6">{weddingConstants.date.full} • {weddingConstants.date.time}</div>

          <button
            onClick={onOpen}
            className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg focus:outline-none"
          >
            Buka Undangan
          </button>

          <div className="mt-4 text-xs text-white/70">Ketuk tombol untuk membuka undangan</div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
