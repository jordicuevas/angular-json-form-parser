import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../globalServices/http.service'
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    public toastr: ToastrService,
    public _http: HttpService) { }

saveClients(obj) {
  console.log(obj)
  this.toastr.info( 'cliente guardado con exito');
}
clientsTypeAhead(data) {
  console.log(data)
   let url = '';
  let models = [
    {
      value: '1', 
      item : 'Chevrolet'
     },
    {
      value: '2',
      item : 'Mercedes'
    }
   
  ];
  let search = models.filter( model => {
   return Object.keys(model).some(k => model[k].toLowerCase().includes(data.toLowerCase()));
    //  return  model.item === data 
  });
    return search;
  /*this._http.fillTypeAhead(url).subscribe((response) => {
     return response;
  });*/
}

}
