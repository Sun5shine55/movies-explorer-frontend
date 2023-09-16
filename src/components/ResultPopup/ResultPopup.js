import './ResultPopup.css';
import succesfullPicture from '../../images/result_succesfull.svg'
import unsuccesfullPicture from '../../images/result-not-succesfull.svg'

const ResultPopup = ({isOpen, infoText, isSuccessfull, onClose}) => {

  return (
        <div className={`popup popup_result ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <img className="popup__image"
                    src={isSuccessfull ? succesfullPicture : unsuccesfullPicture}
                    alt={isSuccessfull ? 'упешная регистрация' : 'неуспешная регистрация'}
                />
                <p className="popup__text">
                  {infoText}
                </p>
                <button className="popup__closing-icon" type="button" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default ResultPopup;
