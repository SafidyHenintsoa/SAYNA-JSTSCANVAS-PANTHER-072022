$(document).ready(() => {
    // base pour les img et text
    const actors = [{
            name: "KILLMONGER",
            bio: "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D'origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T'Challa dans une quête vers le pourvoir.",
            img: "./Illustrations/Accueil/Pantherhome_slider_1.png",
        },
        {
            name: "OKOYE",
            bio: "Okoye est le général des Dora Milaje (groupe d'élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures.",
            img: "./Illustrations/Accueil/Pantherhome_slider_2.png",
        },
        {
            name: "SHURI",
            bio: "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère.",
            img: "./Illustrations/Accueil/Pantherhome_slider_3.png",
        },
        {
            name: "NAKIA",
            bio: "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider",
            img: "./Illustrations/Accueil/Pantherhome_slider_4.png",
        },
        {
            name: "RAMONDA",
            bio: "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône.",
            img: "./Illustrations/Accueil/Pantherhome_slider_5.png",
        },
        {
            name: "W'kabi",
            bio: "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda",
            img: "./Illustrations/Accueil/Pantherhome_slider_6.png",
        },
        {
            name: "m'baku",
            bio: "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger.",
            img: "./Illustrations/Accueil/Pantherhome_slider_7.png",
        },
        {
            name: "ZURI",
            bio: "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône.",
            img: "./Illustrations/Accueil/Pantherhome_slider_8.png",
        },
        {
            name: "EVERETT KENNETH ROSS",
            bio: "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés.",
            img: "./Illustrations/Accueil/Pantherhome_slider_9.png",
        },
        {
            name: "ULYSSE KLAUE",
            bio: "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais.",
            img: "./Illustrations/Accueil/Pantherhome_slider_10.png",
        },
    ];

    // initialisation des acteur
    $(".acteurSelectionner").attr("src", actors[0].img);
    $(".titre1").text(actors[0].name);
    $(".text1").text(actors[0].bio);
    // ajout img, titre et text pour l' acteur2
    $(".acteur2").attr("src", actors[1].img);
    $(".titre2").text(actors[1].name);
    $(".text2").text(actors[1].bio);
    // ajout img pour l' acteurs3
    $(".acteur3").attr("src", actors[2].img);

    // action sur le btn next
    let i = 0;
    let a = 1;
    let b = 2;

    $(".btnNext").click(() => {
        i++;
        if (i == 10) {
            i = 0;
        }
        a++;
        if (a == 10) {
            a = 0;
        }
        b++;
        if (b == 10) {
            b = 0;
        }
        $(".imgEtText").css({
            transform: "translate(-100%)",
            transition: "transform .2s ease",
        });

        setTimeout(() => {
            $(".imgEtText").css({
                transform: "translate(0%)",
                transition: "transform 0s ease",
            });

            // ajout img, titre et text pour les acteurs selectionner
            $(".acteurSelectionner").attr("src", actors[i].img);
            $(".titre1").text(actors[i].name);
            $(".text1").text(actors[i].bio);
            // ajout img, titre et text pour l' acteur2
            $(".acteur2").attr("src", actors[a].img);
            $(".titre2").text(actors[a].name);
            $(".text2").text(actors[a].bio);
            // ajout img pour l' acteurs3
            $(".acteur3").attr("src", actors[b].img);
        }, 100);
    });
    $(window).click((e) => {
        const a =
            $(e.target).closest(".popup")[0] || $(e.target).closest(".messRec")[0];
        if (!a) {
            $(".popup").css({ display: "none" });
        }
    });

    // message par pupup
    $(".messRec").click((e) => {
        $(".popup").css({
            display: "block",
        });

        e.stopPropagation();
    });
});