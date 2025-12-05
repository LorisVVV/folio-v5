import { RefObject, useRef } from "react"
import style from "./ContactSection.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SocialLink from "./SocialLink/SocialLink";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import Link from "next/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({timeline, scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const sectionRef = useRef<HTMLElement>(null!)
    const fishRef = useRef<HTMLAnchorElement>(null!)
    gsap.utils.selector(sectionRef)

    const links:{
        ref: RefObject<HTMLLIElement>,
        content: string,
        type: string,
        iconLink: StaticImport | string,
        link?: string
    }[] = [
        {
            ref: useRef<HTMLLIElement>(null!),
            content: "Linkedin",
            type: "link",
            iconLink: "icons/linkedin.svg",
            link: "https://www.linkedin.com/in/loris-vullion-08b8052b5",
        },
        {
            ref: useRef<HTMLLIElement>(null!),
            content: "GitHub",
            type: "link",
            iconLink: "icons/github.svg",
            link: "https://github.com/LorisVVV",
        },
        {
            ref: useRef<HTMLLIElement>(null!),
            content: "lorisvullion@gmail.com",
            type: "copy",
            iconLink: "icons/mail.svg",
        },
        {
            ref: useRef<HTMLLIElement>(null!),
            content: "+3363819262",
            type: "copy",
            iconLink: "icons/phone.svg",
        }
    ];

    useGSAP(() => {

        const timelineContact = gsap.timeline({
            scrollTrigger : {
                trigger : triggerRef.current,
                scroller : scrollref.current,
                start: 'top top',
                end : 'bottom top',
                markers : false,
                scrub : 1,
            }
        })

        timelineContact
            .fromTo("*", {pointerEvents: "none"}, {pointerEvents : "all"})
            .to("." + style.title, {opacity: 1, duration: 1})

        links.forEach(element => {
            timelineContact.fromTo(element.ref.current, 
                {opacity: 0},
                {opacity: 1,duration: 1}
            )
        });


        timelineContact
            .fromTo(fishRef.current, 
                {opacity: 0},
                {opacity: 1, duration: 1})
            .to({}, {duration: 6})
            .set("*", {pointerEvents : "none"})

        ScrollTrigger.refresh();

    }, {scope : sectionRef})

    const enterHandler = () => {
        gsap.to(fishRef.current, {scale: 1.2, duration: 0.5})
    }

    const leaveHandler = () => {
        gsap.to(fishRef.current, {scale: 1, duration: 0.5})
    }

    return (
        <section ref={sectionRef} className={style.contacSection}>
            <h1 className={style.title}>Contact</h1>

            <ul className={style.linkContainer}>
                {
                    links.map((data, index) => <SocialLink data={data} key={index}/>)
                }
            </ul>

            <Link ref={fishRef} href={"/fish"} className={style.fish} onMouseEnter={() => enterHandler()} onMouseLeave={() => leaveHandler()}>
                <Image src={"icons/fishOutline.svg"} alt="Access fish game" width={30} height={30} />
            </Link>
            
            

        </section>
    )
}
