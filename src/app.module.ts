import { Module } from '@nestjs/common'

import { BooksController } from './books/books.controller'

import { MongooseModule } from '@nestjs/mongoose'
import { BooksService } from './books/books.service'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/biblioteca', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
