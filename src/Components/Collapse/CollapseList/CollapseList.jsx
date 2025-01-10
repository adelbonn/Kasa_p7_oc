import { useEffect, useState } from 'react';
import Collapse from '../Collapse';
import Data from '../../../Data/Collapse.json';

const CollapseList = () => {
const [collapses, setCollapses] = useState([]);
// console.log('collapses', collapses);

useEffect(() => {
    setCollapses(Data);
    // console.log('Data', Data);
}, []);


    return (
        <>
          {collapses.map((collapse) =>
            <Collapse 
              key={collapse.id}
              title={collapse.title}
              content={collapse.content}
            />
         )}
        </>
    );
};

export default CollapseList;