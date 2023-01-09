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
    // let element3 = window.document.getElementsByClassName(
    //   'ahmed'
    // ) as HTMLCollection;
    // console.log(element3);
    // if (window.pageYOffset > element.clientHeight) {
    //   element.classList.add('bg-light');
    //   Array.from(element3).forEach((i) => {
    //     i.classList.replace('text-white', 'text-success');
    //   });
    // } else {
    //   element.classList.remove('bg-light');
    //   Array.from(element3).forEach((i) => {
    //     i.classList.replace('text-success', 'text-white');
    //   });
    // }
  }
}
