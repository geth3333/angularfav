import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarcadorComponent } from './delete-marcador.component';

describe('DeleteMarcadorComponent', () => {
  let component: DeleteMarcadorComponent;
  let fixture: ComponentFixture<DeleteMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
