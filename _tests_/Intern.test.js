const Intern = require('../lib/Intern');

describe ("Check for valid Intern class arguments:", () => {
    const x = new Intern("Felipe", 923, 'felipe@gmail.com', 'Duke');
    it("should satisfy the following validation: ", () => {
        expect(x.name).toEqual(expect.any(String));
        expect(x.id).toEqual(expect.any(Number));
        expect(x.email).toMatch(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        expect(x.school).toEqual(expect.any(String));
    });
   
});