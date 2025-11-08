import React, { useEffect, useState } from "react";

const trendingDrinks = [
  { id: 1, name: "Red Wine 2018", image: "/undefined.jpeg" },
  { id: 2, name: "White Wine 2020", image: "/undefined (1).jpeg" },
  { id: 3, name: "Champagne Prestige", image: "/images/champagne1.jpg" },
  { id: 4, name: "Dry Gin", image: "/images/gin1.jpg" },
];

const TrendingDrinks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-swipe on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingDrinks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="py-12 bg-[#0B0B0B]">
      <h2 className="text-3xl font-bold text-[#D4AF37] text-center mb-8">
        Trending Drinks
      </h2>

      <div className={`max-w-6xl mx-auto ${isMobile ? "grid grid-cols-1" : "grid grid-cols-4 gap-6"} gap-6`}>
        {isMobile ? (
          // Mobile: only one card, fade transition
          <div className="relative min-h-[250px] rounded-xl overflow-hidden shadow-lg">
            {trendingDrinks.map((drink, idx) => (
              <img
                key={drink.id}
                src={drink.image}
                alt={drink.name}
                className={`w-full h-full object-cover rounded-xl absolute top-0 left-0 transition-opacity duration-700 ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
              {trendingDrinks[currentIndex].name}
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 right-2 flex gap-1">
              {trendingDrinks.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-[#D4AF37]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop: show all drinks in grid
          trendingDrinks.map((drink) => (
            <div
              key={drink.id}
              className="relative min-h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                {drink.name}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TrendingDrinks;
