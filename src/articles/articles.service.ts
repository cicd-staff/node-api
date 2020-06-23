import { Injectable } from '@nestjs/common';
import { Article } from './classes/article.class';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [];

  create(article: CreateArticleDto): Article {
    this.articles.push(article);
    return article;
  }

  findOne(id: number): Article {
    return this.articles[id];
  }
}
