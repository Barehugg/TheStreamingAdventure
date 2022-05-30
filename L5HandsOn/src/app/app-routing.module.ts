import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chap1-page2', loadChildren: './chap1-page2/chap1-page2.module#Chap1Page2PageModule' },
  { path: 'chapter2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chap2-page2', loadChildren: './chap2-page2/chap2-page2.module#Chap2Page2PageModule' },
  { path: 'chapter3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chap3-page2', loadChildren: './chap3-page2/chap3-page2.module#Chap3Page2PageModule' },
  { path: 'chapter4', loadChildren: './chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'chap4-page2', loadChildren: './chap4-page2/chap4-page2.module#Chap4Page2PageModule' },
  { path: 'chapter5', loadChildren: './chapter5/chapter5.module#Chapter5PageModule' },
  { path: 'chap5-page2', loadChildren: './chap5-page2/chap5-page2.module#Chap5Page2PageModule' },
  { path: 'chapter6', loadChildren: './chapter6/chapter6.module#Chapter6PageModule' },
  { path: 'chap6-page2', loadChildren: './chap6-page2/chap6-page2.module#Chap6Page2PageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
