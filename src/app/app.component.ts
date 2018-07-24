import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; // 追加
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Observable<{}>;
  title = 'app';

  constructor(db: AngularFireDatabase) {
    this.item = db.object('item').valueChanges();
  }
}
