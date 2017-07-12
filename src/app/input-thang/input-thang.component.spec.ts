import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputThangComponent } from './input-thang.component';

describe('InputThangComponent', () => {
  let component: InputThangComponent;
  let fixture: ComponentFixture<InputThangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
