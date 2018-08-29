import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  MatToolbarModule,MatButtonModule,MatMenuModule,MatSidenavModule,MatIconModule,MatListModule
]
@NgModule({
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule { }