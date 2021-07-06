import BaseController from "../policies/base_controller";
import { Request, Response, NextFunction as Next } from "express";

export default class LoginController extends BaseController {
  constructor() {
    super();
  }
  authUser = async (req: Request, res: Response, next: Next): Promise<any> => {
    try {
      return res.send("hello there - " + (req.params.name ? req.params.name : ""));
    } catch (error) {
      this.ErrorResult(error, req, res, next);
    }
  };
}
