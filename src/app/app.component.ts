import { Component } from '@angular/core';
import { TEstService } from './testService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private testSer: TEstService,
    
  ) {}

  ngOnInit() {
    this.testSer.getALlData().subscribe(res => {
      console.log(res);
    })
  }


  title = 'GoldLiveAngularApp';
}


