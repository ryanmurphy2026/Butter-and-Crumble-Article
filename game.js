function changeOption(type, optionId) {
    document.querySelectorAll('.' + type).forEach(el => el.style.display = 'none');
    document.getElementById(optionId).style.display = 'block';

    updateName(optionId);
}


function showOptions(category) {
    document.getElementById('flavor-options').style.display = (category === 'flavor') ? 'block' : 'none';
    document.getElementById('pizazz-options').style.display = (category === 'pizazz') ? 'block' : 'none';
}

function updateName(optionId) {

    // Map options to names
    let name = '';  // default name
    if (optionId === 'pistachio') {
        name = 'Pistachio Cream ';
        document.getElementById('flavorName').textContent = name;
    } else if (optionId === 'almond') {
        name = 'Almond Butter ';
        document.getElementById('flavorName').textContent = name;
    } else if (optionId === 'chocolate') {
        name = 'Chocolate ';
        document.getElementById('flavorName').textContent = name;
    } else if (optionId === 'strawberry') {
        name = 'Strawberry ';
        document.getElementById('flavorName').textContent = name;
    } else if (optionId === 'steak') {
        name = 'Steak ';
        document.getElementById('flavorName').textContent = name;
    } else if (optionId === 'cardamonsugar') {
        name = 'Cardamon Sugar ';
        document.getElementById('pizazzName').textContent = name;
    } else if (optionId === 'herb') {
        name = 'Herb ';
        document.getElementById('pizazzName').textContent = name;
    } else if (optionId === 'coconut') {
        name = 'Coconut ';
        document.getElementById('pizazzName').textContent = name;
    } else if (optionId === 'yolk') {
        name = 'Egg ';
        document.getElementById('pizazzName').textContent = name;
    }
    else if (optionId === 'cheese') {
        name = 'Cheese ';
        document.getElementById('pizazzName').textContent = name;
    }


}