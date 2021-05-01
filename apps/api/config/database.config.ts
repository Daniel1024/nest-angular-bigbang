import { registerAs } from '@nestjs/config';

export interface Database {
  host: string;
  port: number;
}

export const databaseConfig = registerAs('database', (): Database => ({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || 3306)
}));
