const validateContact = (req, res, next) => {
    const { name, email, phone, address } = req.body;

    // Check required fields
    if (!name || !email || !phone) {
        return res.status(400).json({
            message: 'Name, email and phone are required'
        });
    }

    // Validate name
    if (typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({
            message: 'Name must contain at least 2 characters'
        });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
        return res.status(400).json({
            message: 'Please enter a valid email address'
        });
    }

    // Validate phone number
    const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;

    if (
        typeof phone !== 'string' ||
        !phoneRegex.test(phone.trim()) ||
        phone.replace(/\D/g, '').length < 7 ||
        phone.replace(/\D/g, '').length > 15
    ) {
        return res.status(400).json({
            message: 'Please enter a valid phone number'
        });
    }

    // Validate address
    if (address !== undefined && typeof address !== 'string') {
        return res.status(400).json({
            message: 'Address must be text'
        });
    }

    // Clean input values
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.phone = phone.trim();

    if (address !== undefined) {
        req.body.address = address.trim();
    }

    next();
};

module.exports = validateContact;