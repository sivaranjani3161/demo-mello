import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pricing.html',
})
export class Pricing {

  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/profile']); 
  }
}