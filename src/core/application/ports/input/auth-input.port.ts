import { SingInDto } from "@core/application/dto/auth/sing-in.dto";
import { UpdatePasswordRequestDto } from "@core/application/dto/auth/update-password-request.dto";
import { TokenDto } from "@core/application/dto/token/token.dto";

export interface AuthInputPort {
    signIn(singInDto: SingInDto, req: Request): Promise<any>
    signUp(req: Request): Promise<any>
    status(req: { user: TokenDto; token: string }): Promise<any>
}
