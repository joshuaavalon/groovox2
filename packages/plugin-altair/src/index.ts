import fastifyPlugin from "fastify-plugin";
import { getDistDirectory, renderAltair, RenderOptions } from "altair-static";
import fastifyStatic from "fastify-static";

export interface Options extends RenderOptions {
  /**
   * URL to set as the server endpoint.
   *
   * By default is `/graphql`
   */
  endpointURL?: string;
  /**
   * URL to be used as a base for relative URLs and hosting needed static files.
   *
   * By default is `/altair/`
   */
  baseURL?: string;
  /**
   * Path in which Altair will be accesible.
   *
   * By default is `/altair`
   */
  path?: string;
}

const plugin = fastifyPlugin<Options>(
  async (fastify, opts = {}) => {
    const {
      path = "/altair",
      baseURL = "/altair/",
      endpointURL = "/graphql",
      ...renderOptions
    } = opts;

    await fastify.register(fastifyStatic, {
      root: getDistDirectory(),
      prefix: baseURL
    });

    const altairPage = renderAltair({ baseURL, endpointURL, ...renderOptions });

    fastify.get(path, (_req, res) => {
      res.type("text/html").send(altairPage);
    });
  },
  {
    name: "@groovox/plugin-altair",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-api"]
  }
);

export default plugin;
