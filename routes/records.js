import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'

const router = Router()

router.get('/', recordsCtrl.index)

export {
  router
}