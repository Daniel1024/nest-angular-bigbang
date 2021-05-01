import { registerAs } from '@nestjs/config';

export interface App {
  port: number;
}

export const appConfig = registerAs('app', (): App => ({
  port: Number(process.env.APP_PORT || 3333)
}));
