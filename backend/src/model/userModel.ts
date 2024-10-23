import mongoose, { Model } from 'mongoose';
import userSchema, { IUser } from '../database/userSchema';

const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;








