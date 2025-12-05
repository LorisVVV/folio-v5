import { useRef } from "react";
import style from "./Content.module.css";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import AboutSection from "../sections/AboutSection/AboutSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import Scrollbar from "../Scrollbar/Scrollbar";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Content() {

    const markers = true;

    const scrollRef = useRef(null!)

    const heroRef = useRef(null!)
    const projectRef = useRef(null!)
    const aboutRef = useRef(null!)
    const contactRef = useRef(null!)

    const totalScrollRef = useRef(null!)

    return (
        <div className={style.Content}>
            <div ref={scrollRef} className={style.scroll}>
                <div className={style.totalScroll} ref={totalScrollRef}>
                    <section ref={heroRef} className={style.section}>

                    </section>

                    <section ref={projectRef} className={style.section}>
                    </section>

                    <section ref={aboutRef} className={style.section}>
                    </section>

                    <section ref={contactRef} className={style.section}> 
                    </section>

                </div>
            </div>


            <Scrollbar  scrollref={scrollRef} triggerRef={totalScrollRef}/>

            <HeroSection scrollref={scrollRef} triggerRef={heroRef}/>
            <ProjectSection scrollref={scrollRef} triggerRef={projectRef}/>
            <AboutSection scrollref={scrollRef} triggerRef={aboutRef}/>
            <ContactSection scrollref={scrollRef} triggerRef={contactRef}/>

        </div>
    );
}