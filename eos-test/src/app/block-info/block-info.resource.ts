import { Injectable } from '@angular/core';
import { Api, JsonRpc, RpcError } from 'eosjs';
import {GetInfoResult} from 'eosjs/dist/eosjs-rpc-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlockInfoResource {

  private api: Api;

  constructor() {
    this.api = new Api({ rpc : new JsonRpc('https://api.eosnewyork.io', {fetch}),
      signatureProvider: null, // Cannot import JsSignatureProvider as it is not exposed properly. Leaving null.
      textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  }

  public getBlockInfo(): Promise<GetInfoResult> {
    return this.api.rpc.get_info();
  }
}
