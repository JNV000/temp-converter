import PropTypes from "prop-types";

export default function Input({ label, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
