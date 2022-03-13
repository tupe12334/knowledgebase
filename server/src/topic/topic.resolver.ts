import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TopicResolverBase } from "./base/topic.resolver.base";
import { Topic } from "./base/Topic";
import { TopicService } from "./topic.service";
import { Public } from "src/auth/public";
import { TopicFindManyArgs } from "./base/TopicFindManyArgs";

@graphql.Resolver(() => Topic)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TopicResolver extends TopicResolverBase {
  constructor(
    protected readonly service: TopicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @graphql.Query(() => [Topic])
  @Public()
  async publicTopics(
    @graphql.Args() args: TopicFindManyArgs
  ): Promise<Topic[]> {
    const results = await this.service.findMany(args);
    return results;
  }
}
