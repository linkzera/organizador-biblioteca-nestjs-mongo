import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { BookDTO } from 'src/DTO/books.dto'
import { BooksService } from './books.service'

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks() {
    return [
      {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
      },
      {
        id: 2,
        title: 'Harry Potter and the Prisoner of Azkaban',
      },
    ]
  }

  @Post()
  saveBook(@Body() newBook: BookDTO) {
    return this.bookService.saveBook(newBook)
  }

  @Patch()
  updateBook() {
    return 'Livro atualizado com sucesso'
  }

  @Delete()
  deleteBook() {
    return 'Livro deletado com sucesso'
  }
}
