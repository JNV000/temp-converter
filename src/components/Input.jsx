import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";

export default function Input({ label, id, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label || capitalize(id)}</label>
      <input type="number" id={id} onChange={handleChange} />
    </div>
  );
}
// TODO: hmwrk write a function in regular javascript to capitialize first letter only (give detailed comments) in Gist

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
