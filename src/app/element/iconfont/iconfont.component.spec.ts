import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconfontComponent } from './iconfont.component';

describe('IconfontComponent', () => {
  let component: IconfontComponent;
  let fixture: ComponentFixture<IconfontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconfontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
