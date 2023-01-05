import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // let element = document.querySelector('.background') as HTMLElement;
    // let element1 = document.querySelector('.cart1') as HTMLElement;
    // let element2 = document.querySelector('.cart2') as HTMLElement;
    // if (window.pageYOffset > element.clientHeight) {
    //   element.classList.add('bg-light');
    //   element1.classList.add('text-success');
    //   element2.classList.add('text-success');
    // } else {
    //   element.classList.remove('bg-light');
    //   element1.classList.remove('text-success');
    //   element2.classList.remove('text-success');
    // }
  }
}
