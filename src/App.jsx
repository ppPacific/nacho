import { useState } from 'react'

import './App.css'
import {Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import EditorModal from "./components/EditorModal.jsx";
import EditorComponent from "./components/EditorComponent.jsx";
import {createReactEditorJS} from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";
const ReactEditorJS = createReactEditorJS();
function App() {

  const [count, setCount] = useState(0)
    const [opened, { open, close }] = useDisclosure(false);
    //console.log(opened)
  return (
    <>
        <EditorModal current={opened} status={close}/>
        <div className={""}>
            <h1>Vite + React {count}</h1>
            <button onClick={()=> setCount(count+1)}>tryme</button>

            <Button onClick={open}>Open centered Modal</Button>
        </div>
        <EditorComponent />
        {/*<ReactEditorJS*/}
        {/*    tools={EDITOR_JS_TOOLS}*/}
        {/*    defaultValue={{*/}
        {/*        //time: 1635603431943,*/}
        {/*        blocks: [*/}
        {/*            {*/}
        {/*                id: "sheNwCUP5A",*/}
        {/*                type: "header",*/}
        {/*                data: {*/}
        {/*                    text: "Editor.js",*/}
        {/*                    level: 2*/}
        {/*                }*/}
        {/*            },*/}
        {/*            {*/}
        {/*                id: "12iM3lqzcm",*/}
        {/*                type: "paragraph",*/}
        {/*                data: {*/}
        {/*                    text:*/}
        {/*                        "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."*/}
        {/*                }*/}
        {/*            },*/}
        {/*        ]*/}
        {/*    }}*/}
        {/*/>*/}
    </>
  )
}

export default App
