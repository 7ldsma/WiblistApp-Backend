import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GiftModule } from './gift/gift.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot( process.env.MONGO_URI ),
    
    AuthModule,

    GiftModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(){
    console.log(process.env)
  }

}
