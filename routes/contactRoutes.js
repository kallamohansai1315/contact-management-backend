const validateContact = require('../middleware/validateContact');

const express = require('express');
const router = express.Router();

const {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
    searchContacts
} = require('../controllers/contactController');

// Search contacts
router.get('/search', searchContacts);

// Get all contacts
router.get('/', getContacts);

// Get contact by ID
router.get('/:id', getContactById);

router.post('/', validateContact, createContact);
router.put('/:id', validateContact, updateContact);

// Delete contact
router.delete('/:id', deleteContact);

module.exports = router;