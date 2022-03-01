import { APIfeatures } from "../lib/features";
import Contact from "../models/contactModel";

const contactCtr = {
    getContact: async (req, res) => {
        try {
            const contact = await Contact.find()
            return res.status(200).json(contact)
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    addContact: async (req, res) => {
        try {
            const { name, email, message } = req.body
            const newContact = new Contact({
                name, email, message
            })
            await newContact.save()
            return res.status(200).json(newContact)
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

export default contactCtr