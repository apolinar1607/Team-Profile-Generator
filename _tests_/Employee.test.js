const Employee = require('../lib/Employee');

describe ("Check for valid Employee class arguments:", () => {
    const x = new Employee("Apolinar", 254, 'junarsan@gmail.com');
    it("should satisfy the following validation: ", () => {
        expect(x.name).toEqual(expect.any(String));
        expect(x.id).toEqual(expect.any(Number));
        expect(x.email).toMatch(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    });
   
});
