function createCard(parentElem, student)
{
    let card = document.createElement('div');
    card.classList.add('card');
    parentElem.appendChild(card);

    createCardHeader(card, student);
    createCardBody(card, student);
    createCardFooter(card, student);
}

function createCardHeader(card, student)
{
    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader);

    let avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = student.avatar;
    cardHeader.appendChild(avatar);
}

function createCardBody(card, student)
{
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText = student.title;
    cardBody.appendChild(title);

    let name = document.createElement('h2');
    name.innerText = student.name;
    cardBody.appendChild(name);

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = student.description;
    cardBody.appendChild(description);
}

function createCardFooter(card, student)
{
    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    card.appendChild(cardFooter);

    for(let s in student.stats)
    {
        let statsDiv = document.createElement('div');
        statsDiv.classList.add('stats');
        cardFooter.appendChild(statsDiv);

        let statValue = document.createElement('div');
        statValue.classList.add('stats-value');
        statValue.innerText = student.stats[s];
        statsDiv.appendChild(statValue);

        let statName = document.createTextNode(s);
        statsDiv.appendChild(statName);
        
    }
}