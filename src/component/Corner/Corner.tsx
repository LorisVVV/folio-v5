"use client"

import { useEffect, useState, useRef, Ref, RefObject } from "react"
import style from "./corner.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function Corner ({isFixed} : {isFixed?:RefObject<boolean>}) {
    const [position, setPosition] = useState<{x:number, y:number}>({x : 0, y : 0})

    const animationRef = useRef<GSAPTween>(null!);
    const corners = useRef<HTMLDivElement>(null!)
    const isOver = useRef(false)

    const TARGET_CLASS = "targetCursor"
  

    // Création de l'animation
    useGSAP(() =>{
        if (corners.current && !animationRef.current && isFixed && !isFixed.current) {
            animationRef.current = gsap.to(corners.current, {id : 'rotation',rotate : "+=360", duration : 3 , ease :"none", force3D: false}).repeat(-1);
        }
    }, [])

    // Update on setState
    useEffect(() => {
        console.log("top")    



        if ( isFixed && isFixed.current) {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            gsap.to(corners.current, {width : "100vw", height : "100vh", rotate : 0, transform: 'none', duration : 0})
        }

    }, [isFixed?.current.valueOf()])



    // Initialisation of event listener
    useEffect(() => {


        const mouseMoveHandler = (e:MouseEvent) => {
            if ( isFixed && !isFixed.current) {
                gsap.to(corners.current, {x :e.clientX, y:e.clientY, duration:0.1})
            }
        }

        window.addEventListener('mousemove', mouseMoveHandler)
        
        // On enter
        const mouseEnterHandler = (e:MouseEvent) => {
            
            const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
            
            if (elementUnderMouse?.classList.contains(TARGET_CLASS) && !isOver.current  && isFixed && !isFixed.current) {
                console.log('x : ' + e.clientX +', y : '+e.clientY)
                console.log('enter fixed : ' +isFixed + ' over :' + isOver.current)

                const eltPosition = elementUnderMouse.getBoundingClientRect()

                console.log(eltPosition)
                console.log('elt : ' + elementUnderMouse.id)
                isOver.current = true;

                animationRef.current.pause()
                const ratio = 360*animationRef.current.ratio
                let rotation = 0;

                if (ratio < 45) {
                    rotation = 0;
                } else if (ratio < 90) {
                    rotation = 90;
                } else if (ratio < 135) {
                    rotation = 90;
                } else if (ratio < 180) {
                    rotation = 180;
                } else if (ratio < 225) {
                    rotation = 180;
                } else if (ratio < 270) {
                    rotation = 270;
                } else if (ratio < 315) {
                    rotation = 270;
                } else {
                    rotation = 360;
                }

                console.log('ratio ' + ratio + ', rotation '+ rotation);
                

                gsap.to(corners.current, {  width: eltPosition.width, 
                                            height : eltPosition.height, 
                                            x : eltPosition.x,
                                            y : eltPosition.y, 
                                            transform : "rotate("+(rotation - ratio)+")",
                                            // rotate : rotation, 
                                            duration : 0.5})


                window.removeEventListener('mousemove', mouseMoveHandler)
            }
        }


        // On leave
        const mouseLeaveHandler = (e:MouseEvent) => {
            const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);

            if (!elementUnderMouse?.classList.contains(TARGET_CLASS) && isOver.current && isFixed && !isFixed.current) {
                console.log("leaving")
                isOver.current = false;
                animationRef.current.play()
                gsap.to(corners.current, {  x : e.clientX, 
                                            y : e.clientY, 
                                            transform : "translate(-50%, -50%)",
                                            duration : 0.1})
                gsap.to(corners.current, {  width: "3em", 
                                            height : "3em",
                                            duration : 0.5})
                window.addEventListener('mousemove', mouseMoveHandler)     
            }
        }

        window.addEventListener('mousemove', mouseEnterHandler)
        window.addEventListener('mousemove', mouseLeaveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
            window.removeEventListener('mousemove', mouseEnterHandler)
            window.removeEventListener('mousemove', mouseLeaveHandler)
        }
    }, [])


    return (
        <div ref={corners} className={style.corners +( isFixed?.current ? " "+style.fixed : "")} style={isFixed?.current ? {} : {left : position.x, top : position.y}}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>
        </div>
    )
}