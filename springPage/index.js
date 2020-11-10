const arrDescription = [];
arrDescription[0] = {
    name: 'Spring Boot',
    description: 'Takes an opinionated view of building Spring applications and gets you up and\n' +
        '                            running as quickly as possible.',
    image: 'images/spring-boot.svg'
};

arrDescription[1] = {
    name: 'Spring Data',
    description: 'Provides a consistent approach to data access relational,\n' +
        '                            non-relational, map-reduce, and beyond.',
    image: 'images/spring-data.svg'
};

arrDescription[2] = {
    name: 'Spring Cloud Data Flow',
    description: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    image: 'images/spring-data-flow.svg'
};

arrDescription[3] = {
    name: 'Spring Framework',
    description: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    image: 'images/spring-framework.svg'
};

arrDescription[4] = {
    name: 'Spring Cloud',
    description: 'Provides a&nbsp;set of&nbsp;tools for common patterns in&nbsp;distributed systems.\n' +
        '                            Useful for building and deploying microservices.',
    image: 'images/spring-cloud.svg',
};

arrDescription[5] = {
    name: 'Spring Security',
    description: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    image: 'images/spring-security.svg'
};


function returnArr(arr, string) {
    let newArr = [];
    arr.forEach((elem, index) => {
        if (elem.name.toLowerCase().includes(string.toLowerCase()) || elem.description.toLowerCase().includes(string.toLowerCase())) {
            newArr.push(elem);
        }
    });
    return newArr;
}

const inputForSearch = document.querySelector('.search');
const documentForBlocks = document.querySelector('.content__info');
const attention = document.createElement('p');

attention.innerHTML = 'There is no result';

function renderArr(arr){
    while (documentForBlocks.firstChild) {
        documentForBlocks.removeChild(documentForBlocks.firstChild);
    }
    arr.forEach((elem, index) => {
        const newItem = document.createElement('a');
        newItem.classList.add('content__info__item');
        const newPicture = document.createElement('div');
        newPicture.classList.add('content__info__item-picture');
        const newDescription = document.createElement('div');
        newDescription.classList.add('content__info__item-description');
        const headerForItem = document.createElement('h3');
        const descriptionForItem = document.createElement('p');
        const imageForItem = document.createElement('img');
        imageForItem.src = elem.image;
        headerForItem.innerHTML = elem.name;
        descriptionForItem.innerHTML = elem.description;
        newPicture.append(imageForItem);
        newDescription.append(headerForItem);
        newDescription.append(descriptionForItem);
        newItem.append(newPicture);
        newItem.append(newDescription);
        documentForBlocks.append(newItem);
    });
}

renderArr(arrDescription);

inputForSearch.addEventListener('keyup', () => {

    /*while (documentForBlocks.firstChild) {
        documentForBlocks.removeChild(documentForBlocks.firstChild);
    }*/

    const range = document.createRange();
    range.selectNodeContents(documentForBlocks);
    range.deleteContents();

    //documentForBlocks.innerHTML = '';

    let finalResult = returnArr(arrDescription, inputForSearch.value);
    if (finalResult.length === 0) {
        documentForBlocks.append(attention);
    } else {
        renderArr(finalResult)
    }
});

const obj = {
    name: 'Spring Data',
    description: 'Provides a consistent approach to data access relational,\n' +
        '                            non-relational, map-reduce, and beyond.',
    image: 'images/spring-data.svg'
};

arrDescription.push(obj);

renderArr(arrDescription);
