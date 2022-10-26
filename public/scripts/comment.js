/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function addComment(fields) {
    fetch('/api/comments', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function replyComment(fields) {
    fetch('/api/comments/replies', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function deleteComment(fields) {
    fetch(`/api/comments/${fields.commentId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}

function editComment(fields) {
    fetch(`/api/comments/${fields.commentId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }

function viewCommentsBySource(fields) {
    fetch(`/api/comments?freetId=${fields.freetId}`)
        .then(showResponse)
        .catch(showResponse);
}

function viewCommentsByVisibility(fields) {
    fetch(`/api/comments?freetId=${fields.freetId}&visibility=${fields.visibility}`)
        .then(showResponse)
        .catch(showResponse);
}
