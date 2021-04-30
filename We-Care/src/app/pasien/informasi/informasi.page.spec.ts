import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformasiPage } from './informasi.page';

describe('InformasiPage', () => {
  let component: InformasiPage;
  let fixture: ComponentFixture<InformasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
