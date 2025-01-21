
import json from "./parser.js";
import { read } from "./reader.js";


export default class GameSavingLoader {
   
    async load() {
        try {
            const data = await read()
            return json(data)
        } catch (err) {
            throw new Error(err);
        }
    }
} 