import {useState} from 'react';

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex], 
    changeItem: setCurrentIndex // 활성화 된 tab
  };
};

export default useTabs;