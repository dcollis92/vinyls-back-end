import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', recordsCtrl.getRecord)
router.get('/recordsdb', recordsCtrl.getDbRecords)
router.get('/:id', recordsCtrl.recordDetails)

router.use(decodeUserFromToken)
router.post('/:id/ratings', checkAuth, recordsCtrl.addRating)
router.post('/:id/comments', checkAuth, recordsCtrl.createComment)
router.put('/:id/comments/:commentId', checkAuth, recordsCtrl.editComment)
router.delete('/:id/comments/:commentId', checkAuth, recordsCtrl.deleteComment)

export {
  router
}