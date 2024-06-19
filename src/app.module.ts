import { CoreModule } from '@core/core.module';
import { Module } from '@nestjs/common';
import { UserController } from './infraestructure/adapters/http/controllers/user.controller';
import { AuthController } from './infraestructure/adapters/http/controllers/auth.controller';

@Module({
  imports: [CoreModule],
  controllers: [UserController, AuthController],
  providers: [],
})
export class AppModule {}
