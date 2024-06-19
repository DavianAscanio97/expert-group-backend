import { CoreModule } from '@core/core.module';
import { Module } from '@nestjs/common';
import { UserController } from './infraestructure/adapters/http/controllers/user.controller';

@Module({
  imports: [CoreModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
