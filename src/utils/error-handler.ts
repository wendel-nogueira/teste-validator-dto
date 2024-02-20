import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    let errorBody: any;

    try {
      errorBody = JSON.parse(error.message);
    } catch (e) {
      errorBody = error.message;
    }

    return response.status(400).json({
      Type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
      Title: "An error occurred while processing your request.",
      Status: 400,
      Instance: request.url,
      Detail: "An error occurred while processing your request.",
      Extensions: errorBody,
    });
  } else {
    return response.status(500).json({
      Type: "https://tools.ietf.org/html/rfc7231#section-6.6.1",
      Title: "An error occurred while processing your request.",
      Status: 500,
      Instance: request.url,
      Detail: "Internal Server Error. An error occurred while processing your request.",
    });
  }
};
