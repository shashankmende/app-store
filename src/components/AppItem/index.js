// Write your code here
import './index.css'

const AppComponents = props => {
  const {each} = props
  const {appName, imageUrl} = each
  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="appitem-image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppComponents
