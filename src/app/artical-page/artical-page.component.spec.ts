import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalPageComponent } from './artical-page.component';

describe('ArticalPageComponent', () => {
  let component: ArticalPageComponent;
  let fixture: ComponentFixture<ArticalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
