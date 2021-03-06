import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { DeveloperComponent } from './developer/developer.component';
import { DesignerComponent } from './designer/designer.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectManagerComponent,
    DeveloperComponent,
    DesignerComponent,
    EmployeeFormComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
