
export default function Spinner({ size = "100", text = "Cargando...", strokeWidth = "2", colorText= "#1E1E1E"  }){
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        <path
          d="M26.33 33.53C29.94 31.85 32.73 28.81 34.09 25.07C35.46 21.33 35.28 17.2 33.6 13.6C31.92 9.99 28.88 7.2 25.14 5.84C21.4 4.47 17.28 4.65 13.67 6.33"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0.07"
            y1="12.66"
            x2="12.73"
            y2="39.86"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E05BFF" />
            <stop offset="1" stopColor="#863799" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-poppins text-black text-lg font-medium leading-7 leading-snug" style={{ color: colorText }}>{text}</span>
    </div>
  );
};
