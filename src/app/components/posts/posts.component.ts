import { ViewUserComponent } from './../view-user/view-user.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddPostsComponent } from '../add-posts/add-posts.component';
import { MatSort } from '@angular/material/sort';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/interfaces/posts';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'body', 'title', 'icons'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  length!: number;
  faEye = faEye;
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  constructor(private route: ActivatedRoute, public dialog: MatDialog, public service: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.route.data.subscribe(res => {
      console.log(res)
      this.service.Posts = res['Posts'];
      console.log(this.service.Posts)

      this.length = this.service.Posts.length;
      this.service.dataSource = new MatTableDataSource<Posts>(this.service.Posts);
      this.length = this.service.Posts.length;
    });
  }

  ngAfterViewInit(): void {
    this.service.dataSource.paginator = this.paginator;
  }

  deleteById(id: number): void {
    this.service.deletePostById(id).subscribe(res => {
      if (res) {
        this.service.Posts = this.service.Posts.filter(res => res.id !== id);
        this.service.dataSource.data = this.service.Posts;
       this.length = this.service.Posts.length;

      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPostsComponent, {
      width: "50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.length = this.service.Posts.length;
    });
  }

  openDialogEdit(id: number) {
    const dialogRef = this.dialog.open(AddPostsComponent, {
      width: "50%",
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.length = this.service.Posts.length;
    });
  }
  viewUser() {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      width: "50%",
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.length = this.service.Posts.length;
    });
  }
}
