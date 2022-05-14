"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagesRouter = (0, express_1.Router)();
const controller_1 = require("../../ApiServices/Pages/controller");
pagesRouter.get('/', controller_1.getReports);
pagesRouter.post('/', controller_1.postReport);
exports.default = pagesRouter;
//# sourceMappingURL=routes.js.map