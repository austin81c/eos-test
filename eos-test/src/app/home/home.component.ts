import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BlockInfoService} from '../block-info/block-info.service';
import {Subscription} from 'rxjs';
import {GetBlockResult} from 'eosjs/dist/eosjs-rpc-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  subscriptions: Subscription[] = [];
  blockListResult: GetBlockResult[] = [];

  constructor(private _blockInfoService: BlockInfoService, private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this._blockInfoService.getBlockInfo();
  }

  getBlockInfo() {
    this._blockInfoService.getLastNBlocks(10).then((data: GetBlockResult[]) => {
      this.blockListResult = data;
      console.log(data);
      this._changeDetectorRef.detectChanges();
    }, (e: any) => {
      console.log(e);
    });
  }

}
