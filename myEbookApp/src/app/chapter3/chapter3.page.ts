import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.page.html',
  styleUrls: ['./chapter3.page.scss'],
})
export class Chapter3Page implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter2() {
    this.router.navigateByUrl('/chapter2');
  }
  goToChapter4() {
    this.router.navigateByUrl('/chapter4');
  }

}
