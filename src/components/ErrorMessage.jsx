import PropTypes from "prop-types";
import { serviceDetailsRequest, servicesRequest } from "../actions/actionCreators";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ErrorMessage({ message }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleClick = () => {
    if (id) {
      dispatch(serviceDetailsRequest(id));
    }
    else {
      dispatch(servicesRequest());
    }
  };

  return (
    <div className="error-message">
      <p className="error-message__text">
        Произошла ошибка:
        {" "}
        {message}
      </p>
      <button className="error-message__btn" onClick={handleClick}>Повторить</button>
    </div>
  );
}

ErrorMessage.propTypes = { message: PropTypes.string };

export default ErrorMessage;
