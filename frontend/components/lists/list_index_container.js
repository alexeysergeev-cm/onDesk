import { connect } from "react-redux";
import { createList, updateList, deleteList } from "../../actions/list_actions";
import { updateDesk } from "../../actions/desk_actions";
import { updatePaper } from "../../actions/paper_actions";
import ListIndex from "./list_index";

const mapStateToProps = (state) => ({
  lists: state.entities.lists,
  papers: state.entities.papers,
});

const mapDispatchToProps = {
  createList,
  updateList,
  deleteList,
  updateDesk,
  updatePaper,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
