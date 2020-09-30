import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  messages: any;
  newMessage: string; 
  typingMsg: Array<{name:string}>;
  @Input()userName: string;
  @Input()color: number;
  constructor(private _socket: SocketService) { }

  ngOnInit() {
    this.typingMsg = []
    this.messages = []
    this.newMessage = ""
    this._socket.joinChat();
    this._socket.socket.on('handshake', (chat) => {
      console.log('chat: ', chat)
      this._socket.socket.emit('handshake', this.userName)
    })
    this._socket.socket.on('newMsg', (msg) =>{
      // console.log(msg,this.color)
      this.messages.push(msg)
    });
    this._socket.socket.on('typing', (msg) => {
      let alreadyTyping = false;
      this.typingMsg.forEach((users) => {
        if(msg.name == users.name){
          alreadyTyping = true;
        }
      })
      if (!alreadyTyping){
        this.typingMsg.push(msg)
      }
    })
    this._socket.socket.on('typingStopped', (msg) => {
      let i = 0;
      while(true){
        if(this.typingMsg[i].name == msg.name){
          [[this.typingMsg[i], this.typingMsg[this.typingMsg.length-1]] = [this.typingMsg[this.typingMsg.length-1],this.typingMsg[i]]]
          break;
        }
        i++;
      }
      this.typingMsg.pop();
    })
  }
  
  sendMessage(){
    if (this.newMessage.length){
      let msg = {msg: this.newMessage, name: this.userName, color: this.color, you:false}
      this._socket.socket.emit('newMessage', msg)
      msg.you = true;
      this.messages.push(msg)
      this.newMessage = ""
    }
  }

  typing(){
    this._socket.socket.emit('userTyping',{name: this.userName})
  }

  typingStopped(){
    this._socket.socket.emit('userStoppedTyping','')
    console.log('typing stopped!!!')
  }
}
