import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";

const List = () => {
  return (
    <>
      <h3 className="mb-5 text-primary-dark">List</h3>
      <div className="mb-20 grid w-full grid-cols-3 gap-x-5 gap-y-16">
        <div className="w-10/12">
          <h4 className="mb-3">Listitem - single line</h4>
          <div className="border-b border-gray-200 py-3">
            <p className="text-lg font-bold">Oneline textline</p>
          </div>
          <div className="border-b border-gray-200 py-3">
            <p className="text-lg font-bold">Oneline textline</p>
          </div>
          <div className="border-b border-gray-200 py-3">
            <p className="text-lg font-bold">Oneline textline</p>
          </div>
        </div>
        <div className="w-10/12">
          <h4 className="mb-3">Listitem - two line</h4>
          <div>
            <div className="border-b border-gray-200 py-3">
              <p className="type-primary">Primary textline</p>
              <p className="type-secondary">Secondary textline</p>
            </div>
            <div className="border-b border-gray-200 py-3">
              <p className="type-primary">Primary textline</p>
              <p className="type-secondary">Secondary textline</p>
            </div>
            <div className="border-b border-gray-200 py-3">
              <p className="type-primary">Primary textline</p>
              <p className="type-secondary">Secondary textline</p>
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <h4 className="mb-3">Listitem - custom</h4>
          <div>
            <div className="border-b border-gray-200 py-3">
              <p className="type-primary">Primary textline</p>
              <div className="flex">
                <Icons.RestaurantFill type="indicator" />
                <p className="type-secondary">Secondary textline</p>
              </div>
            </div>
            <div className="w-80 border-b border-gray-200 py-3">
              <div className="type-primary flex items-center gap-2">
                <span className="rounded-sm bg-primary px-2 py-1 text-base text-primary-dark">募集</span>Primary
                textline
              </div>
              <div className="type-secondary">Secondary textline</div>
            </div>
          </div>
        </div>
        <div className="mb-20 flex gap-6">
          <div>
            <h4 className="mb-3">Member List</h4>
            <div className="flex flex-col gap-3">
              <div className="flex h-12 items-center gap-2">
                <Icons.Account />
                <div className="text-base font-bold text-primary-dark">帳號設定</div>
              </div>
              <div className="flex h-12 items-center gap-2">
                <Icons.Money />
                <div className="font-bold text-primary-dark">贊助紀錄</div>
              </div>
              <div className="flex h-12 items-center gap-2">
                <Icons.Favorite />
                <div className="font-bold text-primary-dark">收藏紀錄</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Card Sample</h4>
          <div className="flex w-48 flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="h-28 w-full bg-gray-400 p-3">
              <Badges text={"募資中"} />
            </div>
            <div className="p-3">
              <p className="type-primary">Primary textline</p>
              <p className="type-secondary">Secondary textline</p>
              <div className="flex items-center">
                <Icons.RestaurantFill type="indicator" />
                <p className="type-secondary">Textline</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Text Style</h4>
          <div className="w-10/12">
            <div className="border-b border-gray-200 py-3">
              <p className="type-primary">Primary textline</p>
              <p className="type-secondary">Secondary textline</p>
            </div>
          </div>
          <div className="my-3 bg-gray-200 p-2 text-xl text-red-600">
            <div>{`<p className="type-primary"></p>`}</div>
            <div>{`<p className="type-secondary"></p>`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
