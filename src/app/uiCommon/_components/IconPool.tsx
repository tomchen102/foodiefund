"use client";

import { FaGithub, FaLine } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePerson, MdPerson } from "react-icons/md";
import { RiFacebookBoxFill, RiInstagramFill, RiLineFill } from "react-icons/ri";

import { Icons } from "@/components/Icons";
const IconPool = () => {
  const sections = [
    {
      title: "Header",
      icons: ["Account", "Avatar", "Back", "Close", "Exit", "Favorite", "Menu", "Money", "Next", "Notify", "Plan"],
    },
    { title: "Banner", icons: ["ArrowRightFill"] },
    { title: "Projects/ProjectsBlock", icons: ["Location", "Account"] },
    { title: "Projects/SelectBlock", icons: ["Filter", "Search", "Expand", "Collapse"] },
    { title: "Projects/[id]/_components/ExpandableContent", icons: ["ArrowDown"] },
    { title: "Projects/[id]/_components/ProjectSummary", icons: ["FavoriteFill", "Calendar", "Account"] },
    { title: "FAQ", icons: ["Add", "Delete", "Plan"] },
    { title: "components/ExperienceSuccess", icons: ["Location", "CheckCircleFill", "RestaurantFill"] },
    { title: "components/ExperienceTalkBlock", icons: ["ViewFill", "FavoriteFill"] },
    { title: "components/RecentProjectsBlock", icons: ["ViewMore"] },
    { title: "components/Table", icons: ["Back", "Next", "DoubleArrowLeft", "DoubleArrowRight"] },
    { title: "Side Bar", icons: ["ListFill", "Edit", "Message", "Coin", "Question", "News", "Wallet", "Comment"] },
    { title: "募資總覽", icons: ["Like", "Clock", "Bag", "Coin", "List", "Return"] },
    { title: "付款資訊", icons: ["Remain", "Like"] },
  ];
  function copy(name: string, dark?: boolean) {
    const text = dark ? `<Icons.${name} mode="dark" />` : `<Icons.${name} />`;

    navigator.clipboard.writeText(text).then(() => alert(`${text} 已複製`));
  }
  return (
    <>
      <h3 className="mb-5 text-primary-dark">Icons</h3>
      <div className="mb-20 grid w-full grid-cols-3 gap-x-5 gap-y-16">
        <div>
          <h4 className="mb-3">Icon - Action - m</h4>
          <h5 className="mb-2">size-8 (32*32)</h5>
          <div className="flex h-28 flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex size-8 items-center justify-center bg-secondary-light">
                <MdOutlinePerson size={28} />
              </div>
              <div>size-7 (28*28)</div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex size-8 items-center justify-center bg-secondary-light">
                <MdPerson size={24} />
              </div>
              <div>size-6 (24*24)</div>
            </div>
          </div>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account />`}</div>
        </div>
        <div>
          <h4 className="mb-3">Icon - Action - s</h4>
          <h5 className="mb-2">size-6 (24*24)</h5>
          <div className="flex h-28 flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex size-6 items-center justify-center bg-secondary-light">
                <MdOutlinePerson size={20} />
              </div>
              <div>size-5 (20*20)</div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex size-6 items-center justify-center bg-secondary-light">
                <MdPerson size={16} />
              </div>
              <div>size-4 (16*16)</div>
            </div>
          </div>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account dimension="s" />`}</div>
        </div>
        <div>
          <h4 className="mb-3">Icon - Indicator</h4>
          <h5 className="mb-2">size-7 (28*28) text-gray-500</h5>
          <div className="flex h-28 flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="flex size-7 items-center justify-center bg-secondary-light">
                <MdOutlinePerson size={24} />
              </div>
              <div>size-6 (24*24)</div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex size-7 items-center justify-center bg-secondary-light">
                <MdPerson size={20} />
              </div>
              <div>size-5 (20*20)</div>
            </div>
          </div>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account type="indicator" />`}</div>
        </div>
      </div>
      <div className="mb-20 grid w-full grid-cols-2 gap-x-5 gap-y-16">
        <div className="border border-gray-200 p-5">
          <h4 className="mb-3">Light Mode - Default</h4>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account />`}</div>
          {sections.map(({ title, icons }) => (
            <div key={title}>
              <h5>{title}</h5>
              <section className="flex">
                {icons.map((name) => {
                  const IconComponent = Icons[name as keyof typeof Icons];
                  return (
                    <div key={name} className="cursor-pointer" onClick={() => copy(name)}>
                      <IconComponent />
                    </div>
                  );
                })}
              </section>
            </div>
          ))}
          <h5>3rd Party Logo(TBD)</h5>
          <section className="flex">
            <FcGoogle size={32} />
            <FaLine size={32} />
            <FaGithub size={32} />
            <RiFacebookBoxFill size={32} />
            <RiInstagramFill size={32} />
            <RiLineFill size={32} />
          </section>
        </div>
        <div className="bg-primary-dark p-5 text-white">
          <h4 className="mb-3">Dark Mode</h4>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account mode="dark" />`}</div>
          {sections.map(({ title, icons }) => (
            <div key={title}>
              <h5>{title}</h5>
              <section className="flex">
                {icons.map((name) => {
                  const IconComponent = Icons[name as keyof typeof Icons];
                  return (
                    <div key={name} className="cursor-pointer" onClick={() => copy(name, true)}>
                      <IconComponent mode="dark" />
                    </div>
                  );
                })}
              </section>
            </div>
          ))}
          <h5>3rd Party Logo(TBD)</h5>
          <section className="flex">
            <FcGoogle size={32} />
            <FaLine size={32} />
            <FaGithub size={32} />
            <RiFacebookBoxFill size={32} />
            <RiInstagramFill size={32} />
            <RiLineFill size={32} />
          </section>
        </div>
      </div>
    </>
  );
};

export default IconPool;
