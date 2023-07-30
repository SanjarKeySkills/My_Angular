import { Compo } from '../newComponent/compo';
import { ModalService } from "../../service/modal.service";

@Compo({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }
}
