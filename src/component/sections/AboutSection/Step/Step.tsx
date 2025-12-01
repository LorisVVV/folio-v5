import style from "./Step.module.css"

export default function Step({data}:{data:{
                                        title:string,
                                        text:string 
                                            }}) {
    return (
        <div className={style.Step}>
            <h2>{data.title}</h2>
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