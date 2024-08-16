import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningTabComponent } from './winning-tab.component';

describe('WinningTabComponent', () => {
  let component: WinningTabComponent;
  let fixture: ComponentFixture<WinningTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinningTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinningTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
