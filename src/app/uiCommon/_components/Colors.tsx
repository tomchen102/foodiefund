const Colors = () => {
  return (
    <>
      <h3 className="mb-5 text-primary-dark">Color</h3>
      <div className="mb-20 grid w-full grid-cols-2 gap-x-5 gap-y-16">
        <div>
          <h4 className="mb-3">Primary</h4>
          <div className="flex gap-4 font-bold">
            <div className="flex h-8 w-40 items-center justify-center px-3">#</div>
            <div className="flex w-20 items-center">狀態</div>
            <div className="flex items-center">使用範圍</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-primary-hover px-3 text-white">#079A91</div>
            <div className="flex w-20 items-center">Hover</div>
            <div className="flex items-center">使用到 primary 需要有 hover 狀態時使用</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-primary-light px-3">#D6F4F0</div>
            <div className="flex w-20 items-center">Light</div>
            <div className="flex items-center">primary 作為背景使用時</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-primary px-3">#40E0D0</div>
            <div className="flex w-20 items-center">Default</div>
            <div className="flex items-center"></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-primary-dark px-3 text-white">#0F514E</div>
            <div className="flex w-20 items-center">Dark</div>
            <div className="flex items-center">navbar、primary 背景時的用字、訂閱制</div>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Secondary</h4>
          <div className="flex gap-4 font-bold">
            <div className="flex h-8 w-40 items-center justify-center px-3">#</div>
            <div className="flex w-20 items-center">狀態</div>
            <div className="flex items-center">使用範圍</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-secondary-hover px-3">#EF2D07</div>
            <div className="flex w-20 items-center">Hover</div>
            <div className="flex items-center">使用到 secondary 需要有 hover 狀態時使用</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-secondary-light px-3">#FFEFD8</div>
            <div className="flex w-20 items-center">Light</div>
            <div className="flex items-center">secondary 作為背景使用時</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-secondary px-3">#FE4710</div>
            <div className="flex w-20 items-center">Default</div>
            <div className="flex items-center"></div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-secondary-dark px-3 text-white">#EF2D07</div>
            <div className="flex w-20 items-center">Dark</div>
            <div className="flex items-center">secondary 背景時的用字、募資式</div>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Black & White</h4>
          <div className="flex gap-4 font-bold">
            <div className="flex h-8 w-40 items-center justify-center px-3">#</div>
            <div className="flex w-20 items-center">狀態</div>
            <div className="flex items-center">使用範圍</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-black px-3 text-white">#18181B</div>
            <div className="flex w-20 items-center">Black</div>
            <div className="flex items-center">預設黑字、primary 字的顏色</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center border border-gray-200 bg-white px-3">
              #FDFBF8
            </div>
            <div className="flex w-20 items-center">White</div>
            <div className="flex items-center">default 背景色、白字</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center border border-gray-200 bg-white-pure px-3">
              #FFFFFF
            </div>
            <div className="flex w-20 items-center">pure</div>
            <div className="flex items-center">純白色</div>
          </div>
        </div>
        <div>
          <h5 className="mb-3">Gray</h5>
          <div className="flex gap-4 font-bold">
            <div className="flex h-8 w-40 items-center justify-center px-3">#</div>
            <div className="flex w-20 items-center">狀態</div>
            <div className="flex items-center">使用範圍</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-gray-500 px-3 text-white">#71717A</div>
            <div className="flex w-20 items-center">Default</div>
            <div className="flex items-center">secondary 字的顏色、indicator 顏色</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-gray-200 px-3">#D4D4D8</div>
            <div className="flex w-20 items-center">Gray-200</div>
            <div className="flex items-center">input / select 類型的 border、divider、border</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-gray-400 px-3">#A1A1AA</div>
            <div className="flex w-20 items-center">Gray-400</div>
            <div className="flex items-center">checkbox / radio 元件的基礎顏色、placeholder</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-gray-500 px-3 text-white">#71717A</div>
            <div className="flex w-20 items-center">Gray-500</div>
            <div className="flex items-center">default gray</div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-40 items-center justify-center bg-gray-600 px-3 text-white">#52525B</div>
            <div className="flex w-20 items-center">Gray-600</div>
            <div className="flex items-center">input / select 元件字的顏色</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
