var sqlite = require('sqlite-sync');

module.exports = function(){
    sqlite.connect('resume.sqlite3');

    sqlite.run("CREATE TABLE IF NOT EXISTS resume_personal(" +
    "personal_id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "first_name TEXT NOT NULL," +
    "last_name TEXT NOT NULL," +
    "image TEXT," +
    "profile TEXT," +
    "email TEXT NOT NULL UNIQUE," +
    "phone TEXT UNIQUE)");

    sqlite.run("CREATE TABLE IF NOT EXISTS resume_employment_history(" +
    "employment_id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "job_title TEXT NOT NULL," +
    "employer TEXT NOT NULL," +
    "city TEXT," +
    "start_month TEXT," +
    "start_year TEXT," +
    "end_month TEXT," +
    "end_year TEXT,"+
    "personal_id INTEGER,"+
    "FOREIGN KEY(personal_id) REFERENCES resume_personal(personal_id))");

    sqlite.run("CREATE TABLE IF NOT EXISTS resume_education(" +
    "education_id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "school TEXT NOT NULL," +
    "city TEXT NOT NULL," +
    "degree TEXT," +
    "start_month TEXT," +
    "start_year TEXT," +
    "end_month TEXT," +
    "end_year TEXT,"+
    "personal_id INTEGER,"+
    "FOREIGN KEY(personal_id) REFERENCES resume_personal(personal_id))");

    sqlite.run("CREATE TABLE IF NOT EXISTS resume_skills(" +
    "skill_id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "skill TEXT NOT NULL," +
    "level TEXT NOT NULL," +
    "personal_id INTEGER,"+
    "FOREIGN KEY(personal_id) REFERENCES resume_personal(personal_id))");

    sqlite.run("CREATE TABLE IF NOT EXISTS resume_languages(" +
    "language_id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "language TEXT NOT NULL," +
    "level TEXT NOT NULL," +
    "personal_id INTEGER,"+
    "FOREIGN KEY(personal_id) REFERENCES resume_personal(personal_id))");

    sqlite.close();
}


