import { connect } from 'rx-react-container'
import rxContainer from '../../helpers/rxContainer'

import component from './component'
import controller from './controller'

export default connect(rxContainer(controller))(component)
