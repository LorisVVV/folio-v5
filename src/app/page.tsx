"use client"

import Content from "@/component/Content/Content";
import styles from "./page.module.css";
import Coordinates from "@/component/Coordinates/Coordinates";
import Corner from "@/component/Corner/Corner";
import Grid from "@/component/Grid/Grid";
import { useRef, useState } from "react";
import Dither from "@/component/Dither/Dither";

export default function Home() {

  const isFixed = useRef<boolean>(true)
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* <button id="testButton" className={styles.button +" targetCursor"} onClick={() => isFixed.current = !isFixed.current}>
          test
        </button> */}

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
