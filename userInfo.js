import arrayManipulation from './arrayManipulation';

function createUserProfiles(names, modifiedNames) {
  return modifiedNames.map((modifiedNameObj, index) => {
    return {
      originalName: names[index],
      modifiedName: modifiedNameObj.modifiedString,
      id: index + 1
    };
  });
}

export default { createUserProfiles };