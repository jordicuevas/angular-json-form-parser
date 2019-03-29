import { Component, OnInit, Input  } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from '../../models/clients/clients.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-form-parser',
  templateUrl: './form-parser.component.html',
  styleUrls: ['./form-parser.component.css']
})
export class FormParserComponent  implements OnInit  {
   @Input('models') jsonData:any
   catalogForm : FormGroup;
   locale = 'es';
   colorTheme = 'theme-blue';
   bsConfig: Partial<BsDatepickerConfig>;
   public models;
   public returnTAdata;
   public typeAheadVisible: boolean;
   constructor(
     public fb: FormBuilder,
     public toastr: ToastrService,
     public clientsModule: ClientsService,
     private localeService: BsLocaleService) {

   }
   ngOnInit() {
    this.typeAheadVisible = true;
    this.models      = this.jsonData[0];
    this.catalogForm = this.fb.group(this.models.reactiveFields);
    this.localeService.use(this.locale);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  /*
   * Function: parseForm
   * parameters : valid ( if the form is valid)
   * description: gets the data object from the form and calls the save function
   *              on the respective service module
   */
  parseForm( valid ) {
    let saveFunction =  this.models.form.saveFunction;
    let moduleName = this.models.form.moduleName;
    let data = this.catalogForm.value; //gets the form object
    if ( valid ) {
      this[moduleName][saveFunction](data);
     } else {
       this.toastr.error('complete los campos requeridos marcados con un (*)', 'ERROR', { progressBar: true })
     }
  }

  parseTypeAhead(data, functionName) {
     let typeAheadData = data.target.value;
     let moduleName = this.models.form.moduleName;
    if ( typeAheadData != '') {
       this.returnTAdata =  this[moduleName][functionName](typeAheadData);
       this.typeAheadVisible = false;
    } else {
      this.returnTAdata = [];
      this.typeAheadVisible = true;

    }
  }

  getTypeAheadData(value, text, textField, codeField) {
    console.log(value);
    this.typeAheadVisible = true;
    this.catalogForm.controls[codeField].setValue(value);
    this.catalogForm.controls[textField].setValue(text);

  }
  clearCache(){}

}
