J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(3070753, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestLegalize/TestLegalize.js');
            function test(userJson) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(3070697, arguments.callee, this, arguments);
                            arguments = J$.N(3070705, 'arguments', arguments, true, false, false);
                            userJson = J$.N(3070713, 'userJson', userJson, true, false, false);
                            J$.M(3070689, J$.R(3070665, 'Legalize', Legalize, false, true), 'validate', false)(J$.R(3070673, 'userJson', userJson, false, false), J$.R(3070681, 'personSchema', personSchema, false, true));
                        } catch (J$e) {
                            J$.Ex(3070825, J$e);
                        } finally {
                            if (J$.Fr(3070833))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(3070761, 'Legalize', Legalize, false, false, false);
            J$.N(3070769, 'personSchema', personSchema, false, false, false);
            J$.N(3070777, 'user_input', user_input, false, false, false);
            J$.N(3070785, 'utils', utils, false, false, false);
            test = J$.N(3070801, 'test', J$.T(3070793, test, 12, false), true, false, false);
            J$.T(3070273, 'use strict', 21, false);
            var Legalize = J$.W(3070305, 'Legalize', J$.F(3070297, J$.I(typeof require === 'undefined' ? require = J$.R(3070281, 'require', undefined, true, true) : require = J$.R(3070281, 'require', require, true, true)), false)(J$.T(3070289, 'legalize', 21, false)), Legalize, false, true);
            var personSchema = J$.W(3070577, 'personSchema', J$.T(3070569, {
                firstName: J$.M(3070361, J$.M(3070353, J$.M(3070337, J$.M(3070321, J$.R(3070313, 'Legalize', Legalize, false, true), 'string', false)(), 'minLength', false)(J$.T(3070329, 1, 22, false)), 'maxLength', false)(J$.T(3070345, 30, 22, false)), 'required', false)(),
                lastName: J$.M(3070417, J$.M(3070409, J$.M(3070393, J$.M(3070377, J$.R(3070369, 'Legalize', Legalize, false, true), 'string', false)(), 'minLength', false)(J$.T(3070385, 1, 22, false)), 'maxLength', false)(J$.T(3070401, 30, 22, false)), 'required', false)(),
                age: J$.M(3070457, J$.M(3070441, J$.M(3070433, J$.R(3070425, 'Legalize', Legalize, false, true), 'number', false)(), 'integer', false)(), 'min', false)(J$.T(3070449, 18, 22, false)),
                sex: J$.M(3070561, J$.M(3070553, J$.M(3070529, J$.M(3070473, J$.R(3070465, 'Legalize', Legalize, false, true), 'string', false)(), 'sanitizeBefore', false)(J$.T(3070521, function (value) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(3070497, arguments.callee, this, arguments);
                                arguments = J$.N(3070505, 'arguments', arguments, true, false, false);
                                value = J$.N(3070513, 'value', value, true, false, false);
                                J$.M(3070489, J$.R(3070481, 'value', value, false, false), 'toLowerCase', false)();
                            } catch (J$e) {
                                J$.Ex(3070809, J$e);
                            } finally {
                                if (J$.Fr(3070817))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)), 'valid', false)(J$.T(3070537, 'male', 21, false), J$.T(3070545, 'female', 21, false)), 'optional', false)()
            }, 11, false), personSchema, false, true);
            var user_input = J$.W(3070625, 'user_input', J$.T(3070617, {
                firstName: J$.T(3070585, 'Alexander', 21, false),
                lastName: J$.T(3070593, 'Carnicero', 21, false),
                age: J$.T(3070601, 27, 22, false),
                sex: J$.T(3070609, 'Male', 21, false)
            }, 11, false), user_input, false, true);
            var utils = J$.W(3070657, 'utils', J$.F(3070649, J$.I(typeof require === 'undefined' ? require = J$.R(3070633, 'require', undefined, true, true) : require = J$.R(3070633, 'require', require, true, true)), false)(J$.T(3070641, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(3070745, J$.R(3070721, 'utils', utils, false, true), 'entry', false)(J$.R(3070729, 'test', test, false, true), J$.R(3070737, 'user_input', user_input, false, true));
        } catch (J$e) {
            J$.Ex(3070841, J$e);
        } finally {
            if (J$.Sr(3070849))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

