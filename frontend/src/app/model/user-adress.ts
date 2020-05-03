import { User } from './user';

export interface UserAdress {

    id?: string;

    cep?: string;

    street?: string;

    number?: string;

    city?: string;

    state?: string;

    more?: string;

    user?: User;

}
