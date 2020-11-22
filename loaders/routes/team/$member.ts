module.exports = ({ params }: { params: any }) => {
  return fetch(`https://api.github.com/users/ryanflorence`);
};
