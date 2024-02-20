import { Request, Response } from "express";
import { UsersService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserController {
  async create(request: Request, response: Response) {
    const usersService = new UsersService();
    const body = request.body as CreateUserDto;
    const user = await usersService.create(body);

    return response.status(201).json(user);
  }
}
