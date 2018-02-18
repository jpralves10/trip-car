import { Component, OnInit } from '@angular/core';
import { Profissao } from './entities/profissao'
import { Categoria } from './entities/categoria';

@Component({
  selector: 'tp-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  imgBase64:Array<string> = []

  profissaoSelecionada:Profissao;
  listaProfissoes:Profissao[] = [
    {id:'001', nome:'Pedreiro', salario:700},
    {id:'002', nome:'Carpinteiro', salario:900},
    {id:'003', nome:'Motorista', salario:1000},
    {id:'004', nome:'Vendedor', salario:1200}
  ];

  categorias:any;
  listaCategorias:Categoria[] = [
    {idCategoria:'001', descricao:'Homens', idCategoriaPai:'', subCategorias:[]},
    {idCategoria:'002', descricao:'Calças', idCategoriaPai:'001', subCategorias:[]},
    {idCategoria:'003', descricao:'Camisas', idCategoriaPai:'001', subCategorias:[]},
    {idCategoria:'004', descricao:'Mulher', idCategoriaPai:'', subCategorias:[]},
    {idCategoria:'005', descricao:'Vestidos', idCategoriaPai:'004', subCategorias:[]},
    {idCategoria:'006', descricao:'Saias', idCategoriaPai:'005', subCategorias:[]},
  ];

  constructor() {
    this.profissaoSelecionada = new Profissao();
    this.profissaoSelecionada.id = '003';

    this.categorias = this.ordenarArrayCategorias(this.listaCategorias, '');
    console.log(this.categorias)
  }

  ngOnInit() {

  }

  apresentarNome(){
    console.log('Nome: ' + this.profissaoSelecionada.nome)
  }

  ordenarArrayCategorias(listaCategorias: Categoria[], idCategoriaPai: string):any[] {
    var categoriasList:any[] = [];

    for(let categoria of listaCategorias){
      if(categoria.idCategoriaPai == idCategoriaPai){
        categoria.subCategorias = this.ordenarArrayCategorias(listaCategorias, categoria.idCategoria)
        categoriasList.push(categoria)
      }
    }
    return categoriasList;
  }

  onFileChange(event){
    var files:File[] = event.target.files;
    if(files && files.length > 0) {
      for(let file of files){
        this.onloadArquivo(file) // método necessário para quebrar assincronicidade do onload()
      }
    }
  }

  onloadArquivo(file:File){
    var reader = new FileReader();
    reader.onload = () => {
      this.imgBase64.push(reader.result.split(',')[1])
      console.log(this.imgBase64);
    }
    reader.readAsDataURL(file);
  }

}
