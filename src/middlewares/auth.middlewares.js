import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    try {
        const headerAuthorization = req.headers.authorization;

        if (!headerAuthorization) {
            return res.status(401).json({
                message: "No Token, Access denied",
            });
        }

        const token = headerAuthorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token",
            error: err.message
        })
    }
};

export default protect;