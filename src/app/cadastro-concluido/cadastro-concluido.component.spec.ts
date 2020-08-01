import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroConcluidoComponent } from './cadatro-concluido.component';

describe('CadatroConcluidoComponent', () => {
  let component: CadatroConcluidoComponent;
  let fixture: ComponentFixture<CadatroConcluidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadatroConcluidoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadatroConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
