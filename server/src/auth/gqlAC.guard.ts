import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ACGuard, RolesBuilder } from "nest-access-control";
import { IS_PUBLIC_KEY } from "./public";
@Injectable()
//@ts-ignore
export class GqlACGuard<User extends any = any> extends ACGuard<User> {
  constructor(
    private readonly reflector: Reflector,
    private readonly roleBuilder: RolesBuilder
  ) {
    super(reflector, roleBuilder);
  }
  async getUser(context: ExecutionContext): Promise<User> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{ req: { user: User } }>().req;
    return request.user;
  }
  canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return Promise.resolve(true);
    }
    return super.canActivate(context);
  }
}
