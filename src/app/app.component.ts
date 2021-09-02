import { Component } from '@angular/core';
import { EnumFilial } from './model/filial.enum';
import { Funcionario } from './model/funcionario';
import { AutenticacaoService } from './services/autenticacao.service';
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;
  linkPaginaNoticia: string;

  constructor(private funcionarioService: FuncionarioService) {
    //this.funcionarios = this.mostrarFuncionarios();
  }

  selecionarFuncionario(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;
    this.linkPaginaNoticia = 'http://globo.com';
  }

  deselecionarFuncionario() {
    this.funcionarioSelecionado = undefined;
  }

  verDetalhes(funcionario: Funcionario) {
    const idFuncionario = funcionario.id;
    return this.funcionarioService.obterDadosFuncionario(idFuncionario).subscribe((
      respostabackend : Funcionario) => console.log('O retorno foi:', respostabackend));
  }

  adicionarFuncionario() {
    // criar o objeto Funcionario e chamar o método
    // adicionarFuncionario(funcionario) do serviço

    const novoFuncionario = {
      nome: 'Lula',
      filial: EnumFilial.FILIAL_C,
      dataAdmissao: new Date('25/01/2002'),
      cargo: 'Presidente',
      salario: 10000
    };

    // this.funcionarioService.adicionarFuncionario(novoFuncionario)
    //   .subscribe((funcionario: Funcionario) => {
    //     // Quando retornar - depois que salvou no backend
    //     this.funcionarios.push(funcionario);
    //   });
  }

  removerFuncionario(funcionario: Funcionario) {
    return this.funcionarioService.removerFuncionario(funcionario.id)
      .subscribe((retornobackend : Funcionario) => this.funcionarios.splice((this.funcionarios.indexOf(retornobackend)), 1));
  }

  removerUltimoFuncionario() {
    this.funcionarios.pop();
  }

  ajustarSalario(funcionario: Funcionario) {
    funcionario.salario *= 2;
  }

  mostrarFuncionarios(){
    return this.funcionarioService.obterFuncionarios().subscribe((
      retornobackend : Funcionario[]) => console.log('O retorno foi:', retornobackend));
  }
}
