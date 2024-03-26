import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const LinhaDoTempo = ({ passo, encomenda}) => {
    return (<>
        {encomenda && (
        <Stepper activeStep={passo} alternativeLabel>

            <Step key={"pedido-feito"}>
                <StepLabel>{"Pedido Feito"}</StepLabel>
                {encomenda?.historico?.[0]?.data}
            </Step>

            <Step key={"em-rota"}>
                <StepLabel>{"Pedido em rota"}</StepLabel>
                {encomenda?.historico?.[1]?.data}
            </Step>

            <Step key={"entregue"}>
                <StepLabel>{"Entregue"}</StepLabel>
                {encomenda?.historico?.[2]?.data}
            </Step>

        </Stepper>
)}
    </>)
}

export default LinhaDoTempo;