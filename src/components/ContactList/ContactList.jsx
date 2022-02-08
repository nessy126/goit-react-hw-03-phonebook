import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ filterArray, deleteContact }) => {
  return (
    <>
      <ul>
        {filterArray().map(({ id, name, number }) => (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  )
}
 
export default ContactList;

