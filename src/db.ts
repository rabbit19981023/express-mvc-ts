import mongoose from 'mongoose';

export const connectDB = (): void => {
	// Database Config (MongoDB)
	const dbConfig = {
		url: process.env.MONGODB_URL || "mongodb+srv://admin:smile123@cluster-test.3y2n1.mongodb.net/Cluster-test?retryWrites=true&w=majority",
		params: {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		}
	}

	// connecting to database (MongoDB)
	mongoose.connect(dbConfig.url, dbConfig.params)
		.then(() => {
			console.log('Connecting to database successfully!');
		})
		.catch((err) => {
			console.error(`Database connecting error:\n${err}`);
		});
}