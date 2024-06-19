// src/core/core.module.ts
import { Module } from '@nestjs/common';
import { AdaptersModule } from 'src/infraestructure/adapters/adapters.module';
import { UserService } from './domain/services/user.service';
import { UserUseCase } from './application/use-cases/user.usecase';
import { UsersMapper } from './application/mappers/users.mapper';
import { DatabaseMongoModule } from 'src/infraestructure/adapters/mongodb/database-mongo.module'; // Importa DatabaseMongoModule
import { USER_MODEL } from 'src/infraestructure/shared/constants';

const PROVIDERS = [
    UserService,
    UserUseCase,
    UsersMapper,
];

@Module({
    imports: [
        AdaptersModule,
        DatabaseMongoModule, // Asegúrate de importar DatabaseMongoModule
    ],
    providers: [
        ...PROVIDERS,
        {
            provide: UserService,
            useFactory: (userRepository) => new UserService(userRepository),
            inject: [USER_MODEL],
        },
    ],
    exports: [...PROVIDERS],
})
export class CoreModule { }
