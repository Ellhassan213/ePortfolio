import tata from '../../shared/assets/images/tata.png'
import rlefm from '../../shared/assets/images/rlefm.png'
import maxon from '../../shared/assets/images/maxon.png'
import rdmPod from '../../shared/assets/images/rdmPod.png'
import gradStudent from '../../shared/assets/images/gradStudent.png'
import pShopping from '../../shared/assets/images/pShopping.png'
import { CategoryI } from './models/workCategory'
import {
  ttlPath,
  rlePath,
  maxonPath,
  rdmPath,
  academicConsultingPath,
  personalShoppingPath
} from '../../shared/constants/routes'

export const headerCaption = `Whatever you do, ask yourself...
  "Am I helping others and bringing good into their lives,
  or is this only in my best interest?"`

export const categories: CategoryI = {
  automotive: [
    {
      name: 'RLE Futuremotiv',
      link: rlePath,
      image: rlefm
    },
    {
      name: 'Tata Technologies',
      link: ttlPath,
      image: tata
    },
    {
      name: 'Maxon Motor',
      link: maxonPath,
      image: maxon
    },
    {
      name: 'RDM',
      link: rdmPath,
      image: rdmPod
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
