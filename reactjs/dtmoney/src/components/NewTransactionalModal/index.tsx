import Modal from 'react-modal';
import { Container, TransactionalTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/TransactionsContext';

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactionalModalProps) {
    const {createTransaction} = useTransactions();
 
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');


    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
           title,
           amount,
           category,
           type, 
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type='button'
                onClick={onRequestClose}
                className='react-modal-close'>
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type='number'
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionalTypeContainer>
                    <RadioBox type='button'
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit'); }}
                        activeColor="green"
                        >

                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button'
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw'); }}
                        activeColor="red"
                        >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionalTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}