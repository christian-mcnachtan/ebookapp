import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.page.html',
  styleUrls: ['./chapter4.page.scss'],
})
export class Chapter4Page implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter3() {
    this.router.navigateByUrl('/chapter3');
  }
  goToChapter5() {
    this.router.navigateByUrl('/chapter5');
  }
}
