import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [
    CommonModule
  ]
})
export class PhotoModule {}
