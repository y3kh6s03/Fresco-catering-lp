import { useScroll, useSpring, useTransform } from "framer-motion"

export const useScrollAnimation = (el, y) => {
    const { scrollYProgress } = useScroll({
        target: el,
        offset: ["start", "end"]
    })

    return (
        useSpring(useTransform(scrollYProgress, [0, 1], [0, y]), {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
        })
    )
}