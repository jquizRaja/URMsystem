const whitelist = [
  "https://www.yoursite.com",
  "http://localhost:3500",
  "http://127.0.0.1:3500",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports=corsOptions;