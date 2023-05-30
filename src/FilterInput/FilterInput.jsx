import './FilterInput.css'
import { useSelector, useDispatch } from "react-redux"
const FilterInput = () => {

    const dispatch = useDispatch()

    const InputFilter = (e) => {
        const textVal = e.target.value;

        dispatch({ type: "Searching", payload: textVal })


    }

    return (
        <div >
            <input onChange={InputFilter} className="Input" type="text" placeholder='Type the name' />
        </div>
    )
}

export default FilterInput


