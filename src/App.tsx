function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[40px] gap-[20px] relative py-[25px] px-[40px]">
      <svg
        width="456"
        height="374"
        viewBox="0 0 456 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-50 md:scale-100"
      >
        <g filter="url(#filter0_iii_3_79)">
          <path
            d="M30.9281 170.521L153.273 31.7719C154.948 29.8732 158.076 30.7738 158.484 33.2721L193.577 247.996C193.998 250.572 197.281 251.419 198.895 249.367L317.124 99.1175C318.635 97.1975 321.685 97.792 322.364 100.139L392.675 343.163"
            stroke="#949494"
            stroke-width="60"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_iii_3_79"
            x="-23.0722"
            y="-34.2759"
            width="445.755"
            height="443.447"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="36" />
            <feGaussianBlur stdDeviation="33" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.144375 0 0 0 0 0.285863 0 0 0 0 0.7875 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_3_79"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="23" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_3_79"
              result="effect2_innerShadow_3_79"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-24" dy="-35" />
            <feGaussianBlur stdDeviation="27.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_3_79"
              result="effect3_innerShadow_3_79"
            />
          </filter>
        </defs>
      </svg>

      <h1 className="bg-linear text-transparent bg-clip-text font-bold z-10 text-center">
        Thiago Machado
      </h1>

      <h2 className="text-[20px] font-light z-10 text-center">
        Desenvolvedor Front End | Desenvolvedor Full Stack na{' '}
        <a href="https://cobogo.io/" target="_blank" className="text-cobogo">
          Cobogo.
        </a>
      </h2>
    </div>
  )
}

export default App
