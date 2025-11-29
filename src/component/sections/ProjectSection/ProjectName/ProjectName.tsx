import { RefObject, useEffect, useState } from "react"
import style from "./ProjectName.module.css"

export default function ProjectName({name, percent, circle}:{name:String, percent:number, circle: RefObject<SVGSVGElement>}) {
    const [coord, setCoord] = useState({
        x :'0vh',
        y: '0vh'
    })


    useEffect(() => {

        const calcValues = () => {
            if (circle.current) {
                const radius = Math.min(circle.current.height.baseVal.value,circle.current.width.baseVal.value)/2
                
                const X = percent * radius;
                const Y = Math.sqrt(Math.pow(radius, 2) - Math.pow(radius * percent, 2))                
                
                setCoord({
                    x : X+'px',
                    y : Y+'px'
                })
            }
        }
        
        calcValues()

        window.addEventListener('resize', calcValues)
        return () => {
            window.removeEventListener('resize', calcValues)
    
        }
    }, [])

    return (
        <h2 className={style.ProjectName+" ProjectName"}  style={{bottom : coord.x, left : coord.y}} >
           {name} 
        </h2>
    )
}