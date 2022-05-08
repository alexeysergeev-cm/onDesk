import * as PaperUtil from "../util/paper_api_util";

export const RECEIVE_PAPER = "RECEIVE_PAPER";
export const REMOVE_PAPER = "REMOVE_PAPER";

const receivePaper = (paper) => {
  return {
    type: RECEIVE_PAPER,
    paper,
  };
};

const removePaper = (paperId) => {
  return {
    type: REMOVE_PAPER,
    paperId,
  };
};

export const createPaper = (paper) => (dispatch) =>
  PaperUtil.createPaper(paper).then((paper) => dispatch(receivePaper(paper)));

export const updatePaper = (paper) => (dispatch) =>
  PaperUtil.updatePaper(paper).then((paper) => dispatch(receivePaper(paper)));

export const deletePaper = (paperId) => (dispatch) =>
  PaperUtil.deletePaper(paperId).then(() => dispatch(removePaper(paperId)));

export const receiveCablePaper = (paper) => (dispatch) => dispatch(receivePaper(paper));