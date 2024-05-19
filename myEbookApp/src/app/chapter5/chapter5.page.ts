import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter5',
  templateUrl: './chapter5.page.html',
  styleUrls: ['./chapter5.page.scss'],
})
export class Chapter5Page implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToContents() {
    this.router.navigateByUrl('/contents');
  }

  goToChapter4() {
    this.router.navigateByUrl('/chapter4');
  }

  


}
