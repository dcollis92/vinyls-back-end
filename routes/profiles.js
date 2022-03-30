import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'


import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)
router.post('/addRecord', checkAuth, profilesCtrl.addRecord)
router.patch('/master_id', checkAuth, profilesCtrl.removeRecord)


export { router }
