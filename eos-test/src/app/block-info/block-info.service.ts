import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BlockInfoResource } from './block-info.resource';
import { BlockInfoResponse } from './BlockInfoResponse';
import {GetInfoResult} from 'eosjs/dist/eosjs-rpc-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlockInfoService {

  constructor(private _blockInfoResource: BlockInfoResource) { }

  public getBlockInfo() {
    this._blockInfoResource.getBlockInfo().then((data: GetInfoResult) => {
      console.log(data);
    });
  }
}
