import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureUserListComponent } from './feature-user-list.component';

describe('FeatureUserListComponent', () => {
  let component: FeatureUserListComponent;
  let fixture: ComponentFixture<FeatureUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUserListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
