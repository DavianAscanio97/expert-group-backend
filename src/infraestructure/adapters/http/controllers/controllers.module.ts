import { Global, Module } from '@nestjs/common';
import { ConfigEnvModule } from '../../config/config.module';
import { DatabaseMongoModule } from '../../mongodb/database-mongo.module';
import { UserController } from './user.controller';

@Global()
@Module({
    imports: [
        ConfigEnvModule,
        DatabaseMongoModule,
    ],
    controllers: [UserController],
    providers: [],
    exports: [], 
})
export class AdaptersModule { }
