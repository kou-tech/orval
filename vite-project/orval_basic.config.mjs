module.exports = {
  api: {
    input: {
      target: "../openapi/openapi.yaml",
    },
    output: {
      mode: "tags",
      target: "./src/api",
      schemas: "./src/model",
      mock: true,
    },
  },
};
