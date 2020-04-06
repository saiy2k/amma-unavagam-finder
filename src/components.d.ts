/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppInfo {
    }
    interface AppMap {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppInfoElement extends Components.AppInfo, HTMLStencilElement {
    }
    var HTMLAppInfoElement: {
        prototype: HTMLAppInfoElement;
        new (): HTMLAppInfoElement;
    };
    interface HTMLAppMapElement extends Components.AppMap, HTMLStencilElement {
    }
    var HTMLAppMapElement: {
        prototype: HTMLAppMapElement;
        new (): HTMLAppMapElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-info": HTMLAppInfoElement;
        "app-map": HTMLAppMapElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppInfo {
    }
    interface AppMap {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-info": AppInfo;
        "app-map": AppMap;
        "app-profile": AppProfile;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-info": LocalJSX.AppInfo & JSXBase.HTMLAttributes<HTMLAppInfoElement>;
            "app-map": LocalJSX.AppMap & JSXBase.HTMLAttributes<HTMLAppMapElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
