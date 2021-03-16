import { Component, OnInit , EventEmitter, Output, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase"
  public resposta: string = ''
  public rodada: number =0
  public rodadaFrase!: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
  

 public atualizaResposta(resposta: Event): void{
   this.resposta = ((<HTMLInputElement>resposta.target).value)

  }

  public verificarResposta():void{
    
    if(this.rodadaFrase.frasePtBr == this.resposta){

 //trocar pergunta da rodada
    this.rodada++

    //progresso
  this.progresso = this.progresso + (100/ this.frases.length)
  

//verifica o acerto do total de perguntas
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }

//Atualiza o objeto rodada frase
    this.atualizaRodada()

     
  } 
    else {
      //Diminuir um coração (alterar a variável tentativa)
      this.tentativas--
    alert("A tradução está incorreta")

    if(this.tentativas ===-1){
      
      this.encerrarJogo.emit('derrota')
    }
  }
    
  }

  public atualizaRodada(): void{
    //define a frase da rodada com base na lógica
    this.rodadaFrase = this.frases[this.rodada]
    //Limpar a resposta
    this.resposta =""
  }
}
