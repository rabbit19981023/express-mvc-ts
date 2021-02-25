// this userController module will handle all the business logic for the userRoute

import { Request, Response } from 'express';
import { getAllUsers } from '../models/user.model';

export const userController = {
	index: (req: Request, res: Response) => {
		getAllUsers((err: any, users: JSON) => {
			res.render('user-index', { allUsers: users });
		});
	}
}