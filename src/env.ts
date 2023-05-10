import Config from 'react-native-config';

export const APP_ENVIRONMENT = Config.APP_ENVIRONMENT as 'uat';

type Env = {
  apiUrl: string | undefined;
};

const EnvObject = {
  uat: {
    apiUrl: Config.API_URL,
  },
};

const env: Env = EnvObject.uat;
export default env;
