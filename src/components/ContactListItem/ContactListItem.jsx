const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <>
      <li>
        <p>
          {name}
          <span> {number}</span>
        </p>
        <button onClick={() => deleteContact(name)} type="button">
          Delete
        </button>
      </li>
    </>
  )
}
 
export default ContactListItem;