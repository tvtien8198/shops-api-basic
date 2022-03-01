import express from 'express'
import contactCtr from '../controllers/contactCtrl'
import { checkContactData } from '../middleware/validate'

const router = express.Router()

router.get('/contact', contactCtr.getContact)

router.post('/contact', checkContactData, contactCtr.addContact)

export default router