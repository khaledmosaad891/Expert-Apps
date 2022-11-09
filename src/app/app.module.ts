import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PostsResolver } from './reslovers/AllPosts.resolver';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    FooterComponent,
    AddPostsComponent,
    ViewUserComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule ,
    MatInputModule,
    MatButtonModule,
    MatCardModule
],
 
  providers: [PostsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
