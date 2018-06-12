// @flow
import { observable } from 'mobx'

class Message {
  @observable message = null

  constructor (value: string) {
    this.message = value
  }

  get message () {
    return this.message
  }
}

export default Message
