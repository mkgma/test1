import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dataitem:any={};
  showlist: any;
  updateRecords:any ={
    "id":"",
    "firstname":"",
    "lastname":"",
    "email":"",
    "password":""
  };
  constructor(private service:MyserviceService){
    //this.getalldata();
  }
 ngOnInit(): void {
  throw new Error('Method not implemented.');
 }
  savedata()
{
  this.service.insert(this.dataitem).subscribe(data=>{
    console.log(data);
  },
  (error:any)=>
  {
    console.log(error);
  }
  )
}
deletedata(id:any)
{
  this.service.delete(id).subscribe(data=>{
    this.showlist=data;
  },
  (error:any)=>
  {
    console.log(error);
    
  }
  )
}
getdatabyid(id:any)
{
  this.service.getsbyid(id,this.dataitem).subscribe(data=>{
    console.log(data);
    this.updateRecords=data;
    
  },
  (error:any)=>
  {
    console.log(error);
  }
  )
}
//getalldata()
// {
//   this.service.getall(this.showlist).subscribe(data=>{
//     console.log(data);
//     this.showlist=data;
//    if(showlist.firstname=="Manish")
//    {
//     console.log("hello");
//    }
//    else{
//     console.log("error");
    
//    }
//   },
//   (error:any)=>
//   {
//     console.log(error);
//   }
//   )
// }
}
