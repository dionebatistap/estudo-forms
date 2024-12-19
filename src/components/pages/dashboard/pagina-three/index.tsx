import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponenteLeftSidebar } from "./left-sidebar";
import { ComponentCenterContent } from "./center-content";
import { ComponentrRightSideBar } from "./right-sidebar";

export const ComponentePageThree = () => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <ComponenteLeftSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <ComponentCenterContent />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
          <ComponentrRightSideBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
