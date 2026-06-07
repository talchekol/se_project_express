// middlewares/logger.js
const winston = require("winston");
const expressWinston = require("express-winston");

// יצירת פורמט מותאם אישית להדפסה נקייה וקריאה בטרמינל (Console)
const messageFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(
    ({ level, message, meta, timestamp }) =>
      `${timestamp} ${level}: ${meta?.error?.stack || message}`
  )
);

// 1. לוגר הבקשות (Request Logger) - מתעד כל בקשת HTTP שנכנסת לשרת
const requestLogger = expressWinston.logger({
  transports: [
    // ערוץ א': מדפיס לטרמינל בפורמט קריא וקומפקטי בזמן פיתוח
    new winston.transports.Console({
      format: messageFormat,
    }),
    // ערוץ ב': כותב לקובץ request.log בפורמט JSON מפורט עבור פרודקשן
    new winston.transports.File({
      filename: "request.log",
      format: winston.format.json(),
    }),
  ],
});

// 2. לוגר השגיאות (Error Logger) - מתעד שגיאות קוד ושרת (סטטוס 400 ומעלה)
const errorLogger = expressWinston.errorLogger({
  transports: [
    // ערוץ א': מדפיס את ה-Stack Trace של השגיאה ישירות לטרמינל
    new winston.transports.Console({
      format: messageFormat,
    }),
    // ערוץ ב': כותב את פרטי השגיאה לקובץ ייעודי error.log בפורמט JSON
    new winston.transports.File({
      filename: "error.log",
      format: winston.format.json(),
    }),
  ],
});

module.exports = {
  requestLogger,
  errorLogger,
};
