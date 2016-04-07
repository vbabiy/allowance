import {Component} from "angular2/core";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";

@Component({
    selector: 'vman-app',
    template: `
    <h1>Hello</h1>
`,
    directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class AppComponent {
}