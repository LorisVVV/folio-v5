import { RefObject } from "react"
import style from "./ProjectOverview.module.css"

export default function ProjectOverview({data}:{data:{  ref:RefObject<HTMLDivElement>,
                                                        titre:string, 
                                                        context:string, 
                                                        dates:string, 
                                                        grpSize:number, 
                                                        skills:string,
                                                        text:string     }}) {
    return (
        <div ref={data.ref} className={style.ProjectOverview}>
            <h2>{data.titre}</h2>

            <div className={style.table}>
                <div>
                    <h3>Context : </h3>
                    <p>{data.context}</p>
                </div>

                <div>
                    <h3>Dates : </h3>
                    <p>{data.dates}</p>
                </div>

                <div>
                    <h3>Group Size : </h3>
                    <p>{data.grpSize}</p>
                </div>

                <div>
                    <h3>Skills : </h3>
                    <p>{data.skills}</p>
                </div>
            </div>

            <div className={style.text}>
                <p>{data.text}</p>
            </div>

        </div>
    )
}