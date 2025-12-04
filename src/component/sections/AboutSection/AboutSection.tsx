import { RefObject, useRef } from "react"
import style from "./AboutSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Step from "./Step/Step";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

export default function AboutSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)
    const lineRef = useRef<SVGLineElement>(null!)
    gsap.utils.selector(sectionRef)

    const steps:{ ref:RefObject<HTMLDivElement>,
                  percent: number,
                  title:string,
                  dates:string,
                  text:string }[] = [
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        percent: 0.20,
                        title: "Highschool",
                        dates: "2020 - 2023",
                        text: "Baccalauréat with honors, specialised in Computer Science, Physics and Chemistry" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        percent: 0.40,
                        title: "Bachelor in Computer Science",
                        dates: "2023 - 2026",
                        text: "Currently obtaining a degree in Computer Science at IUT 2 of Grenoble" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        percent: 0.60,
                        title: "Internship at Vetagro Sup",
                        dates: "2025 - 2025",
                        text: "12 weeks of intership where I've built a complete 'shopping website'" 
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        percent: 0.80,
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

                steps.forEach((elt, index)=>{
                    
                    if (index < 1) {
                        timelineAbout.fromTo(lineRef.current,
                            {drawSVG: "0% 0%"},
                            {drawSVG: (elt.percent*100-5)+"% "+( elt.percent*100+5)+"%", duration : 1}
                        )
                    } else {
                        timelineAbout.to(lineRef.current, {drawSVG: (elt.percent*100-5)+"% "+( elt.percent*100+5)+"%"})
                    }

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

                timelineAbout.to(lineRef.current, {drawSVG : "100% 100%"})



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

            

            <svg className={style.line} width="100vw" height="100vh" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line ref={lineRef} x1="75vw" y1="0" x2="25vw" y2="100vh" stroke="white"/>
            </svg>



            {
                steps.map((data, index) => <Step data={data} key={index}/>)
            }
        </section>
    )
}