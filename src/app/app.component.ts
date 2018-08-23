import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { 
    // this.showConfig();
    this.handle();
  }
  title = 'epg';

  configUrl = 'http://www.movistarplus.es/programacion-tv/2018-08-23/?v=json';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };

  getConfig() {
    return this.http.get(this.configUrl, this.httpOptions);
  }

  showConfig() {
    this.getConfig()
      .subscribe(data => console.log(data));
  }

  handle = () => {
    const headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/vnd.piksel+json');

    const myInit = {
      headers,
      // mode: 'cors',
      method: 'GET',
      // cache: 'default'
    };

    var myRequest = new Request(this.configUrl, myInit);

    window.fetch(myRequest)
      .then(response => console.log('result', response))
      .catch(error => console.log('error', error));

  }

}
