import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllocationComponent } from './allocation/allocation.component';
import { RouterModule } from '@angular/router';
import { allocationRoutes } from './allocation.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployees from './+state/employyes/employees.reducer';
import { EmployeesEffects } from './+state/employyes/employees.effects';
import { AllocationTreeComponent } from './allocation-tree/allocation-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(allocationRoutes),
    StoreModule.forFeature(
      fromEmployees.EMPLOYEES_FEATURE_KEY,
      fromEmployees.reducer
    ),
    EffectsModule.forFeature([EmployeesEffects]),
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [AllocationComponent, AllocationTreeComponent],
  exports: [AllocationComponent, AllocationTreeComponent],
})
export class AllocationModule {}
