import * as dotenv from 'dotenv';

dotenv.config(); // used to get process.env access prior to AppModule instanciation

export const SqliteConfig={
  type:"sqlite",
  database:process.env.DB_DATABASE,
}
