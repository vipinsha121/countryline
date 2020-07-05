import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        /* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

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
