export default function makeUser(formData) {
    
//     formData.set('name', 'alan');
//     formData.set('class', 'wizard');

//     const newUser = {
//         name: 'alan',
//         class: 'wizard',
//         completed: {},
//         HP: 50,
//         gold: 0,
//     };
    
//     return newUser;
// }

    const name = formData.get('name');
    const userClass = formData.get('class');

    const userObject = {
        name: name,
        class: userClass,
        completed: {},
        HP: 50,
        gold: 0,
    };
    
    return userObject;




}