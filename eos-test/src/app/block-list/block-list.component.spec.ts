import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockListComponent } from './block-list.component';
import {MaterialModule} from '../material/material.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('BlockListComponent', () => {
  let component: BlockListComponent;
  let fixture: ComponentFixture<BlockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockListComponent ],
      imports: [ MaterialModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
