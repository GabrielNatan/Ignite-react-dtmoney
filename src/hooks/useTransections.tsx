import {createContext,useState,useEffect, ReactNode, useContext} from 'react';
import {api} from "../services/api"

interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: number;
    type: string;
  }


type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionData{
    transitions: Transaction[];
    createTransaction: (Transaction:TransactionInput) => Promise<void>;
}
  interface TransactionsProviderPros{
      children: ReactNode;
  }
const TransactionsContext = createContext<TransactionData>({} as TransactionData);



export const TransactionProvider = ({children}:TransactionsProviderPros)=>{
    const [transitions, setTransections] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('transitions')
            .then(response => setTransections(response.data.transitions))
    }, [])

    async function createTransaction(transectionInput:TransactionInput){
  
        const response = await api.post('/transitions',{
            ...transectionInput,
            createdAt: new Date()
        })
        const {transitions} = response.data;
        // console.log("CHATO",transitions)
        setTransections(data=>[...data,transitions])
    }

    return(
        <TransactionsContext.Provider value={{transitions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransections(){
    const context = useContext(TransactionsContext);
    return context
}