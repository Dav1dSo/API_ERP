import express  from "express";
import CreateUser from "../controllers/users";
const route = express.Router();

route.post('/createUser', CreateUser)

export default route;