import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvMainComponent } from './ov-main/ov-main.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PaymentComponent } from './payment/payment.component';
import { UtilComponent } from './util/util.component';

const routes: Routes = [
  { path: '', redirectTo: 'ov-main', pathMatch: 'full' },
  { path: 'ov-main', component: OvMainComponent },
];

@NgModule({
  declarations: [OvMainComponent, IntroComponent, PaymentComponent, UtilComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OverViewMainModule {}
