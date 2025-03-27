import React, { useState } from "react";

export default function Tab({ tabNavs, children }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div>
      <nav>
        <ul className="tab-type1" role="tablist">
          {tabNavs.map((tabName, index) => (
            <li key={index} role="tab" aria-selected={selectedTabIndex === index} className={selectedTabIndex === index ? "active" : ""}>
              <button onClick={() => setSelectedTabIndex(index)}>{tabName}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {React.Children.map(children, (child, index) => (
          <div key={index} role="tabpanel" hidden={selectedTabIndex !== index} aria-hidden={selectedTabIndex !== index}>
            {selectedTabIndex === index && child}
          </div>
        ))}
      </div>
    </div>
  );
}
