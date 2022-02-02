import menAtWork from '../../shared/assets/images/menAtWork.png'
import gradStudent from '../../shared/assets/images/gradStudent.png'
import pShopping from '../../shared/assets/images/pShopping.png'
import ikigai from '../../shared/assets/images/ikigai.png'

import { CategoryI } from './models/workCategory'
import {
  empHistoryPath,
  academicConsultingPath,
  personalShoppingPath,
  ikigaiPath
} from '../../shared/constants/routes'

export const headerCaption = `Whatever you do, ask yourself...
  "Am I helping others and bringing good into their lives,
  or is this only in my best interest?"`

export const categories: CategoryI = {
  me: [
    {
      name: 'My Ikigai',
      link: ikigaiPath,
      image: ikigai
    }
  ],
  employment: [
    {
      name: 'Employment History',
      link: empHistoryPath,
      image: menAtWork
    }
  ],
  consulting: [
    {
      name: 'Academic Consulting',
      link: academicConsultingPath,
      image: gradStudent
    }
  ],
  shopping: [
    {
      name: 'Personal Shopping',
      link: personalShoppingPath,
      image: pShopping
    }
  ]
}
