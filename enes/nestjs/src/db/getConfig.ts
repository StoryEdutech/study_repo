import { SqliteConfig } from './config/sqlite';
import * as dotenv from 'dotenv';
import { toBoolean } from '../utils/dotenv';

dotenv.config(); // used to get process.env access prior to AppModule instanciation

export default function getConnectionConfig(settings){
  const {connection,entities}=settings;
  const connection_select=connection?connection:process.env.DB_TYPE;
  var config_select={};
  switch (connection_select) {
    case "sqlite":
      config_select=SqliteConfig;
      break;

    default:
      throw "No connection defined for "+connection;
      break;
  }
  const synchronize=toBoolean(process.env.DB_SYNCHRONIZE);
  return {...config_select,synchronize};

}
