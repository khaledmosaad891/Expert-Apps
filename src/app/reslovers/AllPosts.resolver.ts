import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Posts } from '../interfaces/posts';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostsResolver implements Resolve<Observable<Posts>> {
    constructor(private service: PostsService) { }
    resolve(): Observable<Posts> {
        return this.service.getAllPosts();
    }
}