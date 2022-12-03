const Manager = require('../lib/Manager');

describe('manager',() => {
    const manager = new Manager('Donald',10,'Donald@gmail.com',9242688764);
    describe("getName", () => {
        it('It should return the name of the manager as passed in the perimeter', () => {

            const name = manager.getName();
            expect(name).toEqual("Donald");
        });
    });

    describe("getId", () => {
        it('It should return the ID of the manager as passed in the perimeter', () => {
            const id = manager.getId();
            expect(id).toEqual(10);
        });
    });
    
    describe("getEmail", () => {
        it('It should return the Email of the manager as passed in the perimeter', () => {
            const email = manager.getEmail();
            expect(email).toEqual('Donald@gmail.com');
        });
    });

    describe("getOfficeNumber", () => {
        it('It should return the Email of the manager as passed in the perimeter', () => {
            const email = manager.getOfficeNumber();
            expect(email).toEqual(9242688764);
        });
    });

    describe("getRole", () => {
        it('It should return the Role as manager', () => {
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });
});