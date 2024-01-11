import express  from "express";
import { CreateUser, UpdatedUser } from "../controllers/users";
const route = express.Router();

route.post('/createUser', CreateUser);
route.post('/updatedUser', UpdatedUser);

export default route;