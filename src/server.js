const proffys = [
    {
        name: "Albert Einstein",
        avatar: "https://www.revistabula.com/wp/wp-content/uploads/2019/10/albert_einstein.jpg",
        whatsapp: 1593698741,
        bio: "Albert Einstein (1879-1955) foi um físico alemão que desenvolveu a teoria da relatividade geral,um dos pilares da física moderna. Ele também descobriu a lei do efeito fotoelétrico e ganhou o Prêmio Nobel da Física, em 1921, por todas as suas contribuições importantes. Einstein foi professor em várias instituições de ensino superior, como a Universidade de Berna, na Suíça; a Universidade Carolina, em Praga; e o Instituto Federal de Tecnologia de Zurique",
        subject: "Física",
        cost: 1000,
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Marie Curie",
        avatar: "https://www.revistabula.com/wp/wp-content/uploads/2019/10/Marie-Curie.jpg",
        whatsapp: 1593698741,
        bio: "Marie Curie (1867-1934) foi uma cientista polonesa radicada na França que desenvolveu pesquisas pioneiras sobre a radioatividade. Ela foi a primeira mulher a receber um Prêmio Nobel e a única pessoa a ganhar o prêmio duas vezes em diferentes categorias: física e química. Além de desenvolver a teoria da radioatividade, Curie descobriu dois novos elementos químicos, o polônio e o rádio. Marie Curie foi a primeira mulher a ser admitida como professora na Universidade de Paris.",
        subject: "Ciências ",
        cost: 800,
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Johann Heinrich Pestalozzi",
        avatar: "https://www.revistabula.com/wp/wp-content/uploads/2019/10/Johann-Heinrich-Pestalozzi.jpg",
        whatsapp: 1593698741,
        bio: "Johann Heinrich Pestalozzi (1746-1827) foi um pedagogo suíço, criador do “Método Pestalozzi”. Em sua época, revolucionou a educação ao defender uma pedagogia humana e afetiva, tendo a escola como uma extensão do lar das crianças, onde elas se sentissem seguras e protegidas. Para Pestalozzi, o objetivo final do aprendizado seria a tripla formação do ser: intelectual, física e moral. Fundador de várias escolas, ele era contra a aplicação de provas, castigos e recompensas.",
        subject: "Pedagogia",
        cost: 600,
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {

    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    //adicionar os dados a lista de proffys
    const data = req.query

    const isNoEmpty = Object.keys(data).length > 0

    if (isNoEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })

}

//Servidor
const express = require('express')
const server = express()

//configuração nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(3000)