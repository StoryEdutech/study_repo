import { Body, Controller, Post, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin';
import { SignUpDto } from './dto/signup';
import { ChangePwDto } from './dto/change_pw';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto){
    return this.authService.signUp(signUpDto);
  }
  @Post('change_pw')
  @UseGuards(AuthGuard)
  changePw(@Request() req,@Body() changePwDto:ChangePwDto){
    return this.authService.change_pw(req.user.id,changePwDto)
  }


}