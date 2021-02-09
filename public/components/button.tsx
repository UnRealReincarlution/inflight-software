import React from "react"
import styles from '../../styles/Home.module.css'

class Button extends React.Component<{title: string, active?: boolean}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className={`${styles.button} ${(this.props.active) ? styles.activeButton : ""}`}>{this.props.title}</button>
        )
    }
}

export { Button } 