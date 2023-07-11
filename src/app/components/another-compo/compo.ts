import { Component, Input } from '@angular/core';
import { ModalService } from "../../service/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent2 {
  @Input() title: string

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }
}
