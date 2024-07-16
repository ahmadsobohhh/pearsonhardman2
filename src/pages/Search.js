import PropTypes from "prop-types";
import styles from "./Search.module.css"; // Import the CSS Module

const Dropdown = ({ label, options }) => (
  <div className={styles.dropdown}>
    <label className={styles.dropdownLabel}>{label}</label>
    <select className={styles.dropdownSelect}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const FacetedSearch = ({ className = "" }) => {
  const yearsOfPracticeOptions = [
    { value: "1", label: "1-3 years" },
    { value: "2", label: "3-5 years" },
    { value: "3", label: "5-10 years" },
    { value: "4", label: "10+ years" },
  ];

  const lawExpertiseOptions = [
    { value: "1", label: "Corporate Law" },
    { value: "2", label: "Criminal Law" },
    { value: "3", label: "Family Law" },
    { value: "4", label: "Tax Law" },
  ];

  const locationOptions = [
    { value: "1", label: "New York" },
    { value: "2", label: "Los Angeles" },
    { value: "3", label: "Chicago" },
    { value: "4", label: "Houston" },
  ];

  const graduationOptions = [
    { value: "1", label: "Harvard" },
    { value: "2", label: "Yale" },
    { value: "3", label: "Stanford" },
    { value: "4", label: "Columbia" },
  ];

  return (
    <div className={`${styles.facetedSearch} ${className}`}>
      <h1 className={styles.searchTitle}>Find a Lawyer</h1>
      <form className={styles.searchForm}>
        <Dropdown label="Years of Practice" options={yearsOfPracticeOptions} />
        <Dropdown label="Law Expertise" options={lawExpertiseOptions} />
        <Dropdown label="Location" options={locationOptions} />
        <Dropdown label="Graduation" options={graduationOptions} />
        <button className={styles.searchButton} type="submit">Search</button>
      </form>
    </div>
  );
};

FacetedSearch.propTypes = {
  className: PropTypes.string,
};

export default FacetedSearch;
