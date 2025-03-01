import { useRouter } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

import { planProjectType } from "@/api/services/plan/types";
import Badges from "@/components/Badges";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetDefaultPlan } from "@/hooks/usePlan";

const PlanSelect = () => {
  const router = useRouter();
  const initialized = useRef(false);

  const { data: defaultData, isLoading: isLoadingDefault } = useGetDefaultPlan();

  const [selectedPlan, setSelectedPlan] = useState<{
    id: string | null;
    name: string;
    status?: "pending" | "resolve" | "reject";
  }>({
    id: null,
    name: "請先建立提案",
    status: undefined,
  });

  const getCurrentIdFromUrl = (): string | null => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const match = path.match(/\/dashboard\/([^\/]+)/);
      return match ? match[1] : null;
    }
    return null;
  };

  const getInitialSelectedPlan = useCallback((data: planProjectType) => {
    if (!data?.projects || data.projects.length === 0) {
      return { id: null, name: "請先建立提案", status: undefined };
    }

    const urlId = getCurrentIdFromUrl();
    if (urlId) {
      const matchedProject = data.projects.find((p) => p.id === urlId);
      if (matchedProject) {
        return {
          id: matchedProject.id,
          name: matchedProject.name,
          status: matchedProject.status,
        };
      }
    }

    return {
      id: data.projects[0].id,
      name: data.projects[0].name,
      status: data.projects[0].status,
    };
  }, []);

  useEffect(() => {
    if (!initialized.current && defaultData?.projects.length && !selectedPlan.id) {
      const initialPlan = getInitialSelectedPlan(defaultData);

      if (initialPlan.id !== selectedPlan.id) {
        setSelectedPlan(initialPlan);
        router.replace(`/dashboard/${initialPlan.id}`);
      }

      initialized.current = true;
    }
  }, [defaultData, getInitialSelectedPlan, router, selectedPlan.id]);

  const handlePlanChange = (planName: string) => {
    if (!defaultData?.projects) return;

    const newProject = defaultData.projects.find((p) => p.name === planName);
    if (!newProject || newProject.id === selectedPlan.id) return;

    setSelectedPlan({
      id: newProject.id,
      name: newProject.name,
      status: newProject.status,
    });

    router.push(`/dashboard/${newProject.id}`);
  };

  const getStatusText = (status?: "pending" | "resolve" | "reject") => {
    if (status === "pending") return "審核中";
    if (status === "resolve") return "審核成功";
    if (status === "reject") return "審核失敗";
    return "";
  };

  if (isLoadingDefault) {
    return <p>Loading...</p>;
  }

  if (!defaultData?.projects || defaultData.projects.length === 0) {
    return <p>沒有提案資料</p>;
  }

  return (
    <div className="lg:mb-10 lg:flex lg:items-center">
      <div className="mb-6 lg:mr-6">
        <h5>募資監控中心</h5>
      </div>
      <div className="mb-5 flex items-center">
        <Select value={selectedPlan.name} onValueChange={handlePlanChange}>
          <SelectTrigger className="w-[192px]">
            <SelectValue>{selectedPlan.name}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {defaultData.projects.map((project) => (
              <SelectItem key={project.id} value={project.name}>
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="ml-3">
          <Badges text={getStatusText(selectedPlan.status)} />
        </div>
      </div>
    </div>
  );
};

export default PlanSelect;
