import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SobrePage } from './sobre.page';

describe('SobrePage', () => {
  let component: SobrePage;
  let fixture: ComponentFixture<SobrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobrePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
