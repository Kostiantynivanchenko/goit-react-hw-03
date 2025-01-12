import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Contact = ({ data, deleteContact }) => {
  return (
    <div className={styles.contact}>
      <ul className={styles.contactList}>
        <li>
          <p>
            <FaUserAlt /> {data.name}
          </p>
        </li>
        <li>
          <p>
            <FaPhoneFlip /> {data.number}
          </p>
        </li>
      </ul>
      <button
        onClick={() => deleteContact(data.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

// Adding prop validation
Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
