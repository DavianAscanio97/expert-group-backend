// src/core/core.module.ts
import { Module } from '@nestjs/common';
import { AdaptersModule, JWT_TOKEN_REPOSITORY } from 'src/infraestructure/adapters/adapters.module';
import { UserService } from './domain/services/user.service';
import { UserUseCase } from './application/use-cases/user.usecase';
import { UsersMapper } from './application/mappers/users.mapper';
import { DatabaseMongoModule } from 'src/infraestructure/adapters/mongodb/database-mongo.module'; // Importa DatabaseMongoModule
import { TOKEN_MODEL, USER_MODEL } from 'src/infraestructure/shared/constants';
import { AuthUseCase } from './application/use-cases/auth.usecase';
import { AuthService } from './domain/services/auth.service';
import { JwtService } from '@nestjs/jwt';

const PROVIDERS = [
    JwtService,
    UserService,
    UserUseCase,
    UsersMapper,
    AuthUseCase,
    AuthService
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
        {
            provide: AuthService,
            useFactory: (jWTTokenOutputPort, authRepository) => new AuthService(jWTTokenOutputPort, authRepository),
            inject: [JWT_TOKEN_REPOSITORY, TOKEN_MODEL],
        }
    ],
    exports: [...PROVIDERS],
})
export class CoreModule { }
