
export class UnauthorizedError extends Error {
    statusCode = "0";
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        this.statusCode = "401";
    }
}

export class ForbiddenError extends Error {
    statusCode = "0";
    constructor(message) {
        super(message);
        this.name = "ForbiddenError";
        this.statusCode = "403";
    }
}

export class NotFoundError extends Error {
    statusCode = "0";
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = "404";
    }
}

export class BadRequestError extends Error {
    statusCode = "0";
    constructor(message) {
        super(message);
        this.name = "BadRequestError";
        this.statusCode = "400";
    }
}

export class InternalServerError extends Error {
    statusCode = "0";
    constructor(message) {
        super(message);
        this.name = "InternalServerError";
        this.statusCode = "500";
    }
}
