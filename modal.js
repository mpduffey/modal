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
var core_1 = require('@angular/core');
var modal_service_1 = require('modules/modal/modal-service');
var Modal = (function () {
    function Modal(modal) {
        var _this = this;
        this.modal = modal;
        this.showFooter = false;
        this.title = "Modal Title";
        this.closeModal = function () {
            _this.modal.showModal = false;
        };
        this.modal = modal;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Modal.prototype, "showFooter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Modal.prototype, "title", void 0);
    Modal = __decorate([
        core_1.Component({
            selector: 'modal',
            template: "\n\t\t<div *ngIf=\"modal.showModal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"modal.showModal=false;\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t\t\t<h4 class=\"modal-title\">{{modal.title}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<reactive-form [formObject]=\"modal.formObject\" [cancelFunction]=\"closeModal\"></reactive-form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"showFooter\" class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"modal.showModal=false;\">Close</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\t.modal {display: block;}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof modal_service_1.ModalService !== 'undefined' && modal_service_1.ModalService) === 'function' && _a) || Object])
    ], Modal);
    return Modal;
    var _a;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map