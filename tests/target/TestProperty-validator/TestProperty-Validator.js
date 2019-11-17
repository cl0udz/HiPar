import { validate, presence, email  } from 'property-validator';

let user = {
    username: 'nettofarah',
    email_address: 'invalid@email'

}

validate(user, [
    presence('username'),
    email('email_address')

]);

// returns

{
    valid: false,
        errors :[
            {
                field: "email_address",
                message: "\"email_address\" should look like an email address"

            }

        ],
        messages: [
            "\"email_address\" should look like an email address"

        ]

}
