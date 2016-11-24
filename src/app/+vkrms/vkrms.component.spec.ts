/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VkrmsComponent } from './vkrms.component';

describe('VkrmsComponent', () => {
  let component: VkrmsComponent;
  let fixture: ComponentFixture<VkrmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkrmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
