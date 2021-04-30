import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageDokterPage } from './page-dokter.page';

describe('PageDokterPage', () => {
  let component: PageDokterPage;
  let fixture: ComponentFixture<PageDokterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDokterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageDokterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
