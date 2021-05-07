declare let AFRAME: any;

// Helper function to make sure that aframe components are only registered once, since they can't
// be cleanly unregistered.
export const registeredComponents = new Set();
export const registerComponents = (components: any) =>
  components.forEach(({ name, val }: { name: string; val: any }) => {
    if (registeredComponents.has(name)) {
      return;
    }

    registeredComponents.add(name);
    AFRAME.registerComponent(name, val);
  });

// Helper function to make sure that aframe primitives are only registered once, since they can't
// be cleanly unregistered.
export const registeredPrimitives = new Set();
export const registerPrimitives = (primitives: any) =>
  primitives.forEach(({ name, val }: { name: string; val: any }) => {
    if (registeredPrimitives.has(name)) {
      return;
    }

    registeredPrimitives.add(name);
    AFRAME.registerPrimitive(name, val);
  });
