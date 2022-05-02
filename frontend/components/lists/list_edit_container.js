import { connect } from 'react-redux';
import { updateList } from '../../actions/list_actions';
import EditList from './list_edit';

const mapStateToProps = (state, ownProps) => ({
  currUserId: state.session.currentUserId,
  list: ownProps.list,
});
    
const mapDispatchToProps = {
  updateList
}

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
