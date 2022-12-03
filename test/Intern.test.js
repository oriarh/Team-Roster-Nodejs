const Intern = require('../lib/intern');

describe('intern',() => {
    const intern = new Intern('Alex',5,'alex@gmail.com','University of San Diego');
    describe("getName", () => {
        it('It should return the name of the intern as passed in the perimeter', () => {

            const name = intern.getName();
            expect(name).toEqual("Alex");
        });
    });

    describe("getId", () => {
        it('It should return the ID of the intern as passed in the perimeter', () => {
            const id = intern.getId();
            expect(id).toEqual(5);
        });
    });
    
    describe("getEmail", () => {
        it('It should return the Email of the intern as passed in the perimeter', () => {
            const email = intern.getEmail();
            expect(email).toEqual('alex@gmail.com');
        });
    });

    describe("getSchool", () => {
        it('It should return the School that the intern went to, as passed in the perimeter', () => {
            const school = intern.getSchool();
            expect(school).toEqual('University of San Diego');
        });
    });

    describe("getRole", () => {
        it('It should return the Role as intern', () => {
            const role = intern.getRole();
            expect(role).toEqual('Intern');
        });
    });
});