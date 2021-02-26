import mongoose from 'mongoose';

require('dotenv').config();

export const connectDB = (): void => {
	// Database Config (MongoDB)
	const dbConfig = {
		uri: process.env.MONGODB_URI,
		params: {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		}
	}

	// connecting to database (MongoDB)
	mongoose.connect(dbConfig.uri, dbConfig.params)
		.then(() => {
			console.log('Connecting to database successfully!');
		})
		.catch((err) => {
			console.error(`Database connecting error:\n${err}`);
		});
}