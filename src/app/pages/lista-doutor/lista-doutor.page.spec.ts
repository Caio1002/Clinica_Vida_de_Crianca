import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDoutorPage } from './lista-doutor.page';

describe('ListaDoutorPage', () => {
  let component: ListaDoutorPage;
  let fixture: ComponentFixture<ListaDoutorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaDoutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
