import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter1-2',
  templateUrl: './chapter1-2.page.html',
  styleUrls: ['./chapter1-2.page.scss'],
})
export class Chapter12Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialization logic goes here
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter1() {
    this.router.navigateByUrl('/chapter1');
  }
  goToChapter1_3() {
    this.router.navigateByUrl('/chapter1-3');
  }
}
