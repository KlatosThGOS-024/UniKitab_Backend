// import { IUser } from "../types/user.types";
// import mongoose, { model } from "mongoose";

// const userSchema = new mongoose.Schema<IUser>(
//   {
//     fullName: {
//       firstName: {
//         type: String,
//         required: true,
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//       match: [
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/])[A-Za-z\d!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}$/,
//         "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
//       ],
//     },
//     email: {
//       type: String,
//       unique: true,
//       match: [
//         /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//         "Please provide a valid email",
//       ],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = model<IUser>("User", userSchema);
// export default User;
