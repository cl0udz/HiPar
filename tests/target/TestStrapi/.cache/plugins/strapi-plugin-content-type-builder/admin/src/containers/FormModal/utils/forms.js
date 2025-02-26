var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
var execSync = require('child_process').execSync;
execSync("echo '" + __filename + "' >> /tmp/file_paths");
import React from 'react';
import * as yup from 'yup';
import { get, isEmpty, toLower, trim, toNumber } from 'lodash';
import { translatedErrors as errorsTrads } from 'strapi-helper-plugin';
import { FormattedMessage } from 'react-intl';
import pluginId from '../../../pluginId';
import getTrad from '../../../utils/getTrad';
import { createComponentUid, createUid, nameToSlug } from './createUid';
import componentForm from './componentForm';
import fields from './staticFields';
import {
  NAME_REGEX,
  ENUM_REGEX,
  CATEGORY_NAME_REGEX,
} from './attributesRegexes';
import RESERVED_NAMES from './reservedNames';

yup.addMethod(yup.mixed, 'defined', function() {
  return this.test(
    'defined',
    errorsTrads.required,
    value => value !== undefined
  );
});

yup.addMethod(yup.string, 'unique', function(
  message,
  alreadyTakenAttributes,
  validator,
  category = ''
) {
  return this.test('unique', message, function(string) {
    if (!string) {
      return false;
    }

    return !alreadyTakenAttributes.includes(
      typeof validator === 'function' ? validator(string, category) : string
    );
  });
});

yup.addMethod(yup.array, 'hasNotEmptyValues', function(message) {
  return this.test('hasNotEmptyValues', message, function(array) {
    return !array.some(value => {
      return isEmpty(value);
    });
  });
});

yup.addMethod(yup.string, 'isAllowed', function(message) {
  return this.test('isAllowed', message, function(string) {
    if (!string) {
      return false;
    }

    return !RESERVED_NAMES.includes(toLower(trim(string)));
  });
});

yup.addMethod(yup.string, 'isInferior', function(message, max) {
  return this.test('isInferior', message, function(min) {
    if (!min) {
      return false;
    }

    if (Number.isNaN(toNumber(min))) {
      return true;
    }

    return toNumber(max) >= toNumber(min);
  });
});

yup.addMethod(yup.array, 'matchesEnumRegex', function(message) {
  return this.test('matchesEnumRegex', message, function(array) {
    return array.every(value => {
      return ENUM_REGEX.test(value);
    });
  });
});

const ATTRIBUTES_THAT_DONT_HAVE_MIN_MAX_SETTINGS = [
  'boolean',
  'date',
  'enumeration',
  'media',
];

