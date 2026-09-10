import type { IconType } from "react-icons";
import {
  SiTypescript, SiNodedotjs, SiNestjs, SiPostgresql, SiReact, SiNextdotjs, SiVuedotjs,
  SiRedis, SiApachekafka, SiPrisma, SiTypeorm, SiSequelize, SiMongodb, SiMysql,
  SiElasticsearch, SiRubyonrails, SiFirebase, SiPusher, SiJest, SiDocker
} from "react-icons/si";
import { TbQueuePopIn, TbBellRinging, TbShieldCheck, TbCloud, TbTestPipe, TbApi, TbPlugConnected, TbSitemap } from "react-icons/tb";

export const skillIcons: Record<string, IconType> = {
  "TypeScript": SiTypescript,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "PostgreSQL": SiPostgresql,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Redis": SiRedis,
  "Kafka": SiApachekafka,
  "BullMQ": TbQueuePopIn,
  "Prisma": SiPrisma,
  "TypeORM": SiTypeorm,
  "Sequelize": SiSequelize,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Elasticsearch": SiElasticsearch,
  "Ruby on Rails": SiRubyonrails,
  "Firebase": SiFirebase,
  "Pusher": SiPusher,
  "Knock": TbBellRinging,
  "Veriff": TbShieldCheck,
  "Azure Service Bus": TbCloud,
  "Docker": SiDocker,
  "Jest": SiJest,
  "RSpec": TbTestPipe,
  "REST APIs": TbApi,
  "WebSockets": TbPlugConnected,
  "System Design": TbSitemap
};

export function SkillIcon({ skill }: { skill: string }) {
  const Icon = skillIcons[skill];
  if (!Icon) return null;
  return <Icon aria-hidden="true" />;
}
