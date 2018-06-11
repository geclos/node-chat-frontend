// @flow
import * as React from 'react'

import styles from './styles'

type Props = {}

export default class App extends React.Component<Props> {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.chat}/>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <input className={styles.input} />
              <button className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
