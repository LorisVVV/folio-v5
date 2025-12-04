import { RefObject, useRef } from "react"
import style from "./HeroSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

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
        .to("."+style.title+", ."+style.scrollIcon, {
            opacity : "0",
            duration : 1
        })
        .to({}, {duration : 1})
        .set("*", {pointerEvents: "none"})

        ScrollTrigger.refresh();

    }, {scope:sectionRef})

    return (
        <section ref={sectionRef} className={style.heroSection}>

            <div className={style.title}>
                <h1 className={style.name}>Loris <br /> Vullion</h1>

                <h2 className={style.subtitle}>Portfolio V5</h2>                
            </div>

            <div className={style.scrollIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                        <path d="M12 6V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                        <path d="M15 11L12 14L9 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                    </g>

                </svg>

                <p>Scroll Down</p>
            </div>
            

        </section>
    )
}