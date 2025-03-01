import DonateList from "../_components/DonateList";
import FinancialPlan from "../_components/FinancialPlan";
import MessageList from "../_components/MessageList";
import ProgressPlan from "../_components/ProgressPlan";
import ProjectInfo from "../_components/ProjectInfo";

const plan_id = () => {
  return (
    <div className="bg-white">
      <ProgressPlan />
      <FinancialPlan />
      <ProjectInfo />
      <div className="lg:flex lg:gap-6">
        <DonateList />
        <MessageList />
      </div>
    </div>
  );
};

export default plan_id;
