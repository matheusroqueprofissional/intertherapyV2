import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { Email } from '../../interfaces/email';
import { ContactService } from './Services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sendemailForm!:FormGroup
  email:Email | undefined
  constructor(private fb:FormBuilder,private contactService:ContactService){
    this.sendemailForm = this.fb.group({
      username:[this.email?.username, [Validators.minLength(4), Validators.required]],
      email:[this.email?.email,[Validators.minLength(4), Validators.required]],
      about:[this.email?.about,[Validators.minLength(4), Validators.required]],
      message:[this.email?.message,[Validators.minLength(4), Validators.required]],
    })
  }

  sendEmail(){
    const formData = this.sendemailForm.value;
    this.contactService.postSendEmail(formData).subscribe({
      next: ()=>{
        console.log("email enviado com sucesso");
      },
      error:(err)=>{
        console.log(formData)
        console.error("Erro ao enviar email:",err)
      }
    })
  }

}
