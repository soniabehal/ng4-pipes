import {NgModule} from "@angular/core";
import{SearchFilter} from "./pipes/searchFilter";
@NgModule({
    exports:[SearchFilter]
})
export class Ng4PipesModule {}

export{SearchFilter} from "./pipes/searchFilter.js";