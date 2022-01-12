import { request } from '@/utils/request'

interface LoginInput {
    email: string,
    password: string,

}
interface User {
    email: string,
    password: string,
    username: string,
    channelDescription?: string,
    avatar?: string
}

interface LoginPayload {
 user: User
}

export const login = (data: LoginInput) => {
    return request.post<LoginPayload>('/api/v1/user/login', data)
}

// login({
//     email: '123',
//     password: '44',
// }).then(res => {
//     res.data.user.email.slice
// })
