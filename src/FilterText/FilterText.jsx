
import { useSelector } from 'react-redux';
import './FilterText.css';

const FilterText = () => {
    const SerchTexts = useSelector(state => state.searchRed.searchResult);

    return (


        <div className='PhoneContainer'>
            {
                SerchTexts.map((text, index) =>

                    <div className='PhoneCard' key={index}>{text}
                        <div className='Circle'></div>
                    </div>


                )
            }
        </div>

    )
};



export default FilterText;
