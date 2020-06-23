import { ApiProperty } from '@nestjs/swagger';

export class Article {
  @ApiProperty({ example: 'Open API', description: 'The title of the Article' })
  title: string;

  @ApiProperty({ example: 'Build an Open API with NodeJS', description: 'The description of the Article' })
  description: string;
}
