"use client"

import Content from "@/component/Content/Content";
import styles from "./page.module.css";
import Coordinates from "@/component/Coordinates/Coordinates";
import Corner from "@/component/Corner/Corner";
import Grid from "@/component/Grid/Grid";
import { useEffect, useRef, useState } from "react";
import Dither from "@/component/Dither/Dither";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);

export default function Home() {

  const isFixed = useRef<boolean>(true)

  useGSAP(() => {
    gsap.to("."+styles.page, {opacity: 1, duration: 1})
  })

  
  return (
    <div className={styles.page} >
      <main className={styles.main}>

        <Content />
        <Coordinates/>       
        <Corner isFixed={isFixed} />
        <Grid/>
        

        <Dither
          waveColor={[0.5, 0.1, 1.0]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.1}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </main>
    </div>
  );
}
