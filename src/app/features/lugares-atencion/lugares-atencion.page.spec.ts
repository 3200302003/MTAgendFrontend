import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugaresAtencionPage } from './lugares-atencion.page';

describe('LugaresAtencionPage', () => {
  let component: LugaresAtencionPage;
  let fixture: ComponentFixture<LugaresAtencionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LugaresAtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
