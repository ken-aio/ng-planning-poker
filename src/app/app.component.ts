import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from './room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() roomName: string = '';

  constructor(public room: RoomService, private router: Router) {
  }

  public createRoom() {
    this.room.createNewRoom(this.roomName);
    this.router.navigate(['room',  this.room.roomCode]);
  }
}
