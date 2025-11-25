import { Heart } from "lucide-react";
import { weddingConstants } from "../constants";

interface HeaderProps {
  isLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoaded }) => {
  return (
    <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm p-6 sm:p-8 text-center border-b border-white/20">
      <div className="inline-block animate-bounce">
        <Heart
          className="text-rose-500 h-10 w-10 sm:h-12 sm:w-12 mb-2 mx-auto"
          fill="#f43f5e"
        />
      </div>

      <div className="relative">

        <h1
          className={`text-3xl sm:text-6xl font-bold text-white drop-shadow-lg mb-2 sm:mb-3 transition-all duration-1000 ${
            isLoaded
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-90"
          }`}
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}
        >
          {weddingConstants.couple.groom.name.split(" ")[0]} &{" "}
          {weddingConstants.couple.bride.name.split(" ")[0]}
        </h1>

        <p className="text-base sm:text-xl text-white/90 drop-shadow-md mb-4" style={{ fontFamily: "'Lora', serif" }}>
          {weddingConstants.messages.invitation}
        </p>

        <div className="flex justify-center mb-6">
          <div className="h-0.5 w-24 sm:w-32 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
