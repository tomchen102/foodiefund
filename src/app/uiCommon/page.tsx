import Background from "./_components/Background";
import Colors from "./_components/Colors";
import Controls from "./_components/Controls";
import Fonts from "./_components/Fonts";
import IconPool from "./_components/IconPool";
import List from "./_components/List";

const UiCommon = () => {
  return (
    <div className="container bg-white py-20">
      <Colors />
      <Controls />
      <Background />
      <List />
      <Fonts />
      <IconPool />
    </div>
  );
};

export default UiCommon;
