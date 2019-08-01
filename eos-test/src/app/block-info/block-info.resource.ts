import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockInfoResource {

  constructor(private http: HttpClient) { }

  public getBlockInfo() {
    return this.http.get('https://api.eosnewyork.io/v1/chain/get_info');
  }
}
