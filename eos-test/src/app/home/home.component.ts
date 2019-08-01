import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BlockInfoService} from '../block-info/block-info.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  subscriptions: Subscription[] = [];

  constructor(private _blockInfoService: BlockInfoService, private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {}

  getBlockInfo() {
    this._blockInfoService.getBlockInfo();
  }

}
