import './FilterCheckbox.css';
import checkboxActive from '../../images/checkbox-active.svg'
import checkboxNotActive from '../../images/checkbox-not-active.svg'

function FilterCheckbox({isCheckboxChecked, onChange }) {
  return (
      <div className="checkbox">
   <input className="checkbox__button" type="checkbox"  checked={isCheckboxChecked}
      onChange={onChange}/>
      <img className="checkbox__image" src={isCheckboxChecked ? checkboxActive : checkboxNotActive} alt="переключатель" />
   <p className='checkbox__text'>Короткометражки</p>
      </div>
  );
}

export default FilterCheckbox
