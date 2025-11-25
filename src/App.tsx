import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import CoupleInfo from "./components/CoupleInfo";
import IntroOverlay from "./components/IntroOverlay";
import WeddingDetails from "./components/WeddingDetails";
import Program from "./components/Program";
import TurutMengundang from "./components/TurutMengundang";
import Album from "./components/Album";
// import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import BackgroundMusic from "./components/BackgroundMusic";
import HeartAnimation from "./components/HeartAnimation";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // keep isLoaded controlled by intro; if intro already dismissed, trigger loaded animations
    if (!showIntro) {
      setTimeout(() => setIsLoaded(true), 200);
    }
  }, [showIntro]);

  return (
    <>
      {/* Intro overlay shown on first open (rendered outside the main app container) */}
      {showIntro && (
        <IntroOverlay
          onOpen={() => {
            setShowIntro(false);
            setIsLoaded(true);
          }}
        />
      )}

      <div
        className={`min-h-screen bg-cover bg-center py-8 px-4 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/background-wed.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="fixed inset-0 bg-black/30 pointer-events-none"></div>
        
        <HeartAnimation />

  <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md overflow-hidden transform transition-all duration-700 ease-in-out rounded-2xl shadow-xl border border-white/20">
          {/* Background Music */}
          <BackgroundMusic />

          {/* Wedding Header with Names */}
          <Header isLoaded={isLoaded} />

          {/* Countdown Timer */}
          <Countdown isLoaded={isLoaded} />

          {/* Couple Information */}
          <CoupleInfo isLoaded={isLoaded} />

          {/* Album Foto */}
          <Album isLoaded={isLoaded} />

          {/* Wedding Details (Date, Time, Venue) */}
          <WeddingDetails isLoaded={isLoaded} />

          {/* Wedding Program */}
          <Program isLoaded={isLoaded} />

          {/* Turut Mengundang (pihak yang turut mengundang) */}
          <TurutMengundang isLoaded={isLoaded} />

          {/* RSVP Form */}
          {/* <RSVP isLoaded={isLoaded} /> */}

          {/* Footer with Contact Info */}
          <Footer />
        </div>

        {/* React Hot Toast */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 10000,
          }}
        />
      </div>
    </>
  );
};

export default App;
