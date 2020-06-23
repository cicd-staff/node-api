import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { Article } from './classes/article.class';
import { CreateArticleDto } from './dto/create-article.dto';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiOperation({ summary: 'Create article' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Article,
  })
  findOne(@Param('id') id: string): Article {
    return this.articlesService.findOne(+id);
  }
}
