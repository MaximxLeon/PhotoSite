import { SubmitHandler } from "react-hook-form";

export interface FormData {
  name: string;
  email: string;
  text: string;
}

export interface ServiceFormProps {
  onSubmit: SubmitHandler<FormData>;
}