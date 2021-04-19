/*********************************************************************************
 * 
 * ICON DISPLAY
 * 
 *  TASKS:
 *  1. PRINT TO SCREEN THE ICON SET.
 *  2. PRINT TO SCREEN THE ICON COLORED SET.
 *  3. FILTER THE ICON COLORED SET.
 * 
**********************************************************************************/

// SET ICON 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];




// ICON CONTAINER
const container = document.querySelector('.icons');
console.log(container);

// 1.
printIcons(icons, container);

























/**********************************************************************************
 * 
 *  FUNCTIONS
 * 
***********************************************************************************/

function printIcons(icons, container) {

    // GENERATING MARKUP
    let screen = '';

    // LOOP THE ICONS SET
    icons.forEach( (icon) => {

        // DESTRUCTURING
        const {family, prefix, name} = icon;
        
        // WRITING MARKUP
        screen += `
        <div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: #333"></i>
            <div class="title">${name}</div>
        </div>
        `;
    });

    // ADDING ICONS TO CONTAINER
    console.log(screen);
    container.innerHTML = screen;
}
