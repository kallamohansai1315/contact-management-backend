const db = require('../config/db');

const Contact = {

    getAll: async () => {
        const [rows] = await db.query(
            'SELECT * FROM contacts ORDER BY id DESC'
        );
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query(
            'SELECT * FROM contacts WHERE id = ?',
            [id]
        );
        return rows[0];
    },

    create: async (contact) => {
        const { name, email, phone, address } = contact;

        const [result] = await db.query(
            'INSERT INTO contacts (name, email, phone, address) VALUES (?, ?, ?, ?)',
            [name, email, phone, address]
        );

        return result.insertId;
    },

    update: async (id, contact) => {
        const { name, email, phone, address } = contact;

        const [result] = await db.query(
            'UPDATE contacts SET name=?, email=?, phone=?, address=? WHERE id=?',
            [name, email, phone, address, id]
        );

        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.query(
            'DELETE FROM contacts WHERE id=?',
            [id]
        );

        return result.affectedRows;
    }

};

module.exports = Contact;