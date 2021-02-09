import React from "react"
import styles from '../../styles/Home.module.css'

interface Input {
    completed: boolean,
    title: string,
    id: number,
    status: Status["NOMINAL"] | Status["AWAITING"] | Status["QUEUED"] | Status["FAILURE"] | Status["APPLIED"]
}

interface Statistic {
    title: string,
    value: number,
    unit: string,
    percentage: number,
    topper?: number 
}

interface MenuInput {
    selected: number
}

type Status = {
    NOMINAL: 0,
    AWAITING: 1,
    QUEUED: 2,

    FAILURE: 3,
    APPLIED: 4
}

class Check extends React.Component<Input, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.systemCheck} > {/* style={{ color: (this.props.status == 1) ? '#ea7b15' : (this.props.status == 2 ) ? '#FF0029' : '#9499c3'}} */}
                {
                    (() => {
                        switch (this.props.status) {
                        case 0:  return (
                            <div className={styles.circle}>
                                <img src="../check_drk.svg" alt=""/>
                            </div>
                        );
                        case 1: return (
                            <div className={styles.circle} style={{ backgroundColor: '#ea7b15' }}>
                                <img src="../await.svg" alt=""/>
                            </div>
                        );
                        case 2:  return (
                            <div className={styles.circle} style={{ backgroundColor: '#9499c3a0' }}>
                                <img src="../await.svg" alt=""/>
                            </div>
                        );
                        case 3:  return (
                            <div className={styles.circle} style={{ backgroundColor: '#FF0029' }}>
                                <img src="../cross.svg" alt=""/>
                            </div>
                        );
                        case 4: return (
                            <div className={styles.circle} style={{ backgroundColor: '#3fbe11' }}>
                                <img src="../check_drk.svg" alt=""/>
                            </div>
                        );
                        default: return "MALFUNCTION";
                        }
                    })()
                }

                <div>
                    <h4 style={{ color: (this.props.status == 2) ? "#9499c3a0" : "#9499c3" }}>{this.props.title.toUpperCase()}</h4>
                    {
                    (() => {
                        switch (this.props.status) {
                        case 0:  return (
                            <p style={{ color: "#9499c3" }}>Nominal</p>
                        );
                        case 1: return (
                            <p style={{ color: "#f4f4f4" }}>Awaiting</p>
                        );
                        case 2:  return (
                            <p style={{ color: "#9499c3" }}>Awaiting</p>
                        );
                        case 3:  return (
                            <p style={{ color: "#f4f4f4" }}>Failure</p>
                        );
                        case 4: return (
                            <p style={{ color: "#f4f4f4" }}>Applied</p>
                        )
                        default: return "Malfunction";
                        }
                    })()
                }
                </div>  
            </div>
        )
    }
}

class Stat extends React.Component<Statistic, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.stat}>
                <div>
                    <h5>{this.props.title}</h5>
                    <div className={styles.barContainer}>
                        <div className={styles.bar} style={{ width: `${this.props.percentage}%` }}></div>
                    </div>
                </div>
                
                <div>
                    <h3>{this.props.value}</h3>
                    <h4>{this.props.unit}</h4>
                </div>
            </div>
        )
    }
}

class Menu extends React.Component<MenuInput, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.menu}>
                <MenuIcon image={"home"}/>
                <MenuIcon image={"life"}/>
                <MenuIcon image={"comms"}/>
                <MenuIcon image={"prop"}/>
                <MenuIcon image={"mech"}/>
                <MenuIcon image={"power"}/>
                <MenuIcon image={"avionics"}/>
                <MenuIcon image={"gnc"}/>
                <MenuIcon image={"heat"}/>
            </div>
        )
    }
}

class MenuIcon extends React.Component<{image: string}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div style={{ WebkitMask: `url(${this.props.image}.svg) center no-repeat`  }}></div>
        )
    }
}

export { Check, Stat, Menu } 
export type { Status }