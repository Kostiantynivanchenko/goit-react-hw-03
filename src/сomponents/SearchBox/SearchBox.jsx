import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <label className={styles.searchLabel}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={styles.searchInput}
      />
    </label>
  );
};

// Prop validation for value and onFilter
SearchBox.propTypes = {
  value: PropTypes.string.isRequired, // value should be a string
  onFilter: PropTypes.func.isRequired, // onFilter should be a function
};

export default SearchBox;
