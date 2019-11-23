import { validate, presence, email  } from 'property-validator';

let user = {
    username: 'nettofarah',
    email_address: 'invalid@email'

}

validate(user, [
    presence('username'),
    email('email_address')

]);

