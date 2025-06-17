import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-content',
  standalone: true,
  imports: [],
  templateUrl: './services-content.component.html',
  styleUrls: ['../../../../global.scss','./services-content.component.scss', ]
})
export class ServicesContentComponent {
  constructor(private route: ActivatedRoute) {}
    @Input() Title:String = ""
    @Input() Subtitle:String = ""
    @Input() FirstResume:String = ""
    @Input() Image:String = ""
    @Input() SrcImage:String = ""
    @Input() SecondResume:String = ""
    @Input() ThirdResume:String = ""
    @Input() FourResume:String = ""
    @Input() AvaliationFormat:String= ""
    @Input() WhatGet1:String = ""
    @Input() WhatGet2:String = ""
    @Input() WhatGet3:String = ""
    @Input() WhatGet4:String = ""
    @Input() WhatGet5:String = ""

    rota:String =""
    ngOnInit() {
    this.rota = this.route.snapshot.routeConfig?.path || '';
    console.log("Rota atual:", this.rota);

  }

  changeContent(){
    switch(this.rota){
      case "Fisioterapia":
        this.Title = "Fisioterapia"
        break
      case "Fonoaudiologia":
        this.Title = "Fonoaudiologia";
        break
    }
  }
}
