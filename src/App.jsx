import { useState } from 'react'

import './App.css'
import {Button, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import EditorModal from "./components/EditorModal.jsx";

function App() {
  const [count, setCount] = useState(0)
    const [opened, { open, close }] = useDisclosure(false);
    console.log(opened)
  return (
    <>
        {/*<EditorModal current={opened} status={open}/>*/}
        <Modal opened={opened} onClose={close} title="EditorModal" centered>
            <div>
                <h1>Nacho</h1>
                <h2>Nacho</h2>
                <h3>Nacho</h3>
                <h4>Nacho</h4>
                <p>nacho</p>
            </div>
        </Modal>
        <div className={""}>
            <h1>Vite + React {count}</h1>
            {/*<button onClick={()=> setCount(count+1)}>tryme</button>*/}

            <Button onClick={open}>Open centered Modal</Button>
            {/*<div className={"relative"}>*/}
            {/*    <button*/}
            {/*        className={"bottom-0 rounded-2xl border-2 border-blue-500 p-2 bg-blue-500 text-white"}>*/}
            {/*        New </button>*/}
            {/*</div>*/}
        </div>


    </>
  )
}

export default App
