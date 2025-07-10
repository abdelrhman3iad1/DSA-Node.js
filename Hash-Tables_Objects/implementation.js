class HashTable {
    constructor(length){
        this.data = new Array(length);
    }

    /* 
        this underscore is trying to indentify this function as private property but its useless
            i can call it easily
    */
    _hash(key){
        let hash = 0 ;
        for(let i = 0 ; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) * i ) % this.data.length;
        }
        return hash;
    }

    set(key,value = null){
        let address = this._hash(key);
        let data = [key,value];
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push(data);
        return this.data;
    }

    get(key){ 
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0 ; i < currentBucket.length ; i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        let keys = [];
        let data = this.data;
        for(let i  = 0 ; i < data.length ; i++){
            if(typeof data[i] == 'object'){
                for(let j = 0 ; j < data[i].length;j++){
                    keys.push(data[i][j][0]);
                }
            }
        }
        return keys;
    }
}

let myHashTable = new HashTable(50);
myHashTable.set("Abdo",15000); 
myHashTable.set("A",15000); 
myHashTable.set("Ab"); 
// console.log(myHashTable.get("Ab"));
// console.log(myHashTable.data);
console.log(myHashTable.keys());