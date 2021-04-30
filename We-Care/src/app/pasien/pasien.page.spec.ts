import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasienPage } from './pasien.page';

describe('PasienPage', () => {
  let component: PasienPage;
  let fixture: ComponentFixture<PasienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasienPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
