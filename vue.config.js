const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: '/',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/about', '/rooms', '/reservation', '/transportation', '/tourism'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
          }),
        })
      );
    }
  }
}
