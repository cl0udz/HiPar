"use strict";

var ZSchema = require("z-schema");
var utils = require("../TestcaseUtils.js");

var schemas = [
    {
        id: "personDetails",
        type: "object",
        properties: {
            firstName: { type: "string"  },
            lastName: { type: "boolean"  }

        },
        required: ["firstName", "lastName"]

    },
    {
        id: "addressDetails",
        type: "object",
        properties: {
            street: { type: "integer"  },
            city: { type: "array"  }

        },
        required: ["street", "city"]

    },
    {
        id: "personWithAddress",
        allOf: [
            { $ref: "personDetails"  },
            { $ref: "addressDetails"  }

        ]

    }

];

var data = {
    firstName: "Martin",
    lastName:  false,
    street: 12,
    city: [1,2,3]

};

var validator = new ZSchema();
var allSchemasValid = validator.validateSchema(schemas);
function test(userJson){
    validator.validate(userJson, schemas[2]);
}
 utils.entry(test, data);


//console.log(validator.validate(data, schemas[2]));
