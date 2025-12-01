import { RefObject, useRef } from "react"
import style from "./AboutSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Step from "./Step/Step";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)
    gsap.utils.selector(sectionRef)

    const steps:{ ref:RefObject<HTMLDivElement>,
                  title:string,
                    dates:string,
                  text:string }[] = [
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        title: "Highschool",
                        dates: "2020 - 2023",
                        text: "Baccalauréat with honors, specialised in Computer Science, Physics and Chemistry" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        title: "Bachelor in Computer Science",
                        dates: "2023 - 2026",
                        text: "Currently obtaining a degree in Computer Science at IUT 2 of Grenoble" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        title: "Internship at Vetagro Sup",
                        dates: "2025 - 2025",
                        text: "12 weeks of intership where I've built a complete 'shopping website'" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        title: "International Exchange year",
                        dates: "2025 - 2026",
                        text: "Exchange at Lycoming College (USA) for a year" 
                    }
                  ]

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
                .fromTo("*", {pointerEvents:"none"}, {pointerEvents : "all"})
                .to("."+style.title, 
                    {opacity: "1", duration : 1}
                )

                steps.forEach((elt)=>{
                    timelineAbout.fromTo(
                        elt.ref.current,
                        {opacity:0, pointerEvents:"none"},
                        {opacity:1, pointerEvents:"all", duration: 1}
                    )
                    
                    .to({}, {duration : 1})

                    .to(elt.ref.current, 
                        {opacity: 0, pointerEvents:"none", duration:1}
                    )
                })



                timelineAbout.to({}, {duration : 2})
                .to("."+style.title, 
                    {opacity: "0", duration: 1}
                )
                .set("*", {pointerEvents : "none"})
        
        ScrollTrigger.refresh();
    }, {scope : sectionRef})

    return (
        <section ref={sectionRef} className={style.aboutSection}>
            <h1 className={style.title}>About</h1>

            {
                steps.map((data, index) => <Step data={data} key={index}/>)
            }
        </section>
    )
}