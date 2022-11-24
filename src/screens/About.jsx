import '../styles/About.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
import RateSystem from '../components/RateSystem';
import Rules from '../components/Rules';
export default function About() {
  const [show, setShow] = useState(false);
  const clickHandler = (name) => {
    if (name === show) {
      setShow(false);
      return;
    }
    setShow(name);
  };
  return (
    <div className="wrapper aboutscreen">
      <div className={show ? 'dropdown large' : 'dropdown'}>
        <div
          className={
            show && show !== 'rules'
              ? 'dropdown-item-wrapper hide'
              : 'dropdown-item-wrapper'
          }
        >
          <div
            className={
              show === 'rules' ? 'dropdown-item right' : 'dropdown-item left'
            }
            onClick={() => clickHandler('rules')}
          >
            <span>წესები</span>
            <AiOutlineArrowDown
              className={show === 'rules' ? 'rotate icon' : 'icon'}
            />
          </div>
          <Rules show={show} />
        </div>
        <div
          className={
            show && show !== 'review'
              ? 'dropdown-item-wrapper hide'
              : 'dropdown-item-wrapper'
          }
        >
          <div
            onClick={() => clickHandler('review')}
            className={
              show === 'review' ? 'dropdown-item right' : 'dropdown-item left'
            }
          >
            <span>შეფასების სისტემა</span>
            <AiOutlineArrowDown
              className={show === 'review' ? 'rotate icon' : 'icon'}
            />
          </div>
          <RateSystem show={show} />
        </div>

        <div
          className={
            show && show !== 'quests'
              ? 'dropdown-item-wrapper hide'
              : 'dropdown-item-wrapper'
          }
        >
          <div
            onClick={() => clickHandler('quests')}
            className={
              show === 'quests' ? 'dropdown-item right' : 'dropdown-item left'
            }
          >
            <span>შეფასების სისტემა</span>
            <AiOutlineArrowDown
              className={show === 'quests' ? 'rotate icon' : 'icon'}
            />
          </div>
          {show === 'quests' && (
            <div className="quests">
              <div>
                1)რატომ გსურთ შერეული ტიპის დებატებში მონაწილეობის მიღება?
              </div>
              <div>
                2) რომელ კანონს შეცვლიდით ან თლით რომ არაკონსტიტუციურია?
              </div>
              <div> 3)ემხრობით თუ არა რომელიმე პოლიტიკურ იდეოლოგიას?</div>
            </div>
          )}
        </div>
      </div>
      <div className={show ? 'info small' : 'info'}>
        <h1>შერეული ტიპის დებატები</h1>
      </div>
    </div>
  );
}
