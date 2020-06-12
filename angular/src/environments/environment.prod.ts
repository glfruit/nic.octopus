export const environment = {
  production: true,
  application: {
    name: 'Octopus',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44349',
    clientId: 'Octopus_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Octopus',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44349',
    },
  },
  localization: {
    defaultResourceName: 'Octopus',
  },
};
