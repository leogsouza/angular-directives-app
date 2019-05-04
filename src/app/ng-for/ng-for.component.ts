import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Chrono",
    "Lucca",
    "Marle",
    "Frog"
  ]

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Belo Horizonte", state: "MG"},
    {name: "Salvador", state: "BA"},
    {name: "Sorocaba", state: "SP"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
