module.exports = {
  name: 'sw17',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw17',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
