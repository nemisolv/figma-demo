import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Accordion({ index}) {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="accordion ">
        <div className="accordion-item">
          <a
            onClick={() => setActive(!active)}
            className={`accordion-title flex items-center gap-2  px-4 py-2 cursor-pointer select-none ${
              index % 2 === 0 ? 'bg-slate-200' : ''
            }`}
          >
            {<FaCaretDown className={active ? 'rotate-180' : ''} />}
            <h2>Kí ức bị hoán đổi</h2>
          </a>
          {active && (
            <div className="accordion-content">
              <p>Content 1</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
