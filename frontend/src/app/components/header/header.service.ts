import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HeaderData>({
        title: '',
        icon: '',
        routeUrl: ''
    })

    constructor() {}

    get headerData(): HeaderData {
        return this._headerData.value
    }
    
    set headerData(headerData: HeaderData) {
        this._headerData.next(headerData)
    }
}