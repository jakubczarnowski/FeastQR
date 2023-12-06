"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { getDefaultLanguage } from "~/utils/getDefaultLanguage";
import { type FullMenuOutput, parseDishes } from "~/utils/parseDishes";
import { useTranslation } from "react-i18next";
import {
  getCategoryTranslations,
  getDishVariantsTranslated,
} from "~/utils/categoriesUtils";
import { useInView } from "react-intersection-observer";
import { cn } from "~/utils/cn";
import { Badge } from "../ui/badge";
import { tagsTranslations } from "~/utils/tags";
import { notEmpty } from "~/utils/utils";
import { assert } from "~/utils/assert";

export const MainMenuView = ({ menu }: { menu: FullMenuOutput }) => {
  const defaultLanguageSet = useRef(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const { t } = useTranslation();

  const defaultLanguage = getDefaultLanguage(menu.menuLanguages);

  if (!defaultLanguageSet.current) {
    setSelectedLanguage(defaultLanguage.languageId);
    defaultLanguageSet.current = true;
  }

  const parsedDishes = parseDishes(
    menu,
    selectedLanguage || defaultLanguage.languageId,
  );

  return (
    <div className="z-0 flex h-full w-full bg-white ">
      <div className="flex w-full flex-col gap-5 ">
        <div className="relative aspect-[2/1] w-full">
          {menu.backgroundImageUrl && (
            <Image
              src={menu.backgroundImageUrl}
              fill
              alt="Background image"
              className="object-contain"
            />
          )}
        </div>
        <div className="flex w-full flex-row items-center justify-between px-4">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl">{menu.name}</h1>
            <p className="md:text-regular text-sm text-slate-400">
              {menu?.address}, {menu.city}
            </p>
          </div>
        </div>
        <div className="sticky top-0 flex w-full flex-row items-center justify-between ">
          <CategoriesNavigation
            categories={parsedDishes
              .filter((category) => category.dishes.length > 0)
              .map(({ category }) => category)
              .filter(notEmpty)}
            languageId={selectedLanguage || defaultLanguage.languageId}
          />
        </div>

        <div className="flex flex-wrap gap-4 px-2">
          {parsedDishes?.map(({ category, dishes }) => {
            if (!dishes.length) return null;

            return (
              <div
                key={category?.id || "no-category"}
                className="w-full min-w-full flex-1"
                id={category?.id}
              >
                <div className="flex w-full flex-col gap-4">
                  {category?.name && (
                    <h3 className="w-full px-2 text-2xl font-extrabold">
                      {category?.name ?? ""}
                    </h3>
                  )}
                  <ul className="flex flex-wrap gap-2 px-2">
                    {dishes.map((dish) => {
                      return (
                        <li
                          key={dish.id}
                          className="flex w-full flex-col items-start justify-between gap-2 "
                        >
                          <div className="flex w-full justify-between">
                            <div>
                              <div className="flex flex-col">
                                <h4 className="text-lg font-medium">
                                  {dish.name}
                                </h4>
                                <PriceCard price={dish.price} />
                              </div>
                              <div className="gap-2 text-slate-800">
                                <MacroCard
                                  protein={dish.protein}
                                  carbohydrates={dish.carbohydrates}
                                  fat={dish.fats}
                                  calories={dish.calories}
                                />
                              </div>
                              <p className="pt-1 text-sm text-slate-500">
                                {dish.description}
                              </p>
                              <Tags
                                tags={dish.dishesTag.map(({ tagName }) =>
                                  t(tagsTranslations[tagName]),
                                )}
                              />
                            </div>
                            {dish.pictureUrl && (
                              <Image
                                src={dish.pictureUrl}
                                alt={dish.name}
                                width={200}
                                height={200}
                                className="h-[100px] min-h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-xl object-cover"
                              />
                            )}
                          </div>
                          <div className="w-full">
                            <div className="relative flex w-full flex-col gap-3">
                              {getDishVariantsTranslated({
                                dishVariants: dish.dishVariants,
                                languageId:
                                  selectedLanguage ||
                                  defaultLanguage.languageId,
                              }).map((variant) => {
                                return (
                                  <VariantCard
                                    key={variant.id}
                                    name={variant.name || ""}
                                    price={variant.price}
                                    description={variant.description || ""}
                                  />
                                );
                              })}
                            </div>
                            <hr className="w-full" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 py-1">
      {tags.map((tag, index) => (
        <Badge variant="secondary" key={index}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

const PriceCard = ({ price }: { price: number }) => {
  return (
    <div className="flex gap-1">
      <div className="text-sm">{price / 100}</div>
      <span className="text-[9px]">PLN</span>
    </div>
  );
};

const NAVIGATION_HEIGHT = 40;

const CategoriesNavigation = ({
  categories,
  languageId,
}: {
  categories: FullMenuOutput["categories"];
  languageId: string;
}) => {
  const [visibleSetionsIds, setVisibleSetionsIds] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    slider.addEventListener("mousedown", onMouseDown);

    const onMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    slider.addEventListener("mouseleave", onMouseLeave);

    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    slider.addEventListener("mouseup", onMouseUp);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;

      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="z-10 flex  w-screen max-w-3xl overflow-auto border-b-4 border-b-slate-200 bg-white scrollbar-none"
      ref={sliderRef}
      style={{ height: NAVIGATION_HEIGHT }}
    >
      {categories.map((category) => (
        <SingleCategory
          onVisibilityChange={(isVisible) => {
            setVisibleSetionsIds((prevVisibleSectionsIds) => {
              let newVisibleSectionIds = [...prevVisibleSectionsIds];

              if (isVisible)
                newVisibleSectionIds = [...prevVisibleSectionsIds, category.id];
              if (!isVisible)
                newVisibleSectionIds = prevVisibleSectionsIds.filter(
                  (id) => id !== category.id,
                );

              if (
                category.id ===
                newVisibleSectionIds[newVisibleSectionIds.length - 1]
              ) {
                const element = document.getElementById(`${category.id}-nav`);

                assert(!!element, "Element should exist");
                const elementOffsetLeft = element?.offsetLeft - 30;

                assert(!!sliderRef.current, "Slider should exist");
                sliderRef.current.scrollTo({
                  left: elementOffsetLeft,
                  behavior: "smooth",
                });
              }

              return newVisibleSectionIds;
            });
          }}
          isLastVisibleSection={
            category.id === visibleSetionsIds?.[visibleSetionsIds.length - 1]
          }
          key={category.id}
          languageId={languageId}
          category={category}
        />
      ))}
    </div>
  );
};

const VariantCard = ({
  description,
  name,
  price,
}: {
  name: string;
  price: number | null;
  description: string | null;
}) => {
  return (
    <div className="flex w-full flex-col pl-4 last:pb-2">
      <div className="align flex w-full justify-between">
        <h4 className="text-sm font-medium ">{name}</h4>
        {price && <PriceCard price={price} />}
      </div>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
};

const MacroCard = ({
  carbohydrates,
  fat,
  calories,
  protein,
}: {
  calories: number | null;
  protein: number | null;
  carbohydrates: number | null;
  fat: number | null;
}) => {
  return (
    <div className="flex items-end gap-1 text-xs">
      {calories && <p>Kcal: {calories}</p>}
      {protein && <p>P: {protein}</p>}
      {carbohydrates && <p>C: {carbohydrates}</p>}
      {fat && <p>F: {fat}</p>}
    </div>
  );
};

const SingleCategory = ({
  category,
  languageId,
  isLastVisibleSection,
  onVisibilityChange,
}: {
  category: FullMenuOutput["categories"][number];
  languageId: string;
  isLastVisibleSection: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}) => {
  const translatedCategory = getCategoryTranslations({ category, languageId });
  const { ref, inView } = useInView({
    onChange(_inView) {
      onVisibilityChange(_inView);
    },
  });
  const navigateToCategory = useCallback(() => {
    const element = document.getElementById(category.id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const finalScrollPosition = absoluteElementTop - NAVIGATION_HEIGHT - 20;

      window.scrollTo({
        top: finalScrollPosition,
        behavior: "smooth",
      });
    }
  }, [category.id]);

  useEffect(() => {
    ref(document.getElementById(category.id));
  }, [category.id, ref]);

  return (
    <div
      onClick={navigateToCategory}
      className={cn(
        "whitespace-nowrap   bg-white px-4 py-2 text-sm font-medium  text-slate-500 hover:cursor-pointer",
        inView && isLastVisibleSection && "bg-slate-200 text-black",
      )}
      id={`${category.id}-nav`}
    >
      {translatedCategory}
    </div>
  );
};
