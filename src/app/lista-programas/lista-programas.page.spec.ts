import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaProgramasPage } from './lista-programas.page';

describe('ListaProgramasPage', () => {
  let component: ListaProgramasPage;
  let fixture: ComponentFixture<ListaProgramasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProgramasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProgramasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
