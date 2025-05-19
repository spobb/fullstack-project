import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = (): ReactElement => {
    const error: unknown = useRouteError();
    return (
        <div>
            <p>
                {(error as Error)?.message} | {(error as { statusText?: string })?.statusText}
            </p>
        </div>
    );
}