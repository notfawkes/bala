"use client"

import * as React from "react"
import type { StaticImageData } from "next/image"
import { HTMLMotionProps, MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface TextStaggerHoverProps {
  text: string
  index: number
}

interface HoverSliderImageProps {
  index: number
  src: string | StaticImageData
  alt?: string
  href?: string
  target?: "_self" | "_blank"
}

interface HoverSliderProps {}

interface HoverSliderContextValue {
  activeSlide: number
  changeSlide: (index: number) => void
}

/* -------------------------------------------------------------------------- */
/* Utils                                                                      */
/* -------------------------------------------------------------------------- */

function splitText(text: string) {
  const words = text.split(" ").map((word) => word.concat(" "))
  const characters = words.map((word) => word.split("")).flat(1)

  return { words, characters }
}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const HoverSliderContext =
  React.createContext<HoverSliderContextValue | undefined>(undefined)

function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext)
  if (!context) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSlider"
    )
  }
  return context
}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const HoverSlider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HoverSliderProps
>(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = React.useState(0)

  const changeSlide = React.useCallback((index: number) => {
    setActiveSlide(index)
  }, [])

  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </HoverSliderContext.Provider>
  )
})
HoverSlider.displayName = "HoverSlider"

/* -------------------------------------------------------------------------- */
/* Text Hover                                                                 */
/* -------------------------------------------------------------------------- */

export const TextStaggerHover = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & TextStaggerHoverProps
>(({ text, index, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext()
  const { characters } = splitText(text)
  const isActive = activeSlide === index

  return (
    <span
      ref={ref}
      className={cn(
        "relative inline-block origin-bottom overflow-hidden",
        className
      )}
      onMouseEnter={() => changeSlide(index)}
      {...props}
    >
      {characters.map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="relative inline-block overflow-hidden"
        >
          <MotionConfig
            transition={{
              delay: i * 0.025,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.span
              className="inline-block opacity-20"
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-110%" } : { y: "0%" }}
            >
              {char}
              {char === " " && i < characters.length - 1 && <>&nbsp;</>}
            </motion.span>

            <motion.span
              className="absolute left-0 top-0 inline-block opacity-100"
              initial={{ y: "110%" }}
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  )
})
TextStaggerHover.displayName = "TextStaggerHover"

/* -------------------------------------------------------------------------- */
/* Image Slider                                                               */
/* -------------------------------------------------------------------------- */

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
}

export const HoverSliderImageWrap = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
        className
      )}
      {...props}
    />
  )
})
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

/* -------------------------------------------------------------------------- */
/* Image (with href support)                                                  */
/* -------------------------------------------------------------------------- */

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & HoverSliderImageProps
>(
  (
    { index, src, alt = "", href, target = "_self", className, ...props },
    ref
  ) => {
    const { activeSlide } = useHoverSliderContext()

    const resolvedSrc = typeof src === "string" ? src : src.src

    const image = (
      <motion.img
        ref={ref}
        src={resolvedSrc}
        alt={alt}
        className={cn("inline-block align-middle", className)}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
        variants={clipPathVariants}
        animate={activeSlide === index ? "visible" : "hidden"}
        {...props}
      />
    )

    if (!href) return image

    return (
      <a href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
        {image}
      </a>
    )
  }
)
HoverSliderImage.displayName = "HoverSliderImage"
