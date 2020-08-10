const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Albert Einstein",
        avatar: "https://www.revistabula.com/wp/wp-content/uploads/2019/10/albert_einstein.jpg",
        whatsapp: "1593698741",
        bio: "Albert Einstein (1879-1955) foi um físico alemão que desenvolveu a teoria da relatividade geral,um dos pilares da física moderna. Ele também descobriu a lei do efeito fotoelétrico e ganhou o Prêmio Nobel da Física, em 1921, por todas as suas contribuições importantes. Einstein foi professor em várias instituições de ensino superior, como a Universidade de Berna, na Suíça; a Universidade Carolina, em Praga; e o Instituto Federal de Tecnologia de Zurique",
    }

    classValue = {
        subject: "Física",
        cost: "1000",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValue })
})