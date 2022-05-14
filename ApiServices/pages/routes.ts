
import {Router} from 'express';
const pagesRouter = Router();
import { getReports,postReport } from './controller';


pagesRouter.get('/',getReports);
pagesRouter.post('/',postReport);

export default pagesRouter;
