let n, m, cycle_start, cycle_end;
let adj = [], valuation = [], allocation = [[],[],[]];
let color = [], parent = [];
// for (let i = 0; i < n; i++){
//     color.push(0);
// }

function dfs(v) {
    color[v] = 1;
    for (let u = 0; u<n; u++){
        if (adj[u][v] == 1){
            if (color[u] == 0) {
                parent[u] = v;
                if (dfs(u))
                    return true;
            }
            else if (color[u] == 1) {
                cycle_end = v;
                cycle_start = u;
                return true;
            }
        }
    }
    color[v] = 2;
    return false;
}

function find_cycle(){
    color = Array.from(Array(n)).map(i => 0);
    parent = Array.from(Array(n)).map(i => -1);
    cycle_start = -1;
    for (let v = 0; v < n; v++) {
        if (color[v] == 0 && dfs(v))
            break;
    }
    if (cycle_start == -1) {
        console.log("Acyclic");
    }
    else{
        let cycle = [];
        cycle.push(cycle_start);
        for (let v = cycle_end; v != cycle_start; v = parent[v])
            cycle.push(v);
        cycle.push(cycle_start);
        cycle.reverse();
        console.log("Cycle found:");
        for (let x of cycle){
            console.log(x+1);
        }
        console.log();
        for (let i = 1; i < cycle.length - 1; i++){
            [ allocation[cycle[i]] , allocation[cycle[i-1]] ] = [ allocation[cycle[i-1]] , allocation[cycle[i]] ];
        }

        for (let i = 0; i < n; i++){
            let sum = 0;
            for (let x of allocation[i]){
                sum += valuation[i][x];
            }
            
            for (let j = 0; j < n; j++){
                let res = 0;
                for (let x of allocation[j]){
                    res += valuation[i][x];
                }
                if (sum < res){adj[i][j] = 1;}
                else{adj[i][j]=0;}
            }

        }
    }

}

function find_source(){
    indegree = Array.from(Array(n)).map(i => 0);
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (adj[i][j] == 1){indegree[j] += 1;}
        }
    }
    let er = -1;
    for (let i = 0; i < n; i++){
        if (indegree[i] == 0){
            er = i;
            break;
        }
    }
    return er;
}

n = 3, m = 6;
valuation = [[2,1,3,0,1,2],[10,1,1,1,2,5],[3,1,3,0,5,2]];
adj = [[0,0,0],[0,0,0],[0,0,0]];

for(let i=0; i<m; i++){
    let src = find_source();
    while(src == -1){
        find_cycle();
        src = find_source();
    }
    allocation[src].push(i);

    let sum = 0; 
    for (let x of allocation[src]){
        sum += valuation[src][x];
    }
    for(let j=0; j<n; j++){
        let res = 0, ser = 0, resser = 0;
        for (let x of allocation[j]){
            res += valuation[src][x];
            ser += valuation[j][x];
        }
        for (let x of allocation[src]){
            resser += valuation[j][x];
        }
        if (sum < res){adj[src][j] = 1;}
        else{adj[src][j]=0;}
        if (ser < resser){adj[j][src]=1;}
        else{adj[j][src]=0;}
    }
}
for(let i = 0; i < allocation.length; i++){
    console.log(i+1);
    for (let y of allocation[i]){
        console.log(y+1);
    }
    console.log();
}