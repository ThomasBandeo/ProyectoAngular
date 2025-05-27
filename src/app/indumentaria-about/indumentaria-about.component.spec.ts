import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndumentariaAboutComponent } from './indumentaria-about.component';

describe('IndumentariaAboutComponent', () => {
  let component: IndumentariaAboutComponent;
  let fixture: ComponentFixture<IndumentariaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndumentariaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndumentariaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
