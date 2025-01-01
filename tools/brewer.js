function filterList() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const items = document.querySelectorAll('#item-list li');
    let matches = [];

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            matches.push(item);
        } else {
            item.style.display = 'none';
        }
    });

    matches.sort((a, b) => {
        const aText = a.textContent.toLowerCase();
        const bText = b.textContent.toLowerCase();
        return aText.indexOf(input) - bText.indexOf(input);
    });

    matches.slice(0, 6).forEach(item => item.style.display = 'list-item');
    matches.slice(6).forEach(item => item.style.display = 'none');
}

function filtereffects() {
    const input = document.querySelector('.search-inputeffects').value.toLowerCase();
    const items = document.querySelectorAll('#item-listeffects li');
    let matches = [];

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            matches.push(item);
        } else {
            item.style.display = 'none';
        }
    });

    matches.sort((a, b) => {
        const aText = a.textContent.toLowerCase();
        const bText = b.textContent.toLowerCase();
        return aText.indexOf(input) - bText.indexOf(input);
    });

    matches.slice(0, 6).forEach(item => item.style.display = 'list-item');
    matches.slice(6).forEach(item => item.style.display = 'none');
}

// Initial call to display only the top 5 items when the page loads
document.addEventListener('DOMContentLoaded', () => {
    filterList();
    filtereffects();
});

function generateRecipe() {
    const nameInput = document.querySelector('input[name="name"]');
    const rawName = nameInput ? nameInput.value : '';
    const name = rawName.toLowerCase().replace(/\s+/g, '_');

    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(checkbox => {
        const quantityInput = document.querySelector(`input[name="quantity_${checkbox.value}"]`);
        const quantity = quantityInput ? quantityInput.value || 1 : 1;
        return `      - ${checkbox.value}/${quantity}`;
    }).join('\n');

    const effects = Array.from(document.querySelectorAll('input[name="effects"]:checked')).map(checkbox => {
        const quantityInput = document.querySelector(`input[name="quantity_${checkbox.value}"]`);
        const quantity = quantityInput ? quantityInput.value || 1 : 1;
        return `      - ${checkbox.value}/${quantity}`;
    }).join('\n');

    const cookingTimeInput = document.querySelector('input[name="cookingtime"]');
    const cookingTime = cookingTimeInput ? cookingTimeInput.value : '';

    const shouldDistill = document.querySelector('input[name="shoulditdistilled"]').checked;
    const distillTimeInput = shouldDistill ? document.querySelector('input[name="howlongtodistill"]') : null;
    const distillTime = distillTimeInput ? distillTimeInput.value : '';

    const shouldAge = document.querySelector('input[name="shoulditbeaged"]').checked;
    const woodTypeInput = shouldAge ? document.querySelector('input[name="wood"]:checked') : null;
    const woodType = woodTypeInput ? woodTypeInput.value : '';
    const ageTimeInput = shouldAge ? document.querySelector('input[name="agetime"]') : null;
    const ageTime = ageTimeInput ? ageTimeInput.value : '';

    const difficultyInput = document.querySelector('input[name="howhardtomake"]');
    const difficulty = difficultyInput ? difficultyInput.value : '';

    const alcoholInput = document.querySelector('input[name="howalcoholic"]');
    const alcohol = alcoholInput ? alcoholInput.value : '';

    const colorInput = document.querySelector('input[name="potionColor"]');
    const color = colorInput ? colorInput.value : '';

    const recipeOutput = document.getElementById('recipe-output');
    recipeOutput.innerHTML = ''; // Clear previous output

    let recipeText = `${name}:\n`;
    recipeText += `    name: ${rawName}\n`;
    recipeText += `    ingredients:\n${ingredients}\n`;
    recipeText += `    effects:\n${effects}\n`;
    recipeText += `    cookingtime: ${cookingTime}\n`;
    if (shouldDistill) {
        recipeText += `    distillruns: 3\n`;
        recipeText += `    distilltime: ${distillTime}\n`;
    }
    if (shouldAge) {
        recipeText += `    wood: ${woodType}\n`;
        recipeText += `    age: ${ageTime}\n`;
    }
    recipeText += `    difficulty: ${difficulty}\n`;
    recipeText += `    alcohol: ${alcohol}\n`;
    recipeText += `    color: ${color}`;

    const createDiv = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        div.setAttribute('contenteditable', 'true');
        return div;
    };

    recipeOutput.appendChild(createDiv(recipeText));
}

function copyRecipe() {
    const recipeOutput = document.getElementById('recipe-output');
    const textArea = document.createElement('textarea');
    textArea.value = recipeOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Recipe copied to clipboard!');
}

