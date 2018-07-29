import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Observable<{}>;

  @Input() roomName: string = '';

  constructor(public room: RoomService) {
  }

  public createRoom() {
    this.room.createNewRoom(this.roomName);
  }
}
