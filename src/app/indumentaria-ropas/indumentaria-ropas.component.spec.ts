import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndumentariaRopasComponent } from './indumentaria-ropas.component';

describe('IndumentariaRopasComponent', () => {
  let component: IndumentariaRopasComponent;
  let fixture: ComponentFixture<IndumentariaRopasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndumentariaRopasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndumentariaRopasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
