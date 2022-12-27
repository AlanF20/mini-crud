import { Router } from 'express'
import { addUser, deleteUser, getUser, getUsers } from '../controllers/user.controllers.js'

const router = Router()

router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUser)
router.post('/usuarios', addUser)
router.delete('/usuarios/:id', deleteUser)

export default router
