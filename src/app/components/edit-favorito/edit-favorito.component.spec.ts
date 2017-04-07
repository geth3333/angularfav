import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavoritoComponent } from './edit-favorito.component';

describe('EditFavoritoComponent', () => {
  let component: EditFavoritoComponent;
  let fixture: ComponentFixture<EditFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
