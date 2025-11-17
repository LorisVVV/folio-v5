"use client"

import { useState, useEffect } from "react"
import style from "./coordinates.module.css"

export default function Coordinates() {
    // Initialisation
    const [posX, setPosX] = useState<number>(0.0)
    const [posY, setPosY] = useState<number>(0.0)

    // Event listener
    useEffect(() => {
        const mouseMoveHandler = (e:MouseEvent) => {
            setPosX(((e.clientX-(window.outerWidth/2)) / 10))
            setPosY(-((e.clientY-(window.outerHeight/2)) / 10))
        }

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    })

    return (
        <div className={style.coordinates}>
            <div>            
                <p>x :</p>
                <p>{posX.toFixed(2)}</p>
            </div>
            
            <div>
                <p>y :</p>
                <p>{posY.toFixed(2)}</p>
            </div>


        </div>
    )
}