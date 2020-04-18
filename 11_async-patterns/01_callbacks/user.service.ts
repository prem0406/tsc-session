import { get as getRequest, RequestCallback, Response } from 'request';


export interface User {
    id: string,
    name: string,
    email: string,
    skillsets: any[]
}

export interface ResponseSuccessCallBack<T> {
    (body: T): void;
}

export interface ResponseErrorCallback {
    (msg?: string): void;
}

export interface UserSkillsetReport{
    techId: string
    marks: number
}

export interface UserSkillset {
    userId: string
    report: UserSkillsetReport[]
}

export interface UserSkillsetsMap{
    [key: string] : UserSkillset[];
}
export class UserService {
    getAllUsers(userSuccessCallback: ResponseSuccessCallBack<User[]>, userErrorCallback: ResponseErrorCallback) {
        const url = 'http://localhost:3001/api/users';

        getRequest(url, (error: any, response: Response, body: any ) => {
            const users = JSON.parse(body) as User[]
            
            this.getUsersSkillSets(users, function(userSkillsets: UserSkillsetsMap) {
                
                users.forEach((user: User) => {
                    user.skillsets = userSkillsets[user.id]
                })

                userSuccessCallback(users)
            })



        })
    }

    getUsersSkillSets(users: User[], callback) {
        const totalUsers = users.length
        const usersSkillSets : UserSkillsetsMap = {}
        let currentUserNumber = 0

        function initiateRequest(user: User) {
            const url = `http://localhost:3001/users/${user.id}/skillsets`;
            getRequest(url, (error: any, response: Response, body: any ) => {
                usersSkillSets[user.id].push(...JSON.parse(body))
                currentUserNumber++;

                if(currentUserNumber === totalUsers - 1) {
                    callback(usersSkillSets)
                }
    
            })
        }

        users.forEach((user: User) => {
            usersSkillSets[user.id] = [];
            initiateRequest(user)
        })
    }
}