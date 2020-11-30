import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
	schemas: [NO_ERRORS_SCHEMA],
	declarations: [AppComponent, HomeComponent],
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
