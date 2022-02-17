import menAtWork from '../../shared/assets/images/menAtWork.png'
import gradStudent from '../../shared/assets/images/gradStudent.png'
import ikigai from '../../shared/assets/images/ikigai.png'
import books from '../../shared/assets/images/books.png'

import { CategoryI } from './models/workCategory'
import {
  empHistoryPath,
  ikigaiPath,
  ACSPath,
  educationPath
} from '../../shared/constants/routes'

export const headerCaption = `Whatever you do, ask yourself this...
  "Am I helping others, bringing them along with good intent,
  or is this only in my best interest?"`

export const categories: CategoryI = {
  personal: [
    {
      name: 'My Ikigai',
      link: ikigaiPath,
      image: ikigai
    }
  ],
  career: [
    {
      name: 'Education',
      link: educationPath,
      image: books
    },
    {
      name: 'Employment History',
      link: empHistoryPath,
      image: menAtWork
    }
  ],
  services: [
    {
      name: 'Academic Consulting and Services',
      link: ACSPath,
      image: gradStudent
    }
  ]
}
