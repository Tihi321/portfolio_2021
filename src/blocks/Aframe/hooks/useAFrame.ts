import { useEffect } from "react";
import { useMount } from "ts-use";

import { registerComponents, registerPrimitives } from "../utils/register";

declare let window: any;

interface INamedObject {
  name: string;
  val: object;
}
export interface IUseAFrameProps {
  components?: INamedObject[];
  primitives?: INamedObject[];
}

export const useAFrame = (props: IUseAFrameProps) => {
  let interval: any;

  const mounted = useMount(
    {
      onPromise: resolve => {
        interval = setInterval(() => {
          if (window && window.AFRAME) {
            clearInterval(interval);
            resolve();
          }
        }, 500);
      }
    },
    () => {
      clearInterval(interval);
    }
  );

  useEffect(() => {
    if (mounted) {
      if (props.components) {
        registerComponents(props.components);
      }

      if (props.primitives) {
        registerPrimitives(props.primitives);
      }
    }
  }, [mounted]);

  return { mounted };
};
