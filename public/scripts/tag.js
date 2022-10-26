/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 */

 function viewTagsByUser(fields) {
    fetch(`/api/tags?source=${fields.userId}`)
      .then(showResponse)
      .catch(showResponse);
  }

function viewTagsByFreet(fields) {
    fetch(`/api/tags?source=${fields.freetId}`)
      .then(showResponse)
      .catch(showResponse);
}
  
function addTag(fields) {
    fetch('/api/tags', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function deleteTag(fields) {
    fetch(`/api/tags/${fields.tagId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
