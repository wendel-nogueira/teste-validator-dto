import { CreateUserDto } from "../dto/create-user.dto";
import { validateOrReject } from "class-validator";

export class UsersValidator {
  async validateCreateUserDto(user: CreateUserDto) {
    const validateUser = new CreateUserDto(
      user.name,
      user.email,
      user.password
    );

    await validateOrReject(validateUser).catch((errors) => {
      const errorMessage: any = errors.map(
        (error: { property: any; constraints: any }) => {
          return Object.values(error.constraints).map((constraint: any) => {
            return constraint;
          });
        }
      );

      throw new Error(JSON.stringify(errorMessage));
    });
  }
}
