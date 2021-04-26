import { Rive } from "rive-js";

// Fit options for the canvas
export enum EFit {
  Cover = "cover",
  Contain = "contain",
  Fill = "fill",
  FitWidth = "fitWidth",
  FitHeight = "fitHeight",
  None = "none",
  ScaleDown = "scaleDown"
}

// Alignment options for the canvas
export enum EAlignment {
  Center = "center",
  TopLeft = "topLeft",
  TopCenter = "topCenter",
  TopRight = "topRight",
  CenterLeft = "centerLeft",
  CenterRight = "centerRight",
  BottomLeft = "bottomLeft",
  BottomCenter = "bottomCenter",
  BottomRight = "bottomRight"
}

export enum EEventType {
  Load = "load",
  LoadError = "loaderror",
  Play = "play",
  Pause = "pause",
  Stop = "stop",
  Loop = "loop",
  Draw = "draw"
}

/**
 * Looping types: one-shot, loop, and ping-pong
 */
export enum ELoopType {
  OneShot = "oneshot",
  Loop = "loop",
  PingPong = "pingpong"
}

/**
 * Loop events are returned through onloop callbacks
 */
export interface ILoopEvent {
  animation: string;
  type: ELoopType;
}

// Event fired by Rive
export interface IEvent {
  type: EEventType;
  data?: string | string[] | ILoopEvent;
}

/**
 * Loop events are returned through onloop callbacks
 */
export type TEventCallback = (event: IEvent) => void;

// Interface for the Rive static method contructor
export interface IRiveObjectProps {
  src: string;
  artboard?: string;
  animations?: string | string[];
  layout?: { fit: EFit; alignment: EAlignment };
  autoplay?: boolean;
  onload?: TEventCallback;
  onloaderror?: TEventCallback;
  onplay?: TEventCallback;
  onpause?: TEventCallback;
  onstop?: TEventCallback;
  onloop?: TEventCallback;
}

// Interface for the Rive static method contructor
export interface IRiveParameters extends IRiveObjectProps {
  canvas: HTMLCanvasElement;
}

export class RiveAnimation {
  public riveObject: any;

  constructor(params: IRiveParameters) {
    this.riveObject = new Rive({
      canvas: params.canvas,
      src: params.src,
      artboard: params.artboard,
      animations: params.animations,
      layout: params.layout,
      autoplay: params.autoplay,
      onload: params.onload,
      onloaderror: params.onloaderror,
      onplay: params.onplay,
      onpause: params.onpause,
      onstop: params.onstop,
      onloop: params.onloop
    });
  }

  play(animations?: string | string[]) {
    this.riveObject.play(animations);
  }

  pause(animations?: string | string[]) {
    this.riveObject.pause(animations);
  }

  stop(animations?: string | string[]) {
    this.riveObject.stop(animations);
  }

  onEvent(type: EEventType, callback: TEventCallback) {
    this.riveObject.on(type, callback);
  }

  get isPlaying() {
    return this.riveObject.isPlaying as boolean;
  }

  get isPaused() {
    return this.riveObject.isPlaying as boolean;
  }

  get isStopped() {
    return this.riveObject.isPlaying as boolean;
  }

  get source() {
    return this.riveObject.source as string;
  }

  get animationNames() {
    return this.riveObject.animationNames as string[];
  }

  get playingAnimationNames() {
    return this.riveObject.playingAnimationNames as string[];
  }

  get pausedAnimationNames() {
    return this.riveObject.pausedAnimationNames as string[];
  }

  static run(params: IRiveParameters) {
    return new RiveAnimation(params);
  }
}
