import Router from 'express'
import  pagesRouter  from '../ApiServices/Pages/routes';

const router = Router();

//,authUser("users"),

//todo apply middleware to all routes with session auth 
router.use('/pages', pagesRouter); 


export default router;
