import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Search.module.css"; // Import the CSS Module

const Dropdown = ({ label, options, onChange, name }) => (
  <div className={styles.dropdown}>
    <label className={styles.dropdownLabel}>{label}</label>
    <select className={styles.dropdownSelect} name={name} onChange={onChange}>
      <option value="">Select {label}</option>
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
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const FacetedSearch = ({ className = "" }) => {
  const [filters, setFilters] = useState({
    yearsOfPractice: "",
    lawExpertise: "",
    location: "",
    graduation: "",
  });

  const [filteredLawyers, setFilteredLawyers] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter lawyers based on selected filters
    const results = lawyers.filter((lawyer) => {
      return (
        (!filters.yearsOfPractice || lawyer.yearsOfPractice === filters.yearsOfPractice) &&
        (!filters.lawExpertise || lawyer.lawExpertise === filters.lawExpertise) &&
        (!filters.location || lawyer.location === filters.location) &&
        (!filters.graduation || lawyer.graduation === filters.graduation)
      );
    });
    setFilteredLawyers(results);
  };

  const yearsOfPracticeOptions = [
    { value: "1-3 years", label: "1-3 years" },
    { value: "3-5 years", label: "3-5 years" },
    { value: "5-10 years", label: "5-10 years" },
    { value: "10+ years", label: "10+ years" },
  ];

  const lawExpertiseOptions = [
    { value: "Corporate Law", label: "Corporate Law" },
    { value: "Criminal Law", label: "Criminal Law" },
    { value: "Family Law", label: "Family Law" },
    { value: "Tax Law", label: "Tax Law" },
  ];

  const locationOptions = [
    { value: "New York", label: "New York" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Chicago", label: "Chicago" },
    { value: "Houston", label: "Houston" },
  ];

  const graduationOptions = [
    { value: "Harvard", label: "Harvard" },
    { value: "Yale", label: "Yale" },
    { value: "Stanford", label: "Stanford" },
    { value: "Columbia", label: "Columbia" },
  ];

  return (
    <div className={`${styles.facetedSearch} ${className}`}>
      <h1 className={styles.searchTitle}>Find a Lawyer</h1>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <Dropdown label="Years of Practice" name="yearsOfPractice" options={yearsOfPracticeOptions} onChange={handleFilterChange} />
        <Dropdown label="Law Expertise" name="lawExpertise" options={lawExpertiseOptions} onChange={handleFilterChange} />
        <Dropdown label="Location" name="location" options={locationOptions} onChange={handleFilterChange} />
        <Dropdown label="Graduation" name="graduation" options={graduationOptions} onChange={handleFilterChange} />
        <button className={styles.searchButton} type="submit">Search</button>
      </form>
      {filteredLawyers.length > 0 && (
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Results</h2>
          <ul className={styles.resultsList}>
            {filteredLawyers.map((lawyer) => (
              <li key={lawyer.id} className={styles.resultItem}>
                <strong>{lawyer.name}</strong><br />
                Years of Practice: {lawyer.yearsOfPractice}<br />
                Law Expertise: {lawyer.lawExpertise}<br />
                Location: {lawyer.location}<br />
                Graduation: {lawyer.graduation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

FacetedSearch.propTypes = {
  className: PropTypes.string,
};

export default FacetedSearch;

const lawyers = [
  { id: 1, name: "John Doe", yearsOfPractice: "1-3 years", lawExpertise: "Corporate Law", location: "New York", graduation: "Harvard" },
  { id: 2, name: "Jane Smith", yearsOfPractice: "3-5 years", lawExpertise: "Criminal Law", location: "Los Angeles", graduation: "Yale" },
  { id: 3, name: "Michael Johnson", yearsOfPractice: "5-10 years", lawExpertise: "Family Law", location: "Chicago", graduation: "Columbia" },
  { id: 4, name: "Emily Davis", yearsOfPractice: "10+ years", lawExpertise: "Tax Law", location: "Houston", graduation: "Harvard" },
  { id: 5, name: "William Brown", yearsOfPractice: "1-3 years", lawExpertise: "Corporate Law", location: "New York", graduation: "Yale" },
  { id: 6, name: "Elizabeth Wilson", yearsOfPractice: "3-5 years", lawExpertise: "Criminal Law", location: "Los Angeles", graduation: "Columbia" },
  { id: 7, name: "James Taylor", yearsOfPractice: "5-10 years", lawExpertise: "Family Law", location: "Chicago", graduation: "Stanford" },
  { id: 8, name: "Sarah Miller", yearsOfPractice: "10+ years", lawExpertise: "Tax Law", location: "Houston", graduation: "Stanford" },
  { id: 9, name: "Robert Martinez", yearsOfPractice: "1-3 years", lawExpertise: "Corporate Law", location: "New York", graduation: "Columbia" },
  { id: 10, name: "Patricia Anderson", yearsOfPractice: "3-5 years", lawExpertise: "Criminal Law", location: "Los Angeles", graduation: "Yale" },
];
