export interface IServerResponse {
    "results": IUser[],
    "info": {
        "seed": string,
        "results": number,
        "page": number,
        "version": string
    }
}

export interface IUser {
    "name": {
        "title": string,
        "first": string,
        "last": string,
    },
    "location": {
        "street": {
            "number": number,
            "name": string
        }
        "city": string,
        "state": string,
        "country": string,
        "postcode": number,
        "coordinates":{
            "latitude": string,
            "longitude": string
        },
        "timezone":{
            "offset": string,
            "description": string
        }
    }
    "email": string,
    "dob":{
        "date": string,
        "age": number
    },
    "phone": string,
    "picture":{
        "large": string,
        "medium": string,
        "thumbnail": string
    }
}
