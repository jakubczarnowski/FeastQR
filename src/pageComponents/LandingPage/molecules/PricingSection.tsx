"use client";

import React from "react";
import { useState } from "react";
import { Icons } from "~/components/Icons";
import { PricingToggle } from "./PricingToggle";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const { t } = useTranslation();
  const pricingOptions = [
    {
      price: "$6.99",
      yearlyPrice: "$59.99",
      name: t("landingPage.pricing.standard.name"),
      description: t("landingPage.pricing.standard.description"),
      features: [
        t("landingPage.pricing.standard.feature1"),
        t("landingPage.pricing.standard.feature2"),
        t("landingPage.pricing.standard.feature3"),
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[F2B53C]/10",
      buttonTextColor: "text-black",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },

    {
      name: t("landingPage.pricing.enterprise.name"),
      price: t("landingPage.pricing.enterprise.price"),
      yearlyPrice: t("landingPage.pricing.enterprise.yearlyPrice"),
      description: t("landingPage.pricing.enterprise.description"),
      features: [
        t("landingPage.pricing.enterprise.feature1"),
        t("landingPage.pricing.enterprise.feature2"),
        t("landingPage.pricing.enterprise.feature3"),
      ],
      extraBenefits: t("landingPage.pricing.enterprise.extraBenefits"),
      backgroundColor: "#ffffff",
      borderColor: "#F2B53C",
      buttonColor: "bg-[#F2B53C]",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
    },
  ];

  return (
    <section className="pricing__section mx-auto max-w-5xl py-20">
      <div className="pricing-headline flex flex-col gap-y-2">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h3 className="mx-auto max-w-xs text-center text-3xl font-bold leading-[1.15] text-black sm:text-4xl md:mx-0 md:max-w-full">
            Ready to start with us?
          </h3>
          <p className="text-sm text-slate-700/70">
            Choose the best package that suits you
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <PricingToggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card mx-auto grid w-full max-w-3xl gap-6 px-10 py-8 md:grid-cols-2 lg:px-14 lg:py-12 lg:pb-20 lg:pt-8 xl:px-2">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card pricing-card-box flex h-fit w-full flex-col rounded-xl border border-[#d4d4d440] `}
              style={{ borderColor: option.borderColor }}
            >
              <div className="">
                <div className="flex flex-col gap-y-2 p-5">
                  <p className={` text-2xl font-semibold text-[#295D4E]`}>
                    {option.name}
                  </p>
                  <p className="text-xs font-medium text-zinc-500">
                    {option.description}
                  </p>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-[620] text-slate-800">
                      {enabled ? option.yearlyPrice : option.price}
                      <span className="text-sm font-medium text-zinc-500">
                        {enabled ? "/year" : "/month"}
                      </span>
                    </span>
                  </h3>
                </div>
              </div>

              <div className="pricing-features flex flex-col gap-y-5 p-5">
                {option.extraBenefits && (
                  <p className="text-sm font-[400] text-[#7D7D82]">
                    {option.extraBenefits}
                  </p>
                )}
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-x-3">
                    <Icons.check className="text-xl text-[#295D4E]" />
                    <p className="text-sm text-[#486581]">{feature}</p>
                  </div>
                ))}
                <Link
                  href="/dashboard"
                  className={`my-2 flex h-12 w-full items-center justify-center rounded-full border border-slate-500 text-base  font-bold transition duration-200 hover:shadow-lg hover:drop-shadow-lg lg:text-lg ${option.buttonColor} ${option.buttonTextColor}`}
                >
                  <span
                    className="tracking-tight"
                    style={{ color: option.buttonTextColor }}
                  >
                    Choose Plan
                  </span>
                  <Icons.arrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
