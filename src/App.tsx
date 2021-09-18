import {useState} from "react"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal}  from "./components/NewTransactionModal";




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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </>
  );
}

