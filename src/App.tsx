import {useState,useEffect} from "react"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {NewTransactionModal}  from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransectionsContext";


export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)
 

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  return (
    <TransactionProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionProvider>
  );
}

