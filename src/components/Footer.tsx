import { Phone, Mail, Heart } from "lucide-react";
import { weddingConstants } from "../constants";

const Footer: React.FC = () => {
  return (
    <div className="p-8 bg-white/5 backdrop-blur-sm text-center border-t border-white/20">
      <h2 className="text-xl  font-bold mb-4 text-white drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>
        {weddingConstants.messages.contactTitle}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-rose-300 mr-2" />
          <a
            href={`tel:${weddingConstants.contact.phone.replace(/\s/g, "")}`}
            className="text-white/90"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {weddingConstants.contact.phone}
          </a>
        </div>

        <div className="flex items-center">
          <Mail className="h-5 w-5 text-rose-300 mr-2" />
          <a
            href={`mailto:${weddingConstants.contact.email}`}
            className="text-white/90"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {weddingConstants.contact.email}
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/20 text-center">
        <p className="text-white/70 text-sm" style={{ fontFamily: "'Lora', serif" }}>
          {weddingConstants.messages.footerMessage}
        </p>
        <div className="mt-2 flex justify-center">
          <Heart className="h-5 w-5 text-rose-400" fill="#fb7185" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
