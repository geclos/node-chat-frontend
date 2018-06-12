import { observable } from 'mobx'
import io from 'socket.io-client'

class Socket {
  @observable socket = null

  constructor () {
    this.socket = io('http://localhost:3000')

    this.socket.on('connect', () => console.log('connected'))
    this.socket.on('disconnect', () => console.log('disconnected'))
  }
}

export default new Socket()
