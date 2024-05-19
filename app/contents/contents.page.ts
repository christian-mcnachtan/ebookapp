import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.page.html',
  styleUrls: ['./contents.page.scss'],
})
export class ContentsPage {

  constructor(private router: Router) { }

  goToCover() {
    this.router.navigateByUrl('/cover');
  }
    
  goToChapter1() {
      this.router.navigateByUrl('/chapter1');
  }
}


