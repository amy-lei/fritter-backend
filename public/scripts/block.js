/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 */

 function viewBlocksByUser(fields) {
    fetch(`/api/blocks`)
      .then(showResponse)
      .catch(showResponse);
  }

function blockUser(fields) {
    fetch('/api/blocks', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function unblock(fields) {
    fetch(`/api/blocks/${fields.blockId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
