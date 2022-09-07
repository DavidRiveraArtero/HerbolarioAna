import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-producto-carrousel',
  templateUrl: './producto-carrousel.component.html',
  styleUrls: ['./producto-carrousel.component.css']
})
export class ProductoCarrouselComponent implements OnInit {

 // Carousel

 scrollPosition:any = 0
 cardWidht:number = 0
 lenghCard:number = 0
 carouselWidth:any


 constructor() { }

 categorias = [
  {
    nombre:"Organico"
  },
  {
    nombre:'Paraser' // POR ALGUN MOTIVO LA PRIMERA LETRA TIENE QUE SER EN MAYUSCULA PORQUE SI NO DA UN ERROR
  }
 ]

 ngOnInit(): void {
 }





 next(event:MouseEvent){


  var cardClass:any = (((event.target as Element).parentNode?.parentNode?.firstChild)?.firstChild as Element).classList[0]
  var clasAnim:any = ((event.target as Element).parentNode?.parentNode?.firstChild as Element).classList[0]

  console.log(clasAnim)

  this.cardWidht = $('.'+cardClass).width()!
  this.lenghCard = $('.'+cardClass).length
  this.carouselWidth = $('.'+clasAnim)[0].scrollWidth



   console.log("cardWith: ", this.cardWidht)
   console.log("lenght: ", this.lenghCard)
   console.log("carouselWidth", this.carouselWidth)


  if(this.scrollPosition < (this.carouselWidth - (this.cardWidht * (this.lenghCard - 1)))){


    this.scrollPosition = this.scrollPosition + (this.carouselWidth / this.lenghCard)
    console.log("scrollPosition: " + this.scrollPosition)

    $('.'+clasAnim).animate({
      scrollLeft:this.scrollPosition
    },400)

  }else{
    this.scrollPosition = 0
  }




 }

 prev(event:MouseEvent){

  var cardClass:string = (((event.target as Element).parentNode?.parentNode?.firstChild)?.firstChild as Element).classList[0]
  this.cardWidht = $('.'+cardClass).width()!

  var clasAnim:string = ((event.target as Element).parentNode?.parentNode?.firstChild as Element).classList[0]

  if(this.scrollPosition >= 1){
    //console.log("dentro de prev")

    this.scrollPosition = this.scrollPosition - (this.carouselWidth / this.lenghCard)
    $('.'+clasAnim).animate({
      scrollLeft:this.scrollPosition
    },400)
  }else{
    this.scrollPosition = 2
  }
  //console.log('click',this.cardWidht)

 }

}
