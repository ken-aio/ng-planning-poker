import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../node_modules/@angular/router';
import { RoomService } from '../room.service';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material/dialog';

@Component({
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public roomCode: string;
  public roomName: string;
  public user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public room: RoomService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.roomCode = this.route.params['value'].code;
    this.room.get(this.roomCode);
    this.room.room.subscribe(r => {
      if (r === null) {
        this.router.navigate(['/']);
        return;
      }
      this.roomName = r.name;
    });

    this.user = this.userService.fetch();
    if (this.user.name == null) {
      setTimeout(() => {
        this.openDialog();
      }, 100);
    }
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
    });
  }
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: 'user-dialog.html',
})
export class UserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
