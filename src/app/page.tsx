"use client"

import styles from "./page.module.css";
import Coordinates from "@/component/Coordinates/Coordinates";
import Corner from "@/component/Corner/Corner";
import Grid from "@/component/Grid/Grid";
import { useState } from "react";

export default function Home() {

  const [isFixed, setIsFixed ] = useState<boolean>(false)
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* <button id="testButton" className={styles.button +" targetCursor"} onClick={() => setIsFixed(!isFixed)}>
          test
        </button> */}

        <Coordinates/>
        
        <Corner isFixed={true} />

          <Grid/>
      </main>
    </div>
  );
}
