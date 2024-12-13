import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpendirective {
  @HostListener('click')
  onclicklink(event: Event) {
    event.preventDefault();
    console.log("J'empeche le lien");
  }
}
