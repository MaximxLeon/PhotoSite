'use client';

import Title from "@/app/Component/Title";
import { useForm, SubmitHandler } from "react-hook-form";

export interface FormData {
  name: string;
  email: string;
  text: string;
}

interface ServiceFormProps {
  onSubmit: SubmitHandler<FormData>;
}

export function ServiceForm({ onSubmit }: ServiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  return (
    <div id="contacts" className="contact md:col-span-3 w-full">
      
      {/* HEADER */}
      <div className="px-4 sm:px-10 md:px-40 my-12">
        <Title className="text-[#ce9d75] font-normal">
          Связаться со мной
        </Title>

        <h1 className="my-4 text-2xl md:text-3xl tracking-wide">
          Обсудим вашу идеальную
          <br />
          съёмку?
        </h1>

        <span className="tracking-wide text-sm md:text-base text-white opacity-70">
          Заполните форму, и я свяжусь с вами в ближайшее время,
          <br />
          чтобы обсудить детали и ответить на вопросы.
        </span>
      </div>

      {/* FORM */}
      <form
        className="w-full px-4 sm:px-10 md:px-40 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* ROW */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          
          {/* NAME */}
          <div className="flex flex-col w-full">
            <input
              placeholder="Ваше имя"
              className={`border-b outline-none py-2 w-full transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: "Введите имя",
                minLength: {
                  value: 2,
                  message: "Имя слишком короткое",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col w-full">
            <input
              placeholder="Email"
              className={`border-b outline-none py-2 w-full transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Неверный формат email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="flex flex-col">
          <textarea
            placeholder="Расскажите о вашей идее"
            className={`border outline-none p-3 min-h-30 resize-none w-full transition ${
              errors.text ? "border-red-500" : "border-gray-300"
            }`}
            {...register("text", {
              required: "Опишите вашу идею",
              minLength: {
                value: 10,
                message: "Слишком короткое сообщение",
              },
            })}
          />

          {errors.text && (
            <span className="text-red-500 text-sm mt-1">
              {errors.text.message}
            </span>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-[50%] py-3 my-2 transition rounded-md font-medium
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#b4947a] text-white hover:bg-[#967a63]"
            }
          `}
        >
          {isSubmitting ? "Отправляется..." : "Отправить заявку"}
        </button>
      </form>
    </div>
  );
}