import { useEffect, useRef } from "react"
import style from "./Notif.module.css"
import gsap from 'gsap';

export default function Notif({nbFish, resetNotif, coord} : {nbFish:number, resetNotif:Function, coord:{x:number,y:number}}) {
    const notifRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {


        if (nbFish > 0) {

            console.log(coord);
            

            const newNotif = document.createElement('p')
            notifRef.current.appendChild(newNotif)
            newNotif.textContent = "+"+nbFish

                
            gsap.set(newNotif, {
                left: coord.x+20,
                top: coord.y
            })
            gsap.to(newNotif, {
                top : coord.y-20,
                opacity: 0,
                duration : 0.7
            }).then(() => {
                newNotif.remove()
            })


            resetNotif(0)
        }
        
    }, [nbFish])

    return (
        <div ref={notifRef} className={style.notif}>
        </div>
    )
}