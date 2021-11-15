import { IsArray, IsString } from 'class-validator';
import { Purchase } from '../entities/purchase.entity';

export class CreatePurchaseDto extends Purchase {
  @IsArray()
  productOnPurchase: Array<string>;

  @IsString()
  userId: string;

  @IsString()
  stripePurchaseReference: string;
}
