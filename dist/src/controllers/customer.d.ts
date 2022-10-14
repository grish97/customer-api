import { Request, Response } from "express";
export declare function getCustomerCount(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getCustomerCount: typeof getCustomerCount;
};
export default _default;
