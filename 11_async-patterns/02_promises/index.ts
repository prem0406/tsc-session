import {UserService, User, UserSkillset} from './user.service'

const userService = new UserService()

function getMaximumMarks(skillsets: UserSkillset[]) {
    let maxMarks = 0;

    for (let index = 0; index < skillsets.length; index++) {
        const skillset = skillsets[index];
        maxMarks = skillset.report.reduce((acc, curr) => {
            return acc > curr.marks ? acc : curr.marks;
        }, maxMarks)
    }
    return maxMarks;
}

userService.getAllUsers()
    .then((users : User[]) => {
        const names = users.map((user: User) => {
            return `${user.name} - ${user.email} - Marks: ${getMaximumMarks(user.skillsets)}`;
        });
        console.log(names);
    })
    .catch((error) => {
        console.log('Error Ocurred in index: ', error)
    })
    