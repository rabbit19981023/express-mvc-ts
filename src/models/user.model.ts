import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	country: String,
	city: String
});

export const userModel = mongoose.model('users', userSchema);

export const getAllUsers = (callback: Function): void => {
	userModel.find((err, users) => {
		if (err) {
			console.error(err);
		}
		
		callback(null, users);
	});
}
