console.log('main.js loaded');

let students = [
    {
        name: 'Adi',
        avatar: "https://avatars.dicebear.com/api/bottts/adi.svg?background=%23e2e2e2bf",
        title: "Dr. Universitar Honoris Causa",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 12,
            answers: 19,
            skipped: 5
        },
        color: 'green'
    },
    {
        name: 'Ioana',
        avatar: "https://avatars.dicebear.com/api/bottts/ioana.svg?background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'purple'
    },
    {
        name: 'Alex',
        avatar: "https://avatars.dicebear.com/api/bottts/alex.svg?background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'royalblue'
    },
    {
        name: 'Tudor',
        avatar: "https://avatars.dicebear.com/api/bottts/tudor.svg?background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'blue'
    },
    {
        name: 'Maria',
        avatar: "https://avatars.dicebear.com/api/micah/maria.svg?mood[]=happy&background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'red'
    },
    {
        name: 'Iris',
        avatar: "https://avatars.dicebear.com/api/bottts/iris.svg?background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'deeppink'
    },
    {
        name: 'Teo',
        avatar: "https://avatars.dicebear.com/api/bottts/teo.svg?background=%23e2e2e2bf",
        title: "Asist. Hatz Universitar",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores iste possimus aut, placeat fugiat reiciendis, aliquid.",
        stats: {
            points: 10,
            answers: 15,
            skipped: 3
        },
        color: 'orange'
    }
];



const cardsContainer = document.querySelector('.cards-container');

for (let i = 0; i < students.length; i++) {
    createCard(cardsContainer, students[i]);
}


function hideCards()
{
    let winner = randomArrayElement(students.length);

    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) 
    {
        if(i != winner)
            cards[i].classList.add('hide');
    }
}

function resetCards()
{
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) 
    {
        cards[i].classList.remove('hide');
    }
}