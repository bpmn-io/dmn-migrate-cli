import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'dist'
  ],
  test: [
    'test/**/*.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // lib
  ...bpmnIoPlugin.configs.recommended,

  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.test
    };
  }),
  {
    languageOptions: {
      sourceType: 'commonjs'
    },
    ignores: [ '**/*.mjs' ]
  }
];
