"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReport = exports.getReports = void 0;
const client_1 = require("@prisma/client");
// Instantiate Prisma Client
const prisma = new client_1.PrismaClient();
const getReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.session.user);
        const pages = yield prisma.report.findMany({});
        return res.json(pages);
    }
    catch (e) {
        //console.log(e); 
        return res.status(500).json('Internal Server error');
    }
});
exports.getReports = getReports;
const postReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pageData = req.body;
        console.log(pageData);
        yield prisma.report.create({
            data: Object.assign({}, pageData)
        });
        return res.json(pageData);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.postReport = postReport;
//# sourceMappingURL=controller.js.map