import { TestBed } from '@angular/core/testing';

import { BlockInfoService } from './block-info.service';

describe('BlockInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockInfoService = TestBed.get(BlockInfoService);
    expect(service).toBeTruthy();
  });
});
