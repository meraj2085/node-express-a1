let count = 0;
const demoCount = (req, res, next) =>{
     count++;
     next();
}

module.exports = demoCount;