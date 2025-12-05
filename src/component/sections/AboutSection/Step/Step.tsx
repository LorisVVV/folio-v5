import { RefObject } from "react"
import style from "./Step.module.css"

export default function Step({data}:{data:{
                                        ref:RefObject<HTMLDivElement>,
                                        percent: number,
                                        title:string,
                                        dates:string,
                                        text:string 
                                            }}) {
    return (
        <div ref={data.ref} className={style.Step} style={{top : (100*data.percent)+"vh", right : ((50*data.percent)+25+"vw")}}>
            <h2>{data.title}</h2>
            <div className={style.dates}>
                <h4>Dates :</h4>
                <h4>{data.dates}</h4>
            </div>
            <p>{data.text}</p>

            <svg className={style.corner} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>

            <svg className={style.corner} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.5 10.5V1C0.5 0.723858 0.723858 0.5 1 0.5H10.5" stroke="white" strokeLinecap="round"/>
            </svg>
        </div>
    )
}