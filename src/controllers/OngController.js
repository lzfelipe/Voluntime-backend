module.exports = {
    async GetOngs(req, res, next) {
        const { id } = req.params;

        const ongsList = [
            {
                id: 1,
                mainPhoto: "https://pbs.twimg.com/profile_images/499159819677216769/M-ZAiT9S_400x400.jpeg",
                causa: "Animais",
                periodo: "noite",
                profilePhotos: [ `https://i.imgur.com/iS5z6WK.jpg`, `https://i.imgur.com/TvYRz9G.jpg
                `, `https://i.imgur.com/hXIVwVZ.jpg`],
                nome: "Clube do Vira-latas",
                description: "Fundada em 2001, a ONG Clube dos Vira-Latas além de ser um intermediário para adoção, resgata animais de rua, promove campanhas de castração, oferece cirurgias, fisioterapia, vacinação e abrigo para cães sem lar. Atua principalmente na região do ABC, na Grande São Paulo.",
                address: `Av. Rotary, 825 Centro - São Bernardo Do Campo - SP CEP: 09721-000`,
                lat: -23.721390,
                lng: -46.550850,
            },

            {
                id: 2,
                mainPhoto: "https://i.imgur.com/iO1fuox.jpg",
                causa: "Idosos",
                periodo: "manha",
                profilePhotos: ["https://i.imgur.com/xcw8wi6.jpg", "https://i.imgur.com/9A1SaJV.jpg", "https://i.imgur.com/94GejSv.jpg"],
                nome: "Brilho do Sol",
                description: `Cuidados, Amor e Carinho definem a filosofia da casa de repouso Brilho do Sol em São Paulo.
                Há mais de 30 anos na zona oeste de sp prestando serviços à diversas famílias com excelência, respeito e dedicação.
                Trabalhamos para que nossos hóspedes possam desfrutar de suas estadas em uma das melhores casas de repouso em São Paulo com o máximo conforto e segurança.
                A nossa equipe é formada por enfermeiros, psicólogos, nutricionistas, fonoaudiólogos, terapeutas e mais, todos amplamente qualificados pelas melhores escolas.
                Além do time interno que cuida de toda a rotina e dia a dia de seu familiar, proporcionamos sempre passeios, atividades recreativas, musicoterapia e terapias ocupacionais diversas.`,
                address: `Rua dos Três Irmãos, 771
                Jardim Guedala, São Paulo – SP
                CEP: 05615-190`,
                lat: -23.590580,
                lng: -46.714640,
            },

            {
                id: 3,
                causa: "Meio Ambiente",
                periodo: "noite",
                mainPhoto: "https://i.imgur.com/sABN59g.jpg",
                profilePhotos: ["https://i.imgur.com/7wiovop.jpg", "https://i.imgur.com/NVS4XGd.jpg", "https://i.imgur.com/XYVXQXP.jpg"],
                nome: "Iniciativa Verde",
                description: "A Iniciativa Verde é uma organização do terceiro setor que busca contribuir para a melhoria dos serviços ambientais como biodiversidade, água e qualidade do ar. Com isso, ela ajuda na mitigação e na adaptação às mudanças climáticas causadas pelas atividades humanas por meio de projetos próprios de recomposição florestal e em parceria com outras instituições. A Iniciativa Verde acredita na importância da consistência e da atualização científica, direcionando seu trabalho para a geração e à difusão de conhecimento e também ao apoio à formulação e implementação de políticas públicas que sejam capazes de garantir a conservação dos ecossistemas naturais e o bem-estar das comunidades rurais.",
                address: `Rua João Elias Saada, 46
                Pinheiros, São Paulo - SP - 05427-050`,
                lat: -23.566710,
                lng: -46.696520,
            },

            {
                id: 4,
                causa: "Animais",
                periodo: "tarde",
                mainPhoto: "https://i.imgur.com/jmG6TGP.jpg",
                profilePhotos: ["https://i.imgur.com/c7NjboN.png", "https://i.imgur.com/Knm4Ogn.jpg", "https://i.imgur.com/gc1d2mi.png"],
                nome: "Gatópoles",
                description: `A Gatópoles - Adoção de Gatinhos é uma ONG (Organização Não Governamental), com sede em São Paulo (SP), tem como objetivo encaminhar para famílias responsáveis gatos retirados das mais diversas situações de risco.
                Mantemos o abrigo com transparência, através da doação de pessoas de bem, que compartilham dos nossos mesmos objetivos de vida - salvar vidas de animaizinhos em situações de risco e abandono, já que não contamos com nenhuma ajuda do governo ou da iniciativa privada.
                Todos os nossos gatinhos são encaminhados para adoção castrados, testados para Fiv/ Felv e com as vacinas em dia.`,
                address: "Avenida Paulista, 1380, Bela Vista, São Paulo-SP, 01310-100",
                lat: -23.562690,
                lng: -46.654870,
            },

            {
                id: 5,
                causa: "Animais",
                periodo: "manha",
                mainPhoto: "https://i.imgur.com/2l8CMib.png",
                profilePhotos: ["https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.0-9/p960x960/96067970_1538742809609633_6358131948476432384_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=QrRu8KserEcAX-OiTUi&_nc_ht=scontent.fcgh17-1.fna&_nc_tp=6&oh=b64c25073c3fbdd68ff39769e107b628&oe=5EFBB8D0", "https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.0-9/88009527_1476708309146417_4961472986851835904_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=W9OZGYdwDqcAX9_bGxD&_nc_ht=scontent.fcgh17-1.fna&oh=02549f95cf1adc6aa1034f2e979a92de&oe=5EF926BE","http://www.ongsoscidadaniaanimal.org/images/site/clinica.jpg"],
                nome: "Cidadania Animal",
                description: "A ONG SOS CIDADANIA ANIMAL é uma organização não-governamental, sem fins lucrativos, fundada em janeiro de 2009 para oferecer auxílio aos animais necessitados que estão abandonados à sua própria sorte. Nossa missão sempre foi a de mudar a realidade destes que muitas vezes estão completamente indefesos, vítimas da crueldade e do abuso, enquanto tentam sobreviver sem proteção.",
                address: "Rua Espírito Santo, 746, São Caetano do Sul - SP - 09530-701",
                lat: -23.622910,
                lng: -46.573330,
            },

            {
                id: 6,
                causa: "Moradores de Rua",
                periodo: "tarde",
                mainPhoto: "https://i.imgur.com/MFQJTyj.png",
                profilePhotos: ["https://i.imgur.com/mIIDpYt.png", "https://i.imgur.com/PwHyBTa.png", "https://i.imgur.com/srdXjwD.png"],
                nome: "A Corrente do Bem",
                description: `Somos uma ONG que busca amenizar o sofrimento de pessoas vulneráveis, elevando suas autoestimas. Nossos valores são honestidade, transparência e coerência em nossas ações e relações;
                Respeito pela diversidade social, cultural, ambiental e econômica, valorização e reconhecimento de sua complexidade. Nossos objetivos são levar amor e caridade as pessoas desprovidas de atendimento e atenção do poder público.`,
                address: `R. Dr. José Augusto de Souza e Silva - Jardim Parque Morumbi, São Paulo - SP, 05712-040`,
                lat: -23.620670,
                lng: -46.729480,
            },

            {
                id: 7,
                causa: "Alimento",
                periodo: "noite",
                mainPhoto: "https://i.imgur.com/PsBCxQf.jpg",
                profilePhotos: ["https://i.imgur.com/9obwyBl.jpg", "https://i.imgur.com/fc8VCwE.png", "https://i.imgur.com/TEHkiKn.jpg"],
                nome: "Banco de Alimentos",
                description: "Fundada em 1998, a ONG Banco de Alimentos é uma associação civil que recolhe alimentos que já perderam valor de prateleira no comércio e indústria, mas ainda estão perfeitos para consumo, e os distribui onde são mais necessários. No lugar de descartar legumes, massas, frutas, entre outros, os parceiros doam os excedentes à ONG que repassa tudo às instituições sociais cadastradas no projeto. Essa distribuição permite a complementação nutricional de refeições servidas para milhares de crianças, jovens, adultos e idosos na cidade de São Paulo, todos os dias.",
                address: `R. Vinte e Oito de Outubro, 61 - Centro, São Bernardo do Campo - SP, 09721-250`,
                lat: -23.715070,
                lng: -46.549870,
            },

            {
                id: 8,
                causa: "Moradores de Rua",
                periodo: "manha",
                mainPhoto: "https://i.imgur.com/vjW7tJY.png",
                profilePhotos: ["https://i.imgur.com/XPcZOr6.png", "https://i.imgur.com/uaRaxrP.jpg", "https://i.imgur.com/LCLgCIA.jpg"],
                nome: "SP Invisível",
                description: "O SP Invisível é um movimento de conscientização das pessoas através de histórias de pessoas em situação de rua da cidade de São Paulo. Queremos humanizar as pessoas para que elas possam enxergar com as lentes do amor e ver no que todo mundo diz que é invisível, o João, a Maria, o José e suas histórias. A ONG SP Invisível atua há 6 anos na capital contando a história de moradores de rua por meio de perfis publicados na internet. Todos os invernos, a organização coordena a campanha São Paulo Sem Frio para doar kits, mantimentos e agasalhos para os desabrigados.",
                address: "Rua Oswaldo Presciliano de Carvalho, 75 - Sumaré, São Paulo - SP, 01257-166",
                lat: -23.541720,
                lng: -46.688480,
            },
        ]

        function correctionId(id) {
            return id - 1
        }

        id > ongsList.length ? res.status(400).json("Esta ONG não existe.") :  res.status(200).json(ongsList[correctionId(id)])
    },

    async auth(req, res, next) {
        const { id, password } = req.body;

        console.log(id + " " + password)

        const OngsInfos = [
            {
                id: 1,
                pass: 'senha1'
            },
            {
                id: 2,
                pass: 'senha2'
            },
            {
                id: 3,
                pass: 'senha3'
            },
            {
                id: 4,
                pass: 'senha4'
            },
            {
                id: 5,
                pass: 'senha5'
            },
            {
                id: 6,
                pass: 'senha6'
            },
            {
                id: 7,
                pass: 'senha7'
            },
            {
                id: 8,
                pass: 'senha8'
            },
        ]
        
        function correctionId(id) {
            return id - 1
        }
    
        if(id == OngsInfos[correctionId(id)].id && password == OngsInfos[correctionId(id)].pass) {
            return res.status(200).json({success: true, id: OngsInfos[correctionId(id)].id})
        } else {
            return res.status(400).json({ msg: "Credencias inválidas.", success: false });
        }
      },
}