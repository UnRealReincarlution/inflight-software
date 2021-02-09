import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Button } from "../public/components/button"
import { Check, Stat, Menu } from "../public/components/native"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h3 style={{ padding: '1rem' }}>VEHICLE OVERVIEW</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.checks}>
          <Check completed={true} status={3} title={"All Systems Check"} id={183616}/>
          <Check completed={true} status={0} title={"Engine Warmup"} id={183616}/>
          <Check completed={true} status={0} title={"Pre-Flight Checks"} id={183616}/>
          <Check completed={true} status={0} title={"TRI-CORE Spinnup"} id={183616}/>
          <Check completed={false} status={0} title={"MECO"} id={183616}/>
          <Check completed={true} status={4} title={"Thermal Shielding"} id={183616}/>
          <Check completed={false} status={2} title={"ISS Docking"} id={183616}/>
        </div>

        <div className={styles.center}>
          {/* OVERVIEW OF VEHICLE */}
          <img src="../dragon.png" alt=""/>
        </div>

        <div className={styles.stats}>
          {/* STATS */}
          <Stat title={"Inertial Velocity"} value={7.67} unit={"km/s"} percentage={78}/>
          <Stat title={"Altitude"} value={390} unit={"km"} percentage={12}/>
          <Stat title={"Apogee"} value={404} unit={"km"} percentage={40}/>
          <Stat title={"Perigee"} value={389} unit={"km"} percentage={60}/>

          <br/>
          <br/>
          <br/>
          <br/>

          <Stat title={"Inclination"} value={51.67} unit={"°"} percentage={65}/>
          <Stat title={"Distance to ISS"} value={0.2} unit={"km"} percentage={98}/>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div>
          {/* TOGGLE SYSTEMS-CABIN */}
          <Button title="Systems" active={true}/>
          <Button title="Cabin"/>
        </div>

        <Menu selected={0}/>

        <div>
          <h5>Power, Engine, Comms</h5>
          <Button title="More"/>
        </div>
      </div>
    </div>
  )
}
