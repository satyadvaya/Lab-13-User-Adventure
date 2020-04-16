export default function makeUser(formData) {
    formData.set('name', 'dani');
    formData.set('class', 'wizard');

    const newUser = {
        name: 'dani',
        class: 'wizard',
        completed: {},
        HP: 50,
        gold: 0,
    };
    
    return newUser;
}