import React, { useState, useEffect, useCallback } from "react";
import ListIndexItem from "./list_index_item";
import ListFormContainer from "./list_form_container";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { cloneDeep } from "lodash";
function ListIndex({
  lists,
  deskId,
  deleteList,
  updateList,
  updateDesk,
  desk,
  updateTwoLists,
  papers,
  currentUserId,
  listOrder,
}) {
  const [listsToRender, setListsToRender] = useState({});

  useEffect(() => {
    if (!lists || JSON.stringify(lists) === JSON.stringify(listsToRender)) {
      return;
    }
    cloneAndSet(lists);
  }, [lists]);

  const cloneAndSet = useCallback(
    (lists) => {
      /*
      Object.assign({}, lists); won't work since it does shallow dup
      use: 
        1) JSON.parse(JSON.stringify(lists))   
        2) lodash Library: 
          var objects = [{ 'a': 1 }, { 'b': 2 }];
          var deep = _.cloneDeep(objects);
     */
      const listsCopy = cloneDeep(lists);
      setListsToRender(listsCopy);
    },
    [lists, setListsToRender, cloneDeep]
  );

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.type === "list") {
      const items = desk.list_order;
      const author_id = desk.list_order; //remove this
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateDesk({
        id: deskId,
        list_order: items,
        author_id: author_id,
      });
    } else if (result.type === "paper") {
      if (result.source.droppableId === result.destination.droppableId) {
        const papers = listsToRender[result.source.droppableId].paper_order;
        const [reorderedItem] = papers.splice(result.source.index, 1);
        papers.splice(result.destination.index, 0, reorderedItem);
        updateList({
          id: result.source.droppableId,
          paper_order: papers,
        });
      } else {
        const sourceList = listsToRender[result.source.droppableId];
        sourceList.paper_order.splice(result.source.index, 1);

        const destinationList = listsToRender[result.destination.droppableId];
        destinationList.paper_order.splice(
          result.destination.index,
          0,
          result.draggableId
        );

        const payload = {
          destination_list_id: result.destination.droppableId,
          paper_id: papers[result.draggableId].id,
          source_order: sourceList.paper_order,
          destination_order: destinationList.paper_order,
          sender_id: currentUserId,
        };

        updateTwoLists(result.source.droppableId, payload).fail((err) => {
          console.log(err.responseJSON);
          cloneAndSet(lists);
        });
      }
    }
  };

  if (!lists) return null;
  if (!desk) return null;

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="list-index-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listOrder.map((listId, i) => {
              if (listsToRender[listId]) {
                return (
                  <Draggable
                    key={listsToRender[listId].id}
                    draggableId={"" + listId}
                    index={i}
                  >
                    {(provided) => (
                      <div
                        className="list-wrapper"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="list-item">
                          <ListIndexItem
                            list={listsToRender[listId]}
                            deskId={deskId}
                            deleteList={deleteList}
                            updateList={updateList}
                            desk={desk}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              }
            })}
            {provided.placeholder}
            <ListFormContainer deskId={deskId} desk={desk} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListIndex;
