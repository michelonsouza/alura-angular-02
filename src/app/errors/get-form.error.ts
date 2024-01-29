import { FormGroup } from '@angular/forms';

export function getFormErrorByName(
  form: FormGroup,
  name: string,
  errorName: string
) {
  return form.get(name)?.errors?.[errorName] && form.get(name)?.touched;
}
