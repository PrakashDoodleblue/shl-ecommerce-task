/**
 * Base controller class which inherits all util methods
 * to use in the derived classes
 */
class BaseController {

    constructor() {
        this.statusCode = statusCode;
        this.resposne = resposne;
    }


    internalServerError = (req, res, e) => {
        if (e.code === 'ER_DUP_ENTRY') {
            e.message = this.messageTypes.passMessages.userExists;
            return this.errors(req, res, this.status.HTTP_BAD_REQUEST, this.exceptions.badRequestErr(req, e));
        }

        error(e);
        this.errors(req, res, this.status.HTTP_INTERNAL_SERVER_ERROR, this.exceptions.internalServerErr(req, e));
    };

    userInvalidToken = (req, res) => {
        this.errors(req, res, this.status.HTTP_UNAUTHORIZED, this.exceptions.unauthorizedErr(req, {
            message: this.messageTypes.authMessages.userInvalidToken
        }));
    };

    userNotFound = (req, res, errors) => {
        this.errors(req, res, this.status.HTTP_BAD_REQUEST, this.exceptions.badRequestErr(req, {
            message: this.messageTypes.authMessages.userNotFound
        }));
    };

    dataNotFound = (req, res, errors) => {
        this.errors(req, res, this.status.HTTP_BAD_REQUEST, this.exceptions.badRequestErr(req, {
            message: this.messageTypes.authMessages.requestedNotFound
        }));
    };

    userNotFoundWithMessage = (req, res, errors) => {
        this.errors(req, res, this.status.HTTP_BAD_REQUEST, this.exceptions.badRequestErr(req, {
            message: errors.message
        }));
    };

    userIllegalAccess = (req, res) => {
        this.errors(req, res, this.status.HTTP_FORBIDDEN, this.exceptions.unauthorizedErr(req, {
            message: this.messageTypes.authMessages.userIllegalAccess
        }));
    };
}
module.exports = BaseController;