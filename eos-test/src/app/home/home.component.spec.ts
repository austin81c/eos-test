import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {BlockInfoService} from '../block-info/block-info.service';
import {ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '../material/material.module';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let blockInfoService;
  let bisSpy;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    blockInfoService = jasmine.createSpyObj('BlockInfoService', ['getBlockInfo']);
    bisSpy = blockInfoService.getBlockInfo.and.returnValue({head_block_number: 'test'});
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ HomeComponent ],
      providers: [ {provide: BlockInfoService, useValue: blockInfoService}, ChangeDetectorRef ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call blockInfoService on instantiation', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(bisSpy).toHaveBeenCalled();
  });
});
