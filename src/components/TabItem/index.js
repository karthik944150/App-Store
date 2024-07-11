// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, cilckTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    cilckTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : 'tab-btn'
  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
