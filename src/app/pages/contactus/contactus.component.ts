import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

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
