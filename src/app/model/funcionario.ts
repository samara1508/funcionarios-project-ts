import { EnumFilial } from "./filial.enum";

export interface Funcionario {
  id?: number;
  nome: string | number;
  filial: EnumFilial;
  dataAdmissao: Date;
  cargo: string;
  salario: number;
}
