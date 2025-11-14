"use client"

import { JSX, JSXElementConstructor, useEffect, useRef, useState } from "react";
import style from "./Grid.module.css"

export default function Grid() {
    const gridRef = useRef<HTMLDivElement>(null!)

    const taille = 165;

    const cells:JSX.Element[] = [];


    useEffect(() => {

        function loadGrid() {
            
            gridRef.current.childNodes.forEach(element => {
                gridRef.current.removeChild(element)
            });

            const nbRow = Math.floor(window.innerHeight/taille);
            const nbColumn = Math.floor(window.innerWidth/taille)

            const nbCells = nbRow * nbColumn

            for (let i = 0; i < nbCells; i++) {
                gridRef.current.appendChild(document.createElement('div'))
            }

        }

        loadGrid()


        const reload = () => {
            loadGrid()
        }

        window.addEventListener("resize", reload);

        return () => {
            window.removeEventListener("resize", reload)
        }
    }, [])

    


    return (
       
        <div ref={gridRef} className={style.Grid} style={{'--taille-cell' : taille+"px"} as React.CSSProperties}>
            {/* {cells} */}
        </div>
    );
}