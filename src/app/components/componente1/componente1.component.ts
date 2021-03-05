import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  alumnos: Persona[] = [
  {
    nombre: 'Marc',
    apellido: 'Estalella'
  },
  {
    nombre: 'Zdravko',
    apellido: 'Marinov'
  },
  {
    nombre: 'Julia',
    apellido: 'Abad'
  }
]
  nombre: string = 'Julia';
  persona: object = {
    nombre:'Julia',
    apellido:'Abad'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
