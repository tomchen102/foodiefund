import { Suspense } from "react";

import SectionPadding from "@/components/SectionPadding";

import PlanForm from "./PlanForm";

const CreatePlan = () => {
  return (
    <SectionPadding container>
      <Suspense>
        <PlanForm />
      </Suspense>
    </SectionPadding>
  );
};

export default CreatePlan;
