const Engineer = require('../lib/Engineer');

describe ("Check for valid Engineer class arguments:", () => {
    const x = new Engineer("Matthew", 789, 'matthew@hotmail.com', 'matthew1203');
    it("should satisfy the following validation: ", () => {
        expect(x.name).toEqual(expect.any(String));
        expect(x.id).toEqual(expect.any(Number));
        expect(x.email).toMatch(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        expect(x.github).toEqual(expect.any(String));
    });
   
});