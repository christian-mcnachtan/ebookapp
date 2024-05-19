import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter1-3',
  templateUrl: './chapter1-3.page.html',
  styleUrls: ['./chapter1-3.page.scss'],
})
export class Chapter13Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialization logic goes here
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter1_2() {
    this.router.navigateByUrl('/chapter1-2');
  }
  goToChapter2() {
    this.router.navigateByUrl('/chapter2');
  }
}
