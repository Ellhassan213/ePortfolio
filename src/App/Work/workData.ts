import menAtWork from '../../shared/assets/images/menAtWork.png'
import gradStudent from '../../shared/assets/images/gradStudent.png'
import pShopping from '../../shared/assets/images/pShopping.png'
import ikigai from '../../shared/assets/images/ikigai.png'

import { CategoryI } from './models/workCategory'
import {
  empHistoryPath,
  personalShoppingPath,
  ikigaiPath,
  ACSPath
} from '../../shared/constants/routes'

export const headerCaption = `Whatever you do, ask yourself...
  "Am I helping others and bringing good into their lives,
  or is this only in my best interest?"`

export const categories: CategoryI = {
  personal: [
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
  services: [
    {
      name: 'Academic Consulting and Services',
      link: ACSPath,
      image: gradStudent
    },
    {
      name: 'Personal Shopping',
      link: personalShoppingPath,
      image: pShopping
    }
  ]
}
