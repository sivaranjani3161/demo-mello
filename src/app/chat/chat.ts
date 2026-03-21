import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatDataService } from '../chat-data.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
})
export class ChatComponent implements OnInit {

  chat: any;
  input = '';

  messages: any[] = [
    {
      text: 'hi!! lets chat',
      time: '17:37',
      type: 'bot'
    }
  ];

  replies = [
    "Hi", "Hello", "How are you?", "What are you doing?",
    "Had lunch?", "How was your day?", "Are you busy?",
    "What’s up?", "Tell me more", "Okay 👍"
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatDataService
  ) {}

 ngOnInit(): void {

  const type = this.route.snapshot.paramMap.get('type') as 'bestie' | 'mankibaat';
  const name = this.route.snapshot.paramMap.get('name');

  const chats = this.chatService.getChats(type);

  this.chat = chats.find(c => c.name === name);

  if (!this.chat) {
    console.log('Chat not found', { type, name });
  }
}

  back() {
    this.router.navigate(['/home']);
  }

  send() {
    if (!this.input.trim()) return;

    this.messages.push({
      text: this.input,
      time: this.getTime(),
      type: 'user'
    });

    this.input = '';

    setTimeout(() => {
      const random =
        this.replies[Math.floor(Math.random() * this.replies.length)];

      this.messages.push({
        text: random,
        time: this.getTime(),
        type: 'bot'
      });
    }, 200);
  }

  getTime() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
  }
}