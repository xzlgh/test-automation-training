const util = require('./util');
const config = require('./util/config');

function myTest() {
    return config.name + '=' + util.add(1, 2);
}

module.exports = myTest;
