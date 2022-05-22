import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  item: any;
  image: any;
  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.item = {
      title: 'Hot Hits Vietnam', 
      description: 'Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Sơn Tùng M-TP',
      image: 'https://i.scdn.co/image/617a2443d0de8c9c8689d9eed8b86edaf9d2a33b'
    }
  }

  mouseEnter() {
    debugger
    this.hidden = false;
  }

  mouseLeave() {
    this.hidden = true;
  }
}
