import { useEffect, useRef } from 'react'

const loveMessages = [
  "I love you more than words can express 💕",
  "You are my sunshine on the cloudiest days ☀️",
  "Every moment with you is a treasure ✨",
  "Your smile lights up my entire world 😊",
  "I fall in love with you more every day 💖",
  "You are my favorite person in the universe 🌟",
  "My heart belongs to you, now and forever ❤️",
  "You make everything better just by being you 💝",
  "I'm so grateful to have you in my life 🙏",
  "You are my dream come true 🌈",
  "I love the way you make me feel 🦋",
  "You are beautiful inside and out 💐",
  "I can't imagine my life without you 💗",
  "You are my happy place 🏡",
  "I love you to the moon and back 🌙",
  "You are my everything 💎",
  "My love for you grows stronger every second ⏰",
  "You are perfect just the way you are 🌸",
  "I'm the luckiest person to have you 🍀",
  "You are my heart's greatest desire 💘",
  "I love you more than yesterday, less than tomorrow 💕",
  "You are my forever and always ♾️",
  "I love every little thing about you 🎀",
  "You are my best friend and my soulmate 👫",
  "I love you beyond measure 📏",
  "You are my reason to smile every day 😄",
  "I love you more than all the stars in the sky ⭐",
  "You are my greatest adventure 🗺️",
  "I love you with all my heart and soul 💞",
  "You are my home, my safe place 🏠",
  "Your little nose rubs 💋",
  "The way you care for me makes me feel so special 💖",
]

function SimpleComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    
    // Create scroll animation
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= container.scrollHeight / 2) {
        scrollPosition = 0
      }
      container.scrollTop = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Duplicate messages for seamless infinite scroll
  const duplicatedMessages = [...loveMessages, ...loveMessages]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            <pre>   Pihu 💕</pre>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
          Reasons I Love You
        </p>
      </div>

      {/* Infinite scrolling list container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm bg-white/80 border-4 border-pink-200/50">
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent z-20 pointer-events-none"></div>

          {/* Scrolling list */}
          <div
            ref={scrollContainerRef}
            className="h-full overflow-y-auto scrollbar-hide py-8 px-4 sm:px-6 md:px-8"
            style={{
              scrollBehavior: 'auto',
            }}
          >
            {duplicatedMessages.map((message, index) => (
              <div
                key={index}
                className="mb-6 sm:mb-8 transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative group">
                  {/* Card with gradient background */}
                  <div className="bg-gradient-to-r from-pink-50 via-red-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-200/50 hover:border-pink-400/70">
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      ❤️
                    </div>
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-xl sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      💕
                    </div>
                    
                    {/* Message text */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 relative z-10 text-center leading-relaxed">
                      {message}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Custom styles for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default SimpleComponent

