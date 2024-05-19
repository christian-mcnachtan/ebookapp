import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cover', pathMatch: 'full' },
  { path: 'cover', loadChildren: () => import('./cover/cover.module').then(m => m.CoverPageModule) },
  { path: 'contents', loadChildren: () => import('./contents/contents.module').then(m => m.ContentsPageModule) },
  { path: 'chapter1', loadChildren: () => import('./chapter1/chapter1.module').then(m => m.Chapter1PageModule) },
  { path: 'chapter2', loadChildren: () => import('./chapter2/chapter2.module').then(m => m.Chapter2PageModule) },
  { path: 'chapter3', loadChildren: () => import('./chapter3/chapter3.module').then(m => m.Chapter3PageModule) },
  { path: 'chapter4', loadChildren: () => import('./chapter4/chapter4.module').then(m => m.Chapter4PageModule) },
  { path: 'chapter5', loadChildren: () => import('./chapter5/chapter5.module').then(m => m.Chapter5PageModule) },
  
   
  {
    path: 'chapter1-2',
    loadChildren: () => import('./chapter1-2/chapter1-2.module').then( m => m.Chapter12PageModule)
  },
  {
    path: 'chapter1-3',
    loadChildren: () => import('./chapter1-3/chapter1-3.module').then( m => m.Chapter13PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
