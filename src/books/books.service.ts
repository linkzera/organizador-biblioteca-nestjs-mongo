import { Injectable } from '@nestjs/common'
import { BookDTO } from 'src/DTO/books.dto'

@Injectable()
export class BooksService {
  saveBook(newBook: BookDTO) {
    return newBook
  }
}
