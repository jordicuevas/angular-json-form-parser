import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParserComponent } from './table-parser.component';

describe('TableParserComponent', () => {
  let component: TableParserComponent;
  let fixture: ComponentFixture<TableParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