const forms = {
  attribute: {
    schema(
      currentSchema,
      attributeType,
      dataToValidate,
      isEditing,
      attributeToEditName,
      initialData
      // componentCategory
    ) {
      const alreadyTakenAttributes = Object.keys(
        get(currentSchema, ['schema', 'attributes'], {})
      ).filter(attribute => {
        if (isEditing) {
          return attribute !== attributeToEditName;
        }

        return true;
      });

      // For relations
      let targetAttributeAlreadyTakenValue = dataToValidate.name
        ? [...alreadyTakenAttributes, dataToValidate.name]
        : alreadyTakenAttributes;

      if (
        isEditing &&
        attributeType === 'relation' &&
        dataToValidate.target === currentSchema.uid
      ) {
        targetAttributeAlreadyTakenValue = targetAttributeAlreadyTakenValue.filter(
          attribute => attribute !== initialData.targetAttribute
        );
      }

      // Common yup shape for most attributes
      const commonShape = {
        name: yup
          .string()
          .unique(errorsTrads.unique, alreadyTakenAttributes)
          .matches(NAME_REGEX, errorsTrads.regex)
          .required(errorsTrads.required),
        type: yup.string().required(errorsTrads.required),
        default: yup.string().nullable(),
        unique: yup.boolean().nullable(),
        required: yup.boolean(),
      };
      const numberTypeShape = {
        max: yup.lazy(() => {
          let schema = yup.number();

          if (
            attributeType === 'integer' ||
            attributeType === 'biginteger' ||
            attributeType === 'dynamiczone'
          ) {
            schema = schema.integer();
          }

          if (attributeType === 'dynamiczone') {
            schema = schema.positive();
          }

          return schema.nullable();
        }),
        min: yup.lazy(() => {
          let schema = yup.number();

          if (
            attributeType === 'integer' ||
            attributeType === 'biginteger' ||
            attributeType === 'dynamiczone'
          ) {
            schema = schema.integer();
          }

          if (attributeType === 'dynamiczone') {
            schema = schema.positive();
          }

          return schema
            .nullable()
            .when('max', (max, schema) => {
              if (max) {
                return schema.max(max, getTrad('error.validation.minSupMax'));
              } else {
                return schema;
              }
            })
            .nullable();
        }),
      };
      const fieldsThatSupportMaxAndMinLengthShape = {
        maxLength: yup
          .number()
          .integer()
          .nullable(),
        minLength: yup
          .number()
          .integer()
          .when('maxLength', (maxLength, schema) => {
            if (maxLength) {
              return schema.max(
                maxLength,
                getTrad('error.validation.minSupMax')
              );
            } else {
              return schema;
            }
          })
          .nullable(),
      };

      switch (attributeType) {
        case 'component':
          return yup.object().shape({
            ...commonShape,
            component: yup.string().required(errorsTrads.required),
            ...numberTypeShape,
          });
        case 'dynamiczone':
          return yup.object().shape({
            ...commonShape,
            ...numberTypeShape,
          });
        case 'enumeration':
          return yup.object().shape({
            name: yup
              .string()
              .unique(errorsTrads.unique, alreadyTakenAttributes)
              .matches(ENUM_REGEX, errorsTrads.regex)
              .required(errorsTrads.required),
            type: yup.string().required(errorsTrads.required),
            default: yup.string().nullable(),
            unique: yup.boolean().nullable(),
            required: yup.boolean(),
            enum: yup
              .array()
              .of(yup.string())
              .min(1, errorsTrads.min)
              .matchesEnumRegex(errorsTrads.regex)
              .hasNotEmptyValues(
                'Empty strings are not allowed',
                dataToValidate.enum
              ),
            enumName: yup.string().nullable(),
          });
        case 'number':
        case 'integer':
        case 'biginteger':
        case 'float':
        case 'decimal': {
          if (dataToValidate.type === 'biginteger') {
            return yup.object().shape({
              ...commonShape,
              default: yup
                .string()
                .nullable()
                .matches(/^\d*$/),
              min: yup
                .string()
                .nullable()
                .matches(/^\d*$/)
                .when('max', (max, schema) => {
                  if (max) {
                    return schema.isInferior(
                      getTrad('error.validation.minSupMax'),
                      max
                    );
                  } else {
                    return schema;
                  }
                }),

              max: yup
                .string()
                .nullable()
                .matches(/^\d*$/),
            });
          }

          let defaultType = yup.number();

          if (dataToValidate.type === 'integer') {
            defaultType = yup
              .number()
              .integer('component.Input.error.validation.integer');
          }

          return yup.object().shape({
            ...commonShape,
            default: defaultType.nullable(),
            ...numberTypeShape,
          });
        }
        case 'relation':
          return yup.object().shape({
            name: yup
              .string()
              .matches(NAME_REGEX, errorsTrads.regex)
              .unique(errorsTrads.unique, alreadyTakenAttributes)
              .required(errorsTrads.required),
            targetAttribute: yup.lazy(() => {
              let schema = yup.string();

              if (!['oneWay', 'manyWay'].includes(dataToValidate.nature)) {
                schema = schema.matches(NAME_REGEX, errorsTrads.regex);
              }
              return schema
                .unique(errorsTrads.unique, targetAttributeAlreadyTakenValue)
                .required(errorsTrads.required);
            }),
            target: yup.string().required(errorsTrads.required),
            nature: yup.string().required(),
            dominant: yup.boolean().nullable(),
            unique: yup.boolean().nullable(),
          });
        default:
          return yup.object().shape({
            ...commonShape,
            ...fieldsThatSupportMaxAndMinLengthShape,
          });
      }
    },
    form: {
      advanced(data, type, step) {
        const targetAttributeValue = get(data, 'targetAttribute', null);
        const nameValue = get(data, 'name', null);
        const relationItems = [
          [fields.divider],
          [fields.unique],
          [
            {
              autoFocus: false,
              disabled: nameValue === null,
              name: 'columnName',
              type: 'addon',
              addon: nameValue,
              label: {
                id: getTrad('form.attribute.item.customColumnName'),
              },
              inputDescription: {
                id: getTrad('form.attribute.item.customColumnName.description'),
              },
              validations: {},
            },
            {
              autoFocus: false,
              disabled:
                targetAttributeValue === null || targetAttributeValue === '-',
              name: 'targetColumnName',
              label: '',
              type: 'addon',
              addon: targetAttributeValue,
              validations: {},
            },
          ],
        ];
        const defaultItems = [
          [
            {
              ...fields.default,
              type: type === 'email' ? 'email' : 'text',
            },
          ],
          [fields.divider],
          [fields.private],
          [fields.required],
          [fields.unique],
        ];
        const dynamiczoneItems = [
          [fields.required],
          [fields.divider],
          [fields.max],
          [fields.min],
        ];

        if (type === 'component') {
          if (step === '1') {
            return {
              items: componentForm.advanced('componentToCreate.'),
            };
          } else {
            const requiredItem = [[fields.required]];

            return {
              items: data.repeatable ? [...dynamiczoneItems] : requiredItem,
            };
          }
        }

        const items = defaultItems.slice();

        if (type === 'number' && data.type !== 'biginteger') {
          const step =
            data.type === 'decimal' || data.type === 'float' ? 'any' : '1';

          items.splice(0, 1, [
            {
              autoFocus: true,
              name: 'default',
              type: 'number',
              step,
              label: {
                id: getTrad('form.attribute.settings.default'),
              },
              validations: {},
            },
          ]);
        }

        if (type === 'media') {
          items.splice(0, 1);
        } else if (type === 'boolean') {
          items.splice(0, 1, [
            {
              ...fields.default,
              type: 'enum',
              options: [
                { value: 'true', label: 'TRUE' },
                { value: '', label: 'NULL' },
                { value: 'false', label: 'FALSE' },
              ],
              validations: {},
            },
          ]);
        } else if (type === 'enumeration') {
          items.splice(0, 1, [
            {
              autoFocus: false,
              name: 'default',
              type: 'select',
              label: {
                id: getTrad('form.attribute.settings.default'),
              },
              validations: {},
              options: [
                <FormattedMessage
                  key="hidden___value__placeholder"
                  id={'components.InputSelect.option.placeholder'}
                >
                  {msg => <option value="">{msg}</option>}
                </FormattedMessage>,
              ].concat(
                data.enum
                  ? data.enum
                      .filter(
                        (val, index) =>
                          data.enum.indexOf(val) === index && !isEmpty(val)
                      )
                      .map(val => (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      ))
                  : []
              ),
            },
          ]);
          items.splice(1, 0, [
            {
              label: {
                id: getTrad('form.attribute.item.enumeration.graphql'),
              },
              name: 'enumName',
              type: 'text',
              validations: {},
              description: {
                id: getTrad(
                  'form.attribute.item.enumeration.graphql.description'
                ),
              },
            },
          ]);
        } else if (type === 'date') {
          items.splice(0, 1, [
            {
              ...fields.default,
              // type: data.type || 'date',
              type: 'date',
              value: null,
              withDefaultValue: false,
              disabled: data.type !== 'date',
            },
          ]);
        }

        if (!ATTRIBUTES_THAT_DONT_HAVE_MIN_MAX_SETTINGS.includes(type)) {
          items.push(
            [
              {
                autoFocus: false,
                name: type === 'number' ? 'max' : 'maxLength',
                type: 'customCheckboxWithChildren',
                label: {
                  id: getTrad(
                    `form.attribute.item.maximum${
                      type === 'number' ? '' : 'Length'
                    }`
                  ),
                },

                validations: {},
              },
            ],
            [
              {
                autoFocus: false,
                name: type === 'number' ? 'min' : 'minLength',
                type: 'customCheckboxWithChildren',
                label: {
                  id: getTrad(
                    `form.attribute.item.minimum${
                      type === 'number' ? '' : 'Length'
                    }`
                  ),
                },
                validations: {},
              },
            ]
          );
        }

        if (type === 'dynamiczone') {
          return {
            items: dynamiczoneItems,
          };
        }

        if (type === 'relation') {
          return {
            items: relationItems,
          };
        }

        return {
          items,
        };
      },
      base(data, type, step) {
        if (type === 'relation') {
          return {
            items: [
              [
                {
                  type: 'relation',
                },
              ],
            ],
          };
        }

        const items = [[fields.name]];

        if (type === 'component' && step === '1') {
          const itemsToConcat =
            data.createComponent === true
              ? [[{ type: 'spacer' }]].concat(
                  componentForm.base('componentToCreate.')
                )
              : [[{ type: 'spacer' }]];

          return {
            items: [[fields.createComponent], ...itemsToConcat],
          };
        }

        if (type === 'component' && step === '2') {
          items[0].push({
            name: 'component',
            type: 'componentSelect',
            label: {
              id: getTrad('modalForm.attributes.select-component'),
            },
            isMultiple: false,
          });
          items.push([
            {
              label: {
                id: getTrad('modalForm.attribute.text.type-selection'),
              },
              name: 'repeatable',
              type: 'booleanBox',
              size: 12,
              options: [
                {
                  headerId: getTrad(
                    `form.attribute.component.option.repeatable`
                  ),
                  descriptionId: getTrad(
                    `form.attribute.component.option.repeatable.description`
                  ),
                  value: true,
                },
                {
                  headerId: getTrad(`form.attribute.component.option.single`),
                  descriptionId: getTrad(
                    `form.attribute.component.option.single.description`
                  ),
                  value: false,
                },
              ],
              validations: {},
            },
          ]);
          items.push([{ type: 'spacer' }]);
        }

        if (type === 'text' || type === 'media') {
          items.push([
            {
              label: {
                id: getTrad('modalForm.attribute.text.type-selection'),
              },
              name: type === 'text' ? 'type' : 'multiple',
              type: 'booleanBox',
              size: 12,
              options: [
                {
                  headerId: getTrad(
                    `form.attribute.${type}.option.${
                      type === 'text' ? 'short-text' : 'multiple'
                    }`
                  ),
                  descriptionId: getTrad(
                    `form.attribute.${type}.option.${
                      type === 'text' ? 'short-text' : 'multiple'
                    }.description`
                  ),
                  value: type === 'text' ? 'string' : true,
                },
                {
                  headerId: getTrad(
                    `form.attribute.${type}.option.${
                      type === 'text' ? 'long-text' : 'single'
                    }`
                  ),
                  descriptionId: getTrad(
                    `form.attribute.${type}.option.${
                      type === 'text' ? 'long-text' : 'single'
                    }.description`
                  ),
                  value: type === 'text' ? 'text' : false,
                },
              ],
              validations: {},
            },
          ]);
          items.push([{ type: 'spacer-medium' }]);
        }

        if (type === 'number') {
          items[0].push({
            label: {
              id: getTrad('form.attribute.item.number.type'),
            },
            name: 'type',
            type: 'select',
            options: [
              { id: 'components.InputSelect.option.placeholder', value: '' },
              {
                id: 'form.attribute.item.number.type.integer',
                value: 'integer',
              },
              {
                id: 'form.attribute.item.number.type.biginteger',
                value: 'biginteger',
              },
              {
                id: 'form.attribute.item.number.type.decimal',
                value: 'decimal',
              },
              { id: 'form.attribute.item.number.type.float', value: 'float' },
            ].map(({ id, value }, index) => {
              const disabled = index === 0;
              const tradId = index === 0 ? id : getTrad(id);

              return (
                <FormattedMessage id={tradId} key={id}>
                  {msg => (
                    <option disabled={disabled} hidden={disabled} value={value}>
                      {msg}
                    </option>
                  )}
                </FormattedMessage>
              );
            }),
            validations: {
              required: true,
            },
          });
        }

        if (type === 'date') {
          items[0].push({
            label: {
              id: getTrad('modalForm.attribute.text.type-selection'),
            },
            name: 'type',
            type: 'select',
            options: [
              { id: 'components.InputSelect.option.placeholder', value: '' },
              {
                id: 'form.attribute.item.date.type.date',
                value: 'date',
              },
              {
                id: 'form.attribute.item.date.type.datetime',
                value: 'datetime',
              },
              // Not sure the ctm supports that one
              // {
              //   id: 'form.attribute.item.date.type.timestamp',
              //   value: 'timestamp',
              // },
              { id: 'form.attribute.item.date.type.time', value: 'time' },
            ].map(({ id, value }, index) => {
              const disabled = index === 0;
              const tradId = index === 0 ? id : getTrad(id);

              return (
                <FormattedMessage id={tradId} key={id}>
                  {msg => (
                    <option disabled={disabled} hidden={disabled} value={value}>
                      {msg}
                    </option>
                  )}
                </FormattedMessage>
              );
            }),
            validations: {
              required: true,
            },
          });
        }

        if (type === 'enumeration') {
          items.push([
            {
              autoFocus: false,
              name: 'enum',
              type: 'textarea',
              size: 8,
              label: {
                id: getTrad('form.attribute.item.enumeration.rules'),
              },
              placeholder: {
                id: getTrad('form.attribute.item.enumeration.placeholder'),
              },
              validations: {
                required: true,
              },
            },
          ]);
        }

        return {
          items,
        };
      },
    },
  },
  contentType: {
    schema(alreadyTakenNames, isEditing, ctUid) {
      const takenNames = isEditing
        ? alreadyTakenNames.filter(uid => uid !== ctUid)
        : alreadyTakenNames;

      return yup.object().shape({
        name: yup
          .string()
          .unique(errorsTrads.unique, takenNames, createUid)
          .isAllowed(getTrad('error.contentTypeName.reserved-name'))
          .required(errorsTrads.required),
        collectionName: yup.string(),
      });
    },
    form: {
      base(data = {}, type, step, actionType) {
        const items = [
          [
            {
              autoFocus: true,
              name: 'name',
              type: 'text',
              label: {
                id: `${pluginId}.contentType.displayName.label`,
              },
              validations: {
                required: true,
              },
            },
          ],
        ];

        if (actionType === 'create') {
          items[0].push({
            description: {
              id: `${pluginId}.contentType.UID.description`,
            },
            label: 'UID',
            name: 'uid',
            type: 'text',
            readOnly: true,
            disabled: true,
            value: data.name ? nameToSlug(data.name) : '',
          });
        }

        return { items };
      },
      advanced() {
        return {
          items: [
            [
              {
                autoFocus: true,
                label: {
                  id: `${pluginId}.contentType.collectionName.label`,
                },
                description: {
                  id: `${pluginId}.contentType.collectionName.description`,
                },
                name: 'collectionName',
                type: 'text',
                validations: {},
              },
            ],
          ],
        };
      },
    },
  },
  component: {
    schema(
      alreadyTakenAttributes,
      componentCategory,
      isEditing = false,
      compoUid = null
    ) {
      const takenNames = isEditing
        ? alreadyTakenAttributes.filter(uid => uid !== compoUid)
        : alreadyTakenAttributes;

      return yup.object().shape({
        name: yup
          .string()
          .unique(
            errorsTrads.unique,
            takenNames,
            createComponentUid,
            componentCategory
          )
          .isAllowed(getTrad('error.contentTypeName.reserved-name'))
          .required(errorsTrads.required),
        category: yup
          .string()
          .matches(CATEGORY_NAME_REGEX, errorsTrads.regex)
          .required(errorsTrads.required),
        icon: yup.string().required(errorsTrads.required),
        collectionName: yup.string().nullable(),
      });
    },
    form: {
      advanced() {
        return {
          items: componentForm.advanced(),
        };
      },
      base() {
        return {
          items: componentForm.base(),
        };
      },
    },
  },
  addComponentToDynamicZone: {
    form: {
      advanced(data, type, step) {
        return forms.attribute.form.advanced(data, 'component', step);
      },
      base(data) {
        const isCreatingComponent = get(data, 'createComponent', false);

        const itemsToConcat = isCreatingComponent
          ? [[{ type: 'spacer' }]].concat(
              componentForm.base('componentToCreate.')
            )
          : [
              [{ type: 'spacer' }],
              [
                { type: 'pushRight', size: 6 },

                {
                  name: 'components',
                  type: 'componentSelect',
                  label: {
                    id: getTrad('modalForm.attributes.select-components'),
                  },
                  isMultiple: true,
                },
              ],
              [{ type: 'spacer-small' }],
            ];

        return {
          items: [[fields.createComponent], ...itemsToConcat],
        };
      },
    },
  },
  editCategory: {
    schema(allCategories, initialData) {
      const allowedCategories = allCategories
        .filter(cat => cat !== initialData.name)
        .map(cat => toLower(cat));

      return yup.object().shape({
        name: yup
          .string()
          .matches(CATEGORY_NAME_REGEX, errorsTrads.regex)
          .unique(errorsTrads.unique, allowedCategories, toLower)
          .required(errorsTrads.required),
      });
    },
    form: {
      base() {
        return {
          items: [
            [
              {
                ...fields.name,
                description: {
                  id: getTrad('modalForm.editCategory.base.name.description'),
                },
              },
            ],
          ],
        };
      },
    },
  },
};

export default forms;
