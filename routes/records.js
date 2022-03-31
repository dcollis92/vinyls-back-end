import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', recordsCtrl.getRecord)
router.get('/recordsdb', recordsCtrl.getDbRecords)
router.get('/:id', recordsCtrl.recordDetails)

router.use(decodeUserFromToken)
router.post('/:id/comments', checkAuth, recordsCtrl.createComment)

export {
  router
}