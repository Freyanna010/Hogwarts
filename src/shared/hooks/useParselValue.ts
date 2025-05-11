import { InputValue } from "@shared/form";

export const useParsedValue = (
  type: string,
  e: React.ChangeEvent<HTMLInputElement>
): InputValue => {
  const eventTarget = e.target;

  switch (type) {
    case "string":
      return eventTarget.value ;
    case "date":
      return eventTarget.value ;
    case "number":
      return Number(eventTarget.value);
    case "checkbox":
      return eventTarget.checked

    default:
      return eventTarget.value ;
  }
};
