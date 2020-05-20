import { Component, OnInit, Input } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input("userName")
  userName: string;
  response: any;
   
  constructor(private svc: TestService,private http:HttpClient) { 
    this.svc.printToConsole("From inner Module View")
  }

  ngOnInit(): void {

   }

    public search(){
      let obs = this.http.get('https://api.github.com/users/' + this.userName);
      obs.subscribe((response)=>{
        this.response = response ;
        console.log(response)
      });
  }

}
