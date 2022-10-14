import { NextFunction, Request, Response } from "express";
import { CorsOptions } from "cors";
export declare const allowedOrigins: string[];
export declare const credentials: (req: Request, res: Response, next: NextFunction) => void;
export declare const corsOptions: CorsOptions;
