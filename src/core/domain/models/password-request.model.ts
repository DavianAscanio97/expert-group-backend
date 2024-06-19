import { User } from './user.model'

export class PasswordRequest {
    id?: string
    user?: User
    changeDate?: Date
    newPassword?: string
    isValid?: boolean
}
