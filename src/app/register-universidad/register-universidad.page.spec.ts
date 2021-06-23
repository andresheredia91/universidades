import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterUniversidadPage } from './register-universidad.page';

describe('RegisterUniversidadPage', () => {
  let component: RegisterUniversidadPage;
  let fixture: ComponentFixture<RegisterUniversidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUniversidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
