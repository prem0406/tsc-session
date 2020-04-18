import axios, { AxiosResponse, AxiosError } from 'axios';


export interface User {
    id: string,
    name: string,
    email: string,
    skillsets: any[]
}

export interface UserSkillsetReport{
    techId: string
    marks: number
}

export interface UserSkillset {
    userId: string
    report: UserSkillsetReport[]
}



export class UserService {

    async getAllUsers() : Promise<User[] | void> {
        const url = 'http://localhost:3001/api/users';

        try {
            const response = await axios.get<User[]>(url)
            const users : User[] = response.data
            const upadatedUser: User[] = await this.getUsersSkillSets(users)
            return upadatedUser
        } catch (error) {
            console.log('Error Occurred in service: ', error)
            
        }
        
    }

    async getUsersSkillSets(users: User[]) : Promise<User[]> {
        const promises = users.map( (user: User) => {
            return axios.get<UserSkillset[]>(`http://localhost:3001/users/${user.id}/skillsets`)
        })

        const responses : AxiosResponse<UserSkillset[]>[] = await Promise.all(promises)
        const skillsets = responses.map(response => response.data)
        users.forEach((user, index) => {
            user.skillsets = skillsets[index]
        })
        
        return users
       
    }
}