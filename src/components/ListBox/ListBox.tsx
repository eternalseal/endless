import React from 'react';

import { Content } from '../../services/content';
import '../../styles/listbox.scss';

type Props = {
  item: Content;
};

const ListBox: React.FC<Props> = ({ item }) => {
  return (
    <li className="list__content">
      <span className="counter">
        <h4>{`0${item.stepNumber}`}</h4>
        <span className="highlight" />
      </span>
      <div className="list__body">
        <h5>{item.versionContent[0].title}</h5>
        <p>{item.versionContent[0].body}</p>
      </div>
    </li>
  );
};

export default ListBox;
