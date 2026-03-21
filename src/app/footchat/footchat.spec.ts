import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footchat } from './footchat';

describe('Footchat', () => {
  let component: Footchat;
  let fixture: ComponentFixture<Footchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footchat],
    }).compileComponents();

    fixture = TestBed.createComponent(Footchat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
