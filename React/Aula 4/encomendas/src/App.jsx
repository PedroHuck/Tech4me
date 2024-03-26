import './App.css'
import Container from "./container"
import Box from "./Box"
import { todasEncomendas } from './dadosApi'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [tab, setTab] = useState("pedido-feito")
  return (
    <>
      <Container>
        <Box>
          <Tabs value={tab} onChange={(event, newValue) => { setTab(newValue) }} aria-label="basic tabs example">
            <Tab label="Item Pedido Feito" value={"pedido-feito"} />
            <Tab label="Em rota" value={"em-rota"} />
            <Tab label="Entregue" value={"entregue"} />
          </Tabs>

          <List>
            {todasEncomendas.map((encomenda) => (
            <ListItem>
              <ListItemText primary={encomenda.number}
                secondary={encomenda.cliente} />
            </ListItem>
            ))}

          </List>
        </Box>
      </Container>
    </>
  )
}

export default App
