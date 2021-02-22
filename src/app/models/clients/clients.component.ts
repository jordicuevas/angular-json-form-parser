import { Component, OnInit } from '@angular/core';
import { FormParserComponent } from '../../utils/form-parser/form-parser.component'
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public models = [];
  public reactiveFields = {};

  constructor() {}
  ngOnInit() {

  this.models = [{
      reactiveFields : {
            dni      : [''],
           name      : ['',  Validators.required],
       lastname      : ['',  Validators.required],
       datepicker    : ['',  Validators.required],
     daterangepicker : ['',  Validators.required],
       clientes      : ['',  Validators.required],
    clientsCodeInput : ['']

      },
      form :    {
          name : 'formClients',
          class: '',
          title: 'Registro de Usuarios',
           icon: 'fa fa-envelope-open',
   saveFunction: 'saveClients',
     moduleName: 'clientsModule'
      }  ,
      inputs : [
          {
                    type : 'text',
                    name : 'dni',
                      id : 'dni',
              inputClass : 'form-control',
            wrapperClass : 'form-group col-md-12',
                   label : 'DNI',
             placeholder : 'DNI del cliente',
                required : false,
                readOnly : false,
                errorMsg : 'solo se aceptan numeros'
           },
          {
                    type : 'text',
                    name : 'name',
                      id : 'name',
            wrapperClass : 'form-group col-md-12',
              inputClass : 'form-control',
                   label : 'Nombre',
             placeholder : 'Nombre del cliente',
                required : true,
                readOnly : false,
                errorMsg : 'solo se aceptan letras'


          },
          {
                    type : 'text',
                    name : 'lastname',
                      id : 'lastname',
            wrapperClass : 'form-group col-md-12',
              inputClass : 'form-control',
                   label : 'Apellido',
             placeholder : 'Apellido del cliente',
                required : true,
                readOnly : false,
                errorMsg : 'solo se aceptan letras'

          },
          {
                    type : 'typeahead',
                    name : 'clientes',
                      id : 'clientes',
            wrapperClass : 'form-group col-md-12',
              inputClass : 'form-control',
                   label : 'Clientes',
             placeholder : 'ingrese el nombre del cliente',
                required : true,
                readOnly : false,
                errorMsg : 'Seleccione un cliente',
           functionKeyUp : 'clientsTypeAhead',
           inputCodeName : 'clientsCodeInput'
          } ,
          {
                    type : 'datepicker',
                    name : 'datepicker',
                      id : 'datepicker',
            wrapperClass : 'form-group col-md-6',
              inputClass : 'form-control',
                   label : 'Fecha Inicio',
             placeholder : 'Fecha de inicio',
                required : true,
                readOnly : false,
                errorMsg : 'Tipo fecha',
                position : 'bottom'

          } ,
          {
                    type : 'daterangepicker',
                    name : 'daterangepicker',
                      id : 'daterangepicker',
            wrapperClass : 'form-group col-md-6',
              inputClass : 'form-control',
                   label : 'Rango de Fechas',
             placeholder : 'Rango de Fechas',
                required : true,
                readOnly : false,
                errorMsg : 'Rango de fecha',
                position : 'bottom'

          }],
      buttons: [
        {
                  type : 'button',
                  name : '',
                  id   : '',
            buttonType : 'submit',
            buttonLabel: 'enviar formulario',
            buttonClass: 'btn btn-primary',
            buttonClick: 'saveClients'
        },
        {
                  type : 'button',
                  name : '',
                  id   : '',
            buttonType : 'button',
            buttonLabel: 'limpiar formulario',
            buttonClass: 'btn btn-warning',
            buttonClick: 'clearCache'
      }]
  }] ;
  }
}
