const errorHandler = (err, req, res, next) => {
  // 1. תמיד רושמים את השגיאה המלאה לטרמינל בשביל הדיבאג שלנו (כולל ה-Stack trace)
  console.error(err);

  // 2. חילוץ הסטטוס וההודעה. אם השגיאה הגיעה בלי statusCode (למשל שגיאת קוד לא צפויה), ניתן דיפולט של 500
  const { statusCode = 500, message } = err;

  // 3. החזרת התשובה ללקוח (הגנה על השרת מפני חשיפת מידע רגיש בשגיאות 500)
  return res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
};

module.exports = errorHandler;
