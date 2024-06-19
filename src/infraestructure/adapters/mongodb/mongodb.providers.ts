// src/infraestructure/adapters/mongodb/mongodb.providers.ts
import { Connection } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';
import { UserSchema, UserDocument } from './schemas/user.schema';
import { USER_MODEL } from '../../shared/constants';
import { SchemaRepository } from 'src/infraestructure/repositories/schema.repository';
import { CreateUserDto } from '@core/application/dto/user/create-user.dto';
import { UpdateUserDto } from '@core/application/dto/user/update-user.dto';

export const MongoDBProviders = [
    {
        provide: USER_MODEL,
        useFactory: (connection: Connection) => {
            const userModel = connection.model<UserDocument>('User', UserSchema);
            return new SchemaRepository<UserDocument, CreateUserDto, UpdateUserDto>(userModel);
        },
        inject: [getConnectionToken()],
    },
];
