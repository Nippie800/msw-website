export default function StarBackground() {
  const stars = [
    { top: "8%", left: "12%", size: "h-1 w-1", delay: "0s" },
    { top: "15%", left: "78%", size: "h-1.5 w-1.5", delay: "1s" },
    { top: "28%", left: "22%", size: "h-1 w-1", delay: "2s" },
    { top: "35%", left: "88%", size: "h-1 w-1", delay: "1.5s" },
    { top: "48%", left: "10%", size: "h-1.5 w-1.5", delay: "0.5s" },
    { top: "58%", left: "70%", size: "h-1 w-1", delay: "2.5s" },
    { top: "72%", left: "18%", size: "h-1 w-1", delay: "1.2s" },
    { top: "80%", left: "82%", size: "h-1.5 w-1.5", delay: "0.8s" },
    { top: "88%", left: "38%", size: "h-1 w-1", delay: "1.8s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`absolute rounded-full bg-white/70 ${star.size} animate-starTwinkle`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}