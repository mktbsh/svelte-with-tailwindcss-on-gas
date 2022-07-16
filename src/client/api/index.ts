import { GASClient } from 'gas-client';
import type * as Server from '../../server/main';

import healthcheckJSON from './mocks/healthcheck.json';

const { serverFunctions } = new GASClient<typeof Server>();

type APITypes = typeof serverFunctions;

const localAPI: APITypes = {
  HEALTHCHECK_get: async () => {
    return healthcheckJSON;
  },
};

export const APIClient = import.meta.env.PROD ? serverFunctions : localAPI;
