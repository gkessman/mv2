import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlatformComponent } from './platform/platform.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CollectionsService } from './collections.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'collection', component: CollectionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlatformComponent,
    CollectionComponent,
    HomeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
