import fs from 'fs';

export default class PersistData {
    constructor(){
        this.file = "data.json";
        this.db = {}; 
    }

    get(key){
        const fileContent = fs.readFileSync(this.file, { encoding: 'utf8' });
        this.db = JSON.parse(fileContent);
        return this.db[key];
    }

    set(key, data){
        this.db[key] = data;
        fs.writeFileSync(this.file, JSON.stringify(this.db));
        return this.db[key];
    }
}
