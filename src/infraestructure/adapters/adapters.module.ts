import { Global, Module } from '@nestjs/common'
import { ConfigEnvModule } from './config/config.module'
import { DatabaseMongoModule } from './mongodb/database-mongo.module'
import { UserController } from './http/controllers/user.controller'
import { DatabaseMongoService } from './mongodb/database-mongo.service'

@Global()
@Module({
    imports: [
        ConfigEnvModule,
        DatabaseMongoModule,
    ],
    providers: [DatabaseMongoService],
    exports: [DatabaseMongoModule, DatabaseMongoService],
})
export class AdaptersModule { }