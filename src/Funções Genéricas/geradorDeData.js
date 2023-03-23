const {format} = require('date-fns')
function geradorDeData() {
    const data = new Date();
    return (format(data,"yyyy-MM-dd HH:mm:ss"))
};
module.exports={geradorDeData};