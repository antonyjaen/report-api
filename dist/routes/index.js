"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../ApiServices/Pages/routes"));
const router = (0, express_1.default)();
//,authUser("users"),
//todo apply middleware to all routes with session auth 
router.use('/pages', routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map