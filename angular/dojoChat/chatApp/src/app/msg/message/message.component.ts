import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()message;
  colorDict = {0:'red',1:'blue',2:'green',3:'indigo'}
  constructor() { }

  ngOnInit() {
  }

}
