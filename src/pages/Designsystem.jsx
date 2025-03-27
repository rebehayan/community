import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Designsystem() {
  return (
    <div>
      <h2 className="text-lg text-primary">Atom</h2>
      <h3 className="text-md">Color</h3>
      <ul className="colors"></ul>

      <h3 className="text-md mt20">Text</h3>

      <div className="text-lg">text-lg</div>
      <div className="text-md">text-md</div>
      <div className="text-base">text-base</div>
      <div className="text-sm">text-sm</div>
      <div className="text-xs">text-xs</div>
      <div className="text-xxs">text-xxs</div>
      <div className="text-xxxs">text-xxxs</div>

      <h3 className="text-md mt20">Text Color</h3>
      <div className="text-md text-primary">text-primary</div>
      <div className="text-md text-secondary">text-secondary</div>
      <div className="text-md text-danger">text-danger</div>
      <div className="text-md text-warning">text-warning</div>
      <div className="text-md text-success">text-success</div>

      <h3 className="text-md mt20">Align</h3>
      <div className="align left">
        <div>.align.left</div>
        <div>.align.left</div>
      </div>
      <div className="align center">
        <div>.align.center</div>
      </div>
      <div className="align right">
        <div>.align.right</div>
        <div>.align.right</div>
      </div>
      <div className="align both">
        <div>.align.both</div>
        <div>.align.both</div>
      </div>
      <div className="align vt">
        <div>.align.vt</div>
        <div>.align.vt</div>
      </div>
      <div className="align vm">
        <div>.align.vm</div>
        <div>.align.vm</div>
      </div>
      <div className="align vb">
        <div>.align.vb</div>
        <div>.align.vb</div>
      </div>

      <h2 className="text-lg text-primary mt20">Molecules</h2>
      <h3 className="text-md mt20">Button</h3>
      <button className="btn primary base">Primary</button>
      <button className="btn secondary base">Secondary</button>
      <button className="btn white-outline base">white-outline</button>
      <Link to="/" className="btn-more">
        view All
      </Link>
      <h3 className="text-md mt20">Badge</h3>
      <span className="badge base primary">primary</span>
      <span className="badge base green">green</span>
      <span className="badge base red">red</span>
      <span className="badge base yellow">yellow</span>
      <h3 className="text-md mt20">Avatar</h3>
      <div className="avatar lg">
        <img src={logo} alt="" />
      </div>
      <div className="avatar base">
        <img src={logo} alt="" />
      </div>
      <div className="avatar sm">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-md mt20">Forms</h3>
      <input type="text" name="" id="" className="input" />
      <input type="text" name="" id="" className="input" defaultValue="value" />
      <input type="text" name="" id="" className="input" placeholder="placeholer" />
      <input type="text" name="" id="" className="input" defaultValue="disabled" disabled />
      <input type="text" name="" id="" className="input error" defaultValue="error" />

      <select name="" id="" className="select">
        <option value="">선택하세요</option>
      </select>

      <textarea name="" id="" className="textarea"></textarea>

      <input type="checkbox" name="" id="check1" className="check-type1" />
      <label htmlFor="check1">선택1</label>
      <input type="checkbox" name="" id="check2" className="check-type1" />
      <label htmlFor="check2">선택2</label>

      <input type="radio" name="radio" id="radio1" className="radio-type1" />
      <label htmlFor="radio1">선택1</label>
      <input type="radio" name="radio" id="radio2" className="radio-type1" />
      <label htmlFor="radio2">선택2</label>

      <h3 className="text-md mt20">Block</h3>
      <div className="block">block</div>

      <h3 className="text-md mt20">Tab</h3>
      <nav>
        <ul className="tab-type1" role="tablist">
          <li role="tab" id="tab1" aria-controls="tabpanel" aria-selected="true">
            <button>Tab1</button>
          </li>
          <li role="tab" id="tab2" aria-controls="tabpanel" aria-selected="false">
            <button>Tab2</button>
          </li>
          <li role="tab" id="tab3" aria-controls="tabpanel" aria-selected="false">
            <button>Tab3</button>
          </li>
        </ul>
      </nav>
      <div id="tabpanel" role="tabpanel" aria-labelledby="tab1"></div>

      <h2 className="text-lg text-primary mt20">Organisms</h2>
      <h3 className="text-md mt20">Header</h3>
      <h3 className="text-md mt20">Footer</h3>
      <h3 className="text-md mt20">Sidebar</h3>
      <h3 className="text-md mt20">Card</h3>
      <h3 className="text-md mt20">Tables</h3>
      <h3 className="text-md mt20">Search</h3>
      <h3 className="text-md mt20">Accordion</h3>
      <h3 className="text-md mt20">Dialog</h3>
    </div>
  );
}
