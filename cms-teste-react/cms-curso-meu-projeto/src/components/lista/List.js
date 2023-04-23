import ListItem from './ListItem'

export default function List() {
    return (
        <>
            <p>Minha Lista</p>
            <ul>
                <ListItem marca={2010} ano_lancamento={2010} />
                <ListItem marca="Fiat" ano_lancamento={2015} />
                <ListItem marca="Renault" />
                <ListItem ano_lancamento={2020} />
                <ListItem />
            </ul>
        </>
    )
}
