import {Component, Input, OnInit} from '@angular/core';
import {GetBlockResult, GetInfoResult} from "eosjs/dist/eosjs-rpc-interfaces";

@Component({
  selector: 'block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.less']
})
export class BlockListComponent implements OnInit {

  @Input() data: GetBlockResult[];

  constructor() { }

  ngOnInit() {
  }

}
