const comments = [
  {
    parent: "1",
    id: "4",
  },
  {
    id: "6",
  },
  {
    parent: "3",
    id: "1",
  },
  {
    id: "3",
  },
  {
    parent: "1",
    id: "4",
  },
];

function buildCommentTree(commentList) {
  const commentMap = {};
  const commentTree = [];
  commentList.forEach((comment) => {
    const { id, parent } = comment;
    comment.children = [];
    commentMap[id] = comment;
    if (!parent) {
      commentTree.push(comment);
    }
  });
  commentList.forEach((comment) => {
    const { parent } = comment;
    if (parent) {
      const parentComment = commentMap[parent];
      if (parentComment) {
        parentComment.children.push(comment);
      }
    }
  });

  return commentTree;
}

const commentTree = buildCommentTree(comments);
console.log(commentTree);

const ab = "";
console.log(typeof ab.toString());
let i = 0;
let r = "asd";
while (i < 50) {
  r = r.toString();
  console.log(typeof r, r)
  i++;
}
