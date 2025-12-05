import Image from "next/image";
import style from "./SocialLink.module.css"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { RefObject } from "react";



export default function SocialLink({data}:{data:{
                                        content:string,
                                        type:string,
                                        iconLink:StaticImport|string,
                                        link?:string,
                                        ref:RefObject<HTMLLIElement>           
                                            }}) {
    
    const copy = () => {
        navigator.clipboard.writeText(data.content);
    }


    return (
        <li ref={data.ref} className={style.Link} >
            <Image src={data.iconLink} className={style.icon} alt={"Icon for "+data.content} width={30} height={30}/>
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
        </li>
    );
}