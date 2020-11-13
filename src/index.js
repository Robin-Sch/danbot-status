const fetch = require('node-fetch');

const getAllStatus = async () => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/nodeStatus').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

const getNodesStatus = async () => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/nodeStatus').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            resolve(res.nodestatus);
        }).catch(err => {
            reject(err);
        });
    });
};

const getMiscStatus = async () => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/nodeStatus').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            resolve(res.misc);
        }).catch(err => {
            reject(err);
        });
    });
};

const getNodeStatus = (node) => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/nodeStatus').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            const nodes = Object.keys(res.nodestatus);
            if (!node) resolve(res.nodestatus);
            else if (typeof node == 'number') node = `Node` + node;
            else if (typeof node == 'string' && node.toLowerCase().startsWith('node')) node = node.charAt(0).toUpperCase() + node.slice(1);
            else reject('Invalid node number!');
            if (!nodes.includes(node)) return reject('Invalid node number!');
            resolve(res.nodestatus[node]);
        }).catch(err => {
            reject(err);
        });
    });
};

const getLavaStatus = (node) => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/nodeStatus').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            const nodes = Object.keys(res.misc).filter(misc => misc.toLowerCase().includes('lava'));
            if (!node) resolve();
            else if (typeof node == 'number') node = `Lava` + node;
            else if (typeof node == 'string' && node.startsWith('lava')) node = node.charAt(0).toUpperCase() + node.slice(1);
            else if (typeof node == 'string' && node.toLowerCase().startsWith('node')) node = 'Lava' + node.slice(4);
            else if (typeof node == 'string' && !node.startsWith('Lava')) reject('Invalid node number!');
            else if (typeof node !== 'string') reject('Invalid node number!');
            if (!nodes.includes(node)) return reject('Invalid node number!');
            resolve(res.misc[node]);
        }).catch(err => {
            reject(err);
        });
    });
};

module.exports = { getAllStatus, getNodesStatus, getMiscStatus, getNodeStatus, getLavaStatus };