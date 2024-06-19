import { Global, Module } from '@nestjs/common'
import { ConfigEnvModule } from './config/config.module'
import { DatabaseMongoModule } from './mongodb/database-mongo.module'
import { DatabaseMongoService } from './mongodb/database-mongo.service'
import { JWTTokenRepository } from '../repositories/jwt-token.repository'
import { JwtTokenModule } from './jwt-token/jwttoken.module'

export const JWT_TOKEN_REPOSITORY = 'JWT_TOKEN_REPOSITORY'

const PROVIDERS = [
    JWTTokenRepository,
    {
        provide: JWT_TOKEN_REPOSITORY,
        useExisting: JWTTokenRepository,
    },
]

@Global()
@Module({
    imports: [
        ConfigEnvModule,
        DatabaseMongoModule,
        JwtTokenModule
    ],
    providers: [DatabaseMongoService, ...PROVIDERS],
    exports: [DatabaseMongoModule, DatabaseMongoService, ...PROVIDERS],
})
export class AdaptersModule { }