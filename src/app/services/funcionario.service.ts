import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  constructor(private http: HttpClient) {}

  obterFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>('http://localhost:3000/funcionarios');
  }

  obterDadosFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`http://localhost:3000/funcionarios/${id}`);
  }

  // removerFuncionario(id: number): Observable<Funcionario> {
  //   // DELETE - `URL/funcionarios/${id}`
  // }


  // adicionarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
  //   // POST
  //   return this.http.post<Funcionario>('', funcionario);
  // }
}
