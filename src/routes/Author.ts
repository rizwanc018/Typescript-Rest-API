import express from 'express'
import controller from '../controllers/Author'

const router = express.Router()

router.post('/create', controller.createAuthor)
router.get('/all', controller.readAll)
router.get('/:authorId', controller.readAuthor)
export = router