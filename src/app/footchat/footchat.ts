import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footchat',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './footchat.html',
  styleUrl: './footchat.css',
})
export class Footchat {

    constructor(private router: Router) {}

   goBack() {
    this.router.navigate(['/home']);
  }

}
