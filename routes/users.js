import express  from "express";
import { CreateUser, UpdatedUser, UserAuthentication } from "../controllers/users";
import VerifyToken from "../middlewares/AuthenticationUser";
const route = express.Router();

route.post('/createUser', CreateUser);
route.post('/login', UserAuthentication);
route.post('/updatedUser', VerifyToken, UpdatedUser);

export default route;  