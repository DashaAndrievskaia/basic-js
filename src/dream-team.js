module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let teamName = '';
  for (let i = 0; i < members.length; i++) {
    let name = members[i];
    if (typeof name === 'string') {
      teamName += name.trim()[0].toUpperCase();
    }
  }

  return teamName.split('').sort().join('');
};
