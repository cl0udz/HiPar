J$.noInstrEval = false;
jalangiLabel2:
    while (true) {
        try {
            J$.Se(293881, '/mnt/data/fxiao/HiPar/outputs/target_cache/TestLegalize/TestLegalize.js');
            function test(userJson) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(293825, arguments.callee, this, arguments);
                            arguments = J$.N(293833, 'arguments', arguments, true, false, false);
                            userJson = J$.N(293841, 'userJson', userJson, true, false, false);
                            J$.M(293817, J$.R(293793, 'Legalize', Legalize, false, true), 'validate', false)(J$.R(293801, 'userJson', userJson, false, false), J$.R(293809, 'personSchema', personSchema, false, true));
                        } catch (J$e) {
                            J$.Ex(293953, J$e);
                        } finally {
                            if (J$.Fr(293961))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(293889, 'Legalize', Legalize, false, false, false);
            J$.N(293897, 'personSchema', personSchema, false, false, false);
            J$.N(293905, 'user_input', user_input, false, false, false);
            J$.N(293913, 'utils', utils, false, false, false);
            test = J$.N(293929, 'test', J$.T(293921, test, 12, false), true, false, false);
            J$.T(293401, 'use strict', 21, false);
            var Legalize = J$.W(293433, 'Legalize', J$.F(293425, J$.I(typeof require === 'undefined' ? require = J$.R(293409, 'require', undefined, true, true) : require = J$.R(293409, 'require', require, true, true)), false)(J$.T(293417, 'legalize', 21, false)), Legalize, false, true);
            var personSchema = J$.W(293705, 'personSchema', J$.T(293697, {
                firstName: J$.M(293489, J$.M(293481, J$.M(293465, J$.M(293449, J$.R(293441, 'Legalize', Legalize, false, true), 'string', false)(), 'minLength', false)(J$.T(293457, 1, 22, false)), 'maxLength', false)(J$.T(293473, 30, 22, false)), 'required', false)(),
                lastName: J$.M(293545, J$.M(293537, J$.M(293521, J$.M(293505, J$.R(293497, 'Legalize', Legalize, false, true), 'string', false)(), 'minLength', false)(J$.T(293513, 1, 22, false)), 'maxLength', false)(J$.T(293529, 30, 22, false)), 'required', false)(),
                age: J$.M(293585, J$.M(293569, J$.M(293561, J$.R(293553, 'Legalize', Legalize, false, true), 'number', false)(), 'integer', false)(), 'min', false)(J$.T(293577, 18, 22, false)),
                sex: J$.M(293689, J$.M(293681, J$.M(293657, J$.M(293601, J$.R(293593, 'Legalize', Legalize, false, true), 'string', false)(), 'sanitizeBefore', false)(J$.T(293649, function (value) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(293625, arguments.callee, this, arguments);
                                arguments = J$.N(293633, 'arguments', arguments, true, false, false);
                                value = J$.N(293641, 'value', value, true, false, false);
                                J$.M(293617, J$.R(293609, 'value', value, false, false), 'toLowerCase', false)();
                            } catch (J$e) {
                                J$.Ex(293937, J$e);
                            } finally {
                                if (J$.Fr(293945))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false)), 'valid', false)(J$.T(293665, 'male', 21, false), J$.T(293673, 'female', 21, false)), 'optional', false)()
            }, 11, false), personSchema, false, true);
            var user_input = J$.W(293753, 'user_input', J$.T(293745, {
                firstName: J$.T(293713, 'Alexander', 21, false),
                lastName: J$.T(293721, 'Carnicero', 21, false),
                age: J$.T(293729, 27, 22, false),
                sex: J$.T(293737, 'Male', 21, false)
            }, 11, false), user_input, false, true);
            var utils = J$.W(293785, 'utils', J$.F(293777, J$.I(typeof require === 'undefined' ? require = J$.R(293761, 'require', undefined, true, true) : require = J$.R(293761, 'require', require, true, true)), false)(J$.T(293769, '../TestcaseUtils.js', 21, false)), utils, false, true);
            J$.M(293873, J$.R(293849, 'utils', utils, false, true), 'entry', false)(J$.R(293857, 'test', test, false, true), J$.R(293865, 'user_input', user_input, false, true));
        } catch (J$e) {
            J$.Ex(293969, J$e);
        } finally {
            if (J$.Sr(293977))
                continue jalangiLabel2;
            else
                break jalangiLabel2;
        }
    }
// JALANGI DO NOT INSTRUMENT

