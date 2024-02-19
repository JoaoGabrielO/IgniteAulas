import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionalModal } from "./components/NewTransactionalModal";
import { TransactionsProvider } from "./hooks/TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionalModalOpen, setIsNewTransactionalModalOpen] = useState(false);

  function handleOpenNewTransactionalModal() {
    setIsNewTransactionalModalOpen(true);
  }

  function handleCloseNewTransactonalModal() {
    setIsNewTransactionalModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionalModal} />
      <Dashboard />
      <NewTransactionalModal
        isOpen={isNewTransactionalModalOpen}
        onRequestClose={handleCloseNewTransactonalModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}