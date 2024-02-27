import { Component } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {Mes: "Janeiro", TotalRecebido: 10000, TotalGasto: 8000, TotalEconomizado: 2000},
  {Mes: "Fevereiro", TotalRecebido: 4500, TotalGasto: 4000, TotalEconomizado: 500},
  {Mes: "Março", TotalRecebido: 6000, TotalGasto: 3000, TotalEconomizado: 3000},
  {Mes: "Abril", TotalRecebido: 8000, TotalGasto: 7000, TotalEconomizado: 1000},
  {Mes: "Maio", TotalRecebido: 7400, TotalGasto: 6000, TotalEconomizado: 1400},
  {Mes: "Junho", TotalRecebido: 9000, TotalGasto: 8000, TotalEconomizado: 1000},
];

const ELEMENT_DATA2: any[] = [
  {Data: "22/02/2024", Tipo: "Gasto", Valor: 8000, Descricao: "Teste Teste"},
  {Data: "22/02/2024", Tipo: "Recebimento", Valor: 4000, Descricao: "Teste Teste"},
  {Data: "22/02/2024", Tipo: "Recebimento", Valor: 3000, Descricao: "Teste Teste"},
  {Data: "22/02/2024", Tipo: "Recebimento", Valor: 7000, Descricao: "Teste Teste"},
  {Data: "22/02/2024", Tipo: "Gasto", Valor: 6000, Descricao: "Teste Teste"},
  {Data: "22/02/2024", Tipo: "Gasto", Valor: 8000, Descricao: "Teste Teste"},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  displayedColumns: string[] = ['Mes', 'TotalRecebido', 'TotalGasto', 'TotalEconomizado'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['Data', 'Tipo', 'Valor', 'Descricao'];
  dataSource2 = ELEMENT_DATA2;
}
