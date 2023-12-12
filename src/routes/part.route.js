import express from 'express'

import {
  createPart,
  getParts,
  getPartById,
  deletePart,
  updatePart,
} from '../controller/parts.js'

const router = express.Router()

router.get('/', getParts) //basic get demonstrations

router.post('/', createPart) //basic post demonstration, I am also using the uuidv4 to give them unique ID (pls note that the ID is only available to the parts that will be added through this post method. It is not available for the parts that are already added in the DB using the global array)

router.get('/:id', getPartById) //basic get demonstration of a specific part through the ID

router.delete('/:id', deletePart) //basic demonstration of delete

router.patch('/:id', updatePart) //basic demonstration of update. note: for update, I have used patch here instead of put

export default router
