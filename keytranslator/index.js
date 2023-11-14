// mport { translateKey } from './keytranslate.js';
const kt = require('./keytranslate');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const from = (req.query.from || (req.body && req.body.from));
    const to = (req.query.to || (req.body && req.body.to));
    const song = (req.query.song || (req.body && req.body.song));

from, to, song

    const responseMessage = kt.translateKey(from, to, song);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}