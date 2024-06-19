export class RecoverPasswordDto {
    userId: string
    changeDate?: Date
    newPassword?: string
    isValid?: boolean
}
