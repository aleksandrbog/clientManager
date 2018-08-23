import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  MatToolbarModule,MatButtonModule,MatMenuModule,MatSidenavModule,MatIconModule
]
@NgModule({
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule { }