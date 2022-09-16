export interface IUpdateRequest{
    _id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    cep: string;
    city: string;
    state: string;
    geolocation: [
        {
            lat: string;
        },
        {
            lng: string;
        }
    ]; 
    lat: number;
    lng: number;   
    avatar: string;
    avatarUrl: string;
}