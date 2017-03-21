declare module '*.scss' {
    const content: any;
    export default content;
}

// Allow use of require in ts files
// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };
