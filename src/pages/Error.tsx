import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { context } from "../utils/constants";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="h-screen w-screen cursor-default">
          <div className="flex justify-center pt-12">
            <img
              src="/404.svg"
              loading="lazy"
              alt="Error 404"
              height={"25%"}
              width={"25%"}
            />
          </div>
          <div className="flex justify-center items-center text-center">
            <h1 className="text-6xl mb-2 w-screen font-bold font-sans">
              {context["404ErrorTitle"] as string}
            </h1>
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="text-gray-500 container max-w-[60%] text-sm font-arial">
              {context["404ErrorDescription"] as string}
            </p>
          </div>
          <div className="flex justify-center items-center text-center mt-8">
            <Link
              to="/"
              className="py-1 px-2 rounded-md bg-orange-500 flex w-fit hover:bg-orange-400"
            >
              {context.backButton as string}
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-center m-auto">
        <div id="error-page" className="absolute items-center text-center">
          <h1>{context.errorTitle as string}</h1>
          <p>{context["404ErrorContent"] as string}</p>
          <p>
            <i>{error.statusText || error.data?.message}</i>
          </p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>{context.errorTitle as string}</h1>
        <p>{context.errorContent as string}</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ErrorPage;
