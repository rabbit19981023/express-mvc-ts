import { Router } from 'express';
import { userController } from '../controllers';

const router: Router = Router();

router.get('/index', userController.index);

export const userRoute: Router = router;