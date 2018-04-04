import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterHttpServiceComponent } from './better-http-service.component';

describe('BetterHttpServiceComponent', () => {
  let component: BetterHttpServiceComponent;
  let fixture: ComponentFixture<BetterHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
