let common = [
  'src/features/**/*.feature',
  '--require-module ts-node/register',
  '--require src/step-definitions/**/*.ts',
  '--format progress-bar',
  '--publish-quiet',
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
