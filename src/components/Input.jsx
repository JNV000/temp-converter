import PropTypes from "prop-types";
// import capitalize from "lodash/capitalize";

function capitalizeLabel(toCapitalize) {
  // we access the first char in the string and capitalize it.
  const part1 = toCapitalize[0].toUpperCase();
  // we get the rest of the string by getting a substring starting at index 1.
  const part2 = toCapitalize.slice(1);
  // we append them together and return the result.
  return part1 + part2;
  // this could have been done in 1 line
  // return toCapitalize[0].toUpperCase() + toCapitalize.slice(1);
}

export default function Input({ label, id, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label || capitalizeLabel(id)}</label>
      <input type="number" id={id} onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
