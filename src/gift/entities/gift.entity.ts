import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/auth/entities/user.entity";


@Schema()
export class Gift {

    _id?: string;

    @Prop({ unique:true, minlength: 3, required: true, })
    title: string;

    @Prop({ type: [String], default: ['user'] })
    roles: string[];

    @Prop()
    alt_image: string;

    @Prop()
    due_date: string;

    @Prop()
    description: string;

    @Prop()
    budget: number;

    @Prop()
    balance: number;

    @Prop()
    number_participants: number;

    @Prop()
    payers: number;


    @Prop()
    bizum: string;

    @Prop()
    account: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    organizer: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
    collaborators: User[];

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
    participants: User[];


}


export const GiftSchema = SchemaFactory.createForClass( Gift );