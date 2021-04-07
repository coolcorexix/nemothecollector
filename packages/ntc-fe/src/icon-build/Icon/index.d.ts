/// <reference types="react" />
import { TypeIconName } from './Icon.model';
interface IProps {
    name: TypeIconName;
    width?: number;
    height?: number;
}
export declare const Icon: (props: IProps) => JSX.Element;
export {};
