import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadDoutorPage } from './cad-doutor.page';

describe('CadDoutorPage', () => {
  let component: CadDoutorPage;
  let fixture: ComponentFixture<CadDoutorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadDoutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
