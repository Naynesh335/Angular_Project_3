import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusomerLoginComponent } from './cusomer-login.component';

describe('CusomerLoginComponent', () => {
  let component: CusomerLoginComponent;
  let fixture: ComponentFixture<CusomerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusomerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
