import Paths from "../paths";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ServiceItem({ item }) {
  return (
    <li className="service-item" data-id={item.id}>
      <Link to={Paths.DETAILS(item.id)}>{item.name}</Link>
    </li>
  );
}

ServiceItem.propTypes = { item: PropTypes.object };

export default ServiceItem;
