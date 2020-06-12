const ENV = {
  dev: {
    apiUrl: 'http://localhost:44349',
    oAuthConfig: {
      issuer: 'http://localhost:44349',
      clientId: 'Octopus_App',
      clientSecret: '1q2w3e*',
      scope: 'Octopus',
    },
    localization: {
      defaultResourceName: 'Octopus',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44349',
    oAuthConfig: {
      issuer: 'http://localhost:44349',
      clientId: 'Octopus_App',
      clientSecret: '1q2w3e*',
      scope: 'Octopus',
    },
    localization: {
      defaultResourceName: 'Octopus',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
