import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tech Talk - Dojo Angular Js';

  imageUrlTest: string = 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg'

  imagesList = ['https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg',
                'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg',
                'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg']

}
