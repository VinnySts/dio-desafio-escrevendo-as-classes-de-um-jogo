let typeClass = 'Warrior';
let typeName;
let typeAge;
let typeAttack;

switch (typeClass){
    case 'Warrior':
        typeName = 'Drake';
        typeAge = 18;
        typeAttack = 'Sword';
        break;
    case 'Wizard':
        typeName = 'Agatha';
        typeAge = 23;
        typeAttack = 'Magic';
        break;
    case 'Monk':
        typeName = 'Trevor';
        typeAge = 21;
        typeAttack = 'Martial Arts';
        break;
    case 'Ninja':
        typeName = 'Samantha';
        typeAge = 17;
        typeAttack = 'Shuriken';
        break;
    default:
        typeName = 'Unknown';
        typeAge = 'Unknown';
        typeAttack = 'Unknown';
        break;
}

console.log(`Name: ${typeName}`)
console.log(`Current Age: ${typeAge}`)
console.log(`Class: ${typeClass}`)
console.log(`   `)
console.log(`The ${typeClass} attacked using ${typeAttack}.`);