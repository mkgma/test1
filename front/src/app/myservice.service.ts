import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  insert(data:any)
  {
    return this.http.post("http://localhost:8081/data/save",data);
  }
  delete(id:any)
  {
    return this.http.delete("http://localhost:8081/data/delete/"+id);
  }
  getsbyid(id:any, data:any)
  {
    return this.http.get("http://localhost:8081/data/get/"+id,data);
  }

  getall(data:any)
  {
    return this.http.get("http://localhost:8081/data/getall",data);
  }
}
