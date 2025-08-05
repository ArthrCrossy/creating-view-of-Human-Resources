import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeApi } from './consume-api';

describe('ConsumeApi', () => {
  let component: ConsumeApi;
  let fixture: ComponentFixture<ConsumeApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumeApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
