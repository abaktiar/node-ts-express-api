import { Express as Server } from "express";
import AuthController from "../controllers/auth.controller";
import { IsAuthenticated } from "../policies/authorizer";
export default function routeDefinition(server: Server) {
  const auth = new AuthController();
  server.get("/hello", auth.authUser);
  server.get("/hello/:name", auth.authUser);
}
