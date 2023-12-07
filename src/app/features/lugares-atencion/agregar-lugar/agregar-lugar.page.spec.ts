import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarLugarPage } from './agregar-lugar.page';

describe('AgregarLugarPage', () => {
  let component: AgregarLugarPage;
  let fixture: ComponentFixture<AgregarLugarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
