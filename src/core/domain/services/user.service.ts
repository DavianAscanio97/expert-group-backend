// Importaciones de módulos y dependencias
import { Inject, Injectable } from '@nestjs/common'
import { RepositoryModelsMongoOutputPort } from '@core/application/ports/output/repository-models-mongo.output'
import { User, UserDocument } from 'src/infraestructure/adapters/mongodb/schemas/user.schema'
import { CreateUserDto } from '@core/application/dto/user/create-user.dto'
import { UpdateUserDto } from '@core/application/dto/user/update-user.dto'
import { USER_MODEL } from 'src/infraestructure/shared/constants'
import { Types } from 'mongoose'

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_MODEL) private readonly userOutputPort: RepositoryModelsMongoOutputPort<UserDocument, CreateUserDto, UpdateUserDto>
    ) { }
    
    async create(createUserDto: CreateUserDto): Promise<User> {
        createUserDto._id = null
        return this.userOutputPort.create(createUserDto)
    }

    async update(_id: Types.ObjectId, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userOutputPort.update(_id, updateUserDto)
    }

    async findById(_id: Types.ObjectId): Promise<User> {
        return this.userOutputPort.findOneByWhere({ _id })
    }

    async findOneByWhere(where: Partial<User>): Promise<User> {
        return this.userOutputPort.findOneByWhere({where})
    }

    async delete(id: Types.ObjectId): Promise<any> {
        return this.userOutputPort.delete(id)
    }

    async findAll(queryParams: {
        page?: number
        limit?: number
    }): Promise<User[]> {
        return this.userOutputPort.findAll()
    }

    async findByWhere(where: Partial<User>): Promise<User[]> {
        return 
    }

    async findByExists(where: Partial<User>): Promise<boolean> {
        return this.userOutputPort.exists(where)
    }
    
}
