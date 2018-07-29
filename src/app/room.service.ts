import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '../../node_modules/angularfire2/database';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomRef: AngularFireObject<any>;
  room: Observable<any>;
  roomCode: string;

  constructor(public db: AngularFireDatabase) { }

  public createNewRoom(roomRefName: string) {
    this.roomCode = this.generateCode();
    this.roomRef = this.db.object(this.roomCode);
    this.roomRef.set({name: roomRefName});
  }

  public get(code: string) {
    this.roomRef = this.db.object(code);
    this.room = this.roomRef.valueChanges();
  }

  private generateCode(): string {
    const template = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // 桁数の定義
    const len = 32;

    // ランダムな文字列の生成
    let result = '';
    for (let i = 0; i < len; i++) {
      result += template.charAt(Math.floor(Math.random() * template.length));
    }
    return result;
  }
}
