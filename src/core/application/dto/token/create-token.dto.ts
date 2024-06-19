import { User } from '@core/domain/models/user.model'

export class CreateTokenDto {
    userId: string
    token: string
    user?: User
}
