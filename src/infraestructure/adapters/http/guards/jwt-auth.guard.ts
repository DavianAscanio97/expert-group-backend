
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpStatus,
} from '@nestjs/common'
import { Observable } from 'rxjs';

@Injectable()
export class AuthJwtGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        throw new Error('Method not implemented.');
    }
   
}
