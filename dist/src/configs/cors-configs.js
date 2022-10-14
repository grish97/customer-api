export const allowedOrigins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
];
export const credentials = (req, res, next) => {
    const origin = req.headers.origin || "";
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Credentials", "true");
    }
    next();
};
export const corsOptions = {
    origin: (origin, callback) => {
        if (typeof origin === "string" && allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};
//# sourceMappingURL=cors-configs.js.map