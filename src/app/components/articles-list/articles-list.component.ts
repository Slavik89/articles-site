import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {

  articlesContent!: any[];

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {    
    this.articlesService.getAllArticles().subscribe(
      data => {
        console.log(this.articlesContent = data.results);
      }
    );
  }

}