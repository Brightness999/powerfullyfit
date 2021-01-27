export const environment = {
  production: true,
  API_ENDPOINT: "/api/",
};

export const socketEnvironment = (window ? window.location.protocol : "http:") + "//localhost:3000";
