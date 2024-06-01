import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export interface Book extends Document {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  author: object
  language: string
  pages: number
  releaseYear: number
  publisher: string
}
