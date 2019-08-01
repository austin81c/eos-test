import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BlockInfoResource } from './block-info.resource';
import {BlockInfoResponse} from './BlockInfoResponse';

@Injectable({
  providedIn: 'root'
})
export class BlockInfoService {

  constructor(private _blockInfoResource: BlockInfoResource) { }

  public getBlockInfo() {
    this._blockInfoResource.getBlockInfo().subscribe((data: BlockInfoResponse) => {
      console.log(data);
    });
  }
}
