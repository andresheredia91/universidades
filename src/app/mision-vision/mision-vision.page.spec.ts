import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisionVisionPage } from './mision-vision.page';

describe('MisionVisionPage', () => {
  let component: MisionVisionPage;
  let fixture: ComponentFixture<MisionVisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionVisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisionVisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
