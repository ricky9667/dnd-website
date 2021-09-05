const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const renderRoutes = (() => {
  const routes = [
    '/', '/about', '/rooms', '/reservation', '/transportation', '/tourism',
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

module.exports = {
  publicPath: '/',
  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000,
      }
    }
    config.performance = {
      maxAssetSize: 300000,
      maxEntrypointSize: 500000,
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          useRenderEvent: true,
          onlyProduction: true,
          registry: undefined,
          staticDir: path.join(__dirname, 'dist'),
          routes: renderRoutes,
          postProcess(renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
            headless: true,
          }),
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true,
            minifyCSS: true,
            minifyJS: true
          }
        })
      );
    }
  }
}
