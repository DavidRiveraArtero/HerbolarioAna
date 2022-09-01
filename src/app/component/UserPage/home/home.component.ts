import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  // Carousel

  scrollPosition = 0
  cardWidht:number = 0
  lenghCard:number = 0
  carouselWidth:number = 0
  constructor() { }

  ngOnInit(): void {

    this.carouselWidth = $('.carousel-p')[0].scrollWidth;

    this.cardWidht = $('.carousel-i').width()!

    console.log(this.lenghCard)
  }



  next(){
    if(this.scrollPosition < (this.carouselWidth - (this.cardWidht * this.lenghCard))){ // EL 4 cambiar por la longitud del numero de card
      this.scrollPosition = this.scrollPosition + this.cardWidht
      $('.carousel-p').animate({
        scrollLeft:this.scrollPosition
      },600)
    }
    console.log('click',this.cardWidht)

  }

  prev(){
    if(this.scrollPosition > 0){ // EL 4 cambiar por la longitud del numero de card
      this.scrollPosition = this.scrollPosition - this.cardWidht
      $('.carousel-p').animate({
        scrollLeft:this.scrollPosition
      },600)
    }
    console.log('click',this.cardWidht)

  }

}
