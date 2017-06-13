"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n            <h1>{{title}}</h1>\n            <h2>My Heroes</h2>\n            <ul class=\"heroes\">\n                <!-- putting onclick selector on each hero -->\n                <li *ngFor=\"let hero of heroes\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\">\n                <!-- *ngFor indicates <li> element and its children consitutes a master template-->\n                <!-- let hero identifies each hero of heroes-->\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n              </li>\n            </ul>\n            <hero-detail [hero]=\"selectedHero\"></hero-detail>\n            ",
        // When the app loads, selectedHero is undefined.
        // The selected hero is initialized when the user clicks a hero's name.
        // Although selectedHero.name is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.
        // Wrap the HTML hero detail content of the template with a <div>. Then add the ngIf built-in directive and set it to the selectedHero property of the component.
        styles: ["\n              .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n              }\n              .heroes {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: 15em;\n              }\n              .heroes li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n              }\n              .heroes li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n              }\n              .heroes li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n              }\n              .heroes .text {\n                position: relative;\n                top: -3px;\n              }\n              .heroes .badge {\n                display: inline-block;\n                font-size: small;\n                color: white;\n                padding: 0.8em 0.7em 0 0.7em;\n                background-color: #607D8B;\n                line-height: 1em;\n                position: relative;\n                left: -1px;\n                top: -4px;\n                height: 1.8em;\n                margin-right: .8em;\n                border-radius: 4px 0 0 4px;\n              }\n            "]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
// To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook.
// Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its
// eventual destruction.
//# sourceMappingURL=heroes.component.js.map