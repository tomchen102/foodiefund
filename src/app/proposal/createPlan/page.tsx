import { Suspense } from "react";

import SectionPadding from "@/components/SectionPadding";

import PlanForm from "./PlanForm";

const CreatePlan = () => {
  return (
    <SectionPadding className="w-6/12" container>
      <Suspense>
        <PlanForm />
      </Suspense>
    </SectionPadding>
  );
};

export default CreatePlan;
