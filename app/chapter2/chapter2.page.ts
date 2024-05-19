import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter1_3() {
    this.router.navigateByUrl('/chapter1-3');
  }
  goToChapter3() {
    this.router.navigateByUrl('/chapter3');
  }

}