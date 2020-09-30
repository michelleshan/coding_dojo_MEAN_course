import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SocketService } from './socket.service';
import { MessageComponent } from './msg/message/message.component';
import { MessageListComponent } from './msg/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    MessageComponent,
    MessageListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
