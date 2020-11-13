# Installation
Simply run the following command to install DanBot-Status: `npm install danbot-status`

# Example Usage
```javascript
const { getAllStatus, getNodesStatus, getMiscStatus, getNodeStatus, getLavaStatus } = require('danbot-status');

// Fetch all statuses
getAllStatus().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch all node statuses
getNodesStatus().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch all misc statuses
getMiscStatus().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch node 1 status
getNodeStatus(1).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch node 1 status
getNodeStatus('Node1').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch lava node 1 status
getLavaStatus(1).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch lava node 1 status
getLavaStatus('Node1').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Fetch lava node 1 status
getLavaStatus('Lava1').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```