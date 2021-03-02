import express, { Router } from 'express';
import morgan from 'morgan';
import path from 'path';

import { connectDB } from './db';
import { userRoute } from './routes';


class App {
	/* declare the App.app, and specify this property's type */
	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.routerSetup();
		this.dbSetup();
	}

	/* app settings */
	private config(): void {		
		// setting the views directory of MVC Architecture
		this.app.set('views', path.join(__dirname, 'views'));
		// setting the template engine
		this.app.set('view engine', 'ejs');

		/* app global middlewares (use middlewares on all APP Routes whether theirs HTTP Methods) */		
		this.app.use(morgan("dev"));
		// In order to get JSON Data from User POST Request
		this.app.use(express.json());
		// In order to get Form Data from User POST Request
		this.app.use(express.urlencoded({ extended: true }));
	}

	private routerSetup(): void {
		// web application routes
		this.app.use('/user', userRoute);
	}

	private dbSetup(): void {
		// connecting to MongoDB
		connectDB();
	}
}


// exports the express.app instance to ./bin/www which is the Entry Point of this web application
export default new App().app;