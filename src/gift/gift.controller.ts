import { Controller, Post, Body, Param, Get, Req, UseGuards } from '@nestjs/common';
import { GiftService } from './gift.service';
import { CreateGiftDto } from './dto/create-gift.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/auth/entities/user.entity';

@Controller('gifts')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @UseGuards( AuthGuard )
  @Post()
  async createGift(@Body() createGiftDto: CreateGiftDto, @Req() request: Request & { user: { userId: string } }) {
    const userId = request.user.userId;
    return await this.giftService.create(createGiftDto, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftService.findOne(id);
  }


  @Get('user/:userId')
  async getGiftsByUser(@Param('userId') userId: string ){

    return await this.giftService.findGiftsByUserWithCategories(userId);
  }

  

}