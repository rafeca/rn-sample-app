

module.exports = {
  transformer: {
    getTransformOptions: () => ({
      preloadedModules: [],
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  }
};
