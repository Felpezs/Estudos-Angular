import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: Array<string> = []
  menuType: string = ""
  
  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'fonte',
      'cabo'
    ]
  }

  adicionar(){
    this.produtos.push('Felipe')
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }
  ngOnInit(): void {
  }

}
