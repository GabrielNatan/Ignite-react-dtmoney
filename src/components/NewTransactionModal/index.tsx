import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import { Container,TransactionTypeContainer } from "./styles"

import {api} from "../../services/api"

Modal.setAppElement('#root');

interface ModalInstance {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: ModalInstance) {
    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category,setCategory] = useState('')
    const [type,setType] = useState('deposit')

    function handleSubmitForm(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transitions',data)
        .then(response => console.log(response))
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleSubmitForm}>
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>
                <input
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Titulo" />

                <input
                    value={value}
                    onChange={(e)=>setValue(Number(e.target.value))}
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
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                    placeholder="Categoria" />
                    <button className="btn-submit" type="submit">
                        Cadastrar
                    </button>
            </Container>
        </Modal>
    )
}