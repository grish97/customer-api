import { NextFunction, Request, Response } from "express";
import { CorsOptions } from "cors";

export const allowedOrigins = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
];

export const credentials = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", "true");
  }
  next();
}

export const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: any) => {
    if (typeof origin === "string" && allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
