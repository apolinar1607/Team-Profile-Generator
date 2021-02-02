const Manager = require('../lib/Manager');

describe ("Check for valid Manager class arguments:", () => {
    const x = new Manager("Jessica", 361, 'jessica@hotmail.com', 65232);
    it("should satisfy the following validation: ", () => {
        expect(x.name).toEqual(expect.any(String));
        expect(x.id).toEqual(expect.any(Number));
        expect(x.email).toMatch(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        expect(x.officeNumber).toEqual(expect.any(Number));
    });
   
});