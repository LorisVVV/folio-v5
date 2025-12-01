import Image from "next/image";
import style from "./Link.module.css"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { RefObject } from "react";

export default function Link({data}:{data:{
                                        content:string,
                                        type:string,
                                        iconLink:StaticImport,
                                        link?:string,
                                        ref:RefObject<HTMLDivElement>           
                                            }}) {
    
    const copy = () => {
        navigator.clipboard.writeText(data.content);
    }


    return (
        <div ref={data.ref} className={style.Link} >
            <Image src={data.iconLink} className={style.icon} alt={"Icon for "+data.content} width={0} height={0}/>
            {
                data.type == "link" ?
                <a className={style.container} href={data.link}>
                    <h4>{data.content}</h4>
                </a>
                :
                <div className={style.container} onClick={() => copy()}>
                    <h4>{data.content}</h4>
                </div>
            }
        </div>
    );
}