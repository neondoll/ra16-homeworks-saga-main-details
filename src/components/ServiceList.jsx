import PropTypes from "prop-types";
import ServiceItem from "./ServiceItem";

function ServiceList({ items }) {
  return (
    <ul className="service-list">
      {items.map(item => <ServiceItem key={item.id} item={item} />)}
    </ul>
  );
}

ServiceList.propTypes = { items: PropTypes.array };

export default ServiceList;
