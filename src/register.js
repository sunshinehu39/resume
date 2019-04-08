import { createAPI } from 'cube-ui'
import Vue from 'vue'

// 组件名转换为驼峰写法！
import Work from './components/body/work'
import Notes from './components/body/notes'
import Note from './components/body/note'

createAPI(Vue, Work)
createAPI(Vue, Notes)
createAPI(Vue, Note)
