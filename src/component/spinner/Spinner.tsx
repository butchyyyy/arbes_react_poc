import React from "react"

import styles from "./Spinner.less"

interface Props {
  loading: boolean
}

export class Spinner extends React.Component<Props, void> {

  public render() {
    const spinner = this.props.loading ? (
        <div>
          <div className={styles.mask}/>
          <div className={this.props.loading ? styles.spinner : ""}>
            <div className={styles.rect1}/>
            <div className={styles.rect2}/>
            <div className={styles.rect3}/>
            <div className={styles.rect4}/>
            <div className={styles.rect5}/>
          </div>
        </div>
      ) : null
    return (
        <div>
          {spinner}
          <div className={this.props.loading ? styles.mask : ""}>
            {this.props.children}
          </div>
        </div>
    )
  }

}
