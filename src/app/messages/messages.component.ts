import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {qR} from '@angular/core/src/render3';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}


