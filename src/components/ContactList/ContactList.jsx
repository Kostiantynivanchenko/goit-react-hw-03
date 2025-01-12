import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact deleteContact={deleteContact} data={contact} />
        </li>
      ))}
    </ul>
  );
};

// Adding PropTypes validation
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
