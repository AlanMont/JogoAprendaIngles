import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {
  //@Input() essa função faz com que determinaod atributo do componente seja capaz de receber parâmetros de entrada
@Input()  public progresso:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
