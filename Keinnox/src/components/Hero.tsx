import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to play audio once user clicks anywhere
  const handlePlay = () => {
    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        audioRef.current.volume = 0.2;
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // Slow down video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={handlePlay} // click anywhere to start music
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/3188887-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/audio/fashion-beauty-luxury-421110.mp3" type="audio/mpeg" />
      </audio>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mb-4
                       bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#D4AF37]
                       bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-fade-in">
          KEINNOX
        </h1>

        <p className="text-white text-lg md:text-2xl mb-8 max-w-xl animate-fade-in">
          Premium Wines, Gin, Champagne & Luxury Spirits — Delivered in Style
        </p>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in">
          <Link
            to="/shop"
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#D4AF37]
                       text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold
                       rounded-lg hover:bg-[#D4AF37]/20 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {!isPlaying && (
          <p className="mt-4 text-sm text-[#D4AF37] opacity-80">
            Click anywhere to play music 🎵
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
