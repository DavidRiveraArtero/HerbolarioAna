import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-producto-carrousel',
  templateUrl: './producto-carrousel.component.html',
  styleUrls: ['./producto-carrousel.component.css']
})
export class ProductoCarrouselComponent implements OnInit {

 // Carousel

 scrollPosition = 0
 cardWidht:number = 0
 lenghCard:number = 0
 carouselWidth:number = 0
 constructor() { }

 ngOnInit(): void {

   this.carouselWidth = $('.carousel-p')[0].scrollWidth;

   this.cardWidht = $('.carousel-i').width()!
   this.lenghCard = $('.carousel-i').length

   console.log(this.lenghCard)
 }



 next(){
    if(this.scrollPosition < (this.carouselWidth - (this.cardWidht * (this.lenghCard - 1)))){
      console.log(this.lenghCard)
      this.scrollPosition = this.scrollPosition + this.cardWidht
      $('.carousel-p').animate({
        scrollLeft:this.scrollPosition
      },600)
    }
   console.log('click',this.cardWidht)

 }

 prev(){
   if(this.scrollPosition > 1){ // EL 4 cambiar por la longitud del numero de card
    console.log("dentro de prev")
     this.scrollPosition = this.scrollPosition - this.cardWidht
     $('.carousel-p').animate({
       scrollLeft:this.scrollPosition
     },600)
   }
   console.log('click',this.cardWidht)

 }

}
