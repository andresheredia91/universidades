import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { IonicModule } from '@ionic/angular';

import { UniversidadesComponent } from './universidades.component';

describe('UniversidadesComponent', () => {
  let component: UniversidadesComponent;
  let fixture: ComponentFixture<UniversidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



 