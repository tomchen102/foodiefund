import { FaGithub, FaLine } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlinePerson, MdPerson } from "react-icons/md";
import { RiFacebookBoxFill, RiInstagramFill, RiLineFill } from "react-icons/ri";

import { Icons } from "@/components/Icons";
const IconPool = () => {
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
          <h5>Header</h5>
          <section className="flex">
            <Icons.Account />
            <Icons.Avatar />
            <Icons.Back />
            <Icons.Close />
            <Icons.Exit />
            <Icons.Favorite />
            <Icons.Menu />
            <Icons.Money />
            <Icons.Next />
            <Icons.Notify />
            <Icons.Plan />
          </section>
          <h5>Banner</h5>
          <section>
            <Icons.ArrowRightFill />
          </section>
          <h5>Projects/ProjectsBlock</h5>
          <section className="flex">
            <Icons.Location />
            <Icons.Account />
          </section>
          <h5>Projects/SelectBlock</h5>
          <section className="flex">
            <Icons.Filter />
            <Icons.Search />
            <Icons.Expand />
            <Icons.Collapse />
          </section>
          <h5>Projects/[id]/_components/ExpandableContent</h5>
          <section className="flex">
            <Icons.ArrowDown />
          </section>
          <h5>Projects/[id]/_components/ProjectSummary</h5>
          <section className="flex">
            <Icons.FavoriteFill />
            <Icons.Calendar />
            <Icons.Account />
          </section>
          <h5>FAQ</h5>
          <section className="flex">
            <Icons.Add />
            <Icons.Delete />
            <Icons.Plan />
          </section>
          <h5>components/ExperienceSuccess</h5>
          <section className="flex">
            <Icons.Location />
            <Icons.CheckCircleFill />
            <Icons.RestaurantFill />
          </section>
          <h5>components/ExperienceTalkBlock</h5>
          <section className="flex">
            <Icons.ViewFill />
            <Icons.FavoriteFill />
          </section>
          <h5>components/RecentProjectsBlock</h5>
          <section className="flex">
            <Icons.ViewMore />
          </section>
          <h5>components/Table</h5>
          <section className="flex">
            <Icons.Back />
            <Icons.Next />
            <Icons.DoubleArrowLeft />
            <Icons.DoubleArrowRight />
          </section>
          <h5>3rd Party Logo(TBD)</h5>
          <section className="flex">
            <FcGoogle size={32} />
            <FaLine size={32} />
            <FaGithub size={32} />
            <RiFacebookBoxFill size={32} />
            <RiInstagramFill size={32} />
            5 <RiLineFill size={32} />
          </section>
        </div>
        <div className="bg-primary-dark p-5 text-white">
          <h4 className="mb-3">Dark Mode</h4>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">{`<Icons.Account mode="dark" />`}</div>
          <h5>Header</h5>
          <section className="flex">
            <Icons.Account mode="dark" />
            <Icons.Avatar mode="dark" />
            <Icons.Back mode="dark" />
            <Icons.Close mode="dark" />
            <Icons.Exit mode="dark" />
            <Icons.Favorite mode="dark" />
            <Icons.Menu mode="dark" />
            <Icons.Money mode="dark" />
            <Icons.Next mode="dark" />
            <Icons.Notify mode="dark" />
            <Icons.Plan mode="dark" />
          </section>
          <h5>Banner</h5>
          <section>
            <Icons.ArrowRightFill mode="dark" />
          </section>
          <h5>Projects/ProjectsBlock</h5>
          <section className="flex">
            <Icons.Location mode="dark" />
            <Icons.Account mode="dark" />
          </section>
          <h5>Projects/SelectBlock</h5>
          <section className="flex">
            <Icons.Filter mode="dark" />
            <Icons.Search mode="dark" />
            <Icons.Expand mode="dark" />
            <Icons.Collapse mode="dark" />
          </section>
          <h5>Projects/[id]/_components/ExpandableContent</h5>
          <section className="flex">
            <Icons.ArrowDown mode="dark" />
          </section>
          <h5>Projects/[id]/_components/ProjectSummary</h5>
          <section className="flex">
            <Icons.FavoriteFill mode="dark" />
            <Icons.Calendar mode="dark" />
            <Icons.Account mode="dark" />
          </section>
          <h5>FAQ</h5>
          <section className="flex">
            <Icons.Add mode="dark" />
            <Icons.Delete mode="dark" />
            <Icons.Plan mode="dark" />
          </section>
          <h5>components/ExperienceSuccess</h5>
          <section className="flex">
            <Icons.Location mode="dark" />
            <Icons.CheckCircleFill mode="dark" />
            <Icons.RestaurantFill mode="dark" />
          </section>
          <h5>components/ExperienceTalkBlock</h5>
          <section className="flex">
            <Icons.ViewFill mode="dark" />
            <Icons.FavoriteFill mode="dark" />
          </section>
          <h5>components/RecentProjectsBlock</h5>
          <section className="flex">
            <Icons.ViewMore mode="dark" />
          </section>
          <h5>components/Table</h5>
          <section className="flex">
            <Icons.Back mode="dark" />
            <Icons.Next mode="dark" />
            <Icons.DoubleArrowLeft mode="dark" />
            <Icons.DoubleArrowRight mode="dark" />
          </section>
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
