import HttpError from "http-errors";

// regular expressions: https://regex101.com/
const validateUserEmail = (req, res, next) => {
    const body = req.body;

    if (body.username) {
        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(body.username)) {
            next();
        } else {
            next(HttpError(400, { message: 'Error formato username' }))
        }

    }
}

export default {
    validateUserEmail
};