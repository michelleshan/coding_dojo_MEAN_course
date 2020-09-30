import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  constructor() { }

  joinChat() {
    this.socket = io(environment.SOCKET_ENDPOINT)
    // this.socket.emit('handshake','hello')
    // this.socket.on('handshake', (msg) => {
    //   console.log(msg)
    // })
  }
}
