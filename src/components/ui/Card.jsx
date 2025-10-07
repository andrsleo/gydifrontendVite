// src/components/ui/Card.jsx
import PropTypes from "prop-types";

export default function Card({ children }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4">{children}</div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
