import { Component, OnInit } from '@angular/core';
import { ChatDataService } from '../chat-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  chats: any[] = [];
  selectedTab: 'bestie' | 'mankibaat' = 'bestie';

  constructor(
    private chatService: ChatDataService,
    public router: Router  
  ) {}

  ngOnInit(): void {
    this.loadChats();
  }

  loadChats() {
    this.chats = this.chatService.getChats(this.selectedTab);
  }

  setTab(tab: 'bestie' | 'mankibaat') {
    this.selectedTab = tab;
    this.loadChats();
  }

openChat(chat: any) {
  this.router.navigate(['/chat', this.selectedTab, chat.name]);
}
}