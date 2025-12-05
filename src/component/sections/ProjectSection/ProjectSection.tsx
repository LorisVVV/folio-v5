import { RefObject, useRef } from "react"
import style from "./ProjectSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectName from "./ProjectName/ProjectName";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import ProjectOverview from "./ProjectOverview/ProjectOverview";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

export default function ProjectSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)
    const circleRef = useRef<SVGSVGElement>(null!)
    const circlePathRef = useRef<SVGCircleElement>(null!)
    const q = gsap.utils.selector(sectionRef)

    const projects:{ref:RefObject<HTMLDivElement>,
                    titre:string, 
                    context:string, 
                    dates:string, 
                    grpSize:number, 
                    skills:string,
                    text:string     }[] = [

                        {
                            ref: useRef<HTMLDivElement>(null!),
                            titre: "Swell Creator",
                            context: "Personal",
                            dates: "Sept. 2025 - not finished",
                            grpSize: 1,
                            skills: "Next JS, ThreeJS",
                            text:"This project is an implementation of the hydrodynamics equation, the Gernster waves, to try to simulate an ocean. It's using NextJS with the library Three JS to generate a plane where each vertex is moved according to the equations that are computed in shaders. Those shaders are homemade using webgl and implement not only the movement of water but also the color, refraction and reflection of it. This project is not finished as I'm trying to implement white foam on top of the waves."
                        },

                        {
                            ref: useRef<HTMLDivElement>(null!),
                            titre: "Portfolio V5",
                            context: "Academic",
                            dates: "Nov. 2025 - Nov. 2025",
                            grpSize: 1,
                            skills: "Next JS, GSAP",
                            text:"This portfolio have been asked as a final project of my web devlopment class. Each of the portfolio that I've done have been a way for me to learn new technologies, for this one I've learn the library GSAP. The portfolio is one page where each section is revealed by scrolling down."
                        },

                        {
                            ref: useRef<HTMLDivElement>(null!),
                            titre: "Pove",
                            context: "Academic",
                            dates: "Oct. 2024 - Jan. 2025",
                            grpSize: 6,
                            skills: "React, Express",
                            text:"This Project was intialised by the IUT with a subject : the creation of an application to valuing the cultural heritage in France. To do that we've made brainstorming session to search for an idea. From there we thought of a dating app that can make people encounteer by matching them by their favourite cultural monument and propose them to meet in place liked by both of them. \n We've developped this application with React, a librairy capable of doing modular development. We also have to do a back-end with Express which is a JavaScrip environment for server. A database was required to stock data for matching people, we chose to do it with PostgreSQL"
                        },

                        {
                            ref: useRef<HTMLDivElement>(null!),
                            titre: "Vs Code Extension",
                            context: "Personal",
                            dates: "Feb. 2025 - Apr. 2025",
                            grpSize: 1,
                            skills: "JavaScript, Regex",
                            text:"After I've learn that Vs Code extension can be made with JavaScript I thought it can be a good way to improve my JavaScript skills. I've started to working on a extension that was capable of showing how many elements wille be impact by a ligne of CSS in a project. I've managed by using Regex to select the css query under the mouse. The difficulty was now to search in each files of the workspace to see if the css will impact. \n To do that I made a recursive function that was able to verify if the file have an html extension. Thanks to JSDOM I've been able to do queries on the file with the query selected. I've published the extension on the Vs Code Marketplace but unfortunately I've failed to make it work with React Component"
                        }

                    ];



    useGSAP(() => {

        const timelineProject = gsap.timeline(
                    {scrollTrigger : {
                            trigger : triggerRef.current,
                            scroller : scrollref.current,
                            start: 'top top', // when the top of the trigger hits the top of the viewport
                            end : 'bottom top',
                            markers : false,
                            scrub : 1,
                        }}
                    )

                .fromTo("*", {pointerEvents: "none"}, {pointerEvents : "all"})
                .to("."+style.title, 
                    {opacity: "1", duration : 1}
                )
                // Circle
                .fromTo(circlePathRef.current,
                    {drawSVG: "60% 75%"},
                    {drawSVG: "80% 95%", duration:2}
                )

                // Project Name arrives
                q(".ProjectName").forEach(element => {
                    timelineProject.to(element, {
                        opacity: "1", duration : 1
                    })
                });

                // each project
                q(".ProjectName").forEach((element, index) => {
                    timelineProject.to(element, {
                        scale: "1.2", 
                        translateX : "+= 15px",
                        duration : 1
                    })
                    
                    if (projects[index]) {

                        const blurElt = projects[index].ref.current.querySelectorAll('.blur')
                        // const opacityElt = projects[index].ref.current.querySelectorAll('.blur > *')


                        timelineProject.fromTo(blurElt,
                            {backdropFilter: "blur(0px)", opacity : 0},
                            {backdropFilter: 'blur(5px)', opacity : 1, duration:1}

                        )
                        .to({}, {
                            duration : 2
                        })

                        .to(projects[index].ref.current, 
                            {opacity : 0, duration:1})
                    }

                    timelineProject.to(element, {
                        scale: "1", 
                        translateX : "-= 15px",
                        duration : 1
                    })
                });

                q(".ProjectName").forEach(element => {
                    timelineProject.to(element, {
                        opacity: "0", duration : 1
                    })
                });

                timelineProject.to(circlePathRef.current, 
                    {drawSVG: "100% 115%", duration : 2}
                )
                .to("."+style.title, 
                    {opacity: "0", duration: 1}
                )
                .to({}, {duration : 1})
                .set("*", {pointerEvents : "none"})
        
        ScrollTrigger.refresh();

    }, {scope : sectionRef})

    return (
        <section ref={sectionRef} className={style.projectsSection}>
            <h1 className={style.title}>Projects</h1>

            <svg ref={circleRef} className={style.circle} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle ref={circlePathRef} cx="85" cy="85" r="83" stroke="#f8f9fa" strokeWidth="2"/>
            </svg>

            

            {/* <ProjectName name={"Swell Creator"} percent={0.90} />
            <ProjectName name={"Portfolio V5"} percent={0.75} circle={circleRef}/>
            <ProjectName name={"Pove"} percent={0.60} circle={circleRef}/>
            <ProjectName name={"Vs Code Extension"} percent={0.45} circle={circleRef}/> */}

            {   
                projects.map((data, index) => {
                
                return  <div key={index}>
                            <ProjectOverview data={data}/>
                            <ProjectName name={data.titre} percent={0.90 - 0.15*index} circle={circleRef}/>
                        </div>
            
            })
            }
            

        </section>
    )
}