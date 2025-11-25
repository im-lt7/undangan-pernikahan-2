import React, { useState, useEffect } from "react";
import { weddingConstants } from "../constants";

interface AlbumProps {
  isLoaded: boolean;
}

const Album: React.FC<AlbumProps> = ({ isLoaded }) => {
  const images = [
    { src: weddingConstants.couple.groom.image, title: weddingConstants.couple.groom.name },
    { src: weddingConstants.couple.bride.image, title: weddingConstants.couple.bride.name },
    { src: weddingConstants.couple.groom.image, title: "Kenangan Keluarga" },
    { src: weddingConstants.couple.bride.image, title: "Momen Bahagia" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div
      className={`p-4 sm:p-6 transition-all duration-700 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <h3 className="text-lg font-semibold text-white drop-shadow-md mb-3" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>Album Foto</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="group overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm p-0"
            aria-label={`Buka foto ${img.title}`}
          >
            <div className="relative h-28 sm:h-36">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-2 text-xs text-white/80" style={{ fontFamily: "'Lora', serif" }}>{img.title}</div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-2 right-2 bg-black/40 text-white rounded-full p-2 focus:outline-none"
              aria-label="Tutup"
            >
              ✕
            </button>

            <img
              src={images[openIndex].src}
              alt={images[openIndex].title}
              className="w-full h-[70vh] object-contain rounded-md bg-black"
            />

            <div className="mt-2 flex items-center justify-between text-white">
              <div className="text-sm">{images[openIndex].title}</div>
              <div className="space-x-2">
                <button
                  onClick={prev}
                  className="bg-white/10 text-white px-3 py-1 rounded"
                  aria-label="Sebelumnya"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="bg-white/10 text-white px-3 py-1 rounded"
                  aria-label="Berikutnya"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
