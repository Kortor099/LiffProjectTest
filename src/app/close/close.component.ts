import { Component } from '@angular/core';
import { LiffService } from '../liff.service';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent {

  constructor(private liffService: LiffService) { }
  onClose() {
    this.liffService.liffClose();
  }
}
