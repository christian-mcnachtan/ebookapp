import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter13Page } from './chapter1-3.page';

describe('Chapter13Page', () => {
  let component: Chapter13Page;
  let fixture: ComponentFixture<Chapter13Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
