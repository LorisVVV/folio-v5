import { RefObject, useRef } from "react"
import style from "./AboutSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)

    useGSAP(() => {

        const timelineAbout = gsap.timeline(
                    {scrollTrigger : {
                            trigger : triggerRef.current,
                            scroller : scrollref.current,
                            start: 'top top', // when the top of the trigger hits the top of the viewport
                            end : 'bottom top',
                            markers : false,
                            scrub : 1,
                        }}
                    )
                .fromTo("."+style.title, {display:"none"}, {display : "flex"})
                .to("."+style.title, 
                    {opacity: "1", duration : 1}
                )
                .to({}, {duration : 2})
                .to("."+style.title, 
                    {opacity: "0", duration: 1}
                )
                .to({}, {duration : 1})
                .set("."+style.title, {display : "none"})
        
        ScrollTrigger.refresh();
    }, {scope : sectionRef})

    return (
        <section ref={sectionRef} className={style.aboutSection}>
            <h1 className={style.title}>About</h1>
        </section>
    )
}