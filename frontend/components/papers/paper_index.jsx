import PaperIndexItem from "./paper_index_item";
import { Droppable, Draggable } from "react-beautiful-dnd";

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  background: isDragging ? "#FFD1BA" : "white",
});

function PaperIndex({
  deletePaper,
  list,
  comments,
  list_id,
  openModal,
  papers,
  updateList,
}) {
  if (!papers) return null;

  return (
    <Droppable droppableId={"" + list_id} type="paper">
      {(provided) => (
        <div
          className="paper-index-container"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.paper_order
            .map((paperId, i) => {
              if (papers[paperId]) {
                const paper = papers[paperId];
                return (
                  <Draggable
                    key={paper.id}
                    draggableId={"" + paper.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="paper-wrapper"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="paper-item">
                          <PaperIndexItem
                            paper={paper}
                            listId={list_id}
                            deletePaper={deletePaper}
                            openModal={openModal}
                            comments={comments}
                            updateList={updateList}
                            list={list}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              }
            })
            .filter((e) => e !== undefined)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default PaperIndex;
