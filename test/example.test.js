// IMPORT MODULES under test here:
import isYes from '../is-yes.js'

const test = QUnit.test;

test('test if answer is yes', function(assert) {
    //Arrange
    const input = 'yes';
    const expected = true;
    // Set up your parameters and expectations

    //Act 
    const results = isYes(input);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(expected, results);
    // Make assertions about what is expected valid result
 
});

test('test if answer is hannah', function(assert) {
    //Arrange
    const input = 'hannahs';
    const expected = false;
    // Set up your parameters and expectations

    //Act 
    const results = isYes(input);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(expected, results);
    // Make assertions about what is expected valid result
 
});
test('test if answer is abbey', function(assert) {
    //Arrange
    const input = 'abbey';
    const expected = false;
    // Set up your parameters and expectations

    //Act 
    const results = isYes(input);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(expected, results);
    // Make assertions about what is expected valid result
 
});