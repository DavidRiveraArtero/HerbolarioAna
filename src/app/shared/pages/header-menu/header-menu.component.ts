import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  termino:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log(this.termino)
    this.termino = ""
  }

}
