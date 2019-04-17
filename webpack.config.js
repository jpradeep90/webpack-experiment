module.exports = (env) => {
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js"
    }
  };
};
