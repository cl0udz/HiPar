//require { sanitize  } from 'indicative/sanitizer'

var santitize = require("indicative").sanitizer;

const rules = {
      username: 'trim',
      email: 'normalize_email',
}

const data = {
      username: '  foo',
      email: 'john+doe@gmail.com'  
};

// mutates the original data object
sanitize(data, rules);
console.log(data);
