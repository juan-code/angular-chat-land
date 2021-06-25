import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild
} from "@angular/core";

@Component({
  selector: "chat-account-user",
  templateUrl: "./account-user.component.html",
  styleUrls: ["./account-user.component.css"]
})
export class AccountUserComponent implements AfterViewInit {
  private size: number = 0;
  @Input() sizeImage: number;
  @ViewChild("iconProfile") profileEl: ElementRef;
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const el = this.profileEl.nativeElement as HTMLDivElement;
    this.size = el.offsetWidth + 10;
    this.cdr.detectChanges();
  }

  get sizeEl(): number {
    if (this.sizeImage > 0) {
      return this.sizeImage;
    }
    return this.size;
  }
}
