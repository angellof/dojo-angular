import { Component, Input } from '@angular/core';

@Component({
  selector: 'da-photo-view',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent  {

  @Input() imageUrl: string = '';
}
