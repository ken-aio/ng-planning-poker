import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../node_modules/@angular/router';
import { RoomService } from '../room.service';

@Component({
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public roomCode: string;
  public roomName: string;

  constructor(private route: ActivatedRoute, public room: RoomService, private router: Router) { }

  ngOnInit() {
    console.log('welcome room');
    this.roomCode = this.route.params['value'].code;
    this.room.get(this.roomCode);
    this.room.room.subscribe(r => {
      if (r === null) {
        this.router.navigate(['/']);
        return;
      }
      this.roomName = r.name;
    });
  }
}
