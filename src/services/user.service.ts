import axios from "axios";
import {IServerResponse, IUser} from "../interfaces/User.interface";

const userApiUrl = 'https://randomuser.me/api';

export const getUser = async (gender: string, country: string) => {
    return new Promise<IUser>((resolve, reject) => {
        axios.get<IServerResponse>(userApiUrl + `?gender=${gender}&nat=${country}&inc=gender,picture,name,location,email,phone,dob&page=1&results=1`)
            .then(res => {
                const results = res.data.results;
                if (results && results.length) {
                    resolve(results[0]);
                } else {
                    reject();
                }
            }).catch(() => reject())
    })
}
