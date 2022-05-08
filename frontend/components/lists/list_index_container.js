import { connect } from "react-redux";
import {
  createList,
  updateList,
  deleteList,
  updateTwoLists,
} from "../../actions/list_actions";
import { updateDesk } from "../../actions/desk_actions";
import { updatePaper } from "../../actions/paper_actions";
import ListIndex from "./list_index";

const mapStateToProps = (state, ownProps) => ({
  lists: state.entities.lists,
  papers: state.entities.papers,
  currentUserId: state.session.currentUserId,
  listOrder: state.entities.desks[ownProps.deskId]?.list_order,
});

const mapDispatchToProps = {
  createList,
  updateList,
  deleteList,
  updateDesk,
  updatePaper,
  updateTwoLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
