import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoAgendaPage } from './tipo-agenda.page';

describe('TipoAgendaPage', () => {
  let component: TipoAgendaPage;
  let fixture: ComponentFixture<TipoAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
