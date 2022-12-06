import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCustomComponent } from './p-custom.component';

describe('PCustomComponent', () => {
  let component: PCustomComponent;
  let fixture: ComponentFixture<PCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
