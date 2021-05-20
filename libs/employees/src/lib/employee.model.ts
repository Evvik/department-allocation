import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field() id: number;
  @Field() name: string;
  @Field() role: number;
  @Field((type) => Number, { nullable: true })
  referenceManager?: number | null;
  @Field() departmentName: string;
  @Field() departmentId: number;
}

