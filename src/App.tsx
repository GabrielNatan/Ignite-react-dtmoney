import {useState} from "react"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
      </Modal>
      <GlobalStyle />
    </>
  );
}

