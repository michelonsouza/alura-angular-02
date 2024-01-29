import { AbstractControl } from '@angular/forms';

export async function lowercaseValidator(control: AbstractControl) {
  if (control?.value?.toLowerCase() !== control.value) {
    return { lowercase: true };
  }

  return null;
}
