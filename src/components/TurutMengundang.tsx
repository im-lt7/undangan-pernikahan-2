interface TurutMengundangProps {
  isLoaded: boolean;
}

const TurutMengundang: React.FC<TurutMengundangProps> = ({ isLoaded }) => {
  const hosts = [
    "Bapak Jenal dan Ibu Sa Odah",
    "Bapak Hj Iwaan dan Ibu Iah",
  ];

  return (
    <div
      className={`p-4 sm:p-6 transition-all duration-700 text-center ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <h3 className="text-lg font-semibold text-white drop-shadow-md mb-2" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>Turut Mengundang</h3>
      <ul className="text-sm text-white/80 space-y-1" style={{ fontFamily: "'Lora', serif" }}>
        {hosts.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default TurutMengundang;
