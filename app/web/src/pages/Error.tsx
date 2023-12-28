import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

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
            <h1 className="text-6xl mb-2 w-screen font-bold font-sans">Page Not Found</h1>
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="text-gray-500 container max-w-[60%] text-sm font-arial">
              The page that you are looking for might be renamed or removed, or
              might be never existed on this planet.
            </p>
          </div>
          <div className="flex justify-center items-center text-center mt-8">
            <Link to="/" className="py-1 px-2 rounded-md bg-orange-500 flex w-fit hover:bg-orange-400">Back To Home</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-center m-auto">
        <div id="error-page" className="absolute items-center text-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.data?.message}</i>
          </p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
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
