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
            <h2 className="blur">{data.titre}</h2>

            <div className={style.table+" blur"}>
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

            <div className={style.text+" blur"}>
                <p>{data.text}</p>
            </div>

            <svg className={style.corner+" blur"} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

            <svg className={style.corner+" blur"} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

        </div>
    )
}