import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonStrComponent } from './button-str.component';

describe('ButtonStrComponent', () => {
  let component: ButtonStrComponent;
  let fixture: ComponentFixture<ButtonStrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
