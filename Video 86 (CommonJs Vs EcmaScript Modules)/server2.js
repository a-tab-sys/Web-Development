//IMPORTING EXPORTS WITH ECMSRIPT MODULES
import {a, b} from './myModuleECMAScriptExport.js'          //importing a named export
console.log(a,b)
import { e as alpha } from './myModuleECMAScriptExport.js'; //rename named exports during import:
console.log(alpha); 

import anything from './myModuleECMAScriptExport.js';       //importing a default export.The import name does not have to match the exported name.
console.log(anything, anything.x, anything.y);
