import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import PropTypes from "prop-types";

function States({ error, loading }) {
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
    </>
  );
}

States.propTypes = { error: PropTypes.string, loading: PropTypes.bool };

export default States;
