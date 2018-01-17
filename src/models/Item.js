import PropTypes from 'prop-types';

export const Item = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
}

export const ItemCollection = {
    items: PropTypes.arrayOf(Item)
}