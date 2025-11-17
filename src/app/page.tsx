"use client"

import Content from "@/component/Content/Content";
import styles from "./page.module.css";
import Coordinates from "@/component/Coordinates/Coordinates";
import Corner from "@/component/Corner/Corner";
import Grid from "@/component/Grid/Grid";
import { useRef, useState } from "react";

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
      </main>
    </div>
  );
}
