import { Component, OnInit } from '@angular/core';
import { TableParserComponent } from '../../utils/table-parser/table-parser.component'
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public model = [];
  public reactiveFields = {};
  constructor() { }

  ngOnInit() {
     let parseData = [{
       dni : '14941413',
       nombre : 'Jordi',
       apellido : 'Cuevas',
       telefono : '001',
       direccion: 'Parque residencial guayana casa 7 sector los kioscos',
       postal_code : '5001'
     },
      {
       dni : '9130329',
       nombre : 'Ana',
       apellido : 'Perez',
       telefono : '002',
        postal_code : '5001',

       direccion: 'Barrio Obrero'
     },
     {
       dni : '15774225',
       nombre : 'Maria',
       apellido : 'Ramirez',
       telefono : '003',
       postal_code : '5001',
       direccion: 'Pueblo Nuevo sector principal'
    }]
  this.model = [{
      reactiveFields : {
                     dni : [''],
                    name : [''],
                lastname : [''],
                telefono : [''],
                datefrom : [''],
               daterange : [''],
              dni_filter : [''],
             name_filter : [''],
         lastname_filter : [''],
         telefono_filter : [''],
         datefrom_filter : [''],
        daterange_filter : ['']

      },
    table: {
                name: 'Tabla de Usuarios',
                icon: 'fa fa-user-circle',
             caption: 'Tabla que muestra el listado de usuarios del sistema',
      showPagination: true,
         headerClass: 'thead-blue',
        itemsPerPage: 10,
            sortable: true
    },
    filters : [ {
               type : 'number',
               name : 'dni',
                 id : 'dni',
         inputClass : 'form-control',
       wrapperClass : 'form-group col-md-6',
        placeholder : 'DNI del cliente',
         filterType : 'normal',
                 min: '0',
                max : '5'
    }, {
               type : 'text',
               name : 'name',
                 id : 'name',
         inputClass : 'form-control',
       wrapperClass : 'form-group col-md-6',
        placeholder : 'Nombre del cliente',
         filterType : 'normal'
    }   ,  {
               type : 'datepicker',
               name : 'datefrom',
                 id : 'datefrom',
         inputClass : 'form-control',
       wrapperClass : 'form-group col-md-6',
        placeholder : 'Fecha de inicio',
          placement : 'bottom',
         filterType : 'date'
    },  {
               type : 'daterangepicker',
               name : 'daterange',
                 id : 'daterange',
         inputClass : 'form-control',
       wrapperClass : 'form-group col-md-6',
        placeholder : 'Rango de fechas',
          placement : 'bottom',
         filterType : 'date'
    }],
    columnsName : [
      {
          title : 'DNI',
           hide : 'dni'
      },
      {
        title : 'Nombre',
         hide : 'nombre'
      },
      {
        title : 'Apellido',
         hide : 'apellido'
      },
      {
        title : 'Telefono',
         hide : 'telefono'
      },
      {
        title : 'Direccion',
         hide : 'direccion'
      },
      {
        title : 'Codigo postal',
         hide : 'postal_code'
      }
    ],
    rowsName : [
      { title : 'dni' },
      { title : 'nombre' },
      { title : 'apellido'},
      { title : 'telefono'},
      { title : 'direccion'},
      { title : 'postal_code'}
    ],
    data: parseData
  }] ;
  }

}
