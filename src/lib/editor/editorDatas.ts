import HeaderNav from "../account/header.svelte"
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import SimpleImage from "@editorjs/simple-image";
import Checklist from '@editorjs/checklist'
import List from "@editorjs/list";
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Delimiter from '@editorjs/delimiter';
import ToggleBlock from 'editorjs-toggle-block';
import NestedList from '@editorjs/nested-list';
import Table from '@editorjs/table';
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';
import CodeTool from '@editorjs/code';
import TextVariantTune from '@editorjs/text-variant-tune';
import Embed from '@editorjs/embed';
import SimpleImageLink from '../simpleImage/simpleImage'

export const toolsEditor: any = {
    textVariant: TextVariantTune,
    imageLink: {
        class: SimpleImageLink,
        inlineToolBar: ['link']
    },
    image: {
        class: SimpleImage
    },
    delimiter: Delimiter,
    underline: Underline,
    // code : editorjsCodeflask,
    code: CodeTool,
    header: {
        class: Header,
        inlineToolbar : true,
        config: {
            level: [2, 3, 4],
            defaultLevel: 2
        },
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    checklist: {
        class: Checklist,
        inlineToolbar: true,
    },
    list: {
        class: List,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered'
        }
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
        },
    },
    warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+W',
        config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
        },
    },
    toggle: {
        class: ToggleBlock,
        inlineToolbar: true,
    },
    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 2,
            cols: 3,
        },
    },
    Marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M',
    },
    inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
    },
    embed: {
        class: Embed,
        inlineToolbar: true,
        config: {
            services: {
                youtube: true,
                coub: true,
                Pinterest: true
            }
        }
    },
    // list: {
    //     class: NestedList,
    //     inlineToolbar: true,
    //     config: {
    //         defaultStyle: 'unordered'
    //     },
    // }
    
}

export const dataEditor  = {
    blocks: []
}
