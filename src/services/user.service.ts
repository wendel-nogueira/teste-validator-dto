import { CreateUserDto } from "../dto/create-user.dto";
import { UsersValidator } from "../utils/user.validator";

export class UsersService {
  async create(data: CreateUserDto) {
    const usersValidator = new UsersValidator();
    await usersValidator.validateCreateUserDto(data);

    return data;
  }
}
