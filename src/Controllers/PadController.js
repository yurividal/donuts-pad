
const Pad = require('../Models/Pad');
const helper = require('../helper');
const path = require('path');
module.exports = {

    index(req, res) {
        let urlParams = helper.urlToDotPath(req.params[0]);
        const pad = new Pad();
        let p = pad.find(urlParams);

        if (!p) {
            p = pad.save(urlParams, '')
        }
        res.json(p);
    },

    home(req, res){
        res.render(path.resolve(__dirname, '..') + '/public/index.html');
    },

    render(req, res) {
        let urlParams = helper.urlToDotPath(req.params[0]);
        const pad = new Pad();
        let p = pad.find(urlParams);
        if (!p) {
            p = pad.save({ path: urlParams, content: '' });
        }
        res.render(path.resolve(__dirname, '..') + '/public/content.html', { content: p.content });

    }
}