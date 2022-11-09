import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsResolver } from './reslovers/AllPosts.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      Posts: PostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
