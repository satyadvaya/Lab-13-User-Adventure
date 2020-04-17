// IMPORT MODULES under test here:
import makeUser from '../make-user.js';

const test = QUnit.test;

test('makes a user object in plain JS from a formData object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'alan');
    formData.set('class', 'wizard');

    const expected = {
        name: 'alan',
        class: 'wizard',
        completed: {},
        HP: 50,
        gold: 0,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const userObject = makeUser(formData);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, userObject);
});
