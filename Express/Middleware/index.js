function logReqRes() {
    return (req, res, next) => {
        req.myUserName = "Anurag Bose";
        next(); // Passes the request to the next middleware or route handler
    };
}

function ResReq() {
    return (req, res, next) => {
        console.log("Hello from middleware", req.myUserName);
        next(); // Ensures that the response isn't prematurely ended
    };
}

// Correct export syntax
module.exports = {
    logReqRes,
    ResReq
};
