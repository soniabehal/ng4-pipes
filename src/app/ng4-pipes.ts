import {NgModule} from "@angular/core";
import{SearchFilter} from "./pipes/searchFilter";
@NgModule({
    
    declarations:[SearchFilter],
    exports:[SearchFilter]
})
export class Ng4PipesModule {}

export{SearchFilter} from "./pipes/searchFilter.js";