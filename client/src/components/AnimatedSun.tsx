/**
 * Animated Sun Component
 * Displays an animated sun with glowing effect for Amanecer hero section
 * Evokes the sunrise/dawn theme of the organization
 */

export default function AnimatedSun() {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48">
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 blur-3xl opacity-60 animate-pulse" />

      {/* Sun SVG with animation */}
      <svg
        className="absolute inset-0 w-full h-full animate-sun-rise animate-sun-glow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main sun circle with gradient */}
        <defs>
          <radialGradient id="sunGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#FFFACD" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.9" />
          </radialGradient>

          <filter id="sunGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sun rays - animated */}
        <g className="animate-float-soft">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={`ray-${angle}`}
              x1="100"
              y1="30"
              x2="100"
              y2="10"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </g>

        {/* Main sun circle */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="url(#sunGradient)"
          filter="url(#sunGlow)"
          className="animate-sun-glow"
        />

        {/* Inner highlight for depth */}
        <circle
          cx="80"
          cy="80"
          r="20"
          fill="#FFFACD"
          opacity="0.6"
          filter="url(#sunGlow)"
        />
      </svg>

      {/* Subtle floating animation wrapper */}
      <style>{`
        @keyframes sunRise {
          0% {
            transform: translateY(60px) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes sunGlow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.8));
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
