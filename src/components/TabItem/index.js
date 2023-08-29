// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, onClickTabItem, isActive} = props
  const {displayText, tabId} = tab

  const onClickTab = () => {
    onClickTabItem(tabId)
  }
  const activeClassNames = isActive ? 'active-class' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeClassNames}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
