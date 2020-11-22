module.exports = () => {
  console.log('uhhh');
  return fetch('https://api.github.com/orgs/reacttraining/members');
};
