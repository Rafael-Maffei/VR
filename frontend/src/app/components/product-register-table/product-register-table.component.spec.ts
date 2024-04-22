import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterTableComponent } from './product-register-table.component';

describe('ProductRegisterTableComponent', () => {
  let component: ProductRegisterTableComponent;
  let fixture: ComponentFixture<ProductRegisterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRegisterTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRegisterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
