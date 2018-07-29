import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { RoomService } from '../room.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  item: Observable<{}>;

  @Input() roomName: string = '';

  ngOnInit() {
  }

  constructor(public room: RoomService, private router: Router) {
  }

  public createRoom() {
    this.room.createNewRoom(this.roomName);
    this.router.navigate(['room',  this.room.roomCode]);
  }

}
