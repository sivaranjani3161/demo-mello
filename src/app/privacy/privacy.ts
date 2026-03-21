import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.html'
})
export class Privacy {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/profile']);
  }

}