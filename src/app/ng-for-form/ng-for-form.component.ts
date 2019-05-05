import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  phone: string = '';
  city: string = '';
  age: number;

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Belo Horizonte", state: "MG"},
    {name: "Salvador", state: "BA"},
    {name: "Sorocaba", state: "SP"},
  ];

  clients = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age : this.age

      }
    );
    console.log(this.clients);
    this.cancel();
  }

  cancel() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  }

  delete(i: number) {
    console.log(i);
    this.clients.splice(i, 1);
  }

}
