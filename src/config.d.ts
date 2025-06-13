export interface CascadeConfig {
    attributePrefix: string;
    selector: string;
    rootMargin: string;
    threshold: number;
    once: boolean;
    offset: string;
    duration: number;
    easing: string;
}
declare const defaultConfig: CascadeConfig;
export default defaultConfig;
