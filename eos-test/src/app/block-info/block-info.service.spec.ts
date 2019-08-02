import {TestBed} from '@angular/core/testing';

import {BlockInfoService} from './block-info.service';
import {BlockInfoResource} from './block-info.resource';

describe('BlockInfoService', () => {

  let blockInfoResource: BlockInfoResource;

  beforeEach(() => TestBed.configureTestingModule({providers: [BlockInfoResource]}));

  it('should be created', () => {
    const service: BlockInfoService = TestBed.get(BlockInfoService);
    expect(service).toBeTruthy();
  });
  it('should instantiate BlockInfoResource', () => {
    blockInfoResource = TestBed.get(BlockInfoResource);
    expect(blockInfoResource).toBeTruthy();
  });
});
