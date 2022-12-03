const Employee = require('../lib/Employee');

describe('Employee',() => {
    const employee = new Employee('Osama',2,'osama@gmail.com');
    describe("getName", () => {
        it('It should return the name of the employee as passed in the perimeter', () => {

            const name = employee.getName();
            expect(name).toEqual("Osama");
        });
    });

    describe("getId", () => {
        it('It should return the ID of the employee as passed in the perimeter', () => {
            const id = employee.getId();
            expect(id).toEqual(2);
        });
    });
    
    describe("getEmail", () => {
        it('It should return the Email of the employee as passed in the perimeter', () => {
            const email = employee.getEmail();
            expect(email).toEqual('osama@gmail.com');
        });
    });

    describe("getRole", () => {
        it('It should return the Role as employee', () => {
            const role = employee.getRole();
            expect(role).toEqual('employee');
        });
    });
});