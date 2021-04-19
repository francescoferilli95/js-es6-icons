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

// COLORS
const colors = [
    '#121629',
    '#b8c1ec',
    '#eebbc3'
];

// ICON CONTAINER
const container = document.querySelector('.icons');
// console.log(container);

// 1.
// printIcons(icons, container);

// 2.
const coloredIcons = colorIcons(icons, colors);
// console.log(coloredIcons);
printIcons(coloredIcons, container);























/**********************************************************************************
 * 
 *  FUNCTIONS
 * 
***********************************************************************************/

/**
 * 
 *  GENERATING MARKUP
 * 
 */

function printIcons(icons, container) {

    // GENERATING MARKUP
    let screen = '';

    // LOOP THE ICONS SET
    icons.forEach( (icon) => {

        // DESTRUCTURING
        const {family, prefix, name, color} = icon;
        
        // WRITING MARKUP
        screen += `
        <div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>
        `;
    });

    // ADDING ICONS TO CONTAINER
    // console.log(screen);
    container.innerHTML = screen;
}

/**
 * 
 *  RETURN COLOR ICONS COLLECTION BY TYPE
 * 
 */

function colorIcons(icons, colors) {
    // GET COLOR BY TYPE
    const types = getTypes(icons);
    // console.log(types);
    // console.log(colors);

    // ADDING COLORS TO ICONS SET
    const coloredIcons = icons.map( (icon) => {
        const indexType = types.indexOf(icon.type);
        return {
            ...icon,
            color: colors[indexType],
        }
    })

    return coloredIcons;
}

/**
 * 
 *  GET ICONS TYPE (UNIQUE)
 * 
 */

function getTypes(icons) {
    const types = [];
    icons.forEach( (icon) =>{
        if(! types.includes(icon.type)) {
            types.push(icon.type)
        }
    });

    return types;
}
