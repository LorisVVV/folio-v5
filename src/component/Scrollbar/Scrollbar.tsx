import { useGSAP } from "@gsap/react"
import style from "./Scrollbar.module.css"
import { RefObject, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Scrollbar({scrollref, triggerRef}:{timeline?:gsap.core.Timeline, scrollref:RefObject<never>, triggerRef:RefObject<never>}) {

    const ref = useRef(null!)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger : {
                scroller : scrollref.current,
                trigger : triggerRef.current,
                start: 'top top', 
                end : 'bottom top',
                markers : false,
                scrub : 1,
        }})
        .to(ref.current, { 
            height : 404,
            })
    })

    return (
        <div className={style.Scrollbar}>     
            <span ref={ref} className={style.scroll}></span>
            <span className={style.track}></span>       
        </div>
    )
}