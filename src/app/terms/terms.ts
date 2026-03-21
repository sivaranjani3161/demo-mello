import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  templateUrl: './terms.html'
})
export class Terms {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/profile']);
  }

}