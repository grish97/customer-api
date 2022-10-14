import { Request, Response } from "express";

export async function getCustomerCount(req: Request, res: Response) {
  return res.status(401).json({
    count: 456464,
  });
}

export default {
  getCustomerCount: getCustomerCount,
};
