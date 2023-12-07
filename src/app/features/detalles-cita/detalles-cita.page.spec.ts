import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesCitaPage } from './detalles-cita.page';

describe('DetallesCitaPage', () => {
  let component: DetallesCitaPage;
  let fixture: ComponentFixture<DetallesCitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
