import { Request, Response, NextFunction } from "express";

import { constants } from '../constants'

export const errorHandler = (err : Error, req :Request, res : Response, next : NextFunction) => {
    const status = res.statusCode ? res.statusCode : 500;
    switch (status) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stack: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stack: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "unauthorized",
                message: err.message,
                stack: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stack: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stack: err.stack,
            });
            break;
        default:
            console.log("No error, all good");
            break;
            
    }


}

