import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationListComponent } from './components/animation-list/animation-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KeyframesComponent } from './components/keyframes/keyframes.component';
import { LeaveInComponent } from './components/leave-in/leave-in.component';
import { MultipleStateComponent } from './components/multiple-state/multiple-state.component';


const routes: Routes = [
    { path: '', redirectTo: 'leave-in', pathMatch: 'full' },
    { path: 'leave-in', component: LeaveInComponent },
    { path: 'multiple-state', component: MultipleStateComponent },
    { path: 'keyframes', component: KeyframesComponent },
    { path: 'animation-list', component: AnimationListComponent },
    { path: 'gallery', component: GalleryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
