interface DbConfig {
  type: any;
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
}

export const dbConfig: DbConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
};
