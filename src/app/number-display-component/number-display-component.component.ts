import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent implements OnInit {
  public numeroAleatorio: number[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.criarNumero();
  }
  
  criarNumero() {
    this.dataService.getnumeroAleatorio();
    this.numeroAleatorio = this.dataService.getResultado();
    console.log(this.numeroAleatorio);
  }
}