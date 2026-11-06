const Contact = require('../models/Contact');

// Get all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.getAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.getById(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create contact
exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                message: 'Name, email and phone are required'
            });
        }

        const id = await Contact.create({
            name,
            email,
            phone,
            address
        });

        res.status(201).json({
            message: 'Contact created successfully',
            id
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                message: 'Email already exists'
            });
        }

        res.status(500).json({ message: error.message });
    }
};

// Update contact
exports.updateContact = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                message: 'Name, email and phone are required'
            });
        }

        const result = await Contact.update(req.params.id, {
            name,
            email,
            phone,
            address
        });

        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({
            message: 'Contact updated successfully'
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                message: 'Email already exists'
            });
        }

        res.status(500).json({ message: error.message });
    }
};

// Delete contact
exports.deleteContact = async (req, res) => {
    try {
        const result = await Contact.delete(req.params.id);

        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({
            message: 'Contact deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search contacts
exports.searchContacts = async (req, res) => {
    try {
        const search = req.query.q;

        if (!search) {
            return res.status(400).json({
                message: 'Please provide a search term'
            });
        }

        const db = require('../config/db');

        const [contacts] = await db.query(
            `SELECT * FROM contacts
             WHERE name LIKE ? OR email LIKE ? OR phone LIKE ?`,
            [`%${search}%`, `%${search}%`, `%${search}%`]
        );

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};