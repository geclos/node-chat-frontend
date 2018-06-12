// @flow
import { action, observable } from 'mobx'
import autobind from 'autobind-decorator'
import Message from 'stores/models/Message'
import socket from 'stores/singletons/Socket'

const io = socket.socket

class Messages {
  @observable messages: Array<Message> = []

  constructor () {
    io.on('chat message', this.addMessage)
  }

  @autobind
  @action
  addMessage (data: string) {
    this.messages.push(new Message(data))
  }

  @action
  save (message: Message) {
    io.emit('chat message', message.message, () => this.messages.push(message))
  }
}

export default new Messages()
