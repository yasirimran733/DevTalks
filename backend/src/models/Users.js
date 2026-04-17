import mongoose from "mongoose";
import { type } from "node:os";

const UserSchema = mongoose.Schema({
    id  : {default : crypto.randomUUID() , type}
})

const User = mongoose.model("User", UserSchema)

export default User