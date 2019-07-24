/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("prismjs/themes/prism-twilight.css");

module.exports.onRouteUpdate = ({ location, prevLocation }) => {
  const event = new CustomEvent(
    'route-change',
    { detail: { location, prevLocation } }
  );
  window.dispatchEvent(event);
};
