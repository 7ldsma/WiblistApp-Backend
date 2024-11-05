import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Gift } from './entities/gift.entity';
import { CreateGiftDto } from './dto/create-gift.dto';

@Injectable()
export class GiftService {
  constructor(@InjectModel(Gift.name) private giftModel: Model<Gift>) {}

  async create(createGiftDto: CreateGiftDto, userId: string): Promise<Gift> {
    const gift = new this.giftModel({
      ...createGiftDto,
      organizer: new Types.ObjectId(userId),
    });

    return await gift.save();
  }

  async findOne(id: string): Promise<Gift> {
    return this.giftModel.findById(id).exec();
  }



  async findGiftsByUserWithCategories( userId: string ){

    const gifts = await this.giftModel.find({
      $or: [
        { organizer: userId },
        { collaborators: userId },
        { participants: userId },
      ],
    })
    .populate('organizer')
    .populate('collaborators')
    .populate('participants')
    .exec();

    const organized = gifts.filter( gift => gift.organizer && gift.organizer._id.toString() === userId );
    const collaborated = gifts.filter( gift => gift.collaborators.some(collab => collab._id.toString() === userId ));
    const participated = gifts.filter( gift => gift.participants.some(part => part._id.toString() === userId ));

    return { organized, collaborated, participated }
  }




}