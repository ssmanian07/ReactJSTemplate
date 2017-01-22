var context = require.context('./JsUnitTests/Tests', true, /.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;