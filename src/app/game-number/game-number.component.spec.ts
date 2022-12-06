import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNumberComponent } from './game-number.component';

describe('GameNumberComponent', () => {
  let component: GameNumberComponent;
  let fixture: ComponentFixture<GameNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
