"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

import { planProjectType } from "@/api/services/plan/types";
import Badges from "@/components/Badges";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetDefaultPlan } from "@/hooks/usePlan";

const PlanSelect = () => {
  const router = useRouter();
  const initialized = useRef(false);
  const pathname = usePathname();

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

  // 解析 pathname，取得 plan_id 和子路由
  const getCurrentIdAndSubPath = useCallback((): { id: string | null; subPath: string } => {
    const match = pathname.match(/^\/dashboard\/([^/]+)(.*)/);
    return {
      id: match ? match[1] : null,
      subPath: match ? match[2] || "" : "", // 取得 `/edits`、`/rewards` 等子路由
    };
  }, [pathname]);

  // 取得預設選擇的提案
  const getInitialSelectedPlan = useCallback(
    (data: planProjectType) => {
      if (!data?.projects || data.projects.length === 0) {
        return { id: null, name: "請先建立提案", status: undefined };
      }

      const { id: urlId } = getCurrentIdAndSubPath();
      const matchedProject = urlId ? data.projects.find((p) => p.id === urlId) : null;

      return matchedProject
        ? { id: matchedProject.id, name: matchedProject.name, status: matchedProject.status }
        : { id: data.projects[0].id, name: data.projects[0].name, status: data.projects[0].status };
    },
    [getCurrentIdAndSubPath]
  );

  useEffect(() => {
    if (!initialized.current && defaultData?.projects.length) {
      const initialPlan = getInitialSelectedPlan(defaultData);
      setSelectedPlan(initialPlan);

      // 確保當前頁面路由正確
      const { id: currentId, subPath } = getCurrentIdAndSubPath();
      if (!currentId || currentId !== initialPlan.id) {
        router.replace(`/dashboard/${initialPlan.id}${subPath}`);
      }

      initialized.current = true;
    }
  }, [defaultData, getInitialSelectedPlan, router, getCurrentIdAndSubPath]);

  // 切換提案時，保持當前子頁面
  const handlePlanChange = (planId: string) => {
    if (!defaultData?.projects) return;

    const newProject = defaultData.projects.find((p) => p.id === planId);
    if (!newProject || newProject.id === selectedPlan.id) return;

    const { subPath } = getCurrentIdAndSubPath();
    setSelectedPlan({ id: newProject.id, name: newProject.name, status: newProject.status });

    router.push(`/dashboard/${newProject.id}${subPath}`);
  };

  const getStatusText = (status?: "pending" | "resolve" | "reject") => {
    if (status === "pending") return "審核中";
    if (status === "resolve") return "審核成功";
    if (status === "reject") return "審核失敗";
    return "";
  };

  if (isLoadingDefault) return <p>Loading...</p>;
  if (!defaultData?.projects || defaultData.projects.length === 0) return <p>沒有提案資料</p>;

  return (
    <div className="lg:mb-10 lg:flex lg:items-center">
      <div className="mb-6 lg:mr-6">
        <h5>募資監控中心</h5>
      </div>
      <div className="mb-5 flex items-center">
        <Select value={selectedPlan.id || ""} onValueChange={handlePlanChange}>
          <SelectTrigger className="w-[192px]">
            <SelectValue>{selectedPlan.name}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {defaultData.projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
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
