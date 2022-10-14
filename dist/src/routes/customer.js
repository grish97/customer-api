import express from "express";
import customer from "../controllers/customer.js";
const router = express.Router();
router.post("/customer-count", customer.getCustomerCount);
export default router;
//# sourceMappingURL=customer.js.map