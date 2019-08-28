var sqlite = require('sqlite-sync');

//Listen para a rota noticias
module.exports = function (app) {

    app.get('/api/curriculo', function (req, res) {
        sqlite.connect('resume.sqlite3');
        let rows = sqlite.run("SELECT * FROM resume_personal");
        console.log(rows);
        res.send(rows);
        sqlite.close();
    });

    app.post('/api/curriculo', function (req, res) {
        sqlite.connect('resume.sqlite3');
        data = req.body;
        let id = insertPersonalData(data);
        insertImploymentHistoryData(data);
        insertEducationData(data);
        insertSkillData(data);
        insertLanguageData(data);
        res.send('Dados inseridos');
        sqlite.close();
    });
}

function insertPersonalData(data) {
    let personal_data = {
        first_name: data['first_name'],
        last_name: data['last_name'],
        image: data['image'],
        profile: data['profile'],
        phone: data['details']['phone'],
        email: data['details']['email']
    }
    let result = sqlite.run(`SELECT personal_id FROM resume_personal WHERE personal_id = '${data['personal_id']}'`);
    if (result.length > 0) {
        sqlite.update('resume_personal', personal_data, {personal_id: data['personal_id']});
        return data['personal_id'];
    }
    let id = sqlite.insert('resume_personal', personal_data);
    return id;
}

function insertImploymentHistoryData(data) {
    for (let emp of data['employment_history']) {
        let employment_data = {
            job_title: emp['job_title'],
            employer: emp['employer'],
            city: emp['city'],
            start_month: emp['start_month'],
            start_year: emp['start_year'],
            end_month: emp['end_month'],
            end_year: emp['end_year']
        }
        let result = sqlite.run(`SELECT employment_id FROM resume_employment_history WHERE employment_id = '${emp['employment_id']}'`);
        console.log(result)
        if (result.length > 0) {
            let id = sqlite.update('resume_employment_history', employment_data, {employment_id: employment_data['employment_id']});
        } else {
            let id = sqlite.insert('resume_employment_history', employment_data);
        }
    }
}

function insertEducationData(data) {
    for (let edu of data['education']) {
        let education_data = {
            school: edu['school'],
            degree: edu['degree'],
            city: edu['city'],
            start_month: edu['start_month'],
            start_year: edu['start_year'],
            end_month: edu['end_month'],
            end_year: edu['end_year']
        }
        let result = sqlite.run(`SELECT education_id FROM resume_education WHERE education_id = '${edu['education_id']}'`);
        if (result.length > 0) {
            let id = sqlite.update('resume_education', education_data, {education_id: edu['education_id']});
        } else {
            let id = sqlite.insert('resume_education', education_data);
            console.log(id);
        }
    }
}

function insertSkillData(data) {
    for (let skill of data['skills']) {
        let skill_data = {
            skill: skill['skill'],
            level: skill['level'],
        }
        let result = sqlite.run(`SELECT skill_id FROM resume_skills WHERE skill_id = '${skill['skill_id']}'`);
        if (result.length > 0) {
            let id = sqlite.update('resume_skills', skill_data, {skill_id: skill['skill_id']});
        } else {
            let id = sqlite.insert('resume_skills', skill_data);
            console.log(id);
        }
    }
}

function insertLanguageData(data) {
    for (let language of data['languages']) {
        let language_data = {
            language: language['language'],
            level: language['level'],
        }
        let result = sqlite.run(`SELECT language_id FROM resume_languages WHERE language_id = '${language['language_id']}'`);
        if (result.length > 0) {
            let id = sqlite.update('resume_languages', language_data, {language_id: language['language_id']});
        } else {
            let id = sqlite.insert('resume_languages', language_data);
            console.log(id);
        }
    }
}


