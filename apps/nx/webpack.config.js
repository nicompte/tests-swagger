const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  /*const tsLoader = config.module.rules.find((r) =>
    r.loader?.includes("ts-loader")
  );
  
  if (tsLoader) {
    tsLoader.options.transpileOnly = false;
    tsLoader.options.getCustomTransformers = (program) => {
      return {
        before: [
          require("@nestjs/swagger/plugin").before(
            {
              typeFileNameSuffix: 'ts', introspectComments: true
            },
            program
            ),
          ],
        };
      };
    }*/
    
    return config;
  });
  