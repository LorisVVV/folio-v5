"use client"
import React, { useEffect, useRef, useState } from "react";
import style from "./page.module.css";
import Notif from "@/component/Notif/Notif";
// import fish from "@/public/image/realfish.png"
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import Link from "next/link";

// import fishingRodIcon from "@/public/image/fishingRodIcon.svg";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [nbFishClicked, setNbFishClicked] = useState<number>(0)
  const [coord, setCoord] = useState<{x:number,y:number}>({x:0,y:0})
  const baitPourcent = useRef<number>(5)

  const [click, setClick] = useState<number>(0)

  const boatIntervalId = useRef<number>(-1)

  const mm = gsap.matchMedia()

  // Upgrades

  const [baitUpgrade, setBaitUpgrade] = useState(0)
  const [boatUpgrade, setBoatUpgrade] = useState(0)
  const [fishingRodUpgrade, setFishingRodUpgrade] = useState(0)

  const fishByClick = useRef<number>(1)
  const boatIntervalTime = useRef<number>(0)
  const specialFish = useRef<number>(1)

  const gameData = {
    fishingRodUpgrades : [
      {
        fishNeeded : 0,
        fishByClick : 1
      },
      {
        fishNeeded : 200,
        fishByClick : 2
      },
      {
        fishNeeded : 600,
        fishByClick : 5
      },
      {
        fishNeeded : 1200,
        fishByClick : 10
      }
    ],
    boatUpgrades : [
      {
        fishNeeded : 0,
        boatInterval : 0
      },
      {
        fishNeeded : 500,
        boatInterval : 1000
      },
      {
        fishNeeded : 1400,
        boatInterval : 500
      },
      {
        fishNeeded : 2500,
        boatInterval : 250
      },
    ],
    baitUpgrades : [
      {
        fishNeeded : 0,
        specialFish : 1
      },
      {
        fishNeeded : 50,
        specialFish : 5
      },
      {
        fishNeeded : 300,
        specialFish : 10
      },
      {
        fishNeeded : 800,
        specialFish : 25
      },
      {
        fishNeeded : 2000,
        specialFish : 50
      },
    ]
  }

  // Handler for when we click on the fish
  const clickHandler = () => {

    let count;
    const randomNumber = Math.floor(Math.random() * 100)

    if (randomNumber <= baitPourcent.current && specialFish.current > 1) {
      console.log("special fish !!")
      count = specialFish.current;
    } else {
      count = fishByClick.current;
    }
     
        
    setClick(prev => {
        return prev + count;
    })

    setNbFishClicked(count)   

    gsap.timeline()
    .to(fishRef.current, {scale: 1.2, duration:0.25})
    .to(fishRef.current, {scale: 1, duration:0.25})

  }

  // Function of loading data
  const loadData = (fromUpgrade?:boolean) => {

    console.log("loading data");
    

    // Clean Interval
    if (boatIntervalId.current > 0) {
      clearInterval(boatIntervalId.current);
    }

    if (!fromUpgrade) {
      // Update nb of click only if it's on a reload
      const oldClick = window.localStorage.getItem('click');
      if (oldClick) {
        setClick(parseInt(oldClick))
      } else {
        window.localStorage.setItem('click', "0")
        setClick(0)
      }
    }

    // Load Upgrades
    const oldUpgradeFishingRod = window.localStorage.getItem('upgradeFishingRod')
    if (oldUpgradeFishingRod) {
      fishByClick.current = gameData.fishingRodUpgrades[parseInt(oldUpgradeFishingRod)].fishByClick
      
      setFishingRodUpgrade(parseInt(oldUpgradeFishingRod))

    } else {
      window.localStorage.setItem('upgradeFishingRod', "0")
    }
    
    const oldUpgradeBait = window.localStorage.getItem('upgradeBait')
    if (oldUpgradeBait) {
      specialFish.current = gameData.baitUpgrades[parseInt(oldUpgradeBait)].specialFish      
      
      setBaitUpgrade(parseInt(oldUpgradeBait))


    } else {
      window.localStorage.setItem('upgradeBait', "0")
    }

    const oldUpgradeBoat = window.localStorage.getItem('upgradeBoat')
    if (oldUpgradeBoat) {
      boatIntervalTime.current = gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval
      
      setBoatUpgrade(parseInt(oldUpgradeBoat))

    } else {
      window.localStorage.setItem('upgradeBoat', "0")
    }

    // Set up interval
    if (oldUpgradeBoat && gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval > 0) {
      const id = setInterval(() => clickHandler(), gameData.boatUpgrades[parseInt(oldUpgradeBoat)].boatInterval)
      
      boatIntervalId.current = parseInt(id.toString());
    }

  }

  // Function for updating perks
  const upgrade = (type:string) => {
    const oldUpgradeFishingRod = window.localStorage.getItem('upgradeFishingRod')
    const oldUpgradeBait = window.localStorage.getItem('upgradeBait')
    const oldUpgradeBoat = window.localStorage.getItem('upgradeBoat')

    if (type == "upgradeFishingRod" && oldUpgradeFishingRod && gameData.fishingRodUpgrades.length > (parseInt(oldUpgradeFishingRod)+1) && gameData.fishingRodUpgrades[(parseInt(oldUpgradeFishingRod)+1)].fishNeeded <= click) {
      
      setClick((prev)=> prev - gameData.fishingRodUpgrades[(parseInt(oldUpgradeFishingRod)+1)].fishNeeded);
      // setUpgrades({...upgrades, fishingRodUpgrades: upgrades.fishingRodUpgrades+1})
      window.localStorage.setItem('upgradeFishingRod', (parseInt(oldUpgradeFishingRod)+1).toString())

    } else if (type == "upgradeBait" && oldUpgradeBait && gameData.baitUpgrades.length > (parseInt(oldUpgradeBait)+1) && gameData.baitUpgrades[(parseInt(oldUpgradeBait)+1)].fishNeeded <= click) {
      
      setClick((prev)=> {return prev - gameData.baitUpgrades[(parseInt(oldUpgradeBait)+1)].fishNeeded});
      // setUpgrades({...upgrades, baitUpgrades: upgrades.baitUpgrades+1})
      window.localStorage.setItem('upgradeBait', (parseInt(oldUpgradeBait)+1).toString())

    } else if (type == "upgradeBoat" && oldUpgradeBoat && gameData.boatUpgrades.length > (parseInt(oldUpgradeBoat)+1) && gameData.boatUpgrades[(parseInt(oldUpgradeBoat)+1)].fishNeeded <= click) {
      
      setClick((prev)=> prev - gameData.boatUpgrades[(parseInt(oldUpgradeBoat)+1)].fishNeeded);
      // setUpgrades({...upgrades, boatUpgrades: upgrades.boatUpgrades+1})
      window.localStorage.setItem('upgradeBoat', (parseInt(oldUpgradeBoat)+1).toString())
    } 

    loadData(true)
  }

  // Reset function
  const reset = () => {
    window.localStorage.clear()

    loadData()

    fishByClick.current = gameData.fishingRodUpgrades[0].fishByClick;
    specialFish.current = gameData.baitUpgrades[0].specialFish;
    boatIntervalTime.current = gameData.boatUpgrades[0].boatInterval;

    setBaitUpgrade(0)
    setBoatUpgrade(0)
    setFishingRodUpgrade(0)
    console.log("reset !!");
  }

  // When mouse enter the reset button
  const enterResetHandler = () => {
    gsap.to("."+style.reset+" svg", {rotate: "-= 360", duration:"0.5"})
    gsap.to("."+style.reset, {scale: "1.2", duration:"0.5"})
  }

  // When mouse leave the reset button
  const leaveResetHandler = () => {
    gsap.to("."+style.reset, {scale: "1.0", duration:"0.5"})
  }

  // Auto save the number of click in the local storage
  useEffect(() => {
    if (click) {
      window.localStorage.setItem('click', click.toString())
    }
  }, [click])

  // Initialisation when we load the page
  useEffect(() => {

    loadData()

      const handlerMouse = (e:MouseEvent) => {
        setCoord({
          x: e.clientX,
          y: e.clientY
        })
      }

      mm.add("(width > 780px)", () => {
        window.addEventListener('mousemove', handlerMouse)
      })

    // Cleaning function
    return () => {
      mm.add("(width > 780px)", () => {
        window.removeEventListener('mousemove', handlerMouse)
      })

      if (boatIntervalId.current > 0) {
        clearInterval(boatIntervalId.current)
      }
    }
  }, [])

  // Initialisation of the rotating fish when we load the page
  const fishRef = useRef<HTMLImageElement>(null!)
  useGSAP(() => {
    gsap.to(fishRef.current, {rotate: "+= 360", duration: "5", repeat: -1, ease : "none"})
  }, [])

  return (
    <div className={style.page}>
      <main className={style.main}>
          <Notif nbFish={nbFishClicked} resetNotif={setNbFishClicked} coord={coord}/>

        <div className={style.left}>

          <Link className={style.return} href={"/"}>
            <Image src={"icons/icon.svg"} alt="Back to portoflio" width={30} height={30}/>
          </Link>


          <h1 className={style.title}>Fish Clicker</h1>

          <div className={style.clicker} onClick={() => clickHandler()}>
            <Image ref={fishRef} src={"/image/realfish.png"} alt="Fish to click" width={200} height={200}/>
          </div>

          <h1>{click + " fish"}</h1>

          <div className={style.reset} onClick={() => reset()} onMouseEnter={() => enterResetHandler()} onMouseLeave={() => leaveResetHandler()}>
            <svg viewBox="0 0 21 21" width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"> <path d="m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8"></path> <path d="m12.5 5.5v-4h4"></path> </g> </g></svg>

            <p>Reset</p>
        </div>
        </div>

        <div className={style.upgrades}>
          <h2>Upgrades</h2>

          <div onClick={() => upgrade("upgradeBait")} className={!gameData.baitUpgrades[baitUpgrade+1] ? style.maxed : click >= gameData.baitUpgrades[baitUpgrade+1].fishNeeded ? style.upgradable : style.none}>
            
            <div className={style.iconAndName}>
              <Image src={'icons/baitIcon.svg'} alt="Boat Icon for upgrade" width={30} height={30}/>

              <div className={style.upgradeTitle}>
                <h2>
                  Upgrade bait
                </h2>

                {
                  !gameData.baitUpgrades[baitUpgrade+1] ? 
                      <p>Max !</p>
                    : click >= gameData.baitUpgrades[baitUpgrade+1].fishNeeded ? 
                      <p>cost {gameData.baitUpgrades[baitUpgrade+1].fishNeeded} fish</p> 
                    : 
                      <p>{gameData.baitUpgrades[baitUpgrade+1].fishNeeded} fish needed</p> 
                }
              </div>
            </div>

            <h2>
              {baitUpgrade}
            </h2>
          </div>

          <div onClick={() => upgrade("upgradeFishingRod")} className={!gameData.fishingRodUpgrades[fishingRodUpgrade+1] ? style.maxed : click >= gameData.fishingRodUpgrades[fishingRodUpgrade+1].fishNeeded ? style.upgradable : style.none}>
            
            <div className={style.iconAndName}>
            
              <Image src={'icons/fishingrodIcon.svg'} alt="Fishing rod Icon for upgrade" width={30} height={30}/>
              
              <div className={style.upgradeTitle}>  
                <h2>

                  Upgrade fishingrod
                </h2>

                {
                  !gameData.fishingRodUpgrades[fishingRodUpgrade+1] ? 
                      <p>Max !</p>
                    : click >= gameData.fishingRodUpgrades[fishingRodUpgrade+1].fishNeeded ? 
                      <p>cost {gameData.fishingRodUpgrades[fishingRodUpgrade+1].fishNeeded} fish</p> 
                    : 
                      <p>{gameData.fishingRodUpgrades[fishingRodUpgrade+1].fishNeeded} fish needed</p> 
                }
              </div>
            </div>

            <h2>
              {fishingRodUpgrade}
            </h2>
          </div>
          
          <div onClick={() => upgrade("upgradeBoat")} className={!gameData.boatUpgrades[boatUpgrade+1] ? style.maxed : click >= gameData.boatUpgrades[boatUpgrade+1].fishNeeded ? style.upgradable : style.none}>
            
            <div className={style.iconAndName}>
              
              <Image src={'icons/boatIcon.svg'} alt="Boat Icon for upgrade" width={30} height={30}/>
              

              <div className={style.upgradeTitle}>
                <h2>
                  Upgrade boat
                </h2>

                {
                  !gameData.boatUpgrades[boatUpgrade+1] ? 
                      <p>Max !</p>
                    : click >= gameData.boatUpgrades[boatUpgrade+1].fishNeeded ? 
                      <p>cost {gameData.boatUpgrades[boatUpgrade+1].fishNeeded} fish</p> 
                    : 
                      <p>{gameData.boatUpgrades[boatUpgrade+1].fishNeeded} fish needed</p> 
                }
              </div>
            </div>

            <h2>
              {boatUpgrade}
            </h2>
          </div>

        </div>
        
      </main>
    </div>
  );
}
