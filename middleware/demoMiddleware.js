let count = 0;
const demoCount = (req, res, next) =>{
     count++;
     console.log(`Count: ${count}`);
     next();
}

module.exports = demoCount;