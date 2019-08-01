import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatSidenavModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
