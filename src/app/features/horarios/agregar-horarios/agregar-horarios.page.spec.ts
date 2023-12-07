import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarHorariosPage } from './agregar-horarios.page';

describe('AgregarHorariosPage', () => {
  let component: AgregarHorariosPage;
  let fixture: ComponentFixture<AgregarHorariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
