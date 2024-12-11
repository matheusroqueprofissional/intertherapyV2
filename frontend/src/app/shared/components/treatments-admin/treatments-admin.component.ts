import { Component, Input } from '@angular/core';
import { StorageService } from '../../services/adminService/storage/storage.service';

@Component({
  selector: 'app-treatments-admin',
  standalone: true,
  imports: [],
  templateUrl: './treatments-admin.component.html',
  styleUrls: ['../../../global.scss','./treatments-admin.component.scss']
})
export class TreatmentsAdminComponent {
  @Input() title: string = '';
  @Input() imageUrl:string = '';
  @Input() image:string = '';
  @Input() description:string = '';
  images: { name: string; url: string; timeCreated: string }[] = [];
  constructor(private storageService:StorageService){}


  deletar(){
    console.log("deletando");
  }

}
