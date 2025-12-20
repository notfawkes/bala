import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import Link from "next/link"

export function ScrollTriggered() {
    return (
        <div className="w-full" style={container}>
            {food.map(([src, hueA, hueB, href], i) => (
                <Card i={i} src={src} hueA={hueA} hueB={hueB} href={href} key={src} />
            ))}
        </div>
    )
}

interface CardProps {
    src: string
    hueA: number
    hueB: number
    i: number
    href: string
}

function Card({ src, hueA, hueB, i, href }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
        <Link href={href} style={{ textDecoration: "none" }}>
            <motion.div style={card} variants={cardVariants} className="card">
                <img
                    src={src}
                    alt="card-img"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 20,
                    }}
                />
            </motion.div>
        </Link>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -40,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    width: 300,
    height: 430,
    borderRadius: 20,
    overflow: "hidden",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

const food: [string, number, number, string][] = [
    ["/images/Jt_Tech.jpg", 24, 45, "experience/jt-tech"],
    ["/images/Internship.png", 24, 45, "experience/internship"],
]
