import 'css/main'

import App from 'components/App'
import io from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'

const socket = io('http://localhost:3000')

socket.on('connect', () => console.log('connected'));
socket.on('event', data => console.log(data));
socket.on('disconnect', () => console.log('disconnected'));

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
