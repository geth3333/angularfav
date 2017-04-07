import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoritosComponent } from './add-favoritos.component';

describe('AddFavoritosComponent', () => {
  let component: AddFavoritosComponent;
  let fixture: ComponentFixture<AddFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
