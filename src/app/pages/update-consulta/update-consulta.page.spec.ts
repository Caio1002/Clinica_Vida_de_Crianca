import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateConsultaPage } from './update-consulta.page';

describe('UpdateConsultaPage', () => {
  let component: UpdateConsultaPage;
  let fixture: ComponentFixture<UpdateConsultaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
