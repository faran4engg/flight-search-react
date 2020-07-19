import * as yup from "yup";
import { setIn } from "final-form";

export const flightSearchFormSchema = yup.object({
  arrival: yup.string().required().min(3),
  departure: yup.string().required().min(3),
});

export const validate = (schema) => async (values) => {
  if (typeof schema === "function") schema = schema();

  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
