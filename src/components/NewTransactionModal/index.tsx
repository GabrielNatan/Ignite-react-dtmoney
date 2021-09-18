import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import { Container,TransactionTypeContainer } from "./styles"
Modal.setAppElement('#root');
interface ModalInstance {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalInstance) {
    const [type,setType] = useState('deposit')

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>
                <input
                    placeholder="Titulo" />

                <input
                    type="number"
                    placeholder="Valor" />
                
                <TransactionTypeContainer>
                    <button
                    className={type === 'deposit' ? 'active' :''}
                        onClick={()=>{setType('deposit')}} 
                        type="button"
                    >
                        <img src={income} alt="entrada"/>
                        <span>Entrada</span>
                    </button>
                    <button
                    className={type === 'withdraw' ? 'active' :''}
                     onClick={()=>{setType('withdraw')}} 
                     type="button">
                        <img src={outcome} alt="saida"/>
                        <span>Saida</span>
                    </button>
                </TransactionTypeContainer>
                
                <input
                    placeholder="Categoria" />
                    <button className="btn-submit" type="submit">
                        Cadastrar
                    </button>
            </Container>
        </Modal>
    )
}