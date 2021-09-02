import { EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnChanges, OnDestroy {

  @Input() funcionario: Funcionario;
  @Output() deselecionarFuncionario = new EventEmitter();

  constructor(private service: FuncionarioService) {
  }

  ngOnInit(): void {
    console.log(this.mostrarFuncionarios());
  }

  ngOnChanges(valueChanged) {
    console.log('O atributo funcionario mudou -> ', valueChanged);
  }

  ngOnDestroy() {
    console.log('Componente vai ser "destruido", ou seja, removido da tela');
  }

  deselecionar() {
    this.deselecionarFuncionario.emit();
  }

  mostrarFuncionarios(){
    return this.service.obterFuncionarios();
  }

  mostrarFuncionario(id){
    return this.service.obterDadosFuncionario(id);
  }

  removerFuncionario(id){
    return this.service.removerFuncionario(id);
  }

  adicionarFuncionario(funcionario : Funcionario){
    return this.service.adicionarFuncionario(funcionario);
  }
}
