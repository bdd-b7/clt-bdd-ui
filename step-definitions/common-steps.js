// module.exports = function () {
    
//     this.Given(/I am on the "([^"]*)" portal$/, function (objKey) { // Jootza
//         return helpers.loadPage(page.commonObjects[objKey+'Url']);
//     });
//     this.When(/^I click on "([^"]*)"$/, function (objectKey) {
//         return page.costco.clickElement1(objectKey);
//     });
    
//     this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
//         return page.costco.elementExists(objectKey);
//     });

//     this.When('I enter inputs for the form fields', async function(t) {
//         console.log('Table Data: ' +JSON.stringify(t.rows()))
//         const inputs = t.rows()
//         for(i = 0;i<inputs.length; i++) {
//         //console.log('FieldName: '+input[i][0])
//         //console.log('Value: ' +input[i][1])
//             page.commonObjects.inputElement(inputs[i][0], inputs[i][1])
//         }
//         await driver.sleep(3000);
//         return;
//     })

//     this.When(/^I enter the inputs for login$/, async function (table) {
//         const fields = table.rows();
//         for (i = 0; i < fields.length; i++) {
//             page.commonObjects.inputElement(fields[i][0], fields[i][1]);
//         };
//         await driver.sleep(3000);
//         return;
//     });


// };
