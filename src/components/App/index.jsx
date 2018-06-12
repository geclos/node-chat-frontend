// @flow
import { observer } from 'mobx-react'
import autobind from 'autobind-decorator'
import * as React from 'react'
import messages from 'stores/collections/messages'
import Message from 'stores/models/Message'
import MessageComponent from 'components/Message'

import styles from './styles'

type Props = {}

@observer
export default class App extends React.Component<Props> {
  @autobind
  submit (ev) {
    ev.preventDefault()
    const message = ev.target.elements[0].value
    messages.save(new Message(message))
    ev.target.elements[0].value = ''
  }

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.chat}>
            {messages.messages.map((msg, i) => <MessageComponent key={i} message={msg} />)}
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={this.submit}>
              <input id='message' name='message' className={styles.input} />
              <button type='submit' className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
