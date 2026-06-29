import { Body, Controller, HttpCode,  HttpStatus,  Post,  Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { Public } from './decorators/public/public.decorator';

@Controller('auth')
export class AuthController {
  constructor (private authService: AuthService){}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('token')
  @UseGuards(PassportLocalGuard)
  login(@Request() request){
    return this.authService.signIn(request.user);
  }
  @Public()
  @Post('signup')
  signup(@Body() input:{email: string, password: string} ){
    return this.authService.register(input);
  }
}
