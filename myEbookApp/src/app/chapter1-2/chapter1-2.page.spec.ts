import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter12Page } from './chapter1-2.page';

describe('Chapter12Page', () => {
  let component: Chapter12Page;
  let fixture: ComponentFixture<Chapter12Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
