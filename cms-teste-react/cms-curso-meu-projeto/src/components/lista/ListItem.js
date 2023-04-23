import PropTypes from 'prop-types'

function ListItem({ marca, ano_lancamento }) {
    // export default function ListItem(props) {
    // const { marca } = props
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

ListItem.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

ListItem.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default ListItem

