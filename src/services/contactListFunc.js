export const sortContactsList = (contacts, sortOptions) => {
  const { name, order } = sortOptions;
  let sortName = name;
  let sortOrder = order;
  const sortedContacts = [...contacts].sort((a, b) => {
    let nameA;
    let nameB;
    if (sortName === 'firstName') {
      nameA = a.name.split(' ')[0];
      nameB = b.name.split(' ')[0];
    } else if (sortName === 'lastName') {
      nameA = a.name.split(' ');
      nameB = b.name.split(' ');
      nameA = nameA[nameA.length - 1];
      nameB = nameB[nameB.length - 1];
    }
    return sortOrder === 'asc'
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });
  return sortedContacts;
};

export const filterContactsList = (sortedContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return !normalizedFilter ? sortedContacts : sortedContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter) ||
    contact.number.includes(normalizedFilter)
  );
};

export const isNameOrNumEdited = (contacts, id, editedContactRef) => {
  const contact = contacts.find(contact => contact.id === id);
  const { name, number } = contact;
  const { name: editedName, number: editedNumber } = editedContactRef.current[id];

  const isNameEdited = name !== editedName;
  const isNumberEdited = number !== editedNumber;

  return { isNameEdited, isNumberEdited };
}

export const isNameOrNumAvail = (contacts, editedContactRef, id) => {
  const { name, number } = editedContactRef.current[id];
  const isNameAvail = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  const isNumAvail = contacts.some(contact => contact.number === number);
  return { isNameAvail, isNumAvail };
}
