const Engineer = require('../lib/Engineer');

describe('Engineer',() => {
    const engineer = new Engineer('Alan',5,'alan@gmail.com','oriarh');
    describe("getName", () => {
        it('It should return the name of the engineer as passed in the perimeter', () => {

            const name = engineer.getName();
            expect(name).toEqual("Alan");
        });
    });

    describe("getId", () => {
        it('It should return the ID of the engineer as passed in the perimeter', () => {
            const id = engineer.getId();
            expect(id).toEqual(5);
        });
    });
    
    describe("getEmail", () => {
        it('It should return the Email of the engineer as passed in the perimeter', () => {
            const email = engineer.getEmail();
            expect(email).toEqual('alan@gmail.com');
        });
    });

    describe("getGithub", () => {
        it('It should return the Github Username of the engineer as passed in the perimeter', () => {
            const github = engineer.getGithub();
            expect(github).toEqual('oriarh');
        });
    });

    describe("getRole", () => {
        it('It should return the Role as Engineer', () => {
            const role = engineer.getRole();
            expect(role).toEqual('Engineer');
        });
    });
});