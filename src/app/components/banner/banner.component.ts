import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper, { Navigation, Pagination } from 'swiper';
// Configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper = new Swiper('.sqiper-container');

  slides: string[] = [
    './../../assets/banner-1.jpg',
    './../../assets/banner-2.jpg',
    './../../assets/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
