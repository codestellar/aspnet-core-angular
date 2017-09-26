import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    apiValues: string[] = [];
    constructor(private _http: Http) {
        this._http.get('/api/customer').subscribe(
            values => {
                this.apiValues = values.json() as string[];
            }
        )
    }
}
