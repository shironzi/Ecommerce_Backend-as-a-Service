import mongoose from 'mongoose';
import userSchema from '../database/userSchema';

const UserModel = mongoose.model('User', userSchema);

export default UserModel;








