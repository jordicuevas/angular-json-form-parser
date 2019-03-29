import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl, Form } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
declare var $: any;
@Component({
  selector: 'app-table-parser',
  templateUrl: './table-parser.component.html',
  styleUrls: ['./table-parser.component.css']
})
export class TableParserComponent implements OnInit {
  locale = 'es';
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  @Input('model') jsonData:any
  searchForm: FormGroup;
  public filters;
  public eyeClass;
  public tableData;
  public tableKeys;
  public showEye = true;
  public hideEye = false;
  public items;
  public p;
  public showPagination : boolean;
  public sortArrayUp: boolean;
  public sortArrayDown;
  public isSortable: boolean;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',

  };

  constructor( public fb: FormBuilder, private localeService: BsLocaleService) {

   }

  parseSearchForm () {
    let formSearchData = this.searchForm.value;
    console.log(formSearchData);
    let howManyFilters = Object.keys(formSearchData).length;
    for ( let i = 0 ; i < howManyFilters ; i++ ) {
       let fields = Object.keys(formSearchData)[i];
     //  console.log(typeof Object.values(formSearchData)[i]);
       if (typeof Object.values(formSearchData)[i] === 'object') {
          console.log(Object.values(formSearchData)[i]);
       }
    }
  }
  reverseTable(option) {
    this.tableData.data.reverse();
    if ( option === 'down' ) {
      this.sortArrayUp = true;
      this.sortArrayDown = false;
    } else {
      this.sortArrayUp = false;
      this.sortArrayDown = true;
    }
  }
  hideColumns(column) {
    if ($('#' + column + '_i').hasClass('fa-eye') ) {
      setTimeout(() => {
        $('table .' + column).fadeOut(300);
        $('#' + column + '_i').removeClass('fa-eye').addClass('fa-eye-slash');
      }, 1000);
    } else {
      setTimeout(() => {
        $('table .' + column).fadeIn(300);
        $('#' + column + '_i').removeClass('fa-eye-slash').addClass('fa-eye');
      }, 1000);
    }
  }
  moveColumnsLeft(from) {
      console.log(from);
      let rows = $('tr', '.table');
      let cols;
      rows.each(function() {
        cols = $(this).children('th, td');
        cols.eq(from).detach().insertBefore(cols.eq(from - 1));
      });

  }
  moveColumnsRight(from) {
    console.log(from);
    let rows = $('tr', '.table');
    let cols;
    rows.each(function() {
      cols = $(this).children('th, td');
      cols.eq(from).detach().insertAfter(cols.eq(from + 1));
    });

  }
  sortColumns (column) {
    let elements = []
    let findElementPosition = []
    let newArrayPosition = []
    let array =  this.tableData.columnsName;
    for ( let i = 0 ; i < this.tableData.columnsName.length ; i++ ) {
        elements.push ((array[i].title));
     }
      let indexOfELement = elements.indexOf(column);
       elements.splice(indexOfELement, 1);
      if (indexOfELement !== -1) {
          elements[indexOfELement + 1 ] = column;
      }
    //this.tableData.columnsName = elements;

    console.log(elements);

  }
 ngOnInit() {

    this.tableData = this.jsonData[0];
    this.tableKeys = this.tableData.data;
    this.items = this.tableData.table.itemsPerPage;
    this.isSortable = this.tableData.table.sortable;
    this.showPagination = this.tableData.table.showPagination;
    this.sortArrayDown = true;
    this.sortArrayUp = false;
    this.filters = this.tableData.filters
    this.searchForm = this.fb.group(this.tableData.reactiveFields);
    this.localeService.use(this.locale);
    this.bsConfig = Object.assign({}, { rangeInputFormat: 'DD-MM-YYYY' , dateInputFormat: 'DD-MM-YYYY', containerClass: this.colorTheme });
    this.sortColumns('Apellido');
  }

}
