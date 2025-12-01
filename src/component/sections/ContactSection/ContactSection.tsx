import { RefObject, useRef } from "react"
import style from "./ContactSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "./Link/Link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import linkedin from "@/assets/icons/linkedin.svg"
import github from "@/assets/icons/github.svg"
import mail from "@/assets/icons/mail.svg"
import phone from "@/assets/icons/phone.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)

    const links:{ref:RefObject<HTMLDivElement>,
                 content:string,
                 type:string,
                 iconLink:StaticImport,
                 link?:string }[] = [
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        content: "Linkedin",
                        type:"link",
                        iconLink: linkedin,
                        link:"www.linkedin.com/in/loris-vullion-08b8052b5",
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        content: "GitHub",
                        type:"link",
                        iconLink: github,
                        link:"https://github.com/LorisVVV",
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        content: "lorisvullion@gmail.com",
                        type:"copy",
                        iconLink: mail,
                    },
                    {
                        ref: useRef<HTMLDivElement>(null!),
                        content: "+3363819262",
                        type:"link",
                        iconLink:phone,
                    }
                 ];

    useGSAP(() => {

        const timelineContact = gsap.timeline(
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

                // links.forEach(element => {
                //     console.log(element);
                //     timelineContact.to({}, {duration:1})
                // });


                timelineContact.to({}, {duration:6})

        
        ScrollTrigger.refresh();
    }, {scope : sectionRef})

    return (
        <section ref={sectionRef} className={style.contacSection}>
            <h1 className={style.title}>Contact</h1>

            <div className={style.linkContainer}>
                {
                    links.map((data, index) => {
                        return <Link data={data} key={index} />
                    })
                }
            </div>
        </section>
    )
}