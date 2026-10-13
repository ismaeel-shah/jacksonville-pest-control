import { getPublishedServices } from "./content";
import { NOT_SURE, type PestOption } from "./quote-form";

/** Quote form "Pest problem" choices: every published service, then "Not sure". */
export function getPestOptions(): PestOption[] {
  return [
    ...getPublishedServices().map((service) => ({ value: service.slug, label: service.name })),
    { value: NOT_SURE, label: "Not sure" },
  ];
}
