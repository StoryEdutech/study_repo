import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup';
import { ChangePwDto } from './dto/change_pw';

@Injectable()
export class AuthService{
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    async signIn(email: string, plain_password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if(!user) {throw new UnauthorizedException('not_match')};
        const { password, ...result } = user;
        const res = await compare(plain_password,password);
        if(!res) { throw new UnauthorizedException('not_match'); }        
        console.log(result);
        const payload = result;
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async change_pw(id: number,changePwDto: ChangePwDto){
        console.log(changePwDto.password);
        return this.usersService.update(id,{
            password:await AuthService.crypt(changePwDto.password)
        })
    }
    async signUp(signUpDto:SignUpDto){

        const {password,...others} =signUpDto;
        if(await this.usersService.findByEmail(others.email)){throw new UnauthorizedException('email_taken') }
        return this.usersService.create(
            {
                ...others,
                password:AuthService.crypt(password)
            }                
        );
    }

    static crypt(plain_password:string) : string{
        const saltRounds = 10;
        return hash(plain_password, saltRounds);
    } 

}
