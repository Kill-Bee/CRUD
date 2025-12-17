import TablePlayer from './components/tablePlayer';
import InsertPlayer from './components/insertPlayer';
import { useState } from "react";
import './index.css'

export default function App() {
  const [view, setView] = useState('table');

  return (
    <>
    <h1 className='mt-5'>PLAYER LIST</h1>
       {view === 'table' && <TablePlayer onAddClick={() => setView('insert')} />}
        {view === 'insert' && <InsertPlayer onBackClick={() => setView('table')}  />}
    </>
  )
}
