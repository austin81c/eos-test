import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BlockInfoResource } from './block-info.resource';
import { BlockInfoResponse } from './BlockInfoResponse';
import {GetBlockResult, GetInfoResult} from 'eosjs/dist/eosjs-rpc-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlockInfoService {

  getInfoData: GetInfoResult;

  constructor(private _blockInfoResource: BlockInfoResource) { }

  public getBlockInfo(): GetInfoResult {
    this._blockInfoResource.getBlockInfo().then((data: GetInfoResult) => {
      this.getInfoData = data;
      console.log(data);
      return data;
    }, (e: any) => {
      console.log (e);
    });

    return null;
  }

  public getBlock(id?: string): GetBlockResult {
    this._blockInfoResource.getBlock(id || this.getInfoData.head_block_id).then((data: GetBlockResult) => {
      console.log(data);
      return data;
    }, (e: any) => {
      console.log (e);
    });

    return null;
  }

  public async getLastNBlocks(n: number): Promise<GetBlockResult[]> {
    const blockArray: GetBlockResult[] = [];
    const getBlockPromise = await this._blockInfoResource.getBlockInfo();
    let getBlockId = getBlockPromise.head_block_id;
    for (let i = 0; i < n; i++) {
      const blockPromise = await this._blockInfoResource.getBlock(getBlockId);
      blockArray.push(blockPromise);;
      getBlockId = blockPromise.previous;
    }
    return blockArray;
  }

}
