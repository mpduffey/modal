import {Component, Input}			from '@angular/core';
import {ModalService}         from 'modules/modal/modal-service';

@Component({
	selector:				'modal',
	template:				`
		<div *ngIf="modal.showModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" (click)="modal.showModal=false;"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">{{modal.title}}</h4>
					</div>
					<div class="modal-body">
						<reactive-form [formObject]="modal.formObject.formObject" [fieldObject]="modal.formObject.fieldObject" [cancelFunction]="closeModal"></reactive-form>
					</div>
					<div *ngIf="showFooter" class="modal-footer">
						<button type="button" class="btn btn-default" (click)="modal.showModal=false;">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	`,
	styles:				[`
		.modal {display: block;}
	`]
})

export class Modal {
	@Input() showFooter = false;
	@Input() title = "Modal Title";

	constructor(private modal: ModalService) {
		this.modal = modal;
	}
	closeModal = () => {
		this.modal.showModal = false;
	}
}