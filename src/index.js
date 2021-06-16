const fetch = require('node-fetch');

/**
 * @typedef {object} OneNodeStatus
 * @property {BigInt} timestamp - The timestamp since it has been online
 * @property {boolean} status - Whether the node is online
 * @property {boolean} is_vm_online - Whether the node is online
 */

/**
 * @typedef {object} AllNodeStatus
 * @property {OneNodeStatus} Node1 - Node1
 * @property {OneNodeStatus} Node2 - Node2
 * @property {OneNodeStatus} Node3 - Node3
 * @property {OneNodeStatus} Node4 - Node4
 * @property {OneNodeStatus} Node5 - Node5
 * @property {OneNodeStatus} Node6 - Node6
 * @property {OneNodeStatus} Node7 - Node7
 * @property {OneNodeStatus} Node8 - Node8
 * @property {OneNodeStatus} Node9 - Node9
 * @property {OneNodeStatus} Node10 - Node10
 * @property {OneNodeStatus} Node11 - Node11
 * @property {OneNodeStatus} Node12 - Node12
 * @property {OneNodeStatus} Node13 - Node13
 * @property {OneNodeStatus} Node14 - Node14
 * @property {OneNodeStatus} Node15 - Node15
 * @property {OneNodeStatus} Node16 - Node16
 * @property {OneNodeStatus} Node17 - Node17
 * @property {OneNodeStatus} Node18 - Node18
 */

/**
 * @typedef {object} MiscStatus
 * @property {boolean} Lava1 - If lavalink1 is online
 * @property {boolean} Lava2 - If lavalink2 is online
 * @property {boolean} Mail - If the mail server is online
 * @property {boolean} RProxy - If the reverse proxy is online
 * @property {boolean} Panel - If the panel is online
 * @property {boolean} AnimalAPI - If the animalAPI is online
 */

/**
 * @typedef {object} NodeStatus
 * @property {AllNodeStatus} nodestatus - All the node statuses
 * @property {MiscStatus} misc - The misc statuses
 */

/**
 * @typedef {object} OneNodeSysInfo
 * @property {string} cpu - The cpu info
 * @property {string} cpuload - The cpu load
 * @property {number} cputhreads - The amount of cpu threads
 * @property {number} cpucores - The amount of cpu cores
 * @property {string} memused - The amount of memory used
 * @property {string} memtotal - The total amount of memory
 * @property {string} swaptotal - The total amount of swap
 * @property {string} diskused - The amount of disk space used
 * @property {string} disktotal - The total amount of disk space
 * @property {string} netrx - 
 * @property {string} nettx - 
 * @property {string} osplatform - The OS platform
 * @property {string} oslogofile - The OS distro
 * @property {string} osrelease - The OS version
 * @property {string} osuptime - The OS uptime
 * @property {string} biosversion - The bios version
 * @property {string} biosdate - The bios date
 * @property {number} dockercontainers - The amount of docker containers
 * @property {number} dockercontainersrunning - The amount of docker containers running
 * @property {number} dockercontainerspaused - The amount of docker containers paused
 * @property {number} dockercontainersstopped - The amount of docker containers stopped
 * @property {date} lastupdate - Last time updated
 */

/**
 * @typedef {object} OneNodeSysSpeedtest
 * @property {number} ping - The network ping
 * @property {number} download - The download speed
 * @property {number} upload - The upload speed
 * @property {date} lastupdate - Last time updates
 */
/**
 * @typedef {object} OneNodeSysInfos
 * @property {OneNodeSysInfo} info - The system info
 * @property {OneNodeSysSpeedtest} speedtest - The speedtest info
 */

/**
 * @typedef {object} AllNodeSysInfos
 * @property {OneNodeSysInfo} Node1 - Node1
 * @property {OneNodeSysInfo} Node2 - Node2
 * @property {OneNodeSysInfo} Node3 - Node3
 * @property {OneNodeSysInfo} Node4 - Node4
 * @property {OneNodeSysInfo} Node5 - Node5
 * @property {OneNodeSysInfo} Node6 - Node6
 * @property {OneNodeSysInfo} Node7 - Node7
 * @property {OneNodeSysInfo} Node8 - Node8
 * @property {OneNodeSysInfo} Node9 - Node9
 * @property {OneNodeSysInfo} Node10 - Node10
 */

/**
 * Fetch all statuses
 * @returns {NodeStatus}
 */
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


/**
 * Fetch all node statuses
 * @returns {AllNodeStatus}
 */
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

/**
 * Fetch one node status
 * @param {number | string} node - The node ID
 * @returns {OneNodeStatus}
 */
const getNodeStatus = (node) => {
    return new Promise(async (resolve, reject) => {
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


/**
 * Fetch all miscs statuses
 * @returns {MiscStatus}
 */
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

/**
 * Fetch all miscs statuses
 * @param {number | string} node - The lava ID
 * @returns {boolean}
 */
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

/**
 * Fetch all system info
 * @returns {AllNodeSysInfos}
 */
const getSysInfos = () => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/sysinfo').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

/**
 * Fetch one node system info
 * @param {number | string} node - The node ID
 * @returns {OneNodeSysInfos}
 */
const getSysInfo = (node) => {
    return new Promise((resolve, reject) => {
        fetch('https://danbot.host/sysinfo').then(res => {
            if(res.status == 200) return res.json();
            else reject('Error when fetching, please try again!');
        }).then(res => {
            console.log(res);
            const nodes = Object.keys(res);
            if (!node) resolve(res);
            else if (typeof node == 'number') node = `Node` + node;
            else if (typeof node == 'string' && node.toLowerCase().startsWith('node')) node = node.charAt(0).toUpperCase() + node.slice(1);
            else reject('Invalid node number!');
            if (!nodes.includes(node)) return reject('Invalid node number!');
            resolve(res[node]);
        }).catch(err => {
            reject(err);
        });
    });
};

// const getLeaderBoard = (userID = null) => {
//     return new Promise((resolve, reject) => {
//         const extra = userID ? `?id=${userID}` : '';
//         fetch('https://api.danbot.host/leaderboard' + extra).then(res => {
//             if(res.status == 200) return res.json();
//             else reject('Error when fetching, please try again!');
//         }).then(res => {
//             resolve(res);
//         }).catch(err => {
//             reject(err);
//         });
//     });
// };

module.exports = { getAllStatus, getNodesStatus, getNodeStatus, getMiscStatus, getLavaStatus, getSysInfos, getSysInfo /*, getLeaderBoard */ };