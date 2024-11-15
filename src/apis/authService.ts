import { AxiosError } from "axios"
import instance, { tempCookie } from "./interceptor"

export default class AuthService {
    static async login(username: string, password: string): Promise<number> {
        try {
            const response = await instance.post("/user/login", {
                email: username,
                password: password,
            })
            tempCookie.setToken(response.headers["Authorization"])
            console.log(instance)
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }

    static async signup(
        hospital_name: string,
        type: string,
        address: string,
        phone: string,
        description: string,
        open_time: string,
        close_time: string,
        password: string,
        authentication_key: string
    ): Promise<number> {
        try {
            const response = await instance.post("/hopital/application", {
                hospital_name: hospital_name,
                type: type,
                address: address,
                phone: phone,
                description: description,
                open_time: open_time,
                close_time: close_time,
                password: password,
                authentication_key: authentication_key,
            })
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }
}
