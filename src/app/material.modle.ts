import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatInputModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  MatToolbarModule,
  MatButtonModule,MatMenuModule,MatSidenavModule,MatIconModule,MatListModule,MatTableModule,
  MatInputModule,
  MatCardModule
]
@NgModule({
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule { }