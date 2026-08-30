import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColourPalette } from './colour-palette';

describe('ColourPalette', () => {
  let component: ColourPalette;
  let fixture: ComponentFixture<ColourPalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourPalette],
    }).compileComponents();

    fixture = TestBed.createComponent(ColourPalette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
