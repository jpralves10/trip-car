import { Component, OnInit } from '@angular/core';
import { Paginas } from '../paginas';
import { Crud } from './entities/crud';

@Component({
  selector: 'tp-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  crudSelecionado:Crud = new Crud()
  listaCrud:Crud[] = []

  constructor(private crudService:any) { }

  ngOnInit() {
    
  }

  refresh(){}

  popularRows(pagina:Paginas){
    this.listaCrud = pagina.registros
  }

  incluir(){}

  editar(){}

  salvar(){}

  voltar(){}

}