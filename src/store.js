import { createStore } from "@reduxjs/toolkit"
import reducer from "./reducer"

let store = createStore(reducer)

export default store