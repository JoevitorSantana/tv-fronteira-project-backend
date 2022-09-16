export interface IUserReponseDTO{
    email: string;
    name: string;    
    avatar: string;    
    city: string;
    state: string;
    phone: string;
    lastName: string;
    geolocation?: [{
        lat: number;
        lng: number;
    }];
    lat?: number;
    lng?: number;
}