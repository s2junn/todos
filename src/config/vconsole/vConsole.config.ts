import vConsole, { VConsoleConfig } from "vconsole";

export const initVConsole = () => {
  const config: VConsoleConfig = {
    onReady: () => {
      const button = document.querySelector(".vc-switch") as HTMLElement;
      button.style.position = "fixed";
      button.style.bottom = "50px";
    },
  };
  new vConsole(config);
};
