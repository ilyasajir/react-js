import PropTypes from 'prop-types'

const {
    string, shape,
} = PropTypes


export const ThemeProps = shape({className: string})
export const RTLProps = shape({direction:string})