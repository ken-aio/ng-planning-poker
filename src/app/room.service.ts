import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  room: AngularFireObject<any>;
  roomCode: string;

  constructor(public db: AngularFireDatabase) { }

  public createNewRoom(roomName: string) {
    this.roomCode = this.generateCode();
    this.room = this.db.object(this.roomCode);
    this.room.set({name: roomName});
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
