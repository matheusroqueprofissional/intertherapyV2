import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
                loader: {
                  provide: TranslateLoader,
                  useClass: TranslateFakeLoader
                }
              })
  ]
})
export class TranslateModuleModule { }
