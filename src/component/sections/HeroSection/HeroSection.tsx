import { RefObject, useRef } from "react"
import style from "./HeroSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {
    const sectionRef = useRef<HTMLElement>(null!)

    useGSAP(() => {
        const heroTimeline = gsap.timeline(
            {scrollTrigger : {
                        trigger : triggerRef.current,
                        scroller : scrollref.current,
                        start: 'top top', // when the top of the trigger hits the top of the viewport
                        end : 'bottom top',
                        markers : false,
                        scrub : 1,
                }}
            )
        
        .to({}, {duration : 3})
        .to("."+style.title, {
            opacity : "0",
            duration : 1
        })
        .to({}, {duration : 1})
        .set("."+style.title, {display : "none"})

        ScrollTrigger.refresh();

    })

    return (
        <section ref={sectionRef} className={style.heroSection}>
            <h1 className={style.title}>Loris Vullion</h1>
        </section>
    )
}