import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class UIService {
    loadingStateChanged = new Subject<boolean>();
}
