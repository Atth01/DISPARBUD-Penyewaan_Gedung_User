import { Component, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('swiper', { static: false })
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'assets/Event 1.png',
    'assets/Event 3.jpg',
    'assets/Event 2.jpg'
  ];
  constructor() {}

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext(){
    if (this.swiper) {
      this.swiper.slideNext();
      console.log('Next button clicked');
    }
  }

  goPrev(){
    if (this.swiper) {
      this.swiper.slidePrev();
      console.log('Previous button clicked');
    }
  }

  swiperSlideChanged(e: any){
    console.log('changed: ', e);
  }
}
