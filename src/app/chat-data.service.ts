import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {

  private bestieChats = [
    {
      name: 'Arjun',
      desc: 'Romantic, possessive and emotionally mature boyfriend',
      image: 'https://i.pravatar.cc/100?img=1',
      tags: ['Relationship', 'Romance', 'Boyfriend']
    },
    {
      name: 'Rahul (Bestfriend)',
      desc: 'Will listen to you and always hype you',
      image: 'https://i.pravatar.cc/100?img=2',
      tags: ['Bestie', 'Male friend', 'Supporter']
    },
    {
      name: 'Zakir',
      desc: 'Funniest, most unhinged entertainer',
      image: 'https://i.pravatar.cc/100?img=3',
      tags: ['Comedy', 'Entertaining', 'Timepass']
    },
    {
      name: 'Vivaan',
      desc: 'Rich, dominating dark romantic boyfriend',
      image: 'https://i.pravatar.cc/100?img=4',
      tags: ['Dark', 'Dominating', 'Mysterious']
    }
  ];

  private manKiBaatChats = [
    {
      name: 'Kiran',
      desc: 'Maan ki baat, kiran ke saath',
      image: 'https://i.pravatar.cc/100?img=4',
      tags: ['Life Advice', 'Chit Chat']
    }
  ];

  getChats(type: 'bestie' | 'mankibaat') {
    return type === 'bestie' ? this.bestieChats : this.manKiBaatChats;
  }
}