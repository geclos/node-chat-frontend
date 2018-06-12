// @flow
import * as React from 'react'
import Message from 'stores/models/Message'

import styles from './styles'

type Props = {
  message: Message
}

export default class MessageComponent extends React.Component<Props> {
  render () {
    return (
      <div className={styles.root}>
        {this.props.message.message}
      </div>
    )
  }
}
