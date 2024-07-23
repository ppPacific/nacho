import EditorJS from "@editorjs/editorjs";
import {useEffect, useRef} from "react";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import Delimiter from '@editorjs/delimiter';
import SimpleImage from '@editorjs/simple-image';
import Table from "@editorjs/table";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import RawTool from "@editorjs/raw";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Image from "@editorjs/image";
const DEFAULT_INITIAL_DATA =  {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "This is my awesome editor!",
                "level": 1
            }
        },
        {
            id: "FF1iyF3VwN",
            type: "image",
            data: {
                file: {
                    url: "https://codex.so/public/app/img/external/codex2x.png"
                },
                caption: "",
                withBorder: false,
                stretched: false,
                withBackground: false
            }
        }
    ]
}
const EditorComponent =()=>{
    const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content);
            },
            tools: {
                paragraph: Paragraph,
                header: Header,
                embed: Embed,
                table: Table,
                list: List,
                code: CodeTool,
                delimiter: Delimiter,
                simpleImage: SimpleImage,
                raw: RawTool,
                marker: Marker,
                checklist: CheckList,
                image: Image,
            },
        });
    };

    // This will run only once
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);


    return <div id={"editorjs"}></div>
}

export default EditorComponent