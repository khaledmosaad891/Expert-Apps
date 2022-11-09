import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  createPost!: FormGroup;
  submitted: boolean = false;
  length: any;
  service: any;
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    public dialogRef: MatDialogRef<AddPostsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initPostForm();
    if (this.data) {
      this.postsService.getPostById(this.data).subscribe(res => {
        this.createPost.patchValue(res);
      });
    };
  }

  initPostForm(): void {
    this.createPost = this.fb.group({
      title: ["", Validators.required],
      body: ["", Validators.required],
      id: ["", Validators.required]
    });
  };

  get f(): { [key: string]: AbstractControl } {
    return this.createPost.controls;
  }

  closeDailog(res: Posts) {
    this.dialogRef.close();
    if (!this.data) {
      this.postsService.Posts.unshift(res);
      this.postsService.dataSource.data = this.postsService.Posts;
    } else {
      let index = this.postsService.Posts.findIndex(res => res.id == this.data)
      this.postsService.Posts[index] = res;
      this.postsService.dataSource.data = this.postsService.Posts;
    }
    this.submitted = false;
  }

  Submit(): void {
    this.submitted = true;
    if (this.createPost.invalid) {
      return
    }
    if (!this.data) {
      this.postsService.addPost(this.createPost.getRawValue()).subscribe(res => {
        if (res) {
          this.closeDailog(res)
        };
      });
    } else {
      this.postsService.editPost(this.data, this.createPost.getRawValue()).subscribe(res => {
        if (res) {
          this.closeDailog(res)
        };
      });
    }
  };

}
