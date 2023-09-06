import './FilterCheckbox.css';
import checkboxActive from '../../images/checkbox-active.svg'
import checkboxNotActive from '../../images/checkbox-not-active.svg'

function FilterCheckbox({isCheckboxChecked, onCheckboxChange}) {

    const handleImageClick = () => {
        onCheckboxChange(!isCheckboxChecked);
      };

    return (
        <div className="checkbox">
     <input className="checkbox__button" type="checkbox" checked={isCheckboxChecked} onChange={onCheckboxChange} />
        <img className="checkbox__image" src={isCheckboxChecked ? checkboxActive : checkboxNotActive} alt="переключатель" onClick={handleImageClick}/>
     <p className='checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox
