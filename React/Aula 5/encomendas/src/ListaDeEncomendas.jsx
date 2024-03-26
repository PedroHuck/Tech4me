import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ListaDeEncomendas = ({ encomendas, selecionarEncomenda, alterarPassoAtivo }) => {

    const atualizaLinhaDoTempo = (encomenda) => {
        selecionarEncomenda(encomenda)
        if (encomenda.ultimoStatus === "pedido-feito") {
            alterarPassoAtivo(0)
        } else if (encomenda.ultimoStatus === "em-rota") {
            alterarPassoAtivo(1)
        } else if (encomenda.ultimoStatus === "entregue") {
            alterarPassoAtivo(2)
        }
    }

    return (<>
        <List>
            {encomendas.map((encomenda) => (
                <ListItem onClick={() => { atualizaLinhaDoTempo(encomenda) }}>
                    <ListItemText primary={encomenda.number}
                        secondary={encomenda.cliente} />
                </ListItem>
            ))}
        </List>
    </>)
}

export default ListaDeEncomendas;