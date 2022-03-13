/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TopicCreateNestedManyWithoutTopicsInput } from "./TopicCreateNestedManyWithoutTopicsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutTopicsInput } from "./UserCreateNestedManyWithoutTopicsInput";
@InputType()
class TopicCreateInput {
  @ApiProperty({
    required: false,
    type: () => TopicCreateNestedManyWithoutTopicsInput,
  })
  @ValidateNested()
  @Type(() => TopicCreateNestedManyWithoutTopicsInput)
  @IsOptional()
  @Field(() => TopicCreateNestedManyWithoutTopicsInput, {
    nullable: true,
  })
  dependOn?: TopicCreateNestedManyWithoutTopicsInput;

  @ApiProperty({
    required: false,
    type: () => TopicCreateNestedManyWithoutTopicsInput,
  })
  @ValidateNested()
  @Type(() => TopicCreateNestedManyWithoutTopicsInput)
  @IsOptional()
  @Field(() => TopicCreateNestedManyWithoutTopicsInput, {
    nullable: true,
  })
  dependOnMe?: TopicCreateNestedManyWithoutTopicsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutTopicsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTopicsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTopicsInput, {
    nullable: true,
  })
  knownUsers?: UserCreateNestedManyWithoutTopicsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { TopicCreateInput };
