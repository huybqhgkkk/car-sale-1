import SearchComponent from "@modules/public/components/Search"

const SearchSection = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden flex items-end sm:items-center justify-center pb-2 sm:pb-8 bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/30">
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-yellow-100/10 blur-[20px]"></div>
          <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-yellow-100/30"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 3 + 1
            const duration = Math.random() * 10 + 5
            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white animate-star"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  animationDuration: `${duration}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  filter: Math.random() > 0.8 ? "blur(0.5px)" : "none",
                }}
              ></div>
            )
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-amber-400/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white/30 animate-particle"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 sm:opacity-30 animate-float">
        <svg className="w-48 h-48 text-amber-500" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M135.2 117.4L109.1 192H402.9l-26.1-74.6c-4.5-12.9-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.5-30.2 21.4zm-45.9 33.5L74.8 235.5c-6.4 18.3-10.1 37.4-10.1 56.6v3.6c0 14.3 4.2 28.3 12.2 40.2H24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.8l12.7-36.3c2.7-7.6 4.2-15.5 4.2-23.5v-3.6c0-15.5 3.1-30.8 9-45.1l14.5-41.4H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h9.3zm375.1 0l14.5 41.4c5.9 14.3 9 29.6 9 45.1v3.6c0 8 1.5 15.9 4.2 23.5L488 320h24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-52.9c8-11.9 12.2-25.9 12.2-40.2v-3.6c0-19.2-3.7-38.3-10.1-56.6l-14.5-84.6H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-9.3zM128 336c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16zm288 0c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 opacity-15 sm:opacity-25 animate-float-slow">
        <svg className="w-40 h-40 text-blue-400/80" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4v96c0 17.7-14.3 32-32 32h-80v48h32v-48h288v48h32v-48h8c17.7 0 32-14.3 32-32 0-25.7-15.2-46.9-37-52.1 6.1-11.6 9.3-24.5 9.3-37.7v-1.6c0-19.2-3.7-38.3-10.1-56.6l-14.5-41.4H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-9.3zM128 56c-13.3 0-24 10.7-24 24v24h48V80c0-13.3-10.7-24-24-24zm288 0c-13.3 0-24 10.7-24 24v24h48V80c0-13.3-10.7-24-24-24zm-320 280v-96h320v96H96z"
          />
        </svg>
      </div>
      <div className="absolute bottom-40 left-1/3 opacity-10 sm:opacity-20 animate-float-reverse">
        <svg className="w-28 h-28 text-red-400/70" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M135.2 117.4L109.1 192H402.9l-26.1-74.6c-4.5-12.9-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.5-30.2 21.4zm-45.9 33.5L74.8 235.5c-6.4 18.3-10.1 37.4-10.1 56.6v1.6c0 13.2 3.2 26.1 9.3 37.7C39.2 329.1 24 350.3 24 376c0 17.7 14.3 32 32 32h8v48h32v-48h288v48h32v-48h8c17.7 0 32-14.3 32-32 0-25.7-15.2-46.9-37-52.1 6.1-11.6 9.3-24.5 9.3-37.7v-1.6c0-19.2-3.7-38.3-10.1-56.6l-14.5-41.4H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-9.3zM128 336c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm288 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"
          />
        </svg>
      </div>
      <div className="absolute bottom-24 right-1/4 opacity-10 sm:opacity-15">
        <svg className="w-36 h-36 text-emerald-400/60" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M192 104c13.3 0 24-10.7 24-24s-10.7-24-24-24H96c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V104zM320 80c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V80zM480 96c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V96z"
          />
        </svg>
      </div>
      <SearchComponent />
    </div>
  )
}

export default SearchSection