import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-track-a-load',
  templateUrl: './track-a-load.component.html',
  styleUrls: ['./track-a-load.component.scss']
})
export class TrackALoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 375) {
          $('nav').addClass('fixed-header');
          $('nav div').addClass('visible-title');
      }
      else {
          $('nav').removeClass('fixed-header');
          $('nav div').removeClass('visible-title');
      }
    });
      }
}
