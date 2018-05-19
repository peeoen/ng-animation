import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LeaveInComponent } from './components/leave-in/leave-in.component';
import { MaterialModule } from './modules/material.module';
import { NavComponent } from './nav/nav.component';
import { MultipleStateComponent } from './components/multiple-state/multiple-state.component';
import { KeyframesComponent } from './components/keyframes/keyframes.component';
import { AnimationListComponent } from './components/animation-list/animation-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GallerySlideComponent } from './components/gallery-slide/gallery-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeaveInComponent,
    MultipleStateComponent,
    KeyframesComponent,
    AnimationListComponent,
    GalleryComponent,
    GallerySlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
