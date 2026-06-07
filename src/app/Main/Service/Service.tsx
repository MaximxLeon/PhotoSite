'use client'
import Title from "@/app/Component/Title";
import "./Service.css"
import { services } from "@/constant/services";
import { ServiceForm } from "./ServiceForm";
import { FormData } from "@/constant/formData";

export default function Service() {

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    alert("Доставлено");
  };

    return (
        <section id="services" className="mx-6 my-12 flex flex-col md:mx-10 md:grid md:grid-cols-5 md:gap-20">
            <div className="md:col-span-2">
                <Title className="text-xl uppercase tracking-widest text-center md:text-left ">
                  Услуги
                </Title>

                <Title className="mt-3 text-3xl md:text-3xl text-white">
                  Что я предлагаю
                </Title>

                <div className="mt-12 flex flex-col gap-4">

                  {services.map((service) => {
                      const Icon = service.icon;
                      return (
                      <div
                          key={service.id}
                          className="
                            flex items-center gap-12 px-10
                          "
                      >
                          <div className="">
                            <Icon className="text-3xl md:text-4xl" />
                          </div>

                          <div>
                          <h3 className="text-lg md:text-xl font-light text-white leading-snug">
                              {service.title}
                          </h3>

                          <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed">
                              {service.description}
                          </p>
                          </div>
                      </div>
                      );
                  })}

                  <div>
                    <a href="/allService" className="uppercase text-md tracking-wide cursor-pointer hover:text-gray-300">Все услуги →</a>
                  </div>
                </div>
            </div>

            <ServiceForm onSubmit={onSubmit}></ServiceForm>
        </section>
  );
}