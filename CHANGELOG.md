# 0.0.4
Added `getLeaderBoard`

# 0.0.3
Added `getSysInfo` and `getSysInfos`

# 0.0.2
Fixed so you can use
```javascript
getNodeStatus('Node1').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```