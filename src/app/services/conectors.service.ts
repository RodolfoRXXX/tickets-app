import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorsService {

  //Observable para el sidenav de init y settings
  private _isOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isOpened$ : Observable<boolean> = this._isOpened.asObservable();

  //Observable para el largo de la pantalla
  private _screenLarge: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly screenLarge$ : Observable<boolean> = this._screenLarge.asObservable();

  //GETTERS
    getOpenedState(): Observable<boolean> {
      return this.isOpened$;
    }
    getScreenState(): Observable<boolean> {
      return this.screenLarge$;
    }

  


  //SETTERS
    setOpenedState(state: boolean) {
      this._isOpened.next(state);
    }
    setScreenState(state: boolean) {
      this._screenLarge.next(state);
    }

}
