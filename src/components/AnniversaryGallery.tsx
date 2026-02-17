import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Pause, Play} from "lucide-react";

type MomentType = "image" | "video";

interface Memory {
    memory: string;
    type: MomentType;
    src: string;
    caption: string;
}

const BASE = import.meta.env.BASE_URL;

const buildSrc = (file: string): string => `${BASE}assets/memories/${file}`;

const memories: Memory[] = [
    {
        memory: "Hi, my Love!",
        type: "image",
        src: buildSrc("month8.jpeg"),
        caption: "Let's take a trip down memory lane, one memory at a time. From our first ice-cream date to the countless moments that made us laugh, cry, and fall deeper in love. Each moment has been a chapter in our beautiful story, and I can't wait to relive it all with you. Here's to us, to our journey, and to the many more memories we'll create together................  Happy Anniversary!"
    },
    {
        memory: ". The Beginning .",
        type: "image",
        src: buildSrc("memory0.jpeg"),
        caption: "Where our story quietly started."
    },
    {
        memory: ". The Serra  Cafe .",
        type: "image",
        src: buildSrc("month1.jpeg"),
        caption: "Our very first date."
    },
    {
        memory: ". Story .",
        type: "image",
        src: buildSrc("month2.jpeg"),
        caption: "Where we began writing our own story.",
    },
    {
        memory: ". Your First Selfie .",
        type: "image",
        src: buildSrc("month3.jpeg"),
        caption: "That feeling of first which made my heart skip a beat."
    },
    {
        memory: ". Pronto .",
        type: "image",
        src: buildSrc("month4.jpeg"),
        caption: "You and your favourite burger place."
    },
    {
        memory: ". Ice-creams and smiles .",
        type: "image",
        src: buildSrc("month5.jpeg"),
        caption: "Our sweet moments together, just like our favourite ice-cream."
    },
    {
        memory: ". বইThek .",
        type: "image",
        src: buildSrc("month6.jpeg"),
        caption: "Our first cafe visit in your para, Uttarpara."
    },
    {
        memory: ". 24.06.2025 .",
        type: "image",
        src: buildSrc("month20.jpeg"),
        caption: "Happy Birthday, Pihu!"
    },
    {
        memory: ". Metro In Dino! .",
        type: "image",
        src: buildSrc("month19.jpeg"),
        caption: "Our first movie date."
    },
    {
        memory: ". Haveli main Pihu .",
        type: "image",
        src: buildSrc("month18.jpeg"),
        caption: "Your first visit to my home."
    },
    {
        memory: ". Photo walk .",
        type: "image",
        src: buildSrc("month17.jpeg"),
        caption: "Rain, photowalk and us - sundor combination."
    },
    {
        memory: ". Home Dates .",
        type: "video",
        src: buildSrc("month14.mp4"),
        caption: "Every date at home felt like a mini celebration with you."
    },
    {
        memory: ". Pujo .",
        type: "image",
        src: buildSrc("month16.jpeg"),
        caption: "Our first Pujo together."
    },
    {
        memory: ". Diwali .",
        type: "image",
        src: buildSrc("month15.jpeg"),
        caption: "Lights, laughter, and love - our Diwali together."
    },
    {
        memory: ". Sexy Lady in Saree .",
        type: "image",
        src: buildSrc("month13.jpeg"),
        caption: "The day you looked like a charm in that saree."
    },
    {
        memory: ". Lulu .",
        type: "image",
        src: buildSrc("month12.jpeg"),
        caption: "Happy Pihu and Lulu."
    },
    {
        memory: ". Video calls .",
        type: "image",
        src: buildSrc("month11.jpeg"),
        caption: "Our late-night video calls that made the distance feel smaller."
    },
    {
        memory: ". Mumbai .",
        type: "image",
        src: buildSrc("month10.jpeg"),
        caption: "Little trip, HUGE memories."
    },
    {
        memory: ". PMS??? .",
        type: "video",
        src: buildSrc("month9.mp4"),
        caption: "I liked every bit of it."
    },
    {
        memory: ". My Valentine .",
        type: "image",
        src: buildSrc("month7.jpeg"),
        caption: "Pretty rose with prettier Lady."
    },
];


export default function AnniversaryGallery() {
    const [current, setCurrent] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)


    useEffect(() => {
        if (!isPlaying) return

        const memory = memories[current]

        if (memory.type === "image") {
            const timer = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % memories.length)
            }, 3000)
            return () => clearTimeout(timer)
        }

        if (memory.type === "video" && videoRef.current) {
            videoRef.current.play().catch(() => {
            })
            videoRef.current.onended = () => {
                setCurrent((prev) => (prev + 1) % memories.length)
            }
        }
    }, [current, isPlaying])

    const togglePlayback = () => {
        const nextState = !isPlaying
        setIsPlaying(nextState)

        if (audioRef.current) {
            if (nextState) {
                audioRef.current.play().catch(() => {
                })
            } else {
                audioRef.current.pause()
            }
        }

        if (videoRef.current) {
            if (nextState) {
                videoRef.current.play().catch(() => {
                })
            } else {
                videoRef.current.pause()
            }
        }
    }

    const {caption, memory: name, src, type} = memories[current]

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center group">

            {/* Background Music */}
            <audio
                ref={audioRef}
                src={`${BASE}assets/music/Music.mp3`}
                loop
                preload="auto"
            />

            <AnimatePresence mode="wait">
                <motion.div
                    initial={{opacity: 0, scale: 1.05}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1.2}}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="relative w-full h-full max-h-screen">
                        {type === "image" ? (
                            <img
                                src={src}
                                className="w-full h-full object-scale-down"
                                alt={caption}
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                src={src}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                            />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-[10%] w-full px-6 text-center">
                        <div className="inline-block bg-black/50 backdrop-blur-md px-6 py-4 rounded-2xl">
                            <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-wide drop-shadow-lg">
                                {name}
                            </h2>
                            <p className="text-white/90 text-sm md:text-lg mt-2">
                                {caption}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Center Play / Pause Button */}
            <motion.button
                onClick={togglePlayback}
                initial={{opacity: 0.4}}
                whileHover={{opacity: 1, scale: 1.1}}
                transition={{duration: 0.3}}
                className="absolute bottom-[20%] z-50 flex items-center justify-center
                   w-20 h-20 md:w-24 md:h-24
                   rounded-full
                   bg-white/10 backdrop-blur-md
                   border border-white/30
                   text-white
                   shadow-lg"
            >
                {isPlaying ? <Pause size={36}/> : <Play size={36}/>}
            </motion.button>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 flex gap-2">
                {memories.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            index === current ? "w-8 bg-white" : "w-4 bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}