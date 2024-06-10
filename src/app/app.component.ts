import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'articles-site';

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