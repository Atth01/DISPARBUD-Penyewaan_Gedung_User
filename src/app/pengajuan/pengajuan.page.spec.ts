import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengajuanPage } from './pengajuan.page';

describe('PengajuanPage', () => {
  let component: PengajuanPage;
  let fixture: ComponentFixture<PengajuanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PengajuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
