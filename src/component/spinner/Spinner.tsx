import React from "react"

import styles from "./Spinner.less"

interface Props {
  loading: boolean
}

export class Spinner extends React.Component<Props, void> {

  public render() {
    if (this.props.loading) {
      return (
          <div>
            <div>
              <div className={styles.spinner}>
                <div className={styles.rect1}/>
                <div className={styles.rect2}/>
                <div className={styles.rect3}/>
                <div className={styles.rect4}/>
                <div className={styles.rect5}/>
              </div>
            </div>
            <div className={styles.mask}>{this.props.children}</div>
          </div>)
    } else {
      return <div>{this.props.children}</div>
    }
  }

}
